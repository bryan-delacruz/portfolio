import { ImageResponse } from "next/og";
import { brandColors } from "@/lib/brand";
import { profile } from "@/lib/content";
import { defaultLocale, isLocale, ui } from "@/lib/i18n";
import { SITE_HOST } from "@/lib/site";

// Imagen que representa el portafolio al compartir el link (LinkedIn, WhatsApp, etc.).
// Sigue la portada de LinkedIn: fondo liso, un solo acento verde y la parte de IA destacada.
export const alt = `${profile.name} — ${ui.en.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = ui[isLocale(lang) ? lang : defaultLocale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: brandColors.foreground,
          fontFamily: "sans-serif",
          background: brandColors.background,
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: brandColors.muted, fontFamily: "monospace" }}>
          {`${SITE_HOST} · ${t.portfolio}`}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: 18, fontSize: 40, lineHeight: 1.2 }}>
            <span>{t.headline.lead}</span>
            <span style={{ marginLeft: 12, color: brandColors.muted }}>{t.headline.tail}</span>
          </div>
          <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: brandColors.brand, fontFamily: "monospace" }}>
            {t.role}
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 24, fontFamily: "monospace" }}>
          <span style={{ color: brandColors.muted }}>{t.stackLine.base}</span>
          <span style={{ marginLeft: 12 }}>{t.stackLine.ai}</span>
        </div>
      </div>
    ),
    size,
  );
}
