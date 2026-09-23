export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Texto bilingüe: cada campo traducible lleva su versión en ambos idiomas. */
export type Localized = Record<Locale, string>;

export const ui = {
  es: {
    nav: { experience: "Experiencia", projects: "Proyectos", skills: "Stack", contact: "Contacto" },
    role: "Software Engineer · Full Stack",
    available: "Abierto a nuevas oportunidades · remoto o híbrido",
    intro:
      "Construyo storefronts y aplicaciones web con React, Next.js y TypeScript. Llevo más de 3 años entregando ecommerce para marcas globales en 7 países de LATAM, y en paralelo lanzo productos propios de punta a punta.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    stats: [
      { value: "3+", label: "años construyendo ecommerce" },
      { value: "27", label: "storefronts B2C y B2B" },
      { value: "30+", label: "custom apps en VTEX IO y FastStore" },
      { value: "7", label: "países de LATAM" },
    ],
    experienceTitle: "Experiencia",
    experienceLead: "Del QA y los pagos al ecommerce a escala.",
    present: "Actualidad",
    projectsTitle: "Proyectos",
    projectsLead:
      "Productos que diseño, construyo y despliego por mi cuenta. Algunos repos son privados; el demo está abierto.",
    moreProjectsTitle: "Más proyectos",
    demo: "Demo",
    code: "Código",
    privateCode: "Código privado",
    skillsTitle: "Stack",
    contactTitle: "Hablemos",
    contactLead:
      "Busco roles de Software Engineer full stack o frontend, en remoto o híbrido. Escríbeme y respondo rápido.",
    footer: "Hecho con Next.js y desplegado en Vercel.",
    switchLang: "English",
    toggleTheme: "Cambiar tema",
  },
  en: {
    nav: { experience: "Experience", projects: "Projects", skills: "Stack", contact: "Contact" },
    role: "Software Engineer · Full Stack",
    available: "Open to new opportunities · remote or hybrid",
    intro:
      "I build storefronts and web apps with React, Next.js and TypeScript. For 3+ years I have shipped ecommerce for global brands across 7 LATAM countries, and I launch my own products end to end on the side.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    stats: [
      { value: "3+", label: "years building ecommerce" },
      { value: "27", label: "B2C and B2B storefronts" },
      { value: "30+", label: "custom apps on VTEX IO and FastStore" },
      { value: "7", label: "LATAM countries" },
    ],
    experienceTitle: "Experience",
    experienceLead: "From QA and payments to ecommerce at scale.",
    present: "Present",
    projectsTitle: "Projects",
    projectsLead:
      "Products I design, build and ship on my own. Some repos are private; the demo is open.",
    moreProjectsTitle: "More projects",
    demo: "Demo",
    code: "Code",
    privateCode: "Private code",
    skillsTitle: "Stack",
    contactTitle: "Let's talk",
    contactLead:
      "I'm looking for full stack or frontend Software Engineer roles, remote or hybrid. Send me a message and I'll reply quickly.",
    footer: "Built with Next.js and deployed on Vercel.",
    switchLang: "Español",
    toggleTheme: "Toggle theme",
  },
} as const;

export type UI = (typeof ui)[Locale];
