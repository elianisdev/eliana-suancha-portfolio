import { enTerminal } from "@/content/terminal/en";
import type { Dictionary } from "@/types/dictionary";

export const en: Dictionary = {
  metadata: {
    title: "Eliana Suancha · Frontend Developer",
    description:
      "Semi Senior Frontend Developer. React, Next.js and TypeScript with a focus on accessibility and performance.",
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
    location: "Colombia · remote or hybrid",
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
};
