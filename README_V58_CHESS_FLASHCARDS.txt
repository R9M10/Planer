PLANER V58 — SCHACH: WIEDERHOLUNGSFIX + KARTEIKARTEN

Fix
---
Der Eröffnungs-Drill konnte nach einem erfolgreichen Durchlauf beim zweiten
Mal am Ende hängen bleiben. Ursache war ein alter sichtbarer Ergebnistext
("Richtig"), der fälschlich als Abschluss-Status verwendet wurde.

V58 verwendet dafür einen separaten internen Abschluss-Status und setzt
diesen bei jedem neuen Drill vollständig zurück. Eine Eröffnung kann dadurch
beliebig oft hintereinander trainiert werden; jeder erfolgreiche Durchlauf
erhöht den lokalen ✓-Zähler.

Karteikarten
------------
In der Eröffnungsliste ist der Titel "Eröffnungen" jetzt anklickbar.

Ablauf:
1. Klick auf "Eröffnungen".
2. Alle 10 Eröffnungen werden bei jedem Start zufällig gemischt.
3. Auf der Vorderseite steht ausschließlich die vollständige Zugfolge.
4. Klick auf die Karte deckt Name + Repertoirefarbe auf.
5. Danach erscheint "Weiter".
6. Nächste Karte startet wieder verdeckt.
7. Bei Karte 10 wird "Fertig" angezeigt und führt zurück zur Liste.
8. Über ‹ kann der Modus jederzeit verlassen werden.

Bestehender Analyse- und Drillmodus bleibt erhalten.
