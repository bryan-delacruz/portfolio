import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale } from "@/lib/i18n";

// El inglés vive en la raíz: / muestra /en sin cambiar la URL y /en redirige a / para no duplicar contenido.
// El español queda en /es, accesible desde el selector del header.
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL(`/${defaultLocale}`, request.url));
  }
  return NextResponse.redirect(new URL("/", request.url), 308);
}

export const config = { matcher: ["/", "/en"] };
