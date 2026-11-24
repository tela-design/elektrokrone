// alle kontaktdaten und texte an einer stelle.
// bilder werden über dateinamen gefunden, siehe README.

export const site = {
  name: "Elektro Krone GmbH",
  brand: "Elektro Krone",
  url: "https://elektro-krone.de",
  tagline: "Wir bringen das Licht",
  description:
    "Elektriker in Hilzingen: Elektroinstallation, Beleuchtung, Smarthome, Photovoltaik, Wallbox und Glasfaser. Elektromeisterbetrieb mit 5-Sterne-Bewertungen.",
  phone: "+49 176 4326 1860",
  phoneHref: "tel:+4917643261860",
  email: "info@elektro-krone.de",
  street: "Klosterstraße 1",
  zip: "78247",
  city: "Hilzingen",
  // link zum google-unternehmensprofil, sobald vorhanden
  googleProfileUrl: null as string | null,
};

export const owner = {
  name: "Constantin Serper",
  role: "Elektromeister",
};

export const hours = [
  { days: "Montag – Freitag", time: "08:00–12:00 · 13:00–17:00 Uhr" },
  { days: "Samstag – Sonntag", time: "Geschlossen" },
];

export const nav = [
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/ueberuns", label: "Über uns" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

// logo-datei: public/images/partner/<slug>.(svg|png|webp|jpg)
export const partners = [
  { slug: "blickfang-lichtdesign", name: "Blickfang Lichtdesign", url: "https://blickfang-lichtdesign.de/" },
  { slug: "5-sterne-solar", name: "5-Sterne Solar", url: "https://5-sterne-solar.de/" },
  { slug: "wultschner", name: "Wultschner", url: "https://www.wultschner.com/" },
  { slug: "doorbird", name: "DoorBird", url: "https://www.doorbird.com/de/" },
  { slug: "homematic-ip", name: "Homematic IP", url: "https://homematic-ip.com/de" },
  { slug: "ar-architekten", name: "AR Architekten", url: "https://ararchitekten.de/" },
];

