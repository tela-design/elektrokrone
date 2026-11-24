import type { Metadata } from "next";
import { site } from "@/content/site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

// einheitliche metadaten für jede seite
export function pageMetadata({ title, description, path, image }: PageMeta): Metadata {
  const url = `${site.url}${path}`;
  const ogImage = image ?? "/images/team/firmenauto.webp";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "de_DE",
      type: "website",
      images: [{ url: ogImage, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
