import type { Metadata } from "next";
import Link from "next/link";
import { HeroReview } from "@/components/hero-review";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { Reviews } from "@/components/reviews";
import { reviewStats } from "@/content/reviews";
import { hours, owner, partners, site } from "@/content/site";
import { findImage } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

// dynamisch, damit die hero-bewertung bei jedem aufruf neu gewürfelt wird
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Elektriker in Hilzingen",
    description: site.description,
    path: "/",
  }),
  title: { absolute: `Elektriker in Hilzingen – ${site.name}` },
};

const teaser = [
  { icon: "home", title: "Smarthome-Integration", text: "Funk- und Bustechnik mit Homematic IP, damit sich Ihr Zuhause steuern lässt.", href: "/dienstleistungen/smarthome" },
  { icon: "bulb", title: "Beleuchtungs-installation", text: "Hängeleuchten, Einbauspots und LED-Stripes, passend zu Raum und Stimmung.", href: "/dienstleistungen/beleuchtung" },
  { icon: "plug", title: "Versorgungstechnik", text: "Zählerschränke, Unterverteilungen und der Anschluss von Wärmepumpen.", href: "/dienstleistungen/elektroinstallation" },
  { icon: "wrench", title: "Umbau/Neubau-Elektrik", text: "Komplette Elektrik für Neubau und Sanierung, vom ersten Plan bis zur Abnahme.", href: "/dienstleistungen/umbau-neubau" },
];

export default function HomePage() {
  return (
    <>
      <section className="hero" id="start" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-inner">
            <p className="eyebrow">Elektromeisterbetrieb aus {site.city}</p>
            <h1 id="hero-title">Elektriker in Hilzingen</h1>
            <p className="tagline">{site.tagline}</p>
            <p className="hero-text">
              Sie haben Probleme mit Ihrer Elektrik oder möchten etwas installieren, aber wissen nicht wie?
              Dann sind Sie hier genau richtig.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/dienstleistungen">
                Dienstleistungen entdecken <Icon name="arrow" />
              </Link>
              <Link className="btn btn-ghost" href="/kontakt">Kontakt aufnehmen</Link>
            </div>
          </div>

          <HeroReview />
        </div>
      </section>

      {/* vertrauensleiste: die wichtigsten fakten auf einen blick */}
      <section className="trust" aria-label="auf einen blick">
        <ul className="wrap trust-list">
          <li>
            <Icon name="shield" />
            <span>
              <strong>Elektromeisterbetrieb</strong>
              <small>{owner.name}</small>
            </span>
          </li>
          <li>
            <Icon name="clock" />
            <span>
              <strong>Seit 2022</strong>
              <small>heute als GmbH</small>
            </span>
          </li>
          <li>
            <Icon name="check" />
            <span>
              <strong>{reviewStats.rating.toFixed(1).replace(".", ",")} von 5 Sternen</strong>
              <small>{reviewStats.count} Google-Bewertungen</small>
            </span>
          </li>
          <li>
            <Icon name="phone" />
            <span>
              <strong>{hours[0].days}</strong>
              <small>{hours[0].time}</small>
            </span>
          </li>
        </ul>
      </section>

      <section className="section" id="leistungen" aria-labelledby="leistungen-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Was wir tun</span>
              <h2 id="leistungen-title">Unsere Leistungen</h2>
              <p className="lead">Von der Planung über die Installation bis zur Inbetriebnahme.</p>
            </Reveal>
          </div>

          <div className="grid">
            {teaser.map((t, i) => (
              <Reveal key={t.title} delay={i * 90}>
                <Link className="card" href={t.href}>
                  <div className="icon-tile">
                    <Icon name={t.icon} />
                  </div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                  <span className="more">
                    Mehr erfahren <Icon name="arrow" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      {/* ansprechpartner. foto: public/images/team/constantin-serper.webp */}
      <section className="section" id="team" aria-labelledby="team-title">
        <div className="wrap split">
          <Reveal>
            <Media
              src={findImage("images/team", "constantin-serper")}
              alt={`${owner.name}, ${owner.role}`}
              label={owner.name}
              className="split-media"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">Ihr Ansprechpartner</span>
            <h2 id="team-title">{owner.name}</h2>
            <p className="role">{owner.role} und Geschäftsführer</p>
            <p>
              Bei uns sprechen Sie direkt mit dem Meister. Von der ersten Beratung bis zur Abnahme bleibt Ihr Ansprechpartner
              derselbe.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={site.phoneHref}>
                <Icon name="phone" /> {site.phone}
              </a>
              <Link className="btn btn-ghost" href="/ueberuns">
                Mehr über uns <Icon name="arrow" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="partner" aria-labelledby="partner-title">
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Netzwerk</span>
              <h2 id="partner-title">Unsere Partner</h2>
            </Reveal>
          </div>

          <div className="partner-grid">
            {partners.map((p, i) => (
              <Reveal key={p.slug} delay={i * 70}>
                <a className="partner" href={p.url} target="_blank" rel="noopener">
                  <Media
                    src={findImage("images/partner", p.slug)}
                    alt={`Logo ${p.name}`}
                    label={p.name}
                    className="partner-logo"
                    sizes="260px"
                  />
                  <span className="partner-name">{p.name}</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="kontakt" aria-labelledby="kontakt-title">
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <div>
                <span className="kicker kicker-light">Ihr Projekt</span>
                <h2 id="kontakt-title">Eine Frage oder ein Projekt im Kopf?</h2>
                <p>Rufen Sie uns an oder schreiben Sie uns. Bitte nennen Sie in Ihrer E-Mail kurz Ihr Anliegen.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={site.phoneHref}>
                  <Icon name="phone" /> Jetzt anrufen
                </a>
                <a className="btn btn-ghost" href={`mailto:${site.email}`}>
                  <Icon name="mail" /> E-Mail schreiben
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Bieten Sie Elektroinstallationen in Hilzingen an?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ja. Elektro Krone GmbH übernimmt Elektroinstallationen, Schaltschrankbau, Zählerschränke, Beleuchtung, Smarthome, Photovoltaik-Anschluss, Wallbox und Glasfaser-Hausanschlüsse in Hilzingen und Umgebung.",
              },
            },
          ],
        }}
      />
    </>
  );
}
