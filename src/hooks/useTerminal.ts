import { useCallback, useEffect, useRef, useState } from "react";
import { introCommand, terminalAliases } from "@/content/terminal/aliases";
import type { TerminalContent, TerminalLine } from "@/types/terminal";

export type TerminalEntry = {
  id: number;
  line: TerminalLine;
};

const MAX_ENTRIES = 80;
const TYPING_DELAY_MS = 85;
const PROMPT = "❯ ";
const EMPTY_LINE: TerminalLine = [{ text: " " }];

export function useTerminal(content: TerminalContent, reducedMotion: boolean) {
  const [entries, setEntries] = useState<TerminalEntry[]>([]);
  const [typedIntro, setTypedIntro] = useState<string | null>(null);
  const nextEntryId = useRef(0);
  const introTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const resolveOutput = useCallback(
    (command: string): TerminalLine[] => {
      const action = terminalAliases[command.toLowerCase()];
      if (action && action !== "clear") return content.outputs[action];
      return [[{ text: `${content.unknownCommand}${command}`, tone: "comment" }]];
    },
    [content],
  );

  const execute = useCallback(
    (rawCommand: string) => {
      const command = rawCommand.trim();

      if (terminalAliases[command.toLowerCase()] === "clear") {
        setEntries([]);
        return;
      }

      const echo: TerminalLine = [{ text: PROMPT, tone: "accent" }, { text: command }];
      const lines = command ? [echo, ...resolveOutput(command), EMPTY_LINE] : [echo];
      const newEntries = lines.map((line) => ({ id: nextEntryId.current++, line }));

      setEntries((current) => [...current, ...newEntries].slice(-MAX_ENTRIES));
    },
    [resolveOutput],
  );

  const stopIntro = useCallback(() => {
    clearTimeout(introTimer.current);
    setTypedIntro(null);
  }, []);

  const run = useCallback(
    (command: string) => {
      stopIntro();
      execute(command);
    },
    [execute, stopIntro],
  );

  useEffect(() => {
    const typeNextCharacter = (length: number) => {
      if (reducedMotion || length > introCommand.length) {
        setTypedIntro(null);
        execute(introCommand);
        return;
      }

      setTypedIntro(introCommand.slice(0, length));
      introTimer.current = setTimeout(() => typeNextCharacter(length + 1), TYPING_DELAY_MS);
    };

    introTimer.current = setTimeout(() => typeNextCharacter(0), 0);

    return () => clearTimeout(introTimer.current);
  }, [execute, reducedMotion]);

  return { entries, typedIntro, run, prompt: PROMPT };
}
