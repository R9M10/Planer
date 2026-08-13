PLANER v29 — SCHACH ENGINE + REFERENZBRETT

Upload/replace:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

WICHTIGSTE ÄNDERUNGEN

1. ENGINE-FIX
   Der alte Wrapper ließ Stockfish die Datei "stockfish-worker.wasm"
   ableiten. Diese Datei existiert nicht. v29 startet den Worker jetzt mit
   Stockfish.js' eigenem Hash-Mechanismus:

   stockfish-worker.js#<WASM-URL>,worker

   Dadurch erhält Stockfish direkt:
   stockfish-18-lite-single.wasm

   Bei Elo >= 1320 gibt es KEINE stillen Zufallszüge mehr. Wenn Stockfish
   wirklich nicht antwortet, meldet die App den Fehler statt einen
   "2500-Elo"-Gegner heimlich durch einen schwachen Fallback zu ersetzen.

2. GESCHWINDIGKEIT
   Stockfish wird bereits auf dem Elo/Farb-Bildschirm geladen.
   Normale Engine-Bedenkzeit liegt ungefähr zwischen 180 und 480 ms.
   Nur bei einem echten Engine-Fehler erfolgt ein einmaliger Retry.

3. ELO
   1320–2500 nutzt Stockfish UCI_LimitStrength + UCI_Elo.
   Unterhalb von 1320 wird zusätzlich absichtlich abgeschwächt, da
   Stockfish UCI_Elo selbst erst bei 1320 beginnt.

4. FARBE
   Im Startfenster kann Weiß oder Schwarz gewählt werden.
   Der menschliche Spieler steht immer unten.
   Bei Schwarz macht Stockfish automatisch den ersten weißen Zug.

5. BRETT
   Exakte Farben des Referenzbilds:
   Hell: #FFCE9E
   Dunkel: #D18B47

   Figuren: Cburnett SVG chess pieces, auf denen das Referenzbild basiert.
   Sie werden als gefüllte SVG-Bilder exakt mittig in jedem Feld gerendert.

6. ANALYSE
   Die Eval-Bar verwendet die echte Stockfish-Ausgabe und zeigt direkt
   +0.7, -1.3, M4 usw. an. Sie richtet sich passend zur Brettorientierung
   aus und bewegt sich bei jeder neu analysierten Stellung.

NETZWERK
Beim ersten Laden werden weiterhin geladen:
- chess.js 1.4.0
- Stockfish 18 lite single JS/WASM
- Cburnett SVG chess pieces von Wikimedia Commons

Danach kann der Browser diese Ressourcen cachen.
