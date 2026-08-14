PLANER v49 — GUARDIAN + BELLINGCAT

Nachrichtenrubriken
-------------------
- Welt: The Guardian
- Wissenschaft: The Guardian Science + Environment
- Investigativ: ausschließlich The Guardian
- Bellingcat: offizieller Bellingcat-RSS-Feed

Darstellung
-----------
- Guardian-Artikel öffnen vollständig innerhalb der App.
- Bellingcat-Artikel öffnen in derselben internen Leseransicht mit Metadaten,
  Teaser und Original-Link. Der vollständige Bellingcat-Text wird nicht gespiegelt.
- Guardian-Thumbnails werden, sofern die Open Platform sie liefert, als ruhige
  Vorschaubilder in der Liste und als große Artikelabbildung dargestellt.
- Bellingcat-Bilder werden nur verwendet, wenn der RSS-Feed selbst sowohl eine
  Medien-URL als auch einen Credit mitliefert.
- Die Reader-Navigation verhält sich wie die Bibliothek: Zurück geht zuerst zur
  Artikelliste und danach in den Filmraum.

Datenaktualisierung
-------------------
.github/workflows/deploy-pages.yml aktualisiert die Inhalte ca. alle 30 Minuten.
Benötigt weiterhin das Repository-Secret:

GUARDIAN_API_KEY

Bellingcat benötigt keinen API-Key.

Guardian-Lifecycle
------------------
Der Updater verwirft Guardian-Fallback-Volltexte, sobald der lokale Feed älter
als 23 Stunden ist, damit keine alten Open-Platform-Volltexte dauerhaft weiter
veröffentlicht werden.

Wichtig
-------
GitHub Pages muss weiterhin unter:
Settings -> Pages -> Build and deployment -> Source -> GitHub Actions
laufen.
