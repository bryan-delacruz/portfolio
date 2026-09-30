import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { localeUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = {
    ...Object.fromEntries(locales.map((l) => [l, localeUrl(l)])),
    "x-default": localeUrl("en"),
  };
  return locales.map((lang) => ({
    url: localeUrl(lang),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
