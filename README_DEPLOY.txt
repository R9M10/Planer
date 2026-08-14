PLANER v48 — GUARDIAN + PROPUBLICA NACHRICHTEN

WAS NEU IST
-----------
Der bisherige Reuters-Prototyp wurde vollständig durch „Nachrichten“ ersetzt.

Kategorien:
- Welt
- Wissenschaft
- Investigativ

THE GUARDIAN
------------
Die Guardian Open Platform liefert aktuelle Artikel einschließlich Artikeltext.
Guardian-Artikel werden deshalb vollständig in der internen Leseransicht der App
geöffnet — ohne neuen Browser-Tab.

PROPUBLICA
----------
Aktuelle ProPublica-Stories werden in „Investigativ“ ergänzt. ProPublica untersagt
aber automatisches/wholesale Republishing seiner Volltexte. Deshalb erscheinen
diese Artikel als interne Vorschau mit Titel, Metadaten und Beschreibung; über
„Original bei ProPublica“ gelangt man zum Volltext. Einzelne Stories könnten
später bewusst und manuell zur Wiederveröffentlichung ausgewählt werden.

TECHNIK / SICHERHEIT
--------------------
Der Guardian API-Key liegt NICHT in app.js.

GitHub Actions baut die GitHub-Pages-Seite etwa alle 30 Minuten neu. Dabei wird
data/news.json mit Guardian-Volltext und aktuellen ProPublica-Metadaten erzeugt.
Der erzeugte Volltext wird als Pages-Artefakt deployt und nicht in die Git-Historie
committed.

EINMALIGE EINRICHTUNG
---------------------
1. Kostenlosen Guardian Developer Key anlegen:
   https://open-platform.theguardian.com/access/

2. In GitHub:
   Repository -> Settings -> Secrets and variables -> Actions
   -> New repository secret
   Name: GUARDIAN_API_KEY
   Value: <dein Guardian Key>

3. GitHub Pages umstellen:
   Repository -> Settings -> Pages -> Build and deployment -> Source
   -> GitHub Actions

4. Unter Actions den Workflow
   „Deploy planner with current news“
   einmal mit „Run workflow“ starten.

Ohne eigenes Secret versucht der Prototyp als Fallback den öffentlichen Guardian
Test-Key. Für zuverlässige Nutzung sollte der eigene Developer-Key gesetzt werden.

BEDIENUNG
---------
Der bestehende Hotspot an der Wand rechts neben der Terrassentür öffnet Nachrichten.
Ein Artikel öffnet innerhalb der App. Der Zurück-Pfeil führt zuerst zur Artikelliste
und von dort zurück in den Filmraum.
