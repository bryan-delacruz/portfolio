import type { CSSProperties } from "react";
import { isBrandIcon, tech, type TechName } from "@/lib/tech";

/** Luminancia relativa (WCAG) de un color hex sin #. */
function luminance(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Color del logo por tema: el de la marca, salvo que se pierda sobre el fondo
 * (marcas negras en oscuro, marcas muy claras en claro); ahí usa el color del texto.
 */
function themeColors(hex: string): CSSProperties {
  const l = luminance(hex);
  return {
    "--logo-light": l > 0.55 ? "currentColor" : `#${hex}`,
    "--logo-dark": l < 0.08 ? "currentColor" : `#${hex}`,
  } as CSSProperties;
}

export function TechLogo({ name, className = "size-3.5" }: { name: TechName; className?: string }) {
  const icon = tech[name];
  if (isBrandIcon(icon)) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        style={themeColors(icon.hex)}
        className={`shrink-0 fill-current text-(--logo-light) dark:text-(--logo-dark) ${className}`}
      >
        <path d={icon.path} />
      </svg>
    );
  }
  const Icon = icon;
  return <Icon aria-hidden className={`shrink-0 text-muted-foreground ${className}`} />;
}
