import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { isLocale, locales } from "@/lib/i18n";
import { profile } from "@/lib/content";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://portfolio-bdlc.vercel.app";

const descriptions = {
  es: "Software Engineer full stack en Lima. React, Next.js, TypeScript y Node.js. Ecommerce para marcas globales en 7 países de LATAM.",
  en: "Full stack Software Engineer in Lima. React, Next.js, TypeScript and Node.js. Ecommerce for global brands across 7 LATAM countries.",
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

  const title = `${profile.name} — Software Engineer`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: descriptions[lang],
    alternates: {
      canonical: `/${lang}`,
      languages: { es: "/es", en: "/en" },
    },
    openGraph: {
      title,
      description: descriptions[lang],
      url: `/${lang}`,
      locale: lang === "es" ? "es_PE" : "en_US",
      type: "website",
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
