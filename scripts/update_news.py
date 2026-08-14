#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import json
import os
import re
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from html.parser import HTMLParser
from pathlib import Path

GUARDIAN_ENDPOINT = "https://content.guardianapis.com/search"
PROPUBLICA_ARCHIVE = "https://www.propublica.org/archive"
UA = "Mozilla/5.0 PlanerNews/1.0"


def fetch_json(url: str, timeout: int = 35) -> dict:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "application/json",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.load(response)


def fetch_text(url: str, timeout: int = 35) -> str:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "text/html,application/xhtml+xml",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read().decode("utf-8", errors="replace")


def clean_html_text(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value or "")
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def guardian_search(api_key: str, *, category: str, section: str | None = None, q: str | None = None, page_size: int = 35) -> list[dict]:
    params = {
        "api-key": api_key,
        "order-by": "newest",
        "page-size": str(page_size),
        "lang": "en",
        "show-fields": "headline,trailText,standfirst,byline,body,wordcount,publication,lastModified",
    }
    if section:
        params["section"] = section
    if q:
        params["q"] = q
        params["query-fields"] = "headline,body"

    url = GUARDIAN_ENDPOINT + "?" + urllib.parse.urlencode(params)
    payload = fetch_json(url)
    results = payload.get("response", {}).get("results", [])

    rows: list[dict] = []
    seen: set[str] = set()

    for item in results:
        if item.get("type") != "article":
            continue

        fields = item.get("fields") or {}
        body = fields.get("body") or ""
        if not body:
            continue

        article_id = "guardian:" + str(item.get("id") or item.get("webUrl") or "")
        if not article_id or article_id in seen:
            continue
        seen.add(article_id)

        rows.append(
            {
                "id": article_id,
                "source": "The Guardian",
                "title": clean_html_text(fields.get("headline") or item.get("webTitle") or ""),
                "url": item.get("webUrl") or "",
                "publishedAt": item.get("webPublicationDate") or "",
                "byline": clean_html_text(fields.get("byline") or ""),
                "standfirst": fields.get("standfirst") or fields.get("trailText") or "",
                "bodyHtml": body,
                "fullText": True,
                "category": category,
            }
        )

    return rows


class ArchiveParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.in_h2 = False
        self.in_link = False
        self.current_href = ""
        self.current_text: list[str] = []
        self.links: list[tuple[str, str]] = []

    def handle_starttag(self, tag: str, attrs) -> None:
        attrs = dict(attrs)
        if tag.lower() == "h2":
            self.in_h2 = True
        elif self.in_h2 and tag.lower() == "a":
            self.in_link = True
            self.current_href = attrs.get("href", "")
            self.current_text = []

    def handle_data(self, data: str) -> None:
        if self.in_h2 and self.in_link:
            self.current_text.append(data)

    def handle_endtag(self, tag: str) -> None:
        if tag.lower() == "a" and self.in_link:
            title = re.sub(r"\s+", " ", "".join(self.current_text)).strip()
            href = self.current_href
            if title and href:
                self.links.append((href, title))
            self.in_link = False
            self.current_href = ""
            self.current_text = []
        elif tag.lower() == "h2":
            self.in_h2 = False


class MetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.meta: dict[str, str] = {}
        self.html_lang = ""

    def handle_starttag(self, tag: str, attrs) -> None:
        attrs = dict(attrs)
        if tag.lower() == "html":
            self.html_lang = attrs.get("lang", "")
        if tag.lower() != "meta":
            return
        key = attrs.get("property") or attrs.get("name") or ""
        content = attrs.get("content") or ""
        if key and content:
            self.meta[key.lower()] = content


def propublica_latest(limit: int = 18) -> list[dict]:
    parser = ArchiveParser()
    parser.feed(fetch_text(PROPUBLICA_ARCHIVE))

    unique: list[tuple[str, str]] = []
    seen: set[str] = set()

    for href, title in parser.links:
        if href.startswith("/"):
            href = urllib.parse.urljoin("https://www.propublica.org", href)
        host = urllib.parse.urlparse(href).netloc.lower()
        if host != "www.propublica.org":
            continue
        if "/article/" not in href:
            continue
        if href in seen:
            continue
        seen.add(href)
        unique.append((href, title))
        if len(unique) >= limit:
            break

    rows: list[dict] = []

    for href, archive_title in unique:
        try:
            meta_parser = MetaParser()
            meta_parser.feed(fetch_text(href, timeout=25))
            meta = meta_parser.meta

            if meta_parser.html_lang.lower().startswith("es"):
                continue

            title = meta.get("og:title") or archive_title
            description = meta.get("og:description") or meta.get("description") or ""
            published = meta.get("article:published_time") or ""
            author = meta.get("author") or ""

            rows.append(
                {
                    "id": "propublica:" + urllib.parse.urlparse(href).path.strip("/").replace("/", ":"),
                    "source": "ProPublica",
                    "title": clean_html_text(title),
                    "url": href,
                    "publishedAt": published,
                    "byline": clean_html_text(author),
                    "standfirst": clean_html_text(description),
                    "bodyHtml": "",
                    "fullText": False,
                    "category": "investigative",
                }
            )
        except Exception as error:
            print(f"warning: ProPublica metadata failed for {href}: {error}")

    return rows


def sort_date(row: dict) -> str:
    return row.get("publishedAt") or ""


def dedupe(rows: list[dict]) -> list[dict]:
    seen: set[str] = set()
    output: list[dict] = []
    for row in rows:
        key = (row.get("url") or row.get("title") or "").lower()
        if not key or key in seen:
            continue
        seen.add(key)
        output.append(row)
    output.sort(key=sort_date, reverse=True)
    return output


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="data/news.json")
    args = parser.parse_args()

    api_key = os.environ.get("GUARDIAN_API_KEY", "").strip() or "test"

    world = guardian_search(
        api_key,
        category="world",
        section="world",
        page_size=36,
    )

    science_core = guardian_search(
        api_key,
        category="science",
        section="science",
        page_size=32,
    )

    environment = guardian_search(
        api_key,
        category="science",
        section="environment",
        page_size=14,
    )

    investigative_query = (
        'investigation OR investigated OR investigative OR exclusive OR '
        'revealed OR documents OR leak OR corruption OR fraud OR abuse OR surveillance'
    )

    investigative_guardian = guardian_search(
        api_key,
        category="investigative",
        q=investigative_query,
        page_size=36,
    )

    propublica = propublica_latest(limit=20)

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "categories": {
            "world": dedupe(world),
            "science": dedupe(science_core + environment),
            "investigative": dedupe(investigative_guardian + propublica),
        },
    }

    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    counts = {key: len(value) for key, value in payload["categories"].items()}
    print("news feed:", counts)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
