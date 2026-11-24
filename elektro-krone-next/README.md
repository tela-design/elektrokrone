# elektro krone

next.js (app router) + typescript, ohne css-framework.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## struktur

- `src/app/` – seiten (`page.tsx` je route), `sitemap.ts`, `robots.ts`
- `src/content/` – alle texte und daten (kontakt, leistungen, bewertungen, zeitstrahl)
- `src/components/` – wiederverwendbare bausteine
- `src/lib/assets.ts` – findet bilder anhand des dateinamens
- `src/lib/seo.ts` – metadaten und breadcrumb-daten

## bilder einfügen

Bilder liegen unter `public/images/`. Die komponenten finden sie automatisch über den ordner und den dateinamen. Keine code-änderung nötig.

| ordner | datei | wofür |
| --- | --- | --- |
| `images/brand/` | `logo.svg` | logo in kopf- und fußzeile |
| `images/team/` | `firmenauto.webp` | foto auf „über uns“ |
| `images/team/` | `constantin-serper.webp` | portrait auf „über uns“ |
| `images/partner/` | `<partner-slug>.svg` | partnerlogos, slug siehe `site.ts` |
| `images/galerie/` | `01-beschreibung.webp` | galerie, bildunterschrift entsteht aus dem namen |
| `images/leistungen/<slug>/` | `01-beschreibung.webp` | bilder je leistung (erstes bild = vorschau) |

Erlaubte formate: `.webp`, `.avif`, `.jpg`, `.jpeg`, `.png`, `.svg`. Fehlt ein bild, zeigt die seite einen platzhalter.

Empfehlung: bilder vorher auf etwa 1600 px Breite verkleinern. `next/image` erzeugt die passenden größen selbst.

## leistungen

Neue leistung in `src/content/services.ts` eintragen. Die detailseite `/dienstleistungen/<slug>` entsteht automatisch, ebenso der sitemap-eintrag und die JSON-LD-daten. Der ordner `images/leistungen/<slug>/` muss zum `slug` passen.

## bewertungen

Bewertungen stehen in `src/content/reviews.ts`. Die sterne-zahl und die anzahl in `reviewStats` müssen zu den sichtbaren bewertungen passen. Die anzahl fließt in die strukturierten daten (`aggregateRating`) ein.

## schalter

- `features.snapScroll` in `site.ts`: einrasten zwischen den sektionen auf der startseite (nur desktop).

## seo

- Titel, beschreibung und kanonische url kommen über `pageMetadata` (`src/lib/seo.ts`).
- strukturierte daten: `WebSite`, `Electrician` (inkl. öffnungszeiten und bewertungen) in `layout.tsx`, `Service`, `FAQPage` und `BreadcrumbList` auf den leistungsseiten.
- `site.url` in `site.ts` muss die echte domain sein, sonst stimmen kanonische links und sitemap nicht.
- google-unternehmensprofil: `googleProfileUrl` in `site.ts` setzen, dann erscheint ein link zu allen bewertungen.

## umgebungsvariablen

Vorlage: `.env.example`, als `.env.local` kopieren.

- `NEXT_PUBLIC_GOOGLE_MAPS_KEY` – karte auf der kontaktseite. ohne key erscheint ein platzhalter, der link „route anzeigen“ funktioniert trotzdem.
- `NEXT_PUBLIC_GSC_VERIFICATION` – code aus der google search console. danach in der search console die sitemap `/sitemap.xml` einreichen.
- `INQUIRY_WEBHOOK_URL` – endpunkt eines formular-dienstes (z.b. formspree), der json per post annimmt. ohne url meldet das formular, dass es noch nicht verbunden ist.

## bewertungen

`src/content/reviews.json`. Nur einträge mit `"stars": 5` werden angezeigt. Die startseite ist dynamisch, damit im hero bei jedem aufruf eine andere bewertung erscheint.

## rechtliches

`/datenschutz` ist ein entwurf. Vor dem livegang hosting-anbieter ergänzen und rechtlich prüfen lassen.

## deployment

Läuft mit `npm start` auf jedem node-server oder auf vercel. Auf statischem hosting (z.b. nur ein ordner mit html) muss `images.unoptimized` in `next.config.mjs` gesetzt werden.
