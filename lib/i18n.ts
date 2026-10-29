export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Ruta pública de cada idioma: el idioma por defecto vive en la raíz (/), el resto en /{lang}. */
export function localePath(lang: Locale): string {
  return lang === defaultLocale ? "/" : `/${lang}`;
}

/** Texto bilingüe: cada campo traducible lleva su versión en ambos idiomas. */
export type Localized = Record<Locale, string>;

export const ui = {
  es: {
    nav: { experience: "Experiencia", projects: "Proyectos", skills: "Stack", education: "Educación", contact: "Contacto" },
    role: "Software Engineer · Full Stack · AI-Native",
    portfolio: "Portafolio",
    available: "Remoto · UTC-5 · Inglés fluido",
    headline: { lead: "Construyo apps web de producción,", tail: "de punta a punta." },
    stackLine: { base: "React · Next.js · TypeScript · Node.js", ai: "+ agentes de IA · Spec-Driven Development" },
    intro:
      "Software Engineer full stack con más de 4 años desarrollando software. Construyo aplicaciones web en producción con React, Next.js, TypeScript y Node.js, y trabajo con agentes de IA y Spec-Driven Development desde la especificación hasta la validación. Mi trabajo actual llega a marcas globales en 7 países de LATAM, y en paralelo lanzo productos propios de punta a punta.",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
    stats: [
      { value: "4+", label: "años desarrollando software" },
      { value: "7", label: "países de LATAM atendidos" },
      { value: "50%", label: "entregas más rápidas con IA" },
    ],
    experienceTitle: "Experiencia",
    experienceLead: "Del QA y los pagos a apps web de producción a escala.",
    present: "Actualidad",
    projectsTitle: "Proyectos",
    projectsLead:
      "Productos que diseño, construyo y despliego por mi cuenta. Algunos repos son privados; el demo está abierto.",
    moreProjectsTitle: "Más proyectos",
    demo: "Demo",
    code: "Código",
    privateCode: "Código privado",
    skillsTitle: "Stack",
    educationTitle: "Educación",
    rankingCaption: "PUCP en el QS World University Rankings 2027",
    contactTitle: "Hablemos",
    copyEmail: "Copiar",
    copiedEmail: "¡Copiado!",
    contactLead:
      "Busco roles de Software Engineer full stack o frontend, en remoto o híbrido. Escríbeme y respondo rápido.",
    contactForm: {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      messagePlaceholder: "Cuéntame sobre el rol o el proyecto…",
      submit: "Enviar mensaje",
      sending: "Enviando…",
      successTitle: "¡Mensaje enviado!",
      successBody: "Gracias por escribir. Te respondo a tu correo pronto.",
      errors: {
        invalid: "Revisa los campos: nombre, un email válido y un mensaje de al menos 10 caracteres.",
        unavailable: "El formulario no está disponible ahora. Escríbeme directo al correo de abajo.",
        failed: "No se pudo enviar. Inténtalo de nuevo o escríbeme directo al correo de abajo.",
      },
    },
    contactAlt: "O escríbeme directo",
    previewAlt: "Captura de",
    footer: "Hecho con Next.js y desplegado en Vercel.",
    switchLang: "English",
    toggleTheme: "Cambiar tema",
  },
  en: {
    nav: { experience: "Experience", projects: "Projects", skills: "Stack", education: "Education", contact: "Contact" },
    role: "Software Engineer · Full Stack · AI-Native",
    portfolio: "Portfolio",
    available: "Remote · UTC-5 · Fluent English",
    headline: { lead: "I ship production web apps,", tail: "end to end." },
    stackLine: { base: "React · Next.js · TypeScript · Node.js", ai: "+ AI agents · Spec-Driven Development" },
    intro:
      "Full stack Software Engineer with 4+ years in software development. I build production web applications with React, Next.js, TypeScript and Node.js, working with AI agents and Spec-Driven Development from specification to validation. My current work reaches global brands across 7 LATAM countries, and I launch my own products end to end on the side.",
    ctaProjects: "See projects",
    ctaContact: "Get in touch",
    stats: [
      { value: "4+", label: "years in software dev" },
      { value: "7", label: "LATAM countries served" },
      { value: "50%", label: "faster delivery with AI" },
    ],
    experienceTitle: "Experience",
    experienceLead: "From QA and payments to production web apps at scale.",
    present: "Present",
    projectsTitle: "Projects",
    projectsLead:
      "Products I design, build and ship on my own. Some repos are private; the demo is open.",
    moreProjectsTitle: "More projects",
    demo: "Demo",
    code: "Code",
    privateCode: "Private code",
    skillsTitle: "Stack",
    educationTitle: "Education",
    rankingCaption: "PUCP in the QS World University Rankings 2027",
    contactTitle: "Let's talk",
    copyEmail: "Copy",
    copiedEmail: "Copied!",
    contactLead:
      "I'm looking for full stack or frontend Software Engineer roles, remote or hybrid. Send me a message and I'll reply quickly.",
    contactForm: {
      name: "Name",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Tell me about the role or project…",
      submit: "Send message",
      sending: "Sending…",
      successTitle: "Message sent!",
      successBody: "Thanks for reaching out. I'll reply to your email soon.",
      errors: {
        invalid: "Check the fields: a name, a valid email and a message of at least 10 characters.",
        unavailable: "The form isn't available right now. Email me directly below.",
        failed: "Couldn't send it. Try again or email me directly below.",
      },
    },
    contactAlt: "Or email me directly",
    previewAlt: "Screenshot of",
    footer: "Built with Next.js and deployed on Vercel.",
    switchLang: "Español",
    toggleTheme: "Toggle theme",
  },
} as const;

export type UI = (typeof ui)[Locale];
