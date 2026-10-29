# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Single-page bilingual (English/Spanish) personal portfolio for Bryan De La Cruz Amar, deployed on Vercel at bryandelacruz.dev. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4.

## Commands

```bash
npm run dev     # dev server on http://localhost:3000 (Spanish at /es)
npm run build   # production build; also the main type check
npm run lint    # ESLint 9 flat config (next core-web-vitals + typescript)
```

There is no test suite. Verify changes with `npm run build`, `npm run lint` and the dev server (`.claude/launch.json` defines the `portfolio` preview config).

## Architecture

**Routing and locales.** The root layout lives in `app/[lang]/layout.tsx` (there is no `app/layout.tsx`); `generateStaticParams` prerenders `en` and `es`, and `page.tsx` sets `dynamicParams = false`. English is the default locale and is served from the root:
- `proxy.ts` (Next 16's replacement for `middleware.ts`) rewrites `/` → `/en` without changing the URL and 308-redirects `/en` → `/`. Its matcher is only `["/", "/en"]`.
- Always build locale links with `localePath()` / `localeUrl()` (`lib/i18n.ts`, `lib/site.ts`), never hardcode `/en`.
- Because the root layout is under `[lang]`, unmatched URLs are handled by `app/global-not-found.tsx` (enabled via `experimental.globalNotFound` in `next.config.ts`). It renders its own `<html>`, reads the locale from `window.location`, and redirects home after 5s (`components/not-found-redirect.tsx`).

**Content vs. UI strings.**
- `lib/content.ts`: profile, experience, projects, skills, education. Every translatable field is `Localized` (`Record<Locale, string>`), so a missing translation is a type error. Edit content here, not in components.
- `lib/i18n.ts`: `ui` object with all interface strings per locale; `es` and `en` must keep the same shape.
- `app/[lang]/page.tsx` renders the whole page from these two sources and also emits the Person JSON-LD (keep it in sync with `profile`/experience when those change).

**Site URL / SEO.** `lib/site.ts` resolves `SITE_URL` once (`NEXT_PUBLIC_SITE_URL` → Vercel production domain → preview URL → localhost) and is the single source for `metadataBase`, canonical/hreflang alternates, Open Graph, `app/sitemap.ts` and `app/robots.ts`. `NEXT_PUBLIC_SITE_URL` is inlined at build time (see `.env.example`). `app/[lang]/opengraph-image.tsx` generates the OG image per locale with hardcoded hex colors that mirror the theme.

**Projects and stack visuals.** Each project in `lib/content.ts` has an `image` (`/projects/<slug>.webp` in `public/`, 1200×750 screenshots of the live demo). `components/tech-logo.tsx` maps tag names (version suffix stripped, e.g. "Next.js 16" → "next.js") to official Simple Icons SVGs; brand color is used per theme unless it would vanish on that background (then `currentColor`). Tech without a brand logo gets a lucide icon. New stack tags need an entry there to get a logo.

**Contact form.** `components/contact-form.tsx` (client, `useActionState`) → server action `app/[lang]/actions.ts` → Resend. Spam guard is a honeypot plus a 3s minimum fill time. Env: `RESEND_API_KEY` (without it the form shows an "unavailable" error and the mailto links remain), optional `CONTACT_FROM_EMAIL` / `CONTACT_TO_EMAIL`. Without a verified domain Resend only sends from `onboarding@resend.dev` to the account owner's address.

**Styling.** Tailwind v4 with tokens defined as CSS variables in `app/globals.css` (shadcn "new-york"/stone base, plus a custom `--brand` green accent → `text-brand`/`bg-brand`). Dark theme is the default via `next-themes` (`attribute="class"`, `enableSystem={false}`). Fonts: Geist and Geist Mono. Icons: `lucide-react`, plus brand icons in `components/icons.tsx`. Use `cn()` from `lib/utils.ts` for class merging.

## Conventions

- Code comments are written in Spanish; match that.
- Commits use Conventional Commits (`feat:`, `fix:`, `chore:`, `feat(seo):`), merged via PRs from `feat/*`, `fix/*`, `chore/*` branches.
- Portfolio copy should stay consistent with the user's CV, LinkedIn profile and banner messaging.

## Note on README

`README.md` is partly stale: it says Next.js 15 and `middleware.ts`; the project is on Next.js 16 and uses `proxy.ts`.
