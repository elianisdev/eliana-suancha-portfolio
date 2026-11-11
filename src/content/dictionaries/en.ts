import { enTerminal } from "@/content/terminal/en";
import type { Dictionary } from "@/types/dictionary";
import type { InProgressProjectTranslation, ProjectId, ProjectTranslation } from "@/types/project";

const enProjectItems: Record<ProjectId, ProjectTranslation> = {
  datta: {
    title: "ATS and marketing site · Datta",
    tags: [
      { label: "Professional work", tone: "accent" },
      { label: "Private code", tone: "secondary" },
    ],
    description:
      "Recruiting platform for companies, recruiters and candidates. In the ATS I built 5 complete modules: hiring, emails and templates, automated actions and the freelance recruiter panel. I built the marketing site's landing from start to finish.",
    architecture: "Layered Clean Architecture · Service → Use Case → Mapper",
    highlights: [
      "Full landing with Next.js: product pages, cal.com scheduling and lead capture.",
      "Email composer with dynamic variables and reusable templates.",
      "Gmail integration with Google OAuth.",
      "Design system component adopted by 19 existing components.",
    ],
  },
  konfex: {
    title: "Konfex",
    tags: [
      { label: "Team of 8", tone: "secondary" },
      { label: "Real client", tone: "accent" },
    ],
    description:
      "Management for a clothing workshop: orders, costs, quotes and customer chat over Telegram.",
    architecture:
      "Monorepo · Next.js frontend + Node API with Prisma · real time with Socket.io",
    role: "I redesigned the cost calculator from Figma and wired the chat's read / unread state.",
  },
  identity: {
    title: "Identity verification",
    tags: [
      { label: "Solo", tone: "accent" },
      { label: "Live demo", tone: "secondary" },
    ],
    description:
      "Live capture of an ID card and a selfie in the browser, with an instant verdict.",
    architecture: "Pages · components · hooks · services",
  },
  youCreate: {
    title: "YouCreate",
    tags: [
      { label: "Team of 7", tone: "secondary" },
      { label: "Fintech", tone: "accent" },
    ],
    description:
      "Finances for content creators: income, country taxes and collaborator payouts.",
    architecture: "React SPA + Spring Boot REST API · Axios service layer · Context",
    role: "I built the charts dashboard, the payments section and profile editing.",
  },
  g20: {
    title: "G20 HealthTech",
    tags: [
      { label: "Team of 10", tone: "secondary" },
      { label: "HealthTech", tone: "accent" },
    ],
    description: "Medical appointments and telehealth portal for patients and doctors.",
    architecture: "SPA with route layout · separate frontend and backend",
    role: "I built login, sign-up, the editable patient profile and connected their dashboard to the API.",
  },
  biotasys: {
    title: "Biotasys",
    tags: [
      { label: "Frontend lead", tone: "accent" },
      { label: "HealthTech · AI", tone: "secondary" },
    ],
    description:
      "Platform for nutritionists and labs: microbiota study management and AI-generated clinical reports.",
    architecture:
      "Monorepo · React frontend + NestJS API with TypeORM and PostgreSQL · Python AI engine with Gemini",
    role: "I led the frontend: I wrote the user stories, broke the work into tasks and guided the developers through implementation and code review.",
  },
  kitchenRecipes: {
    title: "Kitchen Recipes",
    tags: [
      { label: "Solo", tone: "accent" },
      { label: "Firebase", tone: "secondary" },
    ],
    description:
      "Recipe manager: create and edit recipes, search, filter by “cooked before” and star ratings.",
    architecture: "Atomic Design · custom hooks for logic · service layer over Firestore",
  },
};

const enInProgressProject: InProgressProjectTranslation = {
  status: "In progress",
  title: "DevFlow AI",
  description:
    "A board for development teams where every task is linked to its PR and AI agents review the code, suggest tests and draft the docs.",
  architecture: "Next.js App Router · Clean Architecture · AI agents as domain ports · MCP server",
  board: [
    {
      title: "To do",
      tasks: [
        { title: "Sign in with GitHub", reference: "DEV-12" },
        { title: "Filters", reference: "DEV-15" },
      ],
    },
    {
      title: "In review",
      tasks: [
        {
          title: "Tasks API",
          reference: "PR #31",
          review: { label: "AI · 2 changes", tone: "secondary" },
        },
      ],
    },
    {
      title: "Done",
      tasks: [
        { title: "Layout", reference: "PR #24", review: { label: "AI · approved", tone: "accent" } },
      ],
    },
  ],
};

export const en: Dictionary = {
  metadata: {
    title: "Eliana Suancha · Frontend Developer",
    description:
      "Semi Senior Frontend Developer. React, Next.js and TypeScript with a focus on accessibility and performance.",
    imageAlt: "Eliana Suancha Guzmán, Frontend Developer. React, Next.js, TypeScript, Clean Architecture and accessibility.",
  },
  languageSwitcher: {
    label: "Change language",
  },
  navigation: {
    label: "Main",
    experience: "Experience",
    projects: "Projects",
    architecture: "Architecture",
    contact: "Contact",
  },
  hero: {
    status: "Semi Senior Frontend · open to jobs and freelance",
    greeting: "Hi, I'm Eliana Suancha Guzmán 👋",
    titleStart: "I build scalable interfaces for",
    titleHighlight: "real products.",
    lead: "Semi Senior Frontend Developer with 5+ years in React, Next.js and TypeScript. I've built for HR tech, banking, automotive and digital services, with Clean Architecture, automated testing and a focus on accessibility and performance. Try the terminal →",
    primaryCta: "See experience →",
  },
  terminal: enTerminal,
  stats: [
    { value: "5+", label: "years of experience" },
    { value: "6", label: "companies and tech communities" },
    { value: "5", label: "modules of an ATS in production" },
    { value: "E2E", label: "unit and end-to-end testing" },
  ],
  about: {
    eyebrow: "About me · How I work",
    titleStart: "I build with",
    titleHighlight: "the next developer in mind.",
    description:
      "I like to understand the problem before writing a line: defining the architecture, caring about interface details and leaving code the team can read, test and improve.",
    location: "Colombia · remote",
    photoAlt: "Portrait of Eliana Suancha Guzmán",
    steps: [
      {
        title: "I understand the problem and design the solution",
        description:
          "I read the requirement and the Figma, and define architecture, types and the API contract before writing code.",
      },
      {
        title: "I build quality in from the start",
        description:
          "Reusable components, strict typing, accessibility and tests as part of the work, not at the end.",
      },
      {
        title: "I optimize my workflow with good tools",
        description:
          "I use Claude Code and Codex for repetitive refactors and tests, and verify every change against real API responses before merging.",
      },
      {
        title: "I share my decisions in code review",
        description:
          "I open clear, easy-to-review PRs, explain the why behind each decision and discuss it with the team. I also review my teammates' PRs.",
      },
    ],
  },
  experience: {
    eyebrow: "Experience",
    title: "Where I've built",
    description:
      "Six teams, four industries and one focus: maintainable interfaces that reach production.",
    sectors: ["HR · ATS", "Banking", "Automotive", "Digital services"],
    items: {
      datta: {
        company: "Datta",
        period: "Mar 2026 – now",
        description:
          "Recruiting platform (ATS) and marketing site. I built 5 complete modules and took part in the migration to Clean Architecture.",
      },
      techCommunities: {
        company: "Tech communities",
        period: "Mar 2025 – Mar 2026",
        description:
          "FooTalent, No Country and iGrowker: business products in Scrum teams of 7 to 10 people, with real-time features and code review.",
      },
      techyWe: {
        company: "TechyWe",
        period: "Dec 2022 – Feb 2025",
        description:
          "Enterprise and mobile apps for banks: document management and digital signatures.",
      },
      casaToro: {
        company: "CasaToro Automotriz",
        period: "Apr 2022 – Jun 2022",
        description: "SPA for dealership appointments, maintenance and sales.",
      },
      softwareCorporation: {
        company: "Software Corporation",
        period: "Jan 2021 – Jan 2022",
        description: "Development and maintenance of web apps with React and REST APIs.",
      },
      tongoDesign: {
        company: "Tongo Design",
        period: "May 2020 – Sep 2020",
        description: "Migrated client apps from Vue.js to React.js, with CI/CD.",
      },
    },
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects and architecture",
    description: "Hover or tap “See architecture” on each project to see how it is built and what I did.",
    showArchitecture: "See architecture ↑",
    hideArchitecture: "Hide ↓",
    moreProjects: "More projects:",
    detailLabels: {
      architecture: "Architecture",
      stack: "Stack",
      quality: "Quality",
    },
    items: enProjectItems,
    inProgress: enInProgressProject,
  },
  howIBuild: {
    eyebrow: "How I build",
    title: "Architecture before components",
    description:
      "Two patterns I use in production: Clean Architecture to organize data and logic, and Atomic Design to build the interface.",
    patterns: {
      cleanArchitecture: {
        eyebrow: "Data and logic",
        title: "Clean Architecture",
        description:
          "I separate business logic from the interface: if the API or the design changes, one side adjusts without breaking the other.",
        layers: [
          { name: "REST API", detail: "typed contract" },
          { name: "Service", detail: "HTTP calls" },
          { name: "Use Case", detail: "business rule" },
          { name: "Mapper", detail: "response → props" },
          { name: "UI", detail: "React component" },
        ],
      },
      atomicDesign: {
        eyebrow: "Interface",
        title: "Atomic Design",
        description:
          "I build the interface from small reusable pieces up to full pages, so everything stays consistent and easy to maintain.",
        layers: [
          { name: "Atoms", detail: "button · input · icon" },
          { name: "Molecules", detail: "search field" },
          { name: "Organisms", detail: "header · project card" },
          { name: "Templates", detail: "dashboard layout" },
          { name: "Pages", detail: "dashboard with real data" },
        ],
      },
    },
    skillGroups: {
      core: "Core",
      stateAndData: "State and data",
      architecture: "Architecture",
      quality: "Quality and performance",
      ai: "AI in development",
      alsoWith: "I also work with",
    },
  },
  certifications: {
    eyebrow: "Learning",
    title: "Certifications",
    description:
      "Six selected credentials: frontend, the professional GitHub workflow and AI-assisted development.",
    viewCredential: "See credential ↗",
    moreCourses: "+20 more courses on LinkedIn ↗",
    educationTitle: "Education",
    items: {
      frontendReact: "React, Tailwind CSS and frontend development",
      reactTypeScript: "Typed components with TypeScript and Material UI",
      githubFoundations: "Official certification · Credly",
      githubActions: "CI/CD and workflow automation",
      claudeCode: "Agent-assisted development: CLAUDE.md, skills, subagents and MCP",
      mcpAdvanced: "MCP clients and servers, STDIO and HTTP transports",
    },
    education: [
      { degree: "Software Engineering", detail: "Universidad Manuela Beltrán · in progress" },
      { degree: "Environmental Engineering", detail: "Universidad ECCI · 2015 – 2020" },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Looking for someone for your team or project?",
    description:
      "I'm open to remote frontend roles and freelance projects. Write to me and let's talk.",
    downloadCv: "Download CV",
  },
  footer: {
    builtWith: "Built with Next.js + Tailwind",
  },
};
