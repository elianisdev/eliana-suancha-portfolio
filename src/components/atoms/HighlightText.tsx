import type { ReactNode } from "react";

type HighlightTextProps = {
  children: ReactNode;
};

export function HighlightText({ children }: HighlightTextProps) {
  return <span className="text-accent">{children}</span>;
}
