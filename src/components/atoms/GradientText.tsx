import type { ReactNode } from "react";

type GradientTextProps = {
  children: ReactNode;
};

export function GradientText({ children }: GradientTextProps) {
  return (
    <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
      {children}
    </span>
  );
}
