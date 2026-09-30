import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`]));
  return (["en", "es"] as const).map((lang) => ({
    url: `${SITE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
