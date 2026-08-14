PLANER v53 — SPOTIFY-MUSIKINTEGRATION

NEU
---
- Klick auf den SAKURA-Flügel im Karten-/Musikraum öffnet „Musik“.
- Spotify OAuth Authorization Code + PKCE direkt im Browser.
- Kein Client Secret und kein Backend nötig.
- Suche: Songs, Alben und Künstler (Spotify-Suche, max. 10 je Typ gemäß aktueller Dev-Mode-API).
- Direkte Wiedergabe im Planer via Spotify Web Playback SDK.
- Mini-Player mit vorheriger Titel / Play-Pause / nächster Titel.
- Playlists: eigene/followed Playlists laden, öffnen, Titel ansehen und abspielen.
- Neue echte Spotify-Playlists erstellen (standardmäßig privat; „Öffentlich“ optional).
- Songs aus der Suche über + zu einer Playlist hinzufügen.
- Mediathek: gespeicherte Titel anzeigen.
- Spotify-Verbindung über ··· wieder trennbar.
- Access Tokens werden automatisch erneuert; abgelaufene Refresh Tokens führen sauber zur erneuten Anmeldung.

EINMALIG IM SPOTIFY DEVELOPER DASHBOARD
---------------------------------------
1. App -> Settings öffnen.
2. Unter Redirect URIs EXAKT eintragen:
   https://r9m10.github.io/Planer/
3. Web API und Web Playback SDK für die App aktivieren/auswählen.
4. Änderungen speichern.

WICHTIG
-------
- Die Client ID ist für PKCE absichtlich im Frontend enthalten.
- KEIN Client Secret wurde eingebaut. Niemals einen Spotify Client Secret in GitHub Pages/app.js eintragen.
- Spotify-Token liegen lokal im Browser unter der GitHub-Pages-Domain und sind NICHT Bestandteil des Planer-Backups.
- Album-/Playlist-Artwork wird unverändert mit object-fit: contain dargestellt; Spotify-Links bleiben zugänglich.
- Der Web Playback SDK benötigt Spotify Premium. Auf iOS kann der erste Start einen echten Tipp auf Play benötigen.
- Spotify Refresh Tokens für Developer-Dashboard-Apps laufen nach 6 Monaten ab; danach ist eine erneute Autorisierung nötig.
