import type { ReactNode } from "react";

type TechTagProps = {
  children: ReactNode;
  highlighted?: boolean;
};

export function TechTag({ children, highlighted = false }: TechTagProps) {
  const toneClassName = highlighted ? "border-accent/35 text-accent" : "border-line text-muted";

  return (
    <span className={`inline-block rounded-md border px-1.5 py-0.5 font-mono text-xs ${toneClassName}`}>
      {children}
    </span>
  );
}
