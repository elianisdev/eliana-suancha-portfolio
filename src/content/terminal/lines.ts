import type { TerminalLine, TerminalTone } from "@/types/terminal";

export const commandRow = (command: string, description: string): TerminalLine => [
  { text: `  ${command.padEnd(12)}`, tone: "accent" },
  { text: description, tone: "comment" },
];

export const labeledRow = (
  label: string,
  value: string,
  tone: TerminalTone,
  labelWidth: number,
): TerminalLine => [{ text: label.padEnd(labelWidth), tone }, { text: value }];

export const linkRow = (text: string, href: string): TerminalLine => [{ text, href }];
