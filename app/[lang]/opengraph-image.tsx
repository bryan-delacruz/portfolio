import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n";
import { SITE_HOST } from "@/lib/site";

// Imagen que representa el portafolio al compartir el link (LinkedIn, WhatsApp, etc.).
export const alt = "Bryan De La Cruz — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const copy = {
  es: {
    role: "Software Engineer · Full Stack · AI-Native",
    tagline: "Ecommerce para marcas globales en 7 países de LATAM.",
  },
  en: {
    role: "Software Engineer · Full Stack · AI-Native",
    tagline: "Ecommerce for global brands across 7 LATAM countries.",
  },
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const text = copy[isLocale(lang) ? lang : "es"];

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
          {SITE_HOST}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 600, lineHeight: 1.02, letterSpacing: -2 }}>
            Bryan De La Cruz
          </div>
          <div style={{ fontSize: 38, color: "rgba(250,250,249,0.9)" }}>{text.role}</div>
          <div style={{ fontSize: 30, color: "rgba(250,250,249,0.72)", maxWidth: 900 }}>{text.tagline}</div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "rgba(250,250,249,0.7)", fontFamily: "monospace" }}>
          React · Next.js · TypeScript · Node.js
        </div>
      </div>
    ),
    size,
  );
}
