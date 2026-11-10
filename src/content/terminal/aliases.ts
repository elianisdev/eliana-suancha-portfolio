import type { TerminalAction } from "@/types/terminal";

export const terminalAliases: Partial<Record<string, TerminalAction>> = {
  help: "help",
  ayuda: "help",
  whoami: "whoami",
  experiencia: "experience",
  experience: "experience",
  exp: "experience",
  stack: "stack",
  ia: "ai",
  ai: "ai",
  proyectos: "projects",
  projects: "projects",
  contacto: "contact",
  contact: "contact",
  clear: "clear",
};

export const introCommand = "whoami";
