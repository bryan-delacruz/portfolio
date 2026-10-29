import type { Metadata } from "next";
import { NotFoundRedirect } from "@/components/not-found-redirect";
import { RootBody } from "@/components/root-body";
import { profile } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  title: `404 — ${profile.name}`,
  robots: { index: false, follow: true },
};

// 404 para cualquier URL sin ruta (incluye idiomas inexistentes y /es/<lo-que-sea>).
export default function GlobalNotFound() {
  return (
    <html lang="en" suppressHydrationWarning>
      <RootBody>
        <NotFoundRedirect />
      </RootBody>
    </html>
  );
}
