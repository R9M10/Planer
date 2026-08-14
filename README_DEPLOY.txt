PLANER v46 — FILMBAND-HOTSPOT + REUTERS-FIX

1. FILME
- Filme öffnet sich nicht mehr über den großen Kamera-Bereich.
- Nur das lose untere Filmband im unteren linken Bildbereich ist anklickbar.
- Die linke Wand ist dadurch frei für die Zurück-Navigation.

2. REUTERS
- Die bisherige reine fetch-Abfrage wurde ersetzt.
- GDELT wird nun parallel über JSONP und fetch angesprochen.
- JSONP umgeht Browser-CORS-Probleme.
- Beide Wege haben kurze Timeouts; der erste erfolgreiche gewinnt.
- Query wurde von domainis:reuters.com auf domain:reuters.com erweitert.
- Erst 48 Stunden, bei leerem Resultat automatisch 7 Tage.
- Erfolgreiche Ergebnisse werden lokal zwischengespeichert.
- Beim nächsten Öffnen erscheinen gespeicherte Meldungen sofort, während im Hintergrund aktualisiert wird.
- Bei Ausfall bleibt der Cache sichtbar statt einer langen leeren Ladeansicht.

Alle Artikellinks führen weiterhin direkt zum Reuters-Original.
