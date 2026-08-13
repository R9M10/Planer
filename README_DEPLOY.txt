PLANER v32 — SCHREIBTISCH ALS START + SCHACHRAUM + PROMOTION

Bitte ersetzen:

- index.html
- style.css
- app.js
- stockfish-worker.js
- THIRD_PARTY_LICENSES.txt
- README_DEPLOY.txt

1. START
Beim Öffnen ist direkt der Schreibtisch / das Studierzimmer aktiv.
Der alte Meer-Startbildschirm wird funktional nicht mehr benutzt.

Himmel im Schreibtisch:
-> Planer

Galaxie im Planer:
-> zurück zum Schreibtisch

Backup-Wiederherstellung und Session-Menü:
-> ebenfalls zurück zum Schreibtisch

2. SCHACHRAUM
Rechte Wand am Schreibtisch:
-> 3D-Kameradrehung nach rechts
-> neues Schachraumbild

Schachbrett / niedriger Tisch:
-> Elo- und Farbauswahl
-> Schachspiel

Äußerste linke Wand im Schachraumbild:
-> Drehanimation zurück zum Schreibtisch

Das neue Bild ist direkt in style.css eingebettet.
Keine zusätzliche Bilddatei muss ins Repository.

3. BAUERNUMWANDLUNG
Der Fehler lag in fillPromotionChoices():

Seit der Umstellung auf Cburnett-SVG-Figuren existiert die alte Variable
CHESS_PIECES nicht mehr. Die Promotion-Auswahl versuchte sie aber weiterhin
zu lesen. Beim Erreichen der letzten Reihe entstand daher ein ReferenceError.

v32 zeigt für die Auswahl nun direkt die echten SVG-Figuren:

- Dame
- Turm
- Läufer
- Springer

Der Fix gilt im normalen Spiel und im Analysebrett.

4. STOCKFISH
Der funktionierende Stockfish-v31-Worker-Fix wurde unverändert übernommen.
