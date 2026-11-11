import type { ArchitecturePattern, SkillGroup } from "@/types/architecture";

export const architecturePatterns: ArchitecturePattern[] = [
  { id: "cleanArchitecture", marker: "number", highlightedLayers: [2, 4] },
  { id: "atomicDesign", marker: "dot", highlightedLayers: [2, 4] },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "core",
    skills: ["React", "Next.js", "TypeScript", "JavaScript ES6+", "Tailwind CSS", "HTML5 · CSS3 · SCSS"],
  },
  {
    id: "stateAndData",
    skills: ["TanStack Query", "Zustand", "React Hook Form", "Zod", "REST APIs", "WebSockets"],
  },
  {
    id: "architecture",
    skills: ["Clean Architecture", "Atomic Design", "Design systems", "shadcn/ui", "i18n · Lingui"],
  },
  {
    id: "quality",
    skills: ["Jest", "React Testing Library", "Playwright", "Cypress", "Core Web Vitals", "WCAG"],
  },
  {
    id: "ai",
    skills: ["Claude Code", "Codex", "GitHub Copilot", "MCP"],
  },
  {
    id: "alsoWith",
    skills: ["Vue.js", "React Native", "Node.js", "NestJS", "AWS S3", "Docker", "Figma"],
  },
];
