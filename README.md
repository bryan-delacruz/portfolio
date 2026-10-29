# Portfolio | Bryan De La Cruz Amar · Software Engineer

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Live:** [bryandelacruz.dev](https://bryandelacruz.dev)

My personal portfolio: experience, featured projects and stack. Bilingual (Spanish / English), light and dark theme, and fully server-rendered with the Next.js App Router.

## Features

- **Bilingual routing** with a `[lang]` dynamic segment, statically generated for each locale. English is the default and lives at the root (`/`); Spanish lives at `/es`.
- **Root-level default locale:** the proxy rewrites `/` to the English page without changing the URL and redirects `/en` to `/` (308), so each language has a single canonical URL.
- **Typed content layer:** experience, projects and skills live in `lib/content.ts`. Every translatable field is a `Localized` record, so a missing translation is a type error.
- **Project thumbnails** captured from each live demo, shown in a browser frame.
- **Official tech logos** (Simple Icons SVGs) that adapt to light and dark themes. Stack tags are typed against a registry in `lib/tech.ts`, so a tag without a logo is a type error.
- **Contact form** powered by a Server Action and [Resend](https://resend.com), protected by a honeypot, a server-signed timing token, an in-app rate limit and a Vercel Firewall rate-limit rule.
- **SEO:** per-locale metadata, hreflang, sitemap, generated Open Graph images and ProfilePage/Person JSON-LD derived from the content.
- **Light / dark theme** with `next-themes`, without hydration flicker.
- **Responsive layout** built with Tailwind CSS v4 and `lucide-react` icons.

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, `class-variance-authority`, `tailwind-merge` |
| Theming | `next-themes` |
| Icons | `lucide-react`, `simple-icons` |
| Email | Resend |
| Deploy | Vercel |

## Project structure

```
app/[lang]/              Layout, page, OG image and the contact Server Action for each locale
app/global-not-found.tsx 404 for unmatched URLs, with a 5s redirect home
components/sections/     One component per page section (hero, experience, projects…)
components/ui/           Shared building blocks (Section, Tags, TextLink, Thumbnail)
lib/content.ts           Profile, experience, projects and skills
lib/i18n.ts              Locales and UI strings
lib/tech.ts              Tech registry: tag label → official logo
lib/seo.ts               JSON-LD built from the content
lib/contact-guard.ts     Anti-spam token and rate limit for the contact form
public/projects/         Demo screenshots
proxy.ts                 Serves English at / and redirects /en → /
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the English version or [http://localhost:3000/es](http://localhost:3000/es) for Spanish.

To make the contact form send emails locally, copy `.env.example` to `.env.local` and set `RESEND_API_KEY` (see the comments there for the optional variables).

## Contact

- LinkedIn: [bryan-delacruza](https://www.linkedin.com/in/bryan-delacruza/)
- Email: bryan.delacruza@gmail.com
