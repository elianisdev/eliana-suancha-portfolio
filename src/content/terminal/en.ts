import { profileLinks, sectionIds } from "@/content/profile";
import { commandRow, labeledRow, linkRow } from "@/content/terminal/lines";
import type { TerminalContent } from "@/types/terminal";

export const enTerminal: TerminalContent = {
  title: "Interactive terminal",
  inputLabel: "Type a command",
  placeholder: "type a command or tap one ↓",
  suggestionsLabel: "try:",
  suggestions: ["whoami", "experience", "stack", "ai", "contact"],
  unknownCommand: "command not found: ",
  outputs: {
    help: [
      [{ text: "Available commands:" }],
      commandRow("whoami", "who I am"),
      commandRow("experience", "where I've worked"),
      commandRow("stack", "what I build with"),
      commandRow("ai", "how I work with agents"),
      commandRow("projects", "what I've built"),
      commandRow("contact", "how to reach me"),
      commandRow("clear", "clear the terminal"),
    ],
    whoami: [
      [{ text: "Eliana Suancha Guzmán", tone: "accent" }],
      [{ text: "Semi Senior Frontend Developer · Colombia" }],
      [{ text: "5+ years · React · Next.js · TypeScript", tone: "comment" }],
      [
        { text: "→ type ", tone: "secondary" },
        { text: "help", tone: "accent" },
        { text: " to see more", tone: "secondary" },
      ],
    ],
    experience: [
      labeledRow("2026–now", "Datta · recruiting ATS", "secondary", 10),
      labeledRow("2025–26", "FooTalent · No Country · iGrowker", "secondary", 10),
      labeledRow("2022–25", "TechyWe · banking and e-signature", "secondary", 10),
      labeledRow("2020–22", "CasaToro · Software Corp · Tongo", "secondary", 10),
      linkRow("→ see full experience", `#${sectionIds.experience}`),
    ],
    stack: [
      labeledRow("core", "React · Next.js · TypeScript · Tailwind", "attribute", 7),
      labeledRow("data", "TanStack Query · Zustand · RHF + Zod", "attribute", 7),
      labeledRow("arch", "Clean Architecture · Atomic Design", "attribute", 7),
      labeledRow("tests", "Jest · RTL · Playwright · Cypress", "attribute", 7),
    ],
    ai: [
      [{ text: "AI is one more tool in my workflow.", tone: "accent" }],
      [{ text: "I use it for repetitive refactors and tests," }],
      [{ text: "and review every change before opening the PR." }],
      [{ text: "Claude Code · Codex · MCP · subagents", tone: "comment" }],
      linkRow("→ how I work", `#${sectionIds.about}`),
    ],
    projects: [
      [{ text: "Datta ATS · Konfex · Identity verification" }],
      [{ text: "YouCreate · G20 HealthTech · Biotasys" }],
      [{ text: "Kitchen Recipes" }],
      [
        { text: "DevFlow AI ", tone: "secondary" },
        { text: "(in progress)", tone: "comment" },
      ],
      linkRow("→ see projects", `#${sectionIds.projects}`),
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
