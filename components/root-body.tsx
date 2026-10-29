import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** <body> con fuentes y tema, compartido por el layout de cada idioma y el 404 global (ambos renderizan su propio <html>). */
export function RootBody({ children }: { children: React.ReactNode }) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </body>
  );
}
