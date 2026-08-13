PLANER v31 — DEFINITIVER STOCKFISH-WORKER-FIX

Bitte ALLE Dateien ersetzen:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

URSACHE DES v30-FEHLERS

Der Stockfish-18-Loader liest:

    self.location.hash.substr(1).split(",")

Der erste Wert ist die WASM-URL.

ABER:
Wenn der zweite Wert exakt "worker" lautet, läuft eine besondere interne
Stockfish-Verzweigung. Unsere v29/v30-URL endete auf:

    #<WASM-URL>,worker

Dadurch wurde in unserem Wrapper die normale UCI-Engine nicht initialisiert.

Die Folgen passen exakt zum beobachteten Verhalten:

- Bei Schwarz blieb Weiß am Zug, weil Stockfish keinen ersten Zug machte.
- Schwarze Figuren waren deshalb nicht legal anklickbar.
- Nach Ablauf des Engine-Timeouts ging die App zurück zur Elo-Auswahl.

v31 benutzt jetzt:

    stockfish-worker.js?v=31#<WASM-URL>

OHNE ",worker".

Zusätzlich:
- ein verbliebener hardcodierter Weiß-Check beim Figurwechsel wurde auf
  die tatsächlich gewählte Spielerfarbe umgestellt.
- UCI- und readyok-Status werden nur in der Browser-Konsole protokolliert,
  nicht auf dem Spielbildschirm.

ERWARTETES VERHALTEN

Weiß gewählt:
- Brett öffnet sich.
- Du kannst sofort Weiß ziehen.
- Danach antwortet Stockfish.

Schwarz gewählt:
- Brett öffnet sich.
- Stockfish macht automatisch den ersten weißen Zug.
- Danach kannst du Schwarz ziehen.

Nach erfolgreichem erstmaligem WASM-Laden sollten Folgezüge schnell sein.
