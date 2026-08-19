PLANER V59.1 — FOKUS-FIX

Ursache
-------
Der komplette Fokus-Code von v59 war versehentlich als eine einzige
JavaScript-Kommentarzeile mit wörtlichen \n-Zeichen eingebettet.
Darum war "Fokus" im Menü sichtbar, aber kein Event-Handler wurde ausgeführt.

Behoben
-------
- Fokus-Code ist wieder ausführbares JavaScript.
- Klick auf Fokus öffnet den minimalistischen Home-Screen.
- Suchlinie und Vorschläge funktionieren.
- Synonyme/Abkürzungen bleiben enthalten.
- Menü -> Fokus beenden funktioniert.
- Fokus bleibt lokal gespeichert.
- Cache-Version: 591.
