import { ImageResponse } from "next/og";
import { profile } from "@/lib/content";
import { isLocale, ui } from "@/lib/i18n";
import { SITE_HOST } from "@/lib/site";

// Imagen que representa el portafolio al compartir el link (LinkedIn, WhatsApp, etc.).
export const alt = `${profile.name} — ${ui.es.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const taglines = {
  es: "Ecommerce para marcas globales en 7 países de LATAM.",
  en: "Ecommerce for global brands across 7 LATAM countries.",
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "es";
  const t = ui[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          color: "#fafaf9",
          fontFamily: "sans-serif",
          background: "linear-gradient(150deg, #292524 0%, #1c1917 50%, #0c0a09 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "rgba(250,250,249,0.7)", fontFamily: "monospace" }}>
          {`${SITE_HOST} · ${t.portfolio}`}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 80, fontWeight: 600, lineHeight: 1.02, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 38, color: "rgba(250,250,249,0.9)" }}>{t.role}</div>
          <div style={{ fontSize: 30, color: "rgba(250,250,249,0.72)", maxWidth: 900 }}>{taglines[locale]}</div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "rgba(250,250,249,0.7)", fontFamily: "monospace" }}>
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    size,
  );
}
