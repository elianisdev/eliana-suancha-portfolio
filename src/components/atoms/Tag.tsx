import type { ReactNode } from "react";

type TagTone = "accent" | "secondary";

type TagSize = "regular" | "compact";

type TagProps = {
  children: ReactNode;
  tone?: TagTone;
  size?: TagSize;
};

const toneClassNames: Record<TagTone, string> = {
  accent: "bg-accent/12 text-accent",
  secondary: "bg-accent-2/12 text-accent-2",
};

const sizeClassNames: Record<TagSize, string> = {
  regular: "px-2 py-1 text-xs",
  compact: "max-w-full px-1.5 py-0.5 text-2xs",
};

export function Tag({ children, tone = "accent", size = "regular" }: TagProps) {
  return (
    <span className={`inline-block rounded-md font-mono ${sizeClassNames[size]} ${toneClassNames[tone]}`}>
      {children}
    </span>
  );
}
