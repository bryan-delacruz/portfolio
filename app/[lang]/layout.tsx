import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { isLocale, locales, ui } from "@/lib/i18n";
import { profile } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const descriptions = {
  es: `Portafolio de ${profile.name}, ${ui.es.role} en Lima. React, Next.js, TypeScript y Node.js. Ecommerce en 7 países de LATAM.`,
  en: `Portfolio of ${profile.name}, ${ui.en.role} in Lima. React, Next.js, TypeScript and Node.js. Ecommerce across 7 LATAM countries.`,
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const title = `${profile.name} — ${ui[lang].role}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: descriptions[lang],
    applicationName: profile.name,
    authors: [{ name: profile.name, url: SITE_URL }],
    creator: profile.name,
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      title,
      description: descriptions[lang],
      url: `/${lang}`,
      siteName: `${profile.name} · ${ui[lang].portfolio}`,
      locale: lang === "es" ? "es_PE" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_PE",
      type: "profile",
      firstName: profile.givenName,
      lastName: profile.familyName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: descriptions[lang],
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
