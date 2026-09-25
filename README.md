# Portfolio | Bryan De La Cruz · Software Engineer

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

**Live:** [portfolio-bdlc.vercel.app](https://portfolio-bdlc.vercel.app/)

My personal portfolio: experience, featured projects and stack. Bilingual (Spanish / English), light and dark theme, and fully server-rendered with the Next.js App Router.

## Features

- **Bilingual routing** with a `[lang]` dynamic segment (`/es`, `/en`), statically generated for each locale.
- **Automatic language detection:** middleware reads the `Accept-Language` header and redirects `/` to the best matching locale.
- **Typed content layer:** experience, projects and skills live in `lib/content.ts`. Every translatable field is a `Localized` record, so a missing translation is a type error.
- **Light / dark theme** with `next-themes`, without hydration flicker.
- **Responsive layout** built with Tailwind CSS v4 and `lucide-react` icons.

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, `class-variance-authority`, `tailwind-merge` |
| Theming | `next-themes` |
| Deploy | Vercel |

## Project structure

```
app/[lang]/       Layout and page for each locale
components/       Site header and icons
lib/content.ts    Profile, experience, projects and skills
lib/i18n.ts       Locales and UI strings
middleware.ts     Locale detection and redirect
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You are redirected to `/es` or `/en` based on your browser language.

## Contact

- LinkedIn: [bryan-delacruza](https://www.linkedin.com/in/bryan-delacruza/)
- Email: bryan.delacruza@gmail.com
