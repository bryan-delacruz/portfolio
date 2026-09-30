"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { localePath, type Locale } from "@/lib/i18n";

const SECONDS = 5;

const copy = {
  en: {
    title: "Page not found",
    body: "The page you're looking for doesn't exist or was moved.",
    redirect: (s: number) => `Redirecting to the home page in ${s}s…`,
    cta: "Go home now",
  },
  es: {
    title: "Página no encontrada",
    body: "La página que buscas no existe o se movió.",
    redirect: (s: number) => `Te llevo a la página de inicio en ${s}s…`,
    cta: "Ir al inicio",
  },
} satisfies Record<Locale, unknown>;

// El idioma sale de la URL: /es/... en español, todo lo demás en inglés (idioma por defecto).
function useLocaleFromPath(): Locale {
  return useSyncExternalStore(
    () => () => {},
    () => (/^\/es(\/|$)/.test(window.location.pathname) ? "es" : "en"),
    () => "en",
  );
}

export function NotFoundRedirect() {
  const lang = useLocaleFromPath();
  const t = copy[lang];
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
        {t.redirect(seconds)}
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
