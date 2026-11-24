import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Impressum",
  alternates: { canonical: `${site.url}/impressum` },
  robots: { index: true, follow: true },
};

export default function ImprintPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />

      <section className="section">
        <div className="wrap legal">
          <Reveal>
            <article className="card">
              <h2>Angaben gemäß § 5 TMG</h2>
              <p>{site.name}<br />{site.street}<br />{site.zip} {site.city}</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Kontakt</h2>
              <p>
                Telefon: <a href={site.phoneHref}>{site.phone}</a>
                <br />
                E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Rechtliche Angaben</h2>
              <p>Geschäftsnummer (Handelsregister): Amtsgericht Freiburg im Breisgau HRB 734873</p>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE459902422</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Gewerbeanmeldung</h2>
              <p>Die Gewerbeanmeldung nach § 14 oder § 55c GewO wurde am 06.10.2022 durch die Gemeinde Rielasingen-Worblingen erteilt.</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Elektrotechnikerhandwerk
                <br />
                Zuständige Kammer: Handwerkskammer Konstanz, Webersteig 3, 78462 Konstanz, Deutschland
                <br />
                Verliehen in: Deutschland
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Berufshaftpflichtversicherung</h2>
              <p>
                <strong>Name und Sitz des Versicherers:</strong>
                <br />
                SV SparkassenVersicherung, Bueche u. Klein, Industriestr. 21, 78224 Singen (Hohentwiel)
              </p>
              <p><strong>Geltungsraum der Versicherung:</strong> Deutschland</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <h2>Verbraucherstreitbeilegung</h2>
              <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
                der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
                Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </article>
          </Reveal>

          <Reveal>
            <article className="card">
              <h2>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen
                des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
                Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
                dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
                Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
                umgehend entfernen.
              </p>
              <p className="quote-note">
                Quelle: <a href="https://www.e-recht24.de" target="_blank" rel="noopener">eRecht24</a>
              </p>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
