import type { CSSProperties } from "react";
import {
  siBaseui,
  siClaude,
  siClerk,
  siDrizzle,
  siExpress,
  siGit,
  siGmail,
  siGraphql,
  siJavascript,
  siModelcontextprotocol,
  siNeon,
  siNextdotjs,
  siNodedotjs,
  siPaypal,
  siPostgresql,
  siPrisma,
  siRadixui,
  siReact,
  siRedux,
  siSequelize,
  siShadcnui,
  siStorybook,
  siStripe,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siVtex,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import {
  Bot,
  Database,
  FileCode2,
  GitBranch,
  LayoutTemplate,
  Sparkles,
  Table2,
  TestTubeDiagonal,
  Webhook,
  type LucideIcon,
} from "lucide-react";

// Logos oficiales de Simple Icons (SVG de un solo color). Las tecnologías sin logo usan un ícono genérico de lucide.
const brands: Record<string, SimpleIcon> = {
  "base ui": siBaseui,
  "claude code": siClaude,
  clerk: siClerk,
  drizzle: siDrizzle,
  "drizzle orm": siDrizzle,
  express: siExpress,
  git: siGit,
  "gmail api": siGmail,
  graphql: siGraphql,
  javascript: siJavascript,
  mcp: siModelcontextprotocol,
  "neon postgres": siNeon,
  "next.js": siNextdotjs,
  "node.js": siNodedotjs,
  paypal: siPaypal,
  postgresql: siPostgresql,
  prisma: siPrisma,
  "radix ui": siRadixui,
  react: siReact,
  redux: siRedux,
  sequelize: siSequelize,
  "shadcn/ui": siShadcnui,
  storybook: siStorybook,
  stripe: siStripe,
  supabase: siSupabase,
  tailwind: siTailwindcss,
  "tailwind css": siTailwindcss,
  typescript: siTypescript,
  vercel: siVercel,
  vite: siVite,
  vitest: siVitest,
  "vtex io": siVtex,
  faststore: siVtex,
  zod: siZod,
};

const generic: Record<string, LucideIcon> = {
  rest: Webhook,
  sql: Database,
  "master data": Table2,
  "headless cms": LayoutTemplate,
  "ci/cd": GitBranch,
  playwright: TestTubeDiagonal,
  skills: Sparkles,
  subagents: Bot,
  "spec-driven development": FileCode2,
};

/** "Next.js 16" → "next.js": la versión no cambia el logo. */
function key(name: string) {
  return name.toLowerCase().replace(/\s+\d+(\.\d+)*$/, "");
}

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

export function TechLogo({ name, className = "size-3.5" }: { name: string; className?: string }) {
  const brand = brands[key(name)];
  if (brand) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        style={themeColors(brand.hex)}
        className={`shrink-0 fill-current text-(--logo-light) dark:text-(--logo-dark) ${className}`}
      >
        <path d={brand.path} />
      </svg>
    );
  }
  const Icon = generic[key(name)];
  return Icon ? <Icon aria-hidden className={`shrink-0 text-muted-foreground ${className}`} /> : null;
}
