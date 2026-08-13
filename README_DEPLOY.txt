PLANER v26 + SCHACH — DATEIEN FÜR GITHUB PAGES

Upload/replace these files in the same repository directory:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt

No build step is required.

Important:
The first chess version loads chess.js and the Stockfish 18 lite-single
engine from pinned public package URLs at runtime. The chess screen therefore
needs internet access when those resources are not already cached.

Navigation:
In the Texte study-room screen, tap the right wall beside the window to open
Chess.

Opponent strength:
The slider runs from 100 to 2500 Elo. For the range supported directly by
Stockfish's UCI strength limiting, the app uses UCI_LimitStrength/UCI_Elo.
For very low settings, extra deliberate move weakening is added so that
100–1300 behaves substantially weaker. The displayed Elo is a target/playing
strength setting, not an official FIDE rating measurement.
