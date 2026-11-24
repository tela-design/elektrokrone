import Link from "next/link";
import { hours, nav, site } from "@/content/site";
import { Brand } from "./brand";

export function SiteFooter({ logo }: { logo: string | null }) {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Brand logo={logo} />
          <p className="footer-lead">Elektroinstallation, Beleuchtung und Smarthome aus {site.city}.</p>
        </div>

        <div>
          <h2>Kontakt</h2>
          <ul>
            <li><a href={site.phoneHref}>{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.street}<br />{site.zip} {site.city}</li>
          </ul>
        </div>

        <div>
          <h2>Öffnungszeiten</h2>
          <ul>
            {hours.map((h) => (
              <li key={h.days}>{h.days}: {h.time}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Seiten</h2>
          <ul>
            {nav.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li><Link href="/impressum">Impressum</Link></li>
            <li><Link href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span className="footer-links">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </span>
      </div>
    </footer>
  );
}
