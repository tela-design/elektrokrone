import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Circuit } from "@/components/circuit";
import { JsonLd } from "@/components/json-ld";
import { MobileCallBar } from "@/components/mobile-call-bar";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { owner, site } from "@/content/site";
import { reviewStats } from "@/content/reviews";
import { findImage } from "@/lib/assets";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--f-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--f-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Elektriker in Hilzingen`,
    template: `%s – ${site.name}`,
  },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.name }],
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
  formatDetection: { telephone: true },
  // bestätigung für google search console, per env eintragen
  verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined },
};

export const viewport: Viewport = {
  themeColor: "#12151c",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// schema.org: lokales handwerksunternehmen, website und bewertungen
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "de-DE",
  },
  {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.brand,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    image: `${site.url}/images/team/firmenauto.webp`,
    logo: `${site.url}/images/brand/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.zip,
      addressLocality: site.city,
      addressCountry: "DE",
    },
    founder: { "@type": "Person", name: owner.name, jobTitle: owner.role },
    foundingDate: "2022",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "12:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "13:00",
        closes: "17:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.rating,
      reviewCount: reviewStats.count,
      bestRating: 5,
      worstRating: 1,
    },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // logo liegt unter public/images/brand/logo.(svg|png|webp)
  const logo = findImage("images/brand", "logo");

  return (
    <html lang="de" className={`${display.variable} ${body.variable}`}>
      <body>
        <Circuit variant="fixed" />
        <a className="skip" href="#main">
          zum inhalt springen
        </a>
        <SiteHeader logo={logo} />
        <main id="main">{children}</main>
        <SiteFooter logo={logo} />
        <MobileCallBar />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
