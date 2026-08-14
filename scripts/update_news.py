#!/usr/bin/env python3
from __future__ import annotations

import argparse
import html
import json
import os
import re
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone
from email.utils import parsedate_to_datetime
from pathlib import Path

GUARDIAN_ENDPOINT = "https://content.guardianapis.com/search"
BELLINGCAT_FEED = "https://www.bellingcat.com/feed/"

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) "
    "Chrome/126.0 Safari/537.36 PlanerNews/3.0"
)

CONTENT_NS = "http://purl.org/rss/1.0/modules/content/"
DC_NS = "http://purl.org/dc/elements/1.1/"
MEDIA_NS = "http://search.yahoo.com/mrss/"


def fetch_json(url: str, timeout: int = 35) -> dict:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "application/json",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return json.load(response)


def fetch_bytes(
    url: str,
    timeout: int = 35,
    accept: str = "application/rss+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": accept,
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(request, timeout=timeout) as response:
        return response.read()


def clean_html_text(value: str) -> str:
    value = re.sub(r"<[^>]+>", " ", value or "")
    return re.sub(r"\s+", " ", html.unescape(value)).strip()


def iso_date(value: str) -> str:
    value = (value or "").strip()
    if not value:
        return ""

    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        try:
            parsed = parsedate_to_datetime(value)
        except Exception:
            return value

    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)

    return parsed.astimezone(timezone.utc).isoformat().replace("+00:00", "Z")


def guardian_search(
    api_key: str,
    *,
    category: str,
    section: str | None = None,
    q: str | None = None,
    page_size: int = 45,
) -> list[dict]:
    params = {
        "api-key": api_key,
        "order-by": "newest",
        "page-size": str(min(50, page_size)),
        "lang": "en",
        "show-fields": (
            "headline,trailText,standfirst,byline,body,wordcount,publication,"
            "lastModified,thumbnail"
        ),
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

        raw_id = str(item.get("id") or item.get("webUrl") or "")
        if not raw_id:
            continue

        article_id = "guardian:" + raw_id
        if article_id in seen:
            continue
        seen.add(article_id)

        title = clean_html_text(fields.get("headline") or item.get("webTitle") or "")
        if not title:
            continue

        rows.append(
            {
                "id": article_id,
                "source": "The Guardian",
                "title": title,
                "url": item.get("webUrl") or "",
                "publishedAt": item.get("webPublicationDate") or "",
                "byline": clean_html_text(fields.get("byline") or ""),
                "standfirst": fields.get("standfirst") or fields.get("trailText") or "",
                "bodyHtml": body,
                "fullText": True,
                "category": category,
                "imageUrl": fields.get("thumbnail") or "",
                "imageAlt": title,
                "imageCredit": "The Guardian" if fields.get("thumbnail") else "",
            }
        )

    return rows


def _find_text(item: ET.Element, tag: str) -> str:
    node = item.find(tag)
    return (node.text or "").strip() if node is not None and node.text else ""


def first_image_from_html(value: str) -> tuple[str, str]:
    """
    Extract only the first image URL/alt from feed-provided HTML.
    The surrounding article body is never retained.
    """
    if not value:
        return "", ""

    img_match = re.search(
        r"<img\b[^>]*\bsrc=[\"']([^\"']+)[\"'][^>]*>",
        value,
        flags=re.I | re.S,
    )

    if not img_match:
        return "", ""

    src = html.unescape(img_match.group(1)).strip()

    tag = img_match.group(0)
    alt_match = re.search(
        r"\balt=[\"']([^\"']*)[\"']",
        tag,
        flags=re.I | re.S,
    )

    alt = html.unescape(alt_match.group(1)).strip() if alt_match else ""
    return src, alt


def bellingcat_feed(limit: int = 45) -> list[dict]:
    root = ET.fromstring(fetch_bytes(BELLINGCAT_FEED))

    rows: list[dict] = []
    seen: set[str] = set()

    items = root.findall("./channel/item")
    if not items:
        items = root.findall(".//item")

    for item in items:
        title = clean_html_text(_find_text(item, "title"))
        url = _find_text(item, "link")
        guid = _find_text(item, "guid")

        if not title or not url:
            continue

        try:
            host = urllib.parse.urlparse(url).netloc.lower()
        except Exception:
            continue

        if host not in {"www.bellingcat.com", "bellingcat.com"}:
            continue

        key = url.lower()
        if key in seen:
            continue
        seen.add(key)

        description_html = _find_text(item, "description")
        content_html = _find_text(item, f"{{{CONTENT_NS}}}encoded")

        teaser = clean_html_text(description_html)

        # Keep previews concise even when the feed description is long.
        if len(teaser) > 700:
            teaser = teaser[:697].rsplit(" ", 1)[0] + "…"

        author = clean_html_text(_find_text(item, f"{{{DC_NS}}}creator"))
        published = iso_date(_find_text(item, "pubDate"))

        image_url = ""
        image_alt = title
        image_credit = ""

        # Prefer media:content / media:thumbnail explicitly supplied by RSS.
        media_content = item.find(f"{{{MEDIA_NS}}}content")
        if media_content is not None:
            image_url = (media_content.attrib.get("url") or "").strip()

            media_credit = media_content.find(f"{{{MEDIA_NS}}}credit")
            if media_credit is not None and media_credit.text:
                image_credit = clean_html_text(media_credit.text)

        if not image_url:
            media_thumb = item.find(f"{{{MEDIA_NS}}}thumbnail")
            if media_thumb is not None:
                image_url = (media_thumb.attrib.get("url") or "").strip()

        # RSS enclosure is also explicitly feed-provided media.
        if not image_url:
            enclosure = item.find("enclosure")
            if enclosure is not None:
                enclosure_type = (enclosure.attrib.get("type") or "").lower()
                if enclosure_type.startswith("image/"):
                    image_url = (enclosure.attrib.get("url") or "").strip()

        # Last fallback: use only the first image URL embedded in feed HTML.
        if not image_url:
            image_url, extracted_alt = first_image_from_html(
                content_html or description_html
            )
            if extracted_alt:
                image_alt = extracted_alt

        if image_url:
            image_url = urllib.parse.urljoin(url, image_url)

        article_id = "bellingcat:" + (
            guid.strip()
            if guid.strip()
            else urllib.parse.urlparse(url).path.strip("/")
        )

        rows.append(
            {
                "id": article_id,
                "source": "Bellingcat",
                "title": title,
                "url": url,
                "publishedAt": published,
                "byline": author,
                "standfirst": teaser,
                "bodyHtml": "",
                "fullText": False,
                "category": "bellingcat",
                "imageUrl": image_url,
                "imageAlt": image_alt,
                "imageCredit": image_credit,
            }
        )

        if len(rows) >= limit:
            break

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


def read_existing(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return {"generatedAt": "", "categories": {}}


def existing_is_recent(feed: dict, hours: int = 23) -> bool:
    raw = str(feed.get("generatedAt") or "")
    try:
        stamp = datetime.fromisoformat(raw.replace("Z", "+00:00"))
        if stamp.tzinfo is None:
            stamp = stamp.replace(tzinfo=timezone.utc)
        return datetime.now(timezone.utc) - stamp.astimezone(timezone.utc) < timedelta(hours=hours)
    except Exception:
        return False


def guarded(fetcher, fallback: list[dict], label: str) -> list[dict]:
    try:
        rows = fetcher()
        if not rows:
            raise RuntimeError("empty result")
        print(f"{label}: {len(rows)}")
        return rows
    except Exception as error:
        print(f"warning: {label} failed: {error}")
        return fallback


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", default="data/news.json")
    args = parser.parse_args()

    output = Path(args.output)
    existing = read_existing(output)
    existing_categories = existing.get("categories") or {}
    recent_guardian_fallback = existing_is_recent(existing)

    api_key = os.environ.get("GUARDIAN_API_KEY", "").strip() or "test"

    world_fallback = existing_categories.get("world", []) if recent_guardian_fallback else []
    science_fallback = existing_categories.get("science", []) if recent_guardian_fallback else []
    investigative_fallback = existing_categories.get("investigative", []) if recent_guardian_fallback else []
    bellingcat_fallback = existing_categories.get("bellingcat", [])

    world = guarded(
        lambda: guardian_search(
            api_key,
            category="world",
            section="world",
            page_size=50,
        ),
        world_fallback,
        "Guardian world",
    )

    science_core = guarded(
        lambda: guardian_search(
            api_key,
            category="science",
            section="science",
            page_size=45,
        ),
        science_fallback,
        "Guardian science",
    )

    environment = guarded(
        lambda: guardian_search(
            api_key,
            category="science",
            section="environment",
            page_size=24,
        ),
        [],
        "Guardian environment",
    )

    investigative_query = (
        "investigation OR investigative OR investigated OR exclusive OR "
        "revealed OR documents OR leak OR corruption OR fraud OR abuse OR surveillance"
    )

    investigative_guardian = guarded(
        lambda: guardian_search(
            api_key,
            category="investigative",
            q=investigative_query,
            page_size=50,
        ),
        investigative_fallback,
        "Guardian investigative",
    )

    bellingcat = guarded(
        lambda: bellingcat_feed(limit=45),
        bellingcat_fallback,
        "Bellingcat RSS",
    )

    payload = {
        "generatedAt": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        "categories": {
            "world": dedupe(world),
            "science": dedupe(science_core + environment),
            "investigative": dedupe(investigative_guardian),
            "bellingcat": dedupe(bellingcat),
        },
    }

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )

    counts = {key: len(value) for key, value in payload["categories"].items()}
    print("news feed:", counts)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
