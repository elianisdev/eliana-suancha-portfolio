import { esTerminal } from "@/content/terminal/es";
import type { ExperienceId, ExperienceTranslation } from "@/types/experience";

export const es = {
  metadata: {
    title: "Eliana Suancha · Frontend Developer",
    description:
      "Frontend Developer Semi Senior. React, Next.js y TypeScript con foco en accesibilidad y rendimiento.",
  },
  languageSwitcher: {
    label: "Cambiar idioma",
  },
  navigation: {
    label: "Principal",
    experience: "Experiencia",
    projects: "Proyectos",
    architecture: "Arquitectura",
    contact: "Contacto",
  },
  hero: {
    status: "Frontend Semi Senior · abierta a empleo y freelance",
    greeting: "Hola, soy Eliana Suancha Guzmán 👋",
    titleStart: "Construyo interfaces escalables para",
    titleHighlight: "productos reales.",
    lead: "Frontend Developer Semi Senior con más de 5 años en React, Next.js y TypeScript. He construido para RR.HH., banca, automotriz y servicios digitales, con Clean Architecture, pruebas automatizadas y foco en accesibilidad y rendimiento. Prueba la terminal →",
    primaryCta: "Ver experiencia →",
  },
  terminal: esTerminal,
  stats: [
    { value: "5+", label: "años de experiencia" },
    { value: "6", label: "empresas y comunidades tech" },
    { value: "5", label: "módulos de un ATS en producción" },
    { value: "E2E", label: "pruebas unitarias y end-to-end" },
  ],
  about: {
    eyebrow: "Sobre mí · Cómo trabajo",
    titleStart: "Construyo pensando en",
    titleHighlight: "quien mantiene el código después.",
    description:
      "Me gusta entender el problema antes de escribir una línea: definir la arquitectura, cuidar los detalles de la interfaz y dejar código que el equipo pueda leer, probar y mejorar.",
    location: "Colombia · remoto o híbrido",
    photoAlt: "Retrato de Eliana Suancha Guzmán",
    steps: [
      {
        title: "Entiendo el problema y diseño la solución",
        description:
          "Leo el requerimiento y el Figma, y defino arquitectura, tipos y contrato con la API antes de escribir código.",
      },
      {
        title: "Construyo con calidad desde el inicio",
        description:
          "Componentes reutilizables, tipado estricto, accesibilidad y pruebas como parte del trabajo, no al final.",
      },
      {
        title: "Optimizo mi flujo con buenas herramientas",
        description:
          "Uso Claude Code y Codex para refactors y pruebas repetitivas, y verifico cada cambio con las respuestas reales de la API antes de integrarlo.",
      },
      {
        title: "Comparto mis decisiones en code review",
        description:
          "Abro PRs claros y fáciles de revisar, explico el porqué de cada decisión y la discuto con el equipo. También reviso los PRs de mis compañeros.",
      },
    ],
  },
  experience: {
    eyebrow: "Experiencia",
    title: "Dónde he construido",
    description:
      "Seis equipos, cuatro sectores y el mismo foco: interfaces mantenibles que llegan a producción.",
    sectors: ["RR.HH. · ATS", "Banca", "Automotriz", "Servicios digitales"],
    items: {
      datta: {
        company: "Datta",
        period: "Mar 2026 – hoy",
        description:
          "Plataforma de reclutamiento (ATS) y sitio comercial. Desarrollé 5 módulos completos y participé en la migración a Clean Architecture.",
      },
      techCommunities: {
        company: "Comunidades tech",
        period: "Mar 2025 – Mar 2026",
        description:
          "FooTalent, No Country e iGrowker: productos de negocio en equipos Scrum de 7 a 10 personas, con tiempo real y code review.",
      },
      techyWe: {
        company: "TechyWe",
        period: "Dic 2022 – Feb 2025",
        description:
          "Aplicaciones empresariales y móviles para entidades bancarias: gestión documental y firma digital.",
      },
      casaToro: {
        company: "CasaToro Automotriz",
        period: "Abr 2022 – Jun 2022",
        description: "SPA de citas, mantenimientos y ventas para concesionarios.",
      },
      softwareCorporation: {
        company: "Software Corporation",
        period: "Ene 2021 – Ene 2022",
        description: "Desarrollo y mantenimiento de aplicaciones web con React y APIs REST.",
      },
      tongoDesign: {
        company: "Tongo Design",
        period: "May 2020 – Sep 2020",
        description: "Migración de aplicaciones de clientes de Vue.js a React.js, con CI/CD.",
      },
    } satisfies Record<ExperienceId, ExperienceTranslation>,
  },
};
