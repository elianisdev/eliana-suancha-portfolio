import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
};

export function Eyebrow({ children }: EyebrowProps) {
  return (
    <p className="text-sm font-semibold text-accent">
      {children}
    </p>
  );
}
