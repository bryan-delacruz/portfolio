"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import type { Locale, UI } from "@/lib/i18n";

export function SiteHeader({ lang, t }: { lang: Locale; t: UI }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
        <Link href={`/${lang}`} className="font-mono text-sm font-semibold tracking-tight">
          bdlc<span className="text-brand">.</span>dev
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
            href={`/${other}`}
            hrefLang={other}
            className="rounded-md px-2.5 py-1.5 font-mono text-xs uppercase text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label={t.switchLang}
          >
            {other}
          </Link>
          <button
            type="button"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label={t.toggleTheme}
          >
            {mounted && resolvedTheme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
