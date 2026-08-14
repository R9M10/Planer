PLANER v51 — GUARDIAN VOLLTEXT + BELLINGCAT RSS-VORSCHAU

Guardian
--------
- Welt, Wissenschaft und Investigativ bleiben Guardian-basiert.
- Guardian-Artikel werden weiterhin mit vollständigem Artikeltext,
  Titelbild und interner Leseransicht dargestellt.

Bellingcat
----------
- Eigener gleichwertiger Tab "Bellingcat".
- Keine Bellingcat-Webseiten werden mehr gescrapt oder gespiegelt.
- Es werden ausschließlich Daten aus dem offiziellen RSS-Feed verwendet:
  Titel, Autor, Datum, Teaser und feed-seitig bereitgestellte Bilder.
- Falls media:content, media:thumbnail oder RSS-enclosure ein Bild liefert,
  wird dieses direkt in der App dargestellt.
- Als letzter Bild-Fallback wird ausschließlich die erste Bild-URL aus
  dem Feed-HTML gelesen; der restliche Feed-HTML-Inhalt wird nicht übernommen.
- Der vollständige Bellingcat-Artikel öffnet über:
  "Vollständigen Artikel bei Bellingcat lesen ↗"

Technik
-------
- BeautifulSoup und das serverseitige Bellingcat-Seiten-Scraping wurden entfernt.
- Bellingcat benötigt weiterhin keinen API-Key.
- GUARDIAN_API_KEY bleibt das einzige benötigte Secret.
- Der bestehende GitHub-Pages-Workflow aktualisiert den Feed weiterhin automatisch.
