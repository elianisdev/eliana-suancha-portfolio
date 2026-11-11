import type { ReactNode } from "react";

type PillProps = {
  children: ReactNode;
};

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-block rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs">
      {children}
    </span>
  );
}
