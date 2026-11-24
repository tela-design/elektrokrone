import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Icon } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { listImages } from "@/lib/assets";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return pageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/dienstleistungen/${service.slug}`,
    image: listImages(`images/leistungen/${service.slug}`)[0],
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const images = listImages(`images/leistungen/${service.slug}`);
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const path = `/dienstleistungen/${service.slug}`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.seo.title,
    description: service.seo.description,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#business` },
    areaServed: { "@type": "City", name: site.city },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.seo.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero eyebrow="Leistung" title={service.seo.title}>
        {service.seo.intro}
      </PageHero>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Breadcrumbs
            items={[
              { name: "Start", path: "/" },
              { name: "Dienstleistungen", path: "/dienstleistungen" },
              { name: service.title, path: path },
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Reveal>
            <span className="kicker">Leistungsumfang</span>
            <h2>{service.title}</h2>
            {service.note && <p className="card-note">{service.note}</p>}
            {service.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="checks">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link className="btn btn-primary" href="/kontakt">
              Anfrage stellen <Icon name="arrow" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            {images.length > 0 ? (
              <div className="service-strip">
                {images.map((src, j) => (
                  <Media key={src} src={src} alt={`${service.title}, Beispiel ${j + 1}`} label={`Bild ${j + 1}`} className="media" sizes="(min-width: 900px) 40vw, 90vw" />
                ))}
              </div>
            ) : (
              <Media src={null} alt={service.title} label={service.title} className="split-media" />
            )}
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Fragen und Antworten</span>
              <h2>Häufige Fragen zu {service.title}</h2>
            </Reveal>
          </div>

          <div className="faq">
            {service.seo.faq.map((f) => (
              <Reveal key={f.q}>
                <details className="faq-item">
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <Reveal>
              <span className="kicker">Weitere Leistungen</span>
              <h2>Das könnte ebenfalls passen</h2>
            </Reveal>
          </div>
          <div className="grid">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 90}>
                <Link className="card" href={`/dienstleistungen/${r.slug}`}>
                  <div className="icon-tile">
                    <Icon name={r.icon} />
                  </div>
                  <h3>{r.title}</h3>
                  <span className="more">
                    Details ansehen <Icon name="arrow" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="cta">
              <div>
                <h2>Ihr Projekt in {site.city}?</h2>
                <p>Schildern Sie uns kurz Ihr Anliegen. Wir melden uns mit einer ehrlichen Einschätzung.</p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-primary" href={site.phoneHref}>
                  <Icon name="phone" /> Jetzt anrufen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <JsonLd data={serviceLd} />
      <JsonLd data={faqLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Start", path: "/" },
          { name: "Dienstleistungen", path: "/dienstleistungen" },
          { name: service.title, path },
        ])}
      />
    </>
  );
}
