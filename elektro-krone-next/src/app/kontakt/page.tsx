import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { RouteMap, routeUrl } from "@/components/route-map";
import { hours, site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Kontakt",
  description: "Telefon, E-Mail und Adresse der Elektro Krone GmbH in Hilzingen sowie die Öffnungszeiten.",
  path: "/kontakt",
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Kontakt" title="Sprechen wir miteinander">
        Am schnellsten erreichen Sie uns telefonisch. Schreiben Sie uns gern per E-Mail.
      </PageHero>

      <section className="section">
        <div className="wrap grid">
          <Reveal>
            <article className="card contact-card">
              <div className="icon-tile">
                <Icon name="phone" />
              </div>
              <h2>Telefon</h2>
              <a className="contact-value" href={site.phoneHref}>{site.phone}</a>
              <table className="hours">
                <tbody>
                  {hours.map((h) => (
                    <tr key={h.days}>
                      <td>{h.days}</td>
                      <td>{h.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a className="btn btn-dark" href={site.phoneHref}>
                <Icon name="phone" /> Jetzt anrufen
              </a>
            </article>
          </Reveal>

          <Reveal delay={90}>
            <article className="card contact-card">
              <div className="icon-tile">
                <Icon name="mail" />
              </div>
              <h2>E-Mail</h2>
              <a className="contact-value" href={`mailto:${site.email}`}>{site.email}</a>
              <p>Bitte nennen Sie in Ihrer Nachricht kurz Ihr Anliegen. E-Mails bearbeiten wir während unserer Telefonzeiten.</p>
              <a className="btn btn-primary" href={`mailto:${site.email}`}>
                <Icon name="mail" /> E-Mail senden
              </a>
            </article>
          </Reveal>

          <Reveal delay={180}>
            <article className="card contact-card">
              <div className="icon-tile">
                <Icon name="pin" />
              </div>
              <h2>Adresse</h2>
              <p className="contact-address">
                {site.name}
                <br />
                {site.street}
                <br />
                {site.zip} {site.city}
              </p>
              <a className="btn btn-outline" href={routeUrl} target="_blank" rel="noopener">
                <Icon name="pin" /> Route anzeigen
              </a>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="form-title">
        <div className="wrap">
          <Reveal>
            <div className="card form-card">
              <span className="kicker">Anfrage</span>
              <h2 id="form-title">Schreiben Sie uns</h2>
              <p className="lead">Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns mit einer ehrlichen Einschätzung.</p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <RouteMap />
          </Reveal>
        </div>
      </section>
    </>
  );
}
