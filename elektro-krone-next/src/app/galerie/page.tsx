import type { Metadata } from "next";
import Link from "next/link";
import { Gallery } from "@/components/gallery";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { captionFromFile, listImages } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Galerie",
  description: "Ausgeführte Arbeiten der Elektro Krone GmbH aus Beleuchtung, Schaltschrankbau und Smarthome.",
  path: "/galerie",
});

// fehlt der ordner oder sind keine bilder da, zeigt die galerie platzhalter
const PLACEHOLDER_COUNT = 6;

export default function GalleryPage() {
  const files = listImages("images/galerie");
  const items =
    files.length > 0
      ? files.map((src) => ({ src, caption: captionFromFile(src) }))
      : Array.from({ length: PLACEHOLDER_COUNT }, () => ({ src: null, caption: "Platzhalter" }));

  return (
    <>
      <PageHero eyebrow="Einblicke" title="Galerie">
        Ausgeführte Arbeiten aus Beleuchtung, Schaltschrankbau und Smarthome. Ein Klick vergrößert das Bild.
      </PageHero>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <Gallery items={items} />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <div>
                <h2>Ein ähnliches Projekt geplant?</h2>
                <p>Erzählen Sie uns, was Sie vorhaben. Wir melden uns mit einer ehrlichen Einschätzung.</p>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-primary" href="/kontakt">
                  Projekt anfragen <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
