export type TerminalTone = "accent" | "secondary" | "comment" | "attribute";

export type TerminalSegment = {
  text: string;
  tone?: TerminalTone;
  href?: string;
};

export type TerminalLine = TerminalSegment[];

export type TerminalCommand =
  | "help"
  | "whoami"
  | "experience"
  | "stack"
  | "ai"
  | "projects"
  | "contact";

export type TerminalAction = TerminalCommand | "clear";

export type TerminalContent = {
  title: string;
  inputLabel: string;
  placeholder: string;
  suggestionsLabel: string;
  suggestions: string[];
  unknownCommand: string;
  outputs: Record<TerminalCommand, TerminalLine[]>;
};
