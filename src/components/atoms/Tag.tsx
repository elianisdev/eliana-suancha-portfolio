import type { ReactNode } from "react";

type TagTone = "accent" | "secondary";

type TagProps = {
  children: ReactNode;
  tone?: TagTone;
};

const toneClassNames: Record<TagTone, string> = {
  accent: "bg-accent/12 text-accent",
  secondary: "bg-accent-2/12 text-accent-2",
};

export function Tag({ children, tone = "accent" }: TagProps) {
  return (
    <span className={`rounded-md px-2 py-1 font-mono text-xs ${toneClassNames[tone]}`}>
      {children}
    </span>
  );
}
