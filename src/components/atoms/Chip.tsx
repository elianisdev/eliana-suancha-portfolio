import type { ReactNode } from "react";

type ChipProps = {
  children: ReactNode;
};

export function Chip({ children }: ChipProps) {
  return (
    <span className="inline-block rounded-lg border border-line bg-panel-2 px-3 py-1.5 text-sm font-medium">
      {children}
    </span>
  );
}
