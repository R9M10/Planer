PLANER v39 — FILMRAUM + FILME-SORTIERUNG

NEU

1. SCHACHRAUM -> FILMRAUM
   Klick auf die rechte Wand des Schachraums:
   -> flüssige 90°-Drehung in den Filmraum.

   Filmraum:
   - Tag: film-room-day.png
   - Nacht: film-room-night.png

   Klick auf die alte Filmkamera:
   -> Filme-Suche (YouTube Data API)

   Klick auf die freie linke obere Wand:
   -> Drehung zurück zum Schachraum.

2. DREHANIMATION OHNE ZOOM-SPRUNG
   Der temporäre Compositor endet jetzt exakt bei:
   - 100 % Viewportgröße
   - scale(1)
   - translate(0)
   - rotateY(0)

   Zuvor war die letzte Animationsansicht noch vergrößert
   (105 % Layer + scale ~1.02), weshalb das Bild beim Entfernen
   des Animationslayers sichtbar zurücksprang.

   Zusätzlich wird der Layer erst zwei Render-Frames nach dem
   transitionend entfernt, wenn der echte Zielscreen bereits
   gezeichnet ist.

3. ORDNER
   Bibliothek und Filme:
   Ordnerchips und Ordner-Erstellen-Icon sind nur auf der jeweiligen
   Startansicht sichtbar. Bei Suche, Artikel, Kanal, Ordneransicht
   usw. verschwinden sie.

4. YOUTUBE -> FILME
   Der obere Schriftzug heißt nun "Filme".
   Ein Klick auf "Filme" öffnet die Sortierung:
   - Normal
   - Aufrufzahl
   - Uploaddatum (Neu nach Alt)

   Video-Suchergebnisse nutzen entsprechend:
   - relevance
   - viewCount
   - date

   Kanalsuchergebnisse bleiben nach Relevanz sortiert.

5. BESTEHENDE FUNKTIONEN
   - Videos/Kanäle Tabs
   - Kanal -> Uploads
   - Video -> Vollbildplayer
   - Videos in lokale Ordner speichern
   - Wikipedia/Bibliothek
   - Schach / Stockfish
   - Backup/Wiederherstellung

bleiben erhalten.
