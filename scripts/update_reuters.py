#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "data" / "reuters.json"

REUTERS_SITEMAP_INDEX = (
    "https://www.reuters.com/arc/outboundfeeds/"
    "sitemap-index/?outputType=xml"
)

GDELT_ENDPOINT = "https://api.gdeltproject.org/api/v2/doc/doc"

UA = (
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/131.0 Safari/537.36 "
    "PlanerReutersFeed/1.0"
)

NS = {
    "sm": "http://www.sitemaps.org/schemas/sitemap/0.9",
    "news": "http://www.google.com/schemas/sitemap-news/0.9",
}


def fetch_bytes(url: str, timeout: int = 25, retries: int = 3) -> bytes:
    last_error = None

    for attempt in range(retries):
        try:
            request = urllib.request.Request(
                url,
                headers={
                    "User-Agent": UA,
                    "Accept": "application/xml,text/xml,application/json;q=0.9,*/*;q=0.8",
                    "Accept-Language": "en-US,en;q=0.8",
                },
            )

            with urllib.request.urlopen(request, timeout=timeout) as response:
                return response.read()

        except Exception as error:
            last_error = error
            if attempt + 1 < retries:
                time.sleep(2.0 * (attempt + 1))

    raise RuntimeError(f"request failed: {url}: {last_error}")


def text(node, path: str) -> str:
    child = node.find(path, NS)
    return (child.text or "").strip() if child is not None else ""


def parse_iso(value: str) -> str:
    value = value.strip()
    if not value:
        return ""

    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
        return parsed.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")
    except ValueError:
        return value


def classify(url: str, title: str, keywords: str = "") -> list[str]:
    haystack = f"{url} {title} {keywords}".lower()
    categories: list[str] = []

    if (
        "/world/" in url
        or any(term in haystack for term in (
            "ukraine", "iran", "israel", "gaza", "china", "europe",
            "asia", "africa", "americas", "middle east", "diplom",
            "election", "government", "war ", "ceasefire"
        ))
    ):
        categories.append("world")

    if (
        "/business/" in url
        or "/markets/" in url
        or any(term in haystack for term in (
            "market", "stocks", "economy", "inflation", "bank",
            "company", "companies", "earnings", "oil", "finance",
            "trade", "tariff", "retail", "consumer"
        ))
    ):
        categories.append("business")

    if (
        "/technology/" in url
        or any(term in haystack for term in (
            "technology", "artificial intelligence", " ai ", "chip",
            "semiconductor", "software", "cyber", "robot", "computer",
            "internet", "openai"
        ))
    ):
        categories.append("technology")

    if (
        "/science/" in url
        or any(term in haystack for term in (
            "science", "space", "climate", "research", "study",
            "nasa", "astronom", "physics", "health", "medicine",
            "scientist"
        ))
    ):
        categories.append("science")

    return sorted(set(categories))


def parse_news_sitemap(xml_data: bytes) -> list[dict]:
    root = ET.fromstring(xml_data)
    articles: list[dict] = []

    for url_node in root.findall("sm:url", NS):
        loc = text(url_node, "sm:loc")
        title = text(url_node, "news:news/news:title")
        published = text(url_node, "news:news/news:publication_date")
        keywords = text(url_node, "news:news/news:keywords")

        if not loc or not title:
            continue

        if "reuters.com" not in urllib.parse.urlparse(loc).netloc.lower():
            continue

        articles.append(
            {
                "title": re.sub(r"\s+", " ", title).strip(),
                "url": loc,
                "publishedAt": parse_iso(published),
                "categories": classify(loc, title, keywords),
            }
        )

    return articles


def fetch_from_reuters_sitemaps() -> list[dict]:
    index_data = fetch_bytes(REUTERS_SITEMAP_INDEX)
    root = ET.fromstring(index_data)

    sitemap_rows = []

    for node in root.findall("sm:sitemap", NS):
        loc = text(node, "sm:loc")
        lastmod = text(node, "sm:lastmod")
        if loc:
            sitemap_rows.append((lastmod, loc))

    if not sitemap_rows:
        raise RuntimeError("Reuters sitemap index contained no child sitemaps")

    sitemap_rows.sort(reverse=True)

    collected: list[dict] = []
    seen_urls: set[str] = set()

    # Newest child sitemaps first. Stop once enough recent stories exist.
    for _, sitemap_url in sitemap_rows[:10]:
        try:
            rows = parse_news_sitemap(fetch_bytes(sitemap_url))
        except Exception as error:
            print(f"warning: child sitemap failed: {sitemap_url}: {error}")
            continue

        for article in rows:
            if article["url"] in seen_urls:
                continue
            seen_urls.add(article["url"])
            collected.append(article)

        if len(collected) >= 120:
            break

    if not collected:
        raise RuntimeError("Reuters child sitemaps contained no articles")

    def sort_key(article: dict) -> str:
        return article.get("publishedAt") or ""

    collected.sort(key=sort_key, reverse=True)
    return collected[:100]


def fetch_from_gdelt_fallback() -> list[dict]:
    params = urllib.parse.urlencode(
        {
            "query": "domain:reuters.com",
            "mode": "ArtList",
            "format": "json",
            "sort": "datedesc",
            "maxrecords": "100",
            "timespan": "7d",
        }
    )

    data = json.loads(fetch_bytes(f"{GDELT_ENDPOINT}?{params}", timeout=35, retries=4))

    articles = []
    for row in data.get("articles", []):
        title = str(row.get("title") or "").strip()
        url = str(row.get("url") or "").strip()
        published = str(row.get("seendate") or "").strip()

        if not title or not url:
            continue

        host = urllib.parse.urlparse(url).netloc.lower()
        if host != "reuters.com" and not host.endswith(".reuters.com"):
            continue

        articles.append(
            {
                "title": re.sub(r"\s+", " ", title),
                "url": url,
                "publishedAt": published,
                "categories": classify(url, title),
            }
        )

    if not articles:
        raise RuntimeError("GDELT fallback returned no Reuters articles")

    return articles[:100]


def existing_articles() -> list[dict]:
    try:
        data = json.loads(OUTPUT.read_text(encoding="utf-8"))
        return data.get("articles", [])
    except Exception:
        return []


def main() -> int:
    articles = []

    try:
        articles = fetch_from_reuters_sitemaps()
        source = "Reuters sitemap"
        print(f"Reuters sitemap: {len(articles)} articles")
    except Exception as error:
        print(f"Reuters sitemap failed: {error}")

        try:
            articles = fetch_from_gdelt_fallback()
            source = "GDELT fallback for Reuters links"
            print(f"GDELT fallback: {len(articles)} articles")
        except Exception as fallback_error:
            print(f"GDELT fallback failed: {fallback_error}")

            old = existing_articles()
            if old:
                print("Keeping existing reuters.json.")
                return 0

            raise

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "source": source,
        "articles": articles,
    }

    temp = OUTPUT.with_suffix(".json.tmp")
    temp.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    temp.replace(OUTPUT)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
