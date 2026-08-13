PLANER v30 — SCHACH-LOADER-FIX

Bitte ALLE folgenden Dateien ersetzen:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

WARUM v29 BEI "WEITER" SCHEITERN KONNTE

Die Fehlermeldung bedeutete nicht automatisch, dass der Rechner kein
Internet hatte.

1. Der Stockfish-Worker hatte über mehrere Versionen denselben HTTP-Pfad:
   ./stockfish-worker.js

   Ein #fragment ändert den HTTP-Cache-Key nicht. Safari/Home-Screen-Apps
   und normale Browser konnten daher weiterhin eine ältere, fehlerhafte
   Worker-Datei aus dem Cache benutzen.

2. v29 wartete beim Klick auf "Weiter" maximal 10 Sekunden auf:
   - Download der ca. 7.3 MB WASM-Datei
   - WebAssembly-Kompilierung
   - UCI-Initialisierung

   War das beim ersten Start langsamer, wurde die gesamte Schachseite
   abgebrochen.

WAS v30 ÄNDERT

- Worker-Netzwerk-URL:
  stockfish-worker.js?v=30#<WASM>,worker

  Der Query-Teil erzwingt einen frischen Worker.
  Der Hash-Teil wird weiterhin vom offiziellen Stockfish.js-Loader benutzt.

- chess.js wird vom echten ESM-Pfad geladen:
  /dist/esm/chess.js
  statt über den +esm-Transform-Endpunkt.

- Nach "Weiter" öffnet sich das Brett SOFORT.
  Stockfish darf im Hintergrund bis zu 30 Sekunden für den allerersten
  Download/Compile benötigen.

- Nach erfolgreichem ersten Laden bleiben die eigentlichen Engine-Züge
  weiterhin kurz (ca. 180–480 ms Suchzeit abhängig von der Elo).

WENN ES TROTZDEM NICHT GEHT

Einmal nach dem GitHub-Pages-Deployment:
1. Seite im normalen Browser komplett neu laden.
2. Bei iPhone Home-Screen-App diese einmal vollständig schließen und neu öffnen.
3. Danach Schach erneut öffnen.

Die neue ?v=30 Worker-URL sollte verhindern, dass die alte Engine-Datei
erneut aus dem Cache kommt.
