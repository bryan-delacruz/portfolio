import { localePath, type Locale } from "@/lib/i18n";

/**
 * URL base pública del portafolio, sin barra final. Única fuente para metadata, sitemap y robots.
 * Prioridad: NEXT_PUBLIC_SITE_URL → dominio de producción en Vercel → URL del preview → localhost.
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl().replace(/\/+$/, "");

/** Host sin protocolo, para mostrarlo como texto (p. ej. en la imagen OG). */
export const SITE_HOST = new URL(SITE_URL).host;

/** URL absoluta de cada idioma; la raíz va sin barra final para coincidir con el canonical de Next. */
export function localeUrl(lang: Locale): string {
  const path = localePath(lang);
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
