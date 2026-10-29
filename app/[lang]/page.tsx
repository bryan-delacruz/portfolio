import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { profile } from "@/lib/content";
import { isLocale, ui } from "@/lib/i18n";
import { profilePageJsonLd } from "@/lib/seo";

export const dynamicParams = false;

// Orden de las secciones numeradas: el índice ("01", "02"…) sale de la posición.
const sections = [Experience, Projects, Skills, Education, Contact];

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = ui[lang];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd(lang)).replace(/</g, "\\u003c") }}
      />
      <SiteHeader lang={lang} t={t} />

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <Hero lang={lang} />
        {sections.map((SectionContent, i) => (
          <SectionContent key={i} lang={lang} index={String(i + 1).padStart(2, "0")} />
        ))}
      </main>

      <footer className="mx-auto max-w-5xl border-t border-border px-4 py-8 font-mono text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {profile.name} · {t.footer}
      </footer>
    </>
  );
}
