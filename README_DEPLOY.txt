PLANER v28 + SCHACH — ENGINE/BOARD FIX

Upload/replace these files in the same GitHub Pages directory:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

WICHTIGE KORREKTUREN

1. SCHACHBRETT
   Das Brett wird jetzt sowohl per CSS als auch direkt beim Erzeugen jedes
   Feldes als echtes Schwarz-Weiß-Brett gesetzt. Globale Button-Regeln der
   restlichen App können die Felder dadurch nicht mehr transparent machen.

2. STOCKFISH
   Der Worker leitet die WASM-Datei nun korrekt auf
   stockfish-18-lite-single.wasm der gepinnten Version 18.0.8 um.
   Dadurch soll Stockfish tatsächlich rechnen statt nach einem Timeout auf
   den Notfallzug zurückzufallen.

3. ELO
   1320–2500 nutzt Stockfish UCI_LimitStrength + UCI_Elo.
   Unter 1320 wird die minimale Stockfish-Stärke zusätzlich bewusst
   abgeschwächt. Bei hohen Elo-Werten werden keine absichtlich zufälligen
   Züge mehr verwendet.

4. GESCHWINDIGKEIT
   Typische Stockfish-Bedenkzeit pro Computerzug:
   ungefähr 110–320 ms nach dem Laden der Engine.
   Die Engine wird bereits während der ersten weißen Bedenkzeit vorgewärmt.

5. ANALYSE
   Die Analyse nutzt kurze Vollstärke-Stockfish-Suchen.
   Die Eval-Bar bewegt sich entsprechend der Bewertung und zeigt die Zahl
   direkt in der Leiste, z.B. +0.7, -1.4 oder M3.

Hinweis:
Beim allerersten Aufruf muss die ca. 7 MB große Stockfish-WASM-Datei geladen
werden. Danach ist sie normalerweise im Browsercache, wodurch weitere Partien
spürbar schneller starten.
