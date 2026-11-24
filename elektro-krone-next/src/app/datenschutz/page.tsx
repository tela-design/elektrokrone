import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Datenschutz",
  description: "Datenschutzerklärung der Elektro Krone GmbH: welche Daten die Website verarbeitet und welche Rechte Sie haben.",
  path: "/datenschutz",
});

// entwurf: vor dem livegang rechtlich prüfen lassen und hosting-angaben ergänzen
export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />

      <section className="section">
        <div className="wrap legal">
          <Reveal>
            <article className="card">
              <h2>Verantwortlicher</h2>
              <p>
                {site.name}
                <br />
                {site.street}, {site.zip} {site.city}
                <br />
                E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
                <br />
                Telefon: <a href={site.phoneHref}>{site.phone}</a>
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Server-Logdateien</h2>
              <p>
                Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Daten wie IP-Adresse,
                Datum und Uhrzeit sowie die aufgerufene Seite. Das dient dem sicheren Betrieb der Website.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Kontaktformular</h2>
              <p>
                Wenn Sie uns über das Formular schreiben, verarbeiten wir Ihren Namen, Ihre E-Mail-Adresse und Ihre
                Nachricht, optional auch Telefonnummer und Anliegen. Die Angaben nutzen wir ausschließlich zur Bearbeitung
                Ihrer Anfrage. Rechtsgrundlage ist Ihre Einwilligung beziehungsweise die vorvertragliche Beziehung
                (Art. 6 Abs. 1 lit. a und b DSGVO).
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Google Maps</h2>
              <p>
                Auf der Kontaktseite kann eine Karte von Google Maps eingebunden sein. Beim Anzeigen der Karte werden
                Daten an Google übertragen. Die Karte lädt erst beim Aufruf der Kontaktseite. Mit dem Link „Route
                anzeigen“ öffnen Sie Google Maps in einem neuen Fenster.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Cookies, Schriften und Tracking</h2>
              <p>
                Diese Website setzt keine Tracking- oder Analyse-Cookies ein. Schriften werden von unserem eigenen Server
                ausgeliefert und nicht von Drittanbietern geladen.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Ihre Rechte</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit.
                Außerdem können Sie einer Verarbeitung widersprechen und sich bei einer Datenschutz-Aufsichtsbehörde beschweren.
                Wenden Sie sich dafür an die oben genannte Adresse.
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
