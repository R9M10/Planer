PLANER v27 + SCHACHANALYSE — DATEIEN FÜR GITHUB PAGES

Upload/replace these files in the same repository directory:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

SCHACHABLAUF

1. Im Studierzimmer die rechte Wand antippen.
2. Es erscheint nur:
   "Wie schwer soll ichs dir machen?"
   Elo-Slider 100–2500
   Weiter
3. Danach läuft die Partie auf einem reduzierten Schwarz-Weiß-Brett.
   Sichtbar ist nur das Brett und der kleine Zurück-Pfeil.
4. Die Partie endet automatisch bei Schachmatt oder Remis.
5. Danach öffnet sich die Analyse.

ANALYSE

- Mit ‹ und › durch die echte Partie gehen.
- Die vertikale Bewertungsleiste zeigt Stockfishs Bewertung aus Sicht von Weiß.
- Unter dem Brett wird der gespielte Zug grob als sehr gut / gut /
  ungenau / Fehler / grober Fehler eingeordnet.
- Auf jeder analysierten Stellung können alternative legale Züge direkt
  auf dem Brett gespielt werden.
- Die alternative Stellung wird neu von Stockfish bewertet.
- "Zur Partie" setzt die Analyse auf die echte Partie an derselben Stelle zurück.

TECHNIK

- chess.js 1.4.0 übernimmt vollständige Zugregeln.
- Stockfish 18 lite single-threaded spielt die KI und analysiert.
- 100–1300 Elo wird zusätzlich bewusst abgeschwächt, weil Stockfishs
  UCI_LimitStrength nicht bis 100 Elo reicht.
- Die Elo-Angabe ist eine Ziel-Spielstärke, keine gemessene FIDE-Elo.

Für das erstmalige Laden von chess.js und Stockfish wird weiterhin Internet
benötigt, solange die Bibliotheken nicht im Browsercache liegen.
