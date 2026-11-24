import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { site } from "@/content/site";

// alle öffentlichen seiten, inklusive der leistungsdetails
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/dienstleistungen", "/ueberuns", "/galerie", "/kontakt", "/impressum", "/datenschutz"];

  return [
    ...staticPages.map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((s) => ({
      url: `${site.url}/dienstleistungen/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
