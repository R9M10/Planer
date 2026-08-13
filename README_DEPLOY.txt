PLANER v38 — YOUTUBE

Neu:

- Klick auf die rechte Wand neben der Schiebetür im Schachraum öffnet YouTube.
- Gleiches reduziertes Layout wie die Bibliothek.
- Keine Suchvorschläge und keine API-Anfrage während der Eingabe.
- Erst nach Absenden erscheinen die Reiter „Videos“ und „Kanäle“.
- Videolisten enthalten ausschließlich Titel und Kanalname, keine Thumbnails.
- Kanal anklicken -> Uploads des Kanals.
- Video anklicken -> sofortiger viewportfüllender Player; nativer Vollbildmodus wird zusätzlich versucht.
- Videos können mit „+“ in lokale Videoordner gespeichert werden.
- Ordner sind Teil des normalen App-State und damit Teil von Backup/Wiederherstellung.

Wichtig:
Bei einer statischen GitHub-Pages-App ist ein Browser-API-Key im ausgelieferten Clientcode sichtbar.
Beschränke ihn in Google Cloud auf:
- YouTube Data API v3
- HTTP-Referrer deiner GitHub-Pages-Seite, z. B. https://r9m10.github.io/Planer/*

Der Schlüssel wird in dieser README absichtlich nicht wiederholt.
