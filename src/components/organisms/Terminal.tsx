"use client";

import { MotionConfig, motion, useReducedMotion } from "motion/react";
import { type FormEvent, useEffect, useId, useRef } from "react";
import { TerminalLine } from "@/components/molecules/TerminalLine";
import { useTerminal } from "@/hooks/useTerminal";
import type { TerminalContent } from "@/types/terminal";

type TerminalProps = {
  content: TerminalContent;
};

const WINDOW_TITLE = "eliana@portfolio ~ zsh";

export function Terminal({ content }: TerminalProps) {
  const reducedMotion = useReducedMotion() ?? false;
  const { entries, typedIntro, run, prompt } = useTerminal(content, reducedMotion);
  const outputRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();

  useEffect(() => {
    const output = outputRef.current;
    if (output) output.scrollTop = output.scrollHeight;
  }, [entries, typedIntro]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = inputRef.current;
    if (!input) return;
    run(input.value);
    input.value = "";
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-label={content.title}
        className="flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-2xl shadow-accent/15 ring-1 ring-accent/10"
      >
        <header className="flex items-center gap-2 border-b border-line bg-panel-2 px-3.5 py-3">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-line" />
          <span className="ml-2.5 font-mono text-xs text-muted">{WINDOW_TITLE}</span>
        </header>

        <div
          ref={outputRef}
          aria-live="polite"
          className="h-56 overflow-y-auto px-6 pt-5 pb-2 font-mono text-sm leading-relaxed sm:h-72"
        >
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TerminalLine line={entry.line} />
            </motion.div>
          ))}
          {typedIntro !== null && (
            <div aria-hidden="true">
              <span className="text-accent">{prompt}</span>
              {typedIntro}
              <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
            </div>
          )}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-6 pt-2 pb-4 font-mono text-sm focus-within:bg-accent/5"
        >
          <span aria-hidden="true" className="text-accent">
            {prompt.trim()}
          </span>
          <label htmlFor={inputId} className="sr-only">
            {content.inputLabel}
          </label>
          <input
            ref={inputRef}
            id={inputId}
            autoComplete="off"
            spellCheck={false}
            placeholder={content.placeholder}
            className="min-w-0 flex-1 bg-transparent text-fg caret-accent outline-none placeholder:text-muted"
          />
        </form>

        <div className="flex flex-wrap items-center gap-2 border-t border-line px-6 pt-3.5 pb-4.5">
          <span className="mr-1 font-mono text-xs text-muted">{content.suggestionsLabel}</span>
          {content.suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => run(suggestion)}
              className="cursor-pointer rounded-lg border border-line bg-ink px-2.5 py-1 font-mono text-xs transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}
