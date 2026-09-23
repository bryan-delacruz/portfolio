import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  const accept = request.headers.get("accept-language") ?? "";
  const preferred = accept
    .split(",")
    .map((part) => part.split(";")[0].trim().slice(0, 2).toLowerCase())
    .find((code) => (locales as readonly string[]).includes(code));

  return NextResponse.redirect(new URL(`/${preferred ?? defaultLocale}`, request.url));
}

export const config = { matcher: "/" };
