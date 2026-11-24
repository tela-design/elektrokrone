import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/icon";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services, slogans } from "@/content/services";
import { listImages } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Dienstleistungen",
  description:
    "Elektroinstallationen, Beleuchtung, Smarthome, Netzwerktechnik, Photovoltaik, Wallbox und Glasfaser (FTTH) in Hilzingen.",
  path: "/dienstleistungen",
});

export default function ServicesPage() {
  // ticker-inhalt doppelt, damit die schleife nahtlos läuft
  const tickerItems = [...slogans, ...slogans];

  return (
    <>
      <PageHero eyebrow="Leistungen" title="Dienstleistungen">
        Vom Schaltschrank bis zur Glasfaser: Wir planen, installieren und prüfen Ihre Elektrik, damit alles zuverlässig funktioniert.
      </PageHero>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems.map((s, i) => (
            <span className="ticker-item" key={i}>{s}</span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap grid">
          {services.map((service, i) => {
            const cover = listImages(`images/leistungen/${service.slug}`)[0] ?? null;

            return (
              <Reveal key={service.slug} delay={(i % 3) * 90}>
                <article className={`card ${service.wide ? "wide" : ""}`}>
                  <Media src={cover} alt={service.title} label={service.title} className="service-media" />

                  <div className="icon-tile">
                    <Icon name={service.icon} />
                  </div>
                  <h2>{service.title}</h2>
                  {service.note && <p className="card-note">{service.note}</p>}

                  <p>{service.summary}</p>

                  <Link className="more" href={`/dienstleistungen/${service.slug}`}>
                    Details ansehen <Icon name="arrow" />
                  </Link>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <div>
                <h2>Ihre Leistung ist nicht dabei?</h2>
                <p>Fragen Sie uns einfach. Wir prüfen gemeinsam, was für Ihr Vorhaben möglich ist.</p>
              </div>
              <div className="cta-actions">
                <Link className="btn btn-primary" href="/kontakt">
                  Kontakt aufnehmen <Icon name="arrow" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
