import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent-2/12 px-2.5 py-1 font-mono text-xs text-accent-2">
      <span
        aria-hidden="true"
        className="size-1.5 animate-pulse rounded-full bg-accent-2 motion-reduce:animate-none"
      />
      {children}
    </span>
  );
}
