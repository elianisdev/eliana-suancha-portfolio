import type { ReactNode } from "react";

type StatusPillProps = {
  children: ReactNode;
};

export function StatusPill({ children }: StatusPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs">
      <span aria-hidden="true" className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
        <span className="relative size-2 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}
