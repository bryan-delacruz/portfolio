import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { localePath, type Locale, type UI } from "@/lib/i18n";

export function SiteHeader({ lang, t }: { lang: Locale; t: UI }) {
  const other: Locale = lang === "es" ? "en" : "es";
  const links = [
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={localePath(lang)} className="font-mono text-sm font-semibold tracking-tight">
          bryandelacruz<span className="text-brand">.</span>dev
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link
            href={localePath(other)}
            hrefLang={other}
            className="rounded-md px-2.5 py-1.5 font-mono text-xs uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label={t.switchLang}
          >
            {other}
          </Link>
          <ThemeToggle label={t.toggleTheme} />
        </div>
      </div>
    </header>
  );
}
