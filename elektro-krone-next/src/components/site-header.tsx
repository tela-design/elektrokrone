"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Brand } from "./brand";
import { Icon } from "./icon";

export function SiteHeader({ logo }: { logo: string | null }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // menü nach seitenwechsel schließen
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap header-inner">
        <Brand logo={logo} />

        <nav id="nav" className={`primary ${open ? "is-open" : ""}`} aria-label="hauptnavigation">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="link" href={item.href} aria-current={path === item.href ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* anruf-knopf, nur auf dem desktop. auf dem handy gibt es die leiste unten */}
        <a className="header-call btn btn-primary" href={site.phoneHref}>
          <Icon name="phone" /> Anrufen
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="nav"
          aria-label={open ? "menü schließen" : "menü öffnen"}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}
