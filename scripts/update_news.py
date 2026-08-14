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
UA = "Mozilla/5.0 PlanerNews/1.1"

CONTENT_NS = "http://purl.org/rss/1.0/modules/content/"
DC_NS = "http://purl.org/dc/elements/1.1/"
MEDIA_NS = "http://search.yahoo.com/mrss/"


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


def fetch_bytes(url: str, timeout: int = 35) -> bytes:
    request = urllib.request.Request(
        url,
        headers={
            "User-Agent": UA,
            "Accept": "application/rss+xml,application/xml,text/xml;q=0.9,*/*;q=0.8",
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


def bellingcat_image(item: ET.Element) -> tuple[str, str]:
    """
    Only use RSS-supplied media when the feed also provides a credit.
    Bellingcat itself stresses correct image rights/crediting, so an
    uncredited OG image is intentionally not scraped as a fallback.
    """
    media_candidates = []

    for tag in (
        f"{{{MEDIA_NS}}}content",
        f"{{{MEDIA_NS}}}thumbnail",
    ):
        media_candidates.extend(item.findall(tag))

    credit_node = item.find(f"{{{MEDIA_NS}}}credit")
    credit = (
        (credit_node.text or "").strip()
        if credit_node is not None and credit_node.text
        else ""
    )

    for node in media_candidates:
        url = (node.attrib.get("url") or "").strip()
        node_credit = ""
        child_credit = node.find(f"{{{MEDIA_NS}}}credit")
        if child_credit is not None and child_credit.text:
            node_credit = child_credit.text.strip()
        effective_credit = node_credit or credit

        if url.startswith("https://") and effective_credit:
            return url, effective_credit

    # RSS enclosure is accepted only if a separate credit is present.
    enclosure = item.find("enclosure")
    if enclosure is not None and credit:
        url = (enclosure.attrib.get("url") or "").strip()
        media_type = (enclosure.attrib.get("type") or "").lower()
        if url.startswith("https://") and media_type.startswith("image/"):
            return url, credit

    return "", ""


def bellingcat_latest(limit: int = 40) -> list[dict]:
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

        if host != "www.bellingcat.com" and host != "bellingcat.com":
            continue

        key = url.lower()
        if key in seen:
            continue
        seen.add(key)

        description = _find_text(item, "description")
        author = _find_text(item, f"{{{DC_NS}}}creator")
        published = iso_date(_find_text(item, "pubDate"))
        image_url, image_credit = bellingcat_image(item)

        article_id = "bellingcat:" + (
            guid.strip() if guid.strip() else urllib.parse.urlparse(url).path.strip("/")
        )

        rows.append(
            {
                "id": article_id,
                "source": "Bellingcat",
                "title": title,
                "url": url,
                "publishedAt": published,
                "byline": clean_html_text(author),
                "standfirst": clean_html_text(description),
                "bodyHtml": "",
                "fullText": False,
                "category": "bellingcat",
                "imageUrl": image_url,
                "imageAlt": title if image_url else "",
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
        'investigation OR investigative OR investigated OR exclusive OR '
        'revealed OR documents OR leak OR corruption OR fraud OR abuse OR surveillance'
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
        lambda: bellingcat_latest(limit=45),
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
