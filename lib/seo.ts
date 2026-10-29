import { experience, profile } from "@/lib/content";
import { ui, type Locale } from "@/lib/i18n";
import { localeUrl, SITE_URL } from "@/lib/site";

/**
 * Datos estructurados: página de perfil (el portafolio) cuya entidad principal es la persona,
 * para que Google asocie el nombre completo con el sitio, el rol y los perfiles.
 * Todo sale de lib/content.ts: al cambiar de trabajo o de estudios el JSON-LD se actualiza solo.
 */
export function profilePageJsonLd(lang: Locale) {
  const t = ui[lang];
  const currentJob = experience.find((job) => job.end === null);

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: profile.name,
    alternateName: profile.shortName,
    givenName: profile.givenName,
    familyName: profile.familyName,
    jobTitle: profile.jobTitle,
    description: t.role,
    url: SITE_URL,
    image: `${SITE_URL}/${lang}/opengraph-image`,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.address.locality,
      addressCountry: profile.address.country,
    },
    ...(currentJob && { worksFor: { "@type": "Organization", name: currentJob.company } }),
    alumniOf: { "@type": "CollegeOrUniversity", name: profile.education.school },
    knowsLanguage: ["es", "en"],
    knowsAbout: profile.knowsAbout,
    sameAs: [profile.linkedin, profile.github],
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${profile.name} · ${t.portfolio}`,
    headline: `${profile.name} — ${t.role}`,
    url: localeUrl(lang),
    inLanguage: lang,
    mainEntity: person,
  };
}
