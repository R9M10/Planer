PLANER v47 — REUTERS FEED OHNE BROWSER-API

Warum v46 scheiterte
--------------------
Der GDELT-DOC-Endpunkt ist als direkter Browser-Dienst nicht stabil genug:
Timeouts und Rate-Limits können die Nachrichtenansicht blockieren.

Neue Architektur
-----------------
Die App fragt beim Öffnen von Reuters keine externe Nachrichten-API mehr ab.

Stattdessen:
1. GitHub Actions liest etwa alle 30 Minuten den öffentlichen Reuters-Sitemap.
2. Daraus wird data/reuters.json erzeugt.
3. Die App lädt ausschließlich ./data/reuters.json von der eigenen GitHub-Pages-Seite.
4. Dadurch gibt es im Browser kein CORS, JSONP oder externes API-Timeout mehr.
5. Wenn Reuters vorübergehend nicht erreichbar ist, bleibt die letzte erfolgreiche
   data/reuters.json erhalten.

Einmalige GitHub-Einstellung
----------------------------
Falls der Workflow beim Commit mit einer Berechtigungsfehlermeldung stoppt:

Repository -> Settings -> Actions -> General -> Workflow permissions
-> "Read and write permissions" aktivieren.

Danach unter Actions -> "Update Reuters feed" -> "Run workflow" einmal manuell starten.

Der Workflow läuft anschließend automatisch ungefähr alle 30 Minuten.

Der Film-Hotspot bleibt wie in v46 auf dem unteren Filmband.
