import { esTerminal } from "@/content/terminal/es";
import type { ExperienceId, ExperienceTranslation } from "@/types/experience";
import type { ProjectId, ProjectTranslation } from "@/types/project";

const esProjectItems: Record<ProjectId, ProjectTranslation> = {
  datta: {
    title: "ATS y sitio comercial · Datta",
    tags: [
      { label: "Experiencia profesional", tone: "accent" },
      { label: "Código privado", tone: "secondary" },
    ],
    description:
      "Plataforma de reclutamiento para empresas, reclutadores y candidatos. En el ATS construí 5 módulos completos: contrataciones, correos y plantillas, acciones automatizadas y el panel de reclutadores freelance. La landing del sitio comercial la desarrollé de principio a fin.",
    architecture: "Clean Architecture por capas · Service → Use Case → Mapper",
    highlights: [
      "Landing completa con Next.js: páginas de producto, agendamiento con cal.com y captura de leads.",
      "Compositor de correos con variables dinámicas y plantillas reutilizables.",
      "Integración de Gmail con Google OAuth.",
      "Componente del design system adoptado en 19 componentes existentes.",
    ],
  },
  konfex: {
    title: "Konfex",
    tags: [
      { label: "Equipo de 8", tone: "secondary" },
      { label: "Cliente real", tone: "accent" },
    ],
    description:
      "Gestión para un taller de indumentaria: pedidos, costos, presupuestos y chat con clientes por Telegram.",
    architecture:
      "Monorepo · frontend Next.js + API Node con Prisma · tiempo real con Socket.io",
    role: "Rediseñé la calculadora de costos desde Figma e integré el estado leído / no leído del chat.",
  },
  identity: {
    title: "Validación de identidad",
    tags: [
      { label: "Individual", tone: "accent" },
      { label: "Demo en vivo", tone: "secondary" },
    ],
    description:
      "Captura en vivo de cédula y selfie en el navegador, con veredicto al instante.",
    architecture: "Páginas · componentes · hooks · servicios",
  },
  youCreate: {
    title: "YouCreate",
    tags: [
      { label: "Equipo de 7", tone: "secondary" },
      { label: "Fintech", tone: "accent" },
    ],
    description:
      "Finanzas para creadores de contenido: ingresos, impuestos por país y pagos a colaboradores.",
    architecture: "SPA React + API REST Spring Boot · capa de servicios con Axios · Context",
    role: "Construí el dashboard con gráficas, la sección de pagos y la edición de perfil.",
  },
  g20: {
    title: "G20 HealthTech",
    tags: [
      { label: "Equipo de 10", tone: "secondary" },
      { label: "HealthTech", tone: "accent" },
    ],
    description: "Portal de citas médicas y teleasistencia para pacientes y médicos.",
    architecture: "SPA con layout de rutas · frontend y backend separados",
    role: "Hice login, registro, perfil editable del paciente y la conexión de su dashboard con la API.",
  },
  biotasys: {
    title: "Biotasys",
    tags: [
      { label: "Líder frontend", tone: "accent" },
      { label: "HealthTech · IA", tone: "secondary" },
    ],
    description:
      "Plataforma para nutricionistas y laboratorios: gestión de estudios de microbiota e informes clínicos generados con IA.",
    architecture:
      "Monorepo · frontend React + API NestJS con TypeORM y PostgreSQL · motor de IA en Python con Gemini",
    role: "Lideré el frontend: escribí las historias de usuario, dividí el trabajo en tareas y guié a los desarrolladores en la implementación y la revisión del código.",
  },
  kitchenRecipes: {
    title: "Kitchen Recipes",
    tags: [
      { label: "Individual", tone: "accent" },
      { label: "Firebase", tone: "secondary" },
    ],
    description:
      "Gestor de recetas: crear y editar recetas, búsqueda, filtro por «cocinada antes» y calificación con estrellas.",
    architecture: "Atomic Design · hooks personalizados para la lógica · capa de servicios sobre Firestore",
  },
};

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
  projects: {
    eyebrow: "Trabajo seleccionado",
    title: "Proyectos y arquitectura",
    description: "Pasa el cursor o toca «Ver arquitectura» en cada proyecto para ver cómo está construido y qué hice yo.",
    showArchitecture: "Ver arquitectura ↑",
    hideArchitecture: "Ocultar ↓",
    moreProjects: "Más proyectos:",
    detailLabels: {
      architecture: "Arquitectura",
      stack: "Stack",
      quality: "Calidad",
    },
    items: esProjectItems,
  },
};
