import type { Localized } from "./i18n";

export const profile = {
  name: "Bryan De La Cruz",
  location: "Lima, Perú",
  email: "bryan.delacruza@gmail.com",
  linkedin: "https://www.linkedin.com/in/bryan-delacruza/",
  github: "https://github.com/bryan-delacruz",
  education: {
    es: "Ingeniería Mecatrónica · Pontificia Universidad Católica del Perú",
    en: "B.S. Mechatronics Engineering · Pontificia Universidad Católica del Perú",
  } satisfies Localized,
};

export type Job = {
  company: string;
  role: Localized;
  start: string;
  /** null = puesto actual */
  end: string | null;
  mode: Localized;
  summary?: Localized;
  highlights: Localized[];
  stack?: string[];
};

export const experience: Job[] = [
  {
    company: "Infracommerce Latam",
    role: { es: "Software Engineer", en: "Software Engineer" },
    start: "2023-05",
    end: null,
    mode: { es: "Remoto · Lima", en: "Remote · Lima" },
    summary: {
      es: "Full stack con foco en frontend, construyendo ecommerce para marcas globales en Brasil, Argentina, México, Chile, Colombia, Perú y Paraguay.",
      en: "Full stack with a frontend focus, building ecommerce for global brands in Brazil, Argentina, Mexico, Chile, Colombia, Peru and Paraguay.",
    },
    highlights: [
      {
        es: "Desarrollo storefronts en VTEX FastStore (Next.js, React, TypeScript, GraphQL) para Timex Brasil y Mondaine, del starter base al lanzamiento: overrides de componentes, secciones para el Headless CMS, design tokens y API extensions con resolvers GraphQL.",
        en: "Build VTEX FastStore storefronts (Next.js, React, TypeScript, GraphQL) for Timex Brazil and Mondaine, from starter to launch: component overrides, Headless CMS sections, design tokens and API extensions with GraphQL resolvers.",
      },
      {
        es: "Entregué features y mantenimiento en 27 storefronts B2C y B2B de más de 20 marcas: Reebok, ASICS, Carter's, Herman Miller, Victoria's Secret Beauty, Bath & Body Works, Coca-Cola y American Eagle.",
        en: "Shipped features and maintenance on 27 B2C and B2B storefronts for 20+ brands: Reebok, ASICS, Carter's, Herman Miller, Victoria's Secret Beauty, Bath & Body Works, Coca-Cola and American Eagle.",
      },
      {
        es: "Construí más de 30 custom apps en VTEX IO y FastStore: componentes React, apps de administración con backend Node.js, integraciones REST y GraphQL, Master Data y hooks de VTEX.",
        en: "Built 30+ custom apps on VTEX IO and FastStore: React components, admin apps with Node.js backends, REST and GraphQL integrations, Master Data and VTEX hooks.",
      },
      {
        es: "Desarrollé Mondo Sound desde cero para Argentina, Chile y México, con la mayor parte de la responsabilidad técnica y una arquitectura adaptada a cada mercado.",
        en: "Built Mondo Sound from scratch for Argentina, Chile and Mexico, owning most of the technical work and adapting the architecture to each market.",
      },
      {
        es: "Por delegación del Tech Lead, integro y libero el release de cada sprint: code review, consolidación de ramas, resolución de conflictos y verificación en producción.",
        en: "Delegated by the Tech Lead, I integrate and ship each sprint release: code review, branch consolidation, conflict resolution and production verification.",
      },
      {
        es: "Desarrollo con agentic engineering y Spec-Driven Development: orquesto agentes de IA de la especificación a los tests y el code review, y reduzco el tiempo de desarrollo en al menos 50%.",
        en: "Work with agentic engineering and Spec-Driven Development: I orchestrate AI agents from spec to tests and code review, cutting development time by at least 50%.",
      },
    ],
    stack: ["Next.js", "React", "TypeScript", "GraphQL", "Node.js", "VTEX IO", "FastStore"],
  },
  {
    company: "Izipay",
    role: { es: "Analista Programador", en: "Software Engineer (Analyst Programmer)" },
    start: "2022-07",
    end: "2023-05",
    mode: { es: "Híbrido · Lima", en: "Hybrid · Lima" },
    summary: {
      es: "Desarrollo y soporte sobre la plataforma de procesamiento de pagos con tarjeta y el switch transaccional.",
      en: "Development and support on the card payment processing platform and transaction switch.",
    },
    highlights: [
      {
        es: "Construí una app interna en React para decodificar mensajes ISO 8583. El tiempo de investigación de incidencias bajó de 5 minutos a 1.",
        en: "Built an internal React app to decode ISO 8583 messages. Incident investigation time dropped from 5 minutes to 1.",
      },
      {
        es: "Desarrollé un dashboard de transacciones por hora, tipo de tarjeta y dispositivo POS, con visibilidad que TI no tenía.",
        en: "Built a transactions dashboard by hour, card type and POS device, giving IT visibility it did not have.",
      },
      {
        es: "Implementé los mandatos de Visa y Mastercard en el switch y resolví incidencias de producción con FIS, cruzando logs, campos ISO 8583 y SQL (DB2, SQL Server, Oracle).",
        en: "Implemented Visa and Mastercard mandates on the switch and resolved production incidents with FIS, correlating logs, ISO 8583 fields and SQL (DB2, SQL Server, Oracle).",
      },
    ],
    stack: ["React", "JavaScript", "SQL", "ISO 8583"],
  },
  {
    company: "Vacilandia Park",
    role: { es: "IT Systems Manager", en: "IT Systems Manager" },
    start: "2022-02",
    end: "2022-05",
    mode: { es: "Presencial · Lima", en: "On-site · Lima" },
    highlights: [
      {
        es: "Lideré la implementación del ERP Odoo (inventario, POS, facturación) y lo puse en producción sin incidencias.",
        en: "Led the Odoo ERP rollout (inventory, POS, invoicing) and took it to production with zero incidents.",
      },
    ],
  },
  {
    company: "Henry",
    role: { es: "Full Stack Teaching Assistant", en: "Full Stack Teaching Assistant" },
    start: "2021-12",
    end: "2022-02",
    mode: { es: "Remoto", en: "Remote" },
    highlights: [
      {
        es: "Guié a estudiantes en React y Redux con pair programming, code reviews y office hours.",
        en: "Mentored students in React and Redux through pair programming, code reviews and office hours.",
      },
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: { es: "Quality Assurance Analyst", en: "Quality Assurance Analyst" },
    start: "2020-02",
    end: "2021-10",
    mode: { es: "Remoto · Lima", en: "Remote · Lima" },
    highlights: [
      {
        es: "Pruebas funcionales y de regresión en cada release. Cumplí 9 SLAs y 5 KPIs y recibí un reconocimiento del Jefe de Calidad.",
        en: "Functional and regression testing on every release. Met 9 SLAs and 5 KPIs and was recognized by the QA Lead.",
      },
    ],
  },
];

export type Project = {
  name: string;
  tagline: Localized;
  description: Localized;
  stack: string[];
  demo?: string;
  /** Sin repo = código privado */
  repo?: string;
  year: number;
};

export const featuredProjects: Project[] = [
  {
    name: "Bernie Wallet",
    tagline: { es: "Tus gastos se anotan solos", en: "Your expenses log themselves" },
    description: {
      es: "Lee los correos de tu banco con acceso de solo lectura a Gmail, reconoce cada consumo y lo organiza por categoría. Tokens OAuth cifrados, sincronización automática y PWA instalable.",
      en: "Reads your bank's emails through read-only Gmail access, recognizes each purchase and organizes it by category. Encrypted OAuth tokens, automatic sync and an installable PWA.",
    },
    stack: ["Next.js 16", "Supabase", "Gmail API", "Recharts", "shadcn/ui"],
    demo: "https://bernie-wallet.vercel.app",
    year: 2026,
  },
  {
    name: "Casorio Club",
    tagline: {
      es: "Tu matrimonio civil en un solo lugar",
      en: "Your civil wedding in one place",
    },
    description: {
      es: "Organiza trámites, pendientes, compras y gastos del matrimonio civil junto a tu pareja. Espacio compartido, tableros con drag and drop y autenticación con Clerk.",
      en: "Plan the paperwork, to-dos, purchases and budget of a civil wedding with your partner. Shared workspace, drag-and-drop boards and Clerk authentication.",
    },
    stack: ["Next.js 16", "Clerk", "Neon Postgres", "Drizzle ORM", "dnd-kit"],
    demo: "https://casorio-club.vercel.app",
    year: 2026,
  },
  {
    name: "The Coffee Simulator",
    tagline: {
      es: "Simulador financiero para abrir un local",
      en: "Financial simulator for opening a store",
    },
    description: {
      es: "Decide si un local de franquicia se firma o no. Reproduce el Excel de la marca celda por celda y agrega un modo corregido con IGV, impuesto a la renta y recupero de activos al cierre.",
      en: "Decides whether to sign a franchise location. Replicates the brand's spreadsheet cell by cell and adds a corrected mode with VAT, income tax and asset recovery at closing.",
    },
    stack: ["Next.js 16", "TypeScript", "Base UI", "shadcn/ui"],
    demo: "https://the-coffee-simulator.vercel.app",
    year: 2026,
  },
  {
    name: "Teslo Shop",
    tagline: { es: "Ecommerce full stack", en: "Full stack ecommerce" },
    description: {
      es: "Tienda inspirada en Tesla Shop: catálogo con filtros, carrito, checkout con PayPal, panel de administración de productos, órdenes y usuarios, y subida de imágenes a Cloudinary.",
      en: "Store inspired by the Tesla Shop: filtered catalog, cart, PayPal checkout, admin panel for products, orders and users, and image uploads to Cloudinary.",
    },
    stack: ["Next.js", "Prisma", "PostgreSQL", "NextAuth", "Zustand", "PayPal"],
    demo: "https://teslo-shop-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/next-teslo-shop",
    year: 2025,
  },
  {
    name: "Rent Platform",
    tagline: { es: "SaaS de gestión de alquileres", en: "Property management SaaS" },
    description: {
      es: "Plataforma para propietarios e inquilinos construida sobre un design system propio en Storybook, con componentes accesibles sobre Radix UI y tests con Vitest y Playwright.",
      en: "Platform for landlords and tenants built on its own Storybook design system, with accessible Radix UI components and tests with Vitest and Playwright.",
    },
    stack: ["Next.js 16", "Prisma", "Neon Postgres", "Storybook", "Vitest"],
    year: 2026,
  },
  {
    name: "Spotify Clone",
    tagline: { es: "Streaming de música full stack", en: "Full stack music streaming" },
    description: {
      es: "Subida de canciones y portadas, reproductor propio, canciones favoritas, login con GitHub y suscripción premium con Stripe.",
      en: "Song and cover uploads, custom audio player, liked songs, GitHub login and a premium subscription with Stripe.",
    },
    stack: ["Next.js", "Supabase", "Stripe", "Zustand", "Radix UI"],
    demo: "https://spotify-app-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/next-spotify-app",
    year: 2025,
  },
];

export type MiniProject = {
  name: string;
  description: Localized;
  stack: string[];
  demo?: string;
  repo?: string;
};

export const moreProjects: MiniProject[] = [
  {
    name: "Stash App",
    description: {
      es: "Finanzas personales con login de Google, balance en tiempo real y CRUD de ingresos y gastos.",
      en: "Personal finance with Google login, real-time balance and income and expense CRUD.",
    },
    stack: ["Next.js", "Prisma", "Better Auth"],
    demo: "https://stash-app-mauve.vercel.app",
  },
  {
    name: "Goz Bank",
    description: {
      es: "Billetera digital con pagos por código QR.",
      en: "Digital wallet with QR code payments.",
    },
    stack: ["React", "Vite", "Tailwind"],
    demo: "https://goz-bank.vercel.app",
    repo: "https://github.com/bryan-delacruz/goz-bank",
  },
  {
    name: "PI Food",
    description: {
      es: "App de recetas con filtros combinados, API propia en Express y PostgreSQL con Sequelize.",
      en: "Recipe app with combined filters, its own Express API and PostgreSQL with Sequelize.",
    },
    stack: ["React", "Redux", "Express", "PostgreSQL"],
    demo: "https://pi-food-project-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/React-PI-Food-Project",
  },
  {
    name: "Rick and Morty",
    description: {
      es: "Explorador de personajes sobre la API de Rick and Morty.",
      en: "Character explorer built on the Rick and Morty API.",
    },
    stack: ["React", "Redux"],
    demo: "https://project-rick-and-morty-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/React-Project-Rick-and-Morty",
  },
  {
    name: "Weather App",
    description: {
      es: "Clima por ciudad con la API de OpenWeather.",
      en: "Weather by city with the OpenWeather API.",
    },
    stack: ["React"],
    demo: "https://weather-project-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/React-Weather-App",
  },
  {
    name: "DigitalOcean Landing",
    description: {
      es: "Réplica responsive de la landing de DigitalOcean.",
      en: "Responsive replica of the DigitalOcean landing page.",
    },
    stack: ["React", "Tailwind"],
    demo: "https://digitalocean-web-tailwind-react-bdlc.vercel.app/",
    repo: "https://github.com/bryan-delacruz/digitalocean-website-tailwind_react",
  },
];

export const skills: { group: Localized; items: string[] }[] = [
  {
    group: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui", "Radix UI", "Zustand", "Redux"],
  },
  {
    group: { es: "Backend y datos", en: "Backend & data" },
    items: ["Node.js", "GraphQL", "REST", "PostgreSQL", "Prisma", "Drizzle", "Supabase", "SQL"],
  },
  {
    group: { es: "Ecommerce", en: "Ecommerce" },
    items: ["VTEX IO", "FastStore", "Headless CMS", "Master Data", "Stripe", "PayPal"],
  },
  {
    group: { es: "Calidad y flujo", en: "Quality & workflow" },
    items: ["Storybook", "Vitest", "Jest", "Playwright", "Git", "Vercel", "AI agents · SDD"],
  },
];
