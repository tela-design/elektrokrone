export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  icon: string;
  // kurztext für die übersicht
  summary: string;
  note?: string;
  // stichpunkte auf der detailseite
  items: string[];
  // ausführlicher text auf der detailseite
  body: string[];
  wide?: boolean;
  seo: {
    title: string;
    description: string;
    intro: string;
    faq: Faq[];
  };
};

// bilder liegen unter public/images/leistungen/<slug>/ und werden automatisch geladen
export const services: Service[] = [
  {
    slug: "elektroinstallation",
    title: "Elektroinstallationen",
    icon: "bolt",
    summary: "Zählerschränke, Schaltschränke und die Anbindung von Wärmepumpen, sauber geplant und ausgeführt.",
    items: ["Schaltschrankbau", "Zählerschränke", "Elektrischer Anschluss von Wärmepumpen"],
    body: [
      "Eine Elektroanlage ist nur so gut wie ihre Verteilung. Wir planen Zählerschränke und Unterverteilungen so, dass sie zu Ihrem Bedarf passen und sich später erweitern lassen.",
      "Schaltschränke bauen und verdrahten wir nach den anerkannten Regeln der Technik. Für Wärmepumpen übernehmen wir den elektrischen Anschluss inklusive der nötigen Absicherung.",
    ],
    seo: {
      title: "Elektroinstallation in Hilzingen",
      description:
        "Elektroinstallation, Schaltschrankbau und Zählerschränke in Hilzingen. Elektromeisterbetrieb von Elektro Krone.",
      intro:
        "Vom Zählerschrank bis zum Schaltschrank: Wir planen und installieren Ihre Elektroanlage sauber und nach den anerkannten Regeln der Technik.",
      faq: [
        {
          q: "Was passiert bei der Erneuerung eines Zählerschranks?",
          a: "Wir prüfen den bestehenden Zählerschrank, planen die neue Verteilung und setzen sie um. Bei Bedarf übernehmen wir auch die Anmeldung beim Netzbetreiber.",
        },
        {
          q: "Wer darf am Zählerschrank arbeiten?",
          a: "Arbeiten am Zählerschrank dürfen nur eingetragene Installateure ausführen.",
        },
        {
          q: "Eine Sicherung löst ständig aus. Was kann die Ursache sein?",
          a: "Häufige Ursachen sind eine Überlastung eines Stromkreises oder ein Fehler in Leitung oder Gerät. Schalten Sie die Sicherung nicht dauerhaft wieder ein, sondern lassen Sie die Ursache prüfen.",
        },
      ],
    },
  },
  {
    slug: "beleuchtung",
    title: "Beleuchtungen",
    icon: "bulb",
    summary: "Deckenlicht, Pendelleuchten, Einbauspots und LED-Stripes, passend zu Raum und Nutzung.",
    items: ["Hängeleuchten", "Einbauspots", "LED-Stripes"],
    body: [
      "Licht entscheidet, wie sich ein Raum anfühlt. Wir beraten Sie zu Anordnung, Helligkeit und Lichtfarbe, bevor die erste Leitung verlegt wird.",
      "Ob Küche, Wohnraum oder Büro: Wir installieren Einbauspots, Pendelleuchten und indirekte LED-Beleuchtung sauber und ohne sichtbare Kabel.",
    ],
    seo: {
      title: "Beleuchtungsinstallation & LED-Beleuchtung in Hilzingen",
      description:
        "LED-Beleuchtung, Hängeleuchten, Einbauspots und LED-Stripes. Installation durch Elektro Krone GmbH in Hilzingen.",
      intro:
        "Ob Deckenbeleuchtung, Einbauspots oder indirekte LED-Stripes: Wir installieren die Beleuchtung so, dass sie zu Raum und Nutzung passt.",
      faq: [
        {
          q: "Welche Beleuchtung eignet sich für Küche und Wohnraum?",
          a: "In der Küche sind Einbauspots für gute Helligkeit am Arbeitsplatz üblich. Im Wohnraum eignen sich Pendelleuchten und indirekte Beleuchtung. Wir beraten Sie zu Anordnung und Lichtfarbe.",
        },
        {
          q: "Lassen sich LED-Stripes nachträglich einbauen?",
          a: "In vielen Räumen ja. Wichtig sind eine passende Stromversorgung und eine saubere Leitungsführung.",
        },
        {
          q: "Kann ich die Beleuchtung per Smarthome steuern?",
          a: "Ja. Lampen lassen sich über Funk- oder Bustechnik in Ihr Smarthome einbinden.",
        },
      ],
    },
  },
  {
    slug: "smarthome",
    title: "Smarthome",
    icon: "home",
    summary: "Licht, Heizung und Rollläden per Funk oder Bus steuern, mit Homematic IP.",
    note: "Mit Homematic IP",
    items: ["Funktechnik", "Bustechnik"],
    body: [
      "Ein Smarthome muss im Alltag einfach funktionieren. Wir planen die Steuerung so, dass Licht, Heizung und Beschattung zuverlässig reagieren und sich auch per App bedienen lassen.",
      "Als Installationspartner von Homematic IP setzen wir auf Funktechnik für die Nachrüstung und auf Bustechnik für Neubau und umfassende Sanierungen.",
    ],
    seo: {
      title: "Smarthome-Installation mit Homematic IP in Hilzingen",
      description:
        "Smarthome-Integration mit Homematic IP: Funk- und Bustechnik für Licht, Heizung und mehr. Installationspartner von Homematic IP.",
      intro:
        "Wir integrieren Funk- und Bustechnik in Ihr Zuhause, damit sich Licht, Heizung und weitere Geräte bequem steuern lassen.",
      faq: [
        {
          q: "Was ist der Unterschied zwischen Funk- und Bustechnik?",
          a: "Funktechnik lässt sich ohne neue Leitungen nachrüsten. Bustechnik ist fest verkabelt und eignet sich besonders für Neubau oder umfassende Sanierungen.",
        },
        {
          q: "Ist Homematic IP für bestehende Gebäude geeignet?",
          a: "Ja. Homematic IP ist eine Funklösung, die sich gut für die Nachrüstung eignet. Wir prüfen vorab, welche Geräte in Ihr Gebäude passen.",
        },
      ],
    },
  },
  {
    slug: "netzwerktechnik",
    title: "Netzwerktechnik",
    icon: "network",
    summary: "Netzwerkverteilungen sowie Video- und Sprechanlagen für stabile Verbindungen im Haus.",
    items: ["Video- und Sprechanlagen", "Netzwerkverteilungen"],
    body: [
      "Eine saubere Netzwerkverteilung ist die Grundlage für stabiles WLAN, schnelle Geräte und zuverlässige Anlagen im Haus.",
      "Video- und Sprechanlagen planen wir so, dass sie zu Eingang und Gebäude passen. Wo möglich, nutzen wir vorhandene Leitungen.",
    ],
    seo: {
      title: "Netzwerktechnik und Video-Sprechanlagen in Hilzingen",
      description:
        "Netzwerkverteilungen sowie Video- und Sprechanlagen in Hilzingen. Elektro Krone GmbH plant und installiert.",
      intro:
        "Eine saubere Netzwerkverteilung und eine zuverlässige Sprech- oder Videoanlage bilden die Basis für stabile Verbindungen im Haus.",
      faq: [
        {
          q: "Was gehört zu einer Netzwerkverteilung?",
          a: "Dazu gehören der Verteiler, die Anschlussdosen und die Verlegung der Leitungen. Wir planen die Verteilung passend zu Ihrem Bedarf.",
        },
        {
          q: "Lässt sich eine Video-Sprechanlage nachrüsten?",
          a: "Oft ja. Ob eine Nachrüstung ohne neue Leitungen möglich ist, prüfen wir vor Ort.",
        },
      ],
    },
  },
  {
    slug: "erneuerbare-energie",
    title: "Erneuerbare Energie + Nutzung",
    icon: "sun",
    summary: "Photovoltaik, Wallbox und Dach-Windkraft: Installation, Anschluss und Anmeldung aus einer Hand.",
    items: ["Photovoltaikanlagen", "Wallbox-Installation", "Dach-Windkrafträder"],
    body: [
      "Photovoltaikanlagen und Wallboxen brauchen eine sorgfältige Elektroinstallation. Wir prüfen Absicherung und Leitungen, schließen die Anlage an und kümmern uns um die Anmeldung beim Netzbetreiber.",
      "Auch Dach-Windkraft übernehmen wir als Elektroinstallation. Wir beraten Sie vorab, was Ihr Gebäude und Ihr Stromnetz leisten können.",
    ],
    seo: {
      title: "Photovoltaik, Wallbox & Dach-Windkraft in Hilzingen",
      description:
        "Elektroinstallation für Photovoltaikanlagen, Wallbox-Installation und Dach-Windkraft. Elektro Krone GmbH aus Hilzingen.",
      intro:
        "Photovoltaik, Wallbox oder Dach-Windkraft: Wir übernehmen die Elektroinstallation und den Anschluss, damit die Anlage sicher Strom liefert.",
      faq: [
        {
          q: "Übernimmt Elektro Krone auch die Anmeldung der Photovoltaikanlage?",
          a: "Ja. Wir übernehmen die Anmeldung beim Netzbetreiber, die für Photovoltaikanlagen nötig ist.",
        },
        {
          q: "Kann ich eine Wallbox auch ohne Photovoltaik betreiben?",
          a: "Ja. Eine Wallbox lässt sich auch ohne Photovoltaik installieren. Entscheidend sind die passende Absicherung und ausreichende Leitungen, das prüfen wir vorab.",
        },
        {
          q: "Brauche ich für eine Wallbox eine Anmeldung?",
          a: "Je nach Ladeleistung muss die Installation beim Netzbetreiber angemeldet werden. Wir klären das mit Ihnen vor dem Start.",
        },
      ],
    },
  },
  {
    slug: "glasfaser-ftth",
    title: "Glasfaser Ausbau FTTH",
    icon: "fiber",
    summary: "Glasfaser-Hausanschluss, Verlegung im Gebäude, ONT-Installation und Inbetriebnahme.",
    items: [
      "Hausanschluss für Glasfaser (FTTH)",
      "Verlegung von Glasfaserkabeln im Gebäude",
      "Installation von Netzabschlusspunkten (ONT)",
      "Spleißen und Messen von Glasfaserleitungen",
      "Vorbereitung für Highspeed-Internet (Gigabit)",
      "Integration ins bestehende Heimnetzwerk",
      "Inbetriebnahme und Funktionsprüfung",
      "Beratung und Planung von FTTH-Anschlüssen",
      "Fehlerbehebung bei bestehenden FTTH-Anschlüssen",
    ],
    body: [
      "Glasfaser bringt Gigabit-Internet bis ins Gebäude. Wir verlegen die Leitungen, spleißen und messen sie und richten den Netzabschlusspunkt (ONT) ein.",
      "Nach der Inbetriebnahme prüfen wir die Verbindung und binden sie in Ihr Heimnetzwerk ein. Bei bestehenden Anschlüssen suchen wir die Störung und beheben sie.",
    ],
    seo: {
      title: "Glasfaser-Hausanschluss (FTTH) in Hilzingen",
      description:
        "FTTH-Glasfaser in Hilzingen: Hausanschluss, Verlegung im Gebäude, ONT-Installation und Inbetriebnahme durch Elektro Krone GmbH.",
      intro:
        "Vom Hausanschluss bis zur Inbetriebnahme: Wir verlegen und messen Glasfaserleitungen und binden sie in Ihr Heimnetzwerk ein.",
      faq: [
        {
          q: "Was bedeutet FTTH?",
          a: "FTTH steht für „Fiber to the Home“. Die Glasfaser führt bis in das Gebäude.",
        },
        {
          q: "Was ist ein ONT?",
          a: "Der ONT (Optical Network Terminal) wandelt das Glasfasersignal in ein Signal um, das Ihre Geräte nutzen können.",
        },
        {
          q: "Kann ich einen bestehenden FTTH-Anschluss prüfen lassen?",
          a: "Ja. Wir helfen auch bei der Fehlerbehebung an bestehenden Anschlüssen.",
        },
      ],
    },
  },
  {
    slug: "sonstiges",
    title: "Sonstiges",
    icon: "tool",
    summary: "Elektroplanung, Fehlersuche, Inbetriebnahme und Anmeldung beim Netzbetreiber.",
    items: [
      "Elektrische Planung",
      "Anmeldung/Abmeldung beim Netzbetreiber",
      "Inbetriebnahme elektrischer Anlagen",
      "Fehlersuche",
    ],
    body: [
      "Nicht jede Aufgabe passt in eine Kategorie. Wenn es um Planung, Fehlersuche oder die Inbetriebnahme geht, sind wir Ihr Ansprechpartner.",
      "Bei einer Fehlersuche prüfen wir Schritt für Schritt Leitungen, Verteilungen und Geräte, bis die Ursache gefunden ist.",
    ],
    wide: true,
    seo: {
      title: "Elektroplanung, Fehlersuche & Inbetriebnahme in Hilzingen",
      description:
        "Elektrische Planung, Fehlersuche, Inbetriebnahme und Anmeldung beim Netzbetreiber. Elektromeisterbetrieb aus Hilzingen.",
      intro:
        "Ob Planung, Fehlersuche oder Inbetriebnahme: Wir sind Ihr Ansprechpartner rund um die Elektrik.",
      faq: [
        {
          q: "Was passiert bei einer Fehlersuche?",
          a: "Wir prüfen Leitungen, Verteilungen und Geräte Schritt für Schritt, bis die Ursache gefunden ist.",
        },
        {
          q: "Muss eine neue elektrische Anlage angemeldet werden?",
          a: "Neue oder geänderte Anlagen müssen in der Regel beim Netzbetreiber angemeldet werden. Wir übernehmen das für Sie.",
        },
      ],
    },
  },
  {
    slug: "umbau-neubau",
    title: "Umbau/Neubau-Elektrik",
    icon: "wrench",
    summary: "Komplette Elektrik für Neubau und Sanierung, von der Planung bis zur Abnahme.",
    items: ["Elektrik für Neubauten", "Elektrik bei Sanierungen", "Planung bis zur Abnahme"],
    body: [
      "Bei Neubau und Sanierung entscheidet die Planung über den Komfort der nächsten Jahrzehnte. Steckdosen, Lichtpunkte und Leitungswege lassen sich früh deutlich leichter festlegen.",
      "Wir begleiten Ihr Projekt vom Rohbau bis zur Abnahme und stimmen uns mit den anderen Gewerken ab.",
    ],
    seo: {
      title: "Elektroinstallation für Umbau & Neubau in Hilzingen",
      description:
        "Komplette Elektrik für Neubau und Sanierung in Hilzingen: von der Planung bis zur Abnahme durch Elektro Krone GmbH.",
      intro:
        "Ob Neubau oder Sanierung: Wir planen die Elektrik mit Ihnen und setzen sie vom Rohbau bis zur Abnahme um.",
      faq: [
        {
          q: "Ab wann sollte der Elektriker in die Planung eingebunden werden?",
          a: "Möglichst früh. Steckdosen, Lichtpunkte und Leitungswege lassen sich vor dem Ausbau deutlich leichter festlegen.",
        },
        {
          q: "Übernehmen Sie die komplette Elektrik eines Hauses?",
          a: "Ja. Wir führen die komplette Elektroinstallation für Neubauten und umfassende Sanierungen aus.",
        },
      ],
    },
  },
];

export const slogans = [
  "Verbindungen, die begeistern!",
  "Elektrifizierte Qualität!",
  "Pünktliche Lösungen!",
  "Elektrik mit Innovation!",
  "Immer in Betrieb!",
];
