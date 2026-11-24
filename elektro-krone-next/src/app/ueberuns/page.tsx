import type { Metadata } from "next";
import { CountUp } from "@/components/count-up";
import { Icon } from "@/components/icon";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { owner } from "@/content/site";
import { skills, team, timeline } from "@/content/timeline";
import { findImage } from "@/lib/assets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Über uns",
  description:
    "Die Elektro Krone GmbH: 2022 gegründet, heute in Hilzingen. Ein Team aus Elektromeister, Elektroinstallateuren und Bauhelfern.",
  path: "/ueberuns",
});

export default function AboutPage() {
  const fleetPhoto = findImage("images/team", "firmenauto");
  const ownerPhoto = findImage("images/team", "constantin-serper");

  return (
    <>
      <PageHero eyebrow="Wer wir sind" title="Über uns">
        Ein kleines Team mit großem Anspruch: Perfektion, Weiterbildung und die Lösung, die wirklich passt.
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="kicker">Unser Unternehmen</span>
            <h2>Gegründet 2022, heute als GmbH</h2>
            <p className="lead">
              Das Unternehmen „Elektro Krone“ wurde im Jahr 2022 von {owner.name} gegründet. Seit 2026 firmiert es als GmbH.
            </p>
            <p>
              Wir streben nach Perfektionismus, denn so gewinnen wir zufriedene Kunden. Unter dem Motto „Nichts ist unmöglich“
              nehmen wir jede Herausforderung an und suchen stets die bestmögliche Lösung. Durch kontinuierliche Schulungen
              bleiben wir auf dem neuesten Stand der Technik.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Media src={fleetPhoto} alt="Geschäftsauto der Elektro Krone" label="Geschäftsauto" className="split-media" />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Das Team</span>
              <h2>Wer hinter den Installationen steht</h2>
            </Reveal>
          </div>

          <div className="grid">
            {team.map((t, i) => (
              <Reveal key={t.label} delay={i * 90}>
                <div className="card stat">
                  <Icon name="users" />
                  <span className="stat-num">
                    <CountUp to={t.count} />
                  </span>
                  <span className="stat-label">{t.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Unsere Geschichte</span>
              <h2>Drei Stationen</h2>
            </Reveal>
          </div>

          <div className="timeline">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 120}>
                <div className="tl-item">
                  <div className="tl-year">{t.year}</div>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <Reveal>
            <Media src={ownerPhoto} alt={`${owner.name}, ${owner.role}`} label={owner.name} className="split-media" />
          </Reveal>
          <Reveal delay={120}>
            <span className="kicker">Geschäftsführung</span>
            <h2>{owner.name}</h2>
            <p className="role">{owner.role}</p>
            <p>Ihr Elektromeister mit Erfahrung in:</p>

            <ul className="skills">
              {skills.map((s) => (
                <li key={s}>
                  <Icon name="check" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="badges">
              <a className="badge" href="https://homematic-ip.com/de" target="_blank" rel="noopener">
                <Icon name="check" /> Installationspartner von Homematic IP
              </a>
              <a className="badge" href="https://www.doorbird.com/de/" target="_blank" rel="noopener">
                <Icon name="check" /> Autorisierter Partner von DoorBird
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <blockquote className="quote">
              „Nichts ist unmöglich.“
              <span className="quote-note">Unser Motto, nach dem wir jede Herausforderung annehmen.</span>
            </blockquote>
          </Reveal>
        </div>
      </section>
    </>
  );
}
