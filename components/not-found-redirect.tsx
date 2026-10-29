"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { defaultLocale, isLocale, localePath, ui, type Locale } from "@/lib/i18n";

const SECONDS = 5;

// El idioma sale del primer segmento de la URL (/es/... → es); si no es un idioma válido, el idioma por defecto.
function useLocaleFromPath(): Locale {
  return useSyncExternalStore(
    () => () => {},
    () => {
      const segment = window.location.pathname.split("/")[1] ?? "";
      return isLocale(segment) ? segment : defaultLocale;
    },
    () => defaultLocale,
  );
}

export function NotFoundRedirect() {
  const lang = useLocaleFromPath();
  const t = ui[lang].notFound;
  const home = localePath(lang);
  const [seconds, setSeconds] = useState(SECONDS);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (seconds === 0) {
      window.location.replace(home);
      return;
    }
    const id = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [seconds, home]);

  return (
    <main className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-4 sm:px-6">
      <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
        <span className="size-2 rounded-full bg-brand" />
        404
      </p>
      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{t.title}</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground text-pretty">{t.body}</p>
      <p className="mt-8 font-mono text-sm text-brand" aria-live="polite">
        {t.redirect.replace("{s}", String(seconds))}
      </p>
      <a
        href={home}
        className="mt-6 inline-flex h-10 w-fit items-center rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        {t.cta}
      </a>
    </main>
  );
}
