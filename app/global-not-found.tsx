import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { NotFoundRedirect } from "@/components/not-found-redirect";
import { profile } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `404 — ${profile.name}`,
  robots: { index: false, follow: true },
};

// 404 para cualquier URL sin ruta (incluye idiomas inexistentes y /es/<lo-que-sea>).
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <NotFoundRedirect />
        </ThemeProvider>
      </body>
    </html>
  );
}
