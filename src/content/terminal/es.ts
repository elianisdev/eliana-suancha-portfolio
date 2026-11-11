import { profileLinks, sectionIds } from "@/content/profile";
import { commandRow, labeledRow, linkRow } from "@/content/terminal/lines";
import type { TerminalContent } from "@/types/terminal";

export const esTerminal: TerminalContent = {
  title: "Terminal interactiva",
  inputLabel: "Escribe un comando",
  placeholder: "escribe un comando o toca uno ↓",
  suggestionsLabel: "prueba:",
  suggestions: ["whoami", "experiencia", "stack", "ia", "contacto"],
  unknownCommand: "comando no encontrado: ",
  outputs: {
    help: [
      [{ text: "Comandos disponibles:" }],
      commandRow("whoami", "quién soy"),
      commandRow("experiencia", "dónde he trabajado"),
      commandRow("stack", "con qué construyo"),
      commandRow("ia", "cómo trabajo con agentes"),
      commandRow("proyectos", "lo que he construido"),
      commandRow("contacto", "cómo encontrarme"),
      commandRow("clear", "limpiar la terminal"),
    ],
    whoami: [
      [{ text: "Eliana Suancha Guzmán", tone: "accent" }],
      [{ text: "Frontend Developer Semi Senior · Colombia" }],
      [{ text: "5+ años · React · Next.js · TypeScript", tone: "comment" }],
      [
        { text: "→ escribe ", tone: "secondary" },
        { text: "help", tone: "accent" },
        { text: " para ver más", tone: "secondary" },
      ],
    ],
    experience: [
      labeledRow("2026–hoy", "Datta · ATS de reclutamiento", "secondary", 10),
      labeledRow("2025–26", "FooTalent · No Country · iGrowker", "secondary", 10),
      labeledRow("2022–25", "TechyWe · banca y firma digital", "secondary", 10),
      labeledRow("2020–22", "CasaToro · Software Corp · Tongo", "secondary", 10),
      linkRow("→ ver experiencia completa", `#${sectionIds.experience}`),
    ],
    stack: [
      labeledRow("core", "React · Next.js · TypeScript · Tailwind", "attribute", 7),
      labeledRow("data", "TanStack Query · Zustand · RHF + Zod", "attribute", 7),
      labeledRow("arch", "Clean Architecture · Atomic Design", "attribute", 7),
      labeledRow("tests", "Jest · RTL · Playwright · Cypress", "attribute", 7),
    ],
    ai: [
      [{ text: "La IA es una herramienta más de mi flujo.", tone: "accent" }],
      [{ text: "La uso para refactors y pruebas repetitivas," }],
      [{ text: "y reviso cada cambio antes de abrir el PR." }],
      [{ text: "Claude Code · Codex · MCP · subagentes", tone: "comment" }],
      linkRow("→ cómo trabajo", `#${sectionIds.about}`),
    ],
    projects: [
      [{ text: "ATS Datta · Konfex · Validación de identidad" }],
      [{ text: "YouCreate · G20 HealthTech · Biotasys" }],
      [{ text: "Kitchen Recipes" }],
      [
        { text: "DevFlow AI ", tone: "secondary" },
        { text: "(en construcción)", tone: "comment" },
      ],
      linkRow("→ ver proyectos", `#${sectionIds.projects}`),
    ],
    contact: [
      [
        { text: "email".padEnd(9), tone: "attribute" },
        { text: profileLinks.email, href: `mailto:${profileLinks.email}` },
      ],
      [
        { text: "linkedin".padEnd(9), tone: "attribute" },
        { text: "linkedin.com/in/elianaguz", href: profileLinks.linkedin },
      ],
      [
        { text: "github".padEnd(9), tone: "attribute" },
        { text: "github.com/elianisdev", href: profileLinks.github },
      ],
    ],
  },
};
