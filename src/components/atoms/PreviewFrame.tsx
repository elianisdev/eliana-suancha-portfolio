import type { ReactNode } from "react";

type PreviewFrameProps = {
  children: ReactNode;
};

export function PreviewFrame({ children }: PreviewFrameProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-4.5 overflow-hidden rounded-xl border border-line bg-ink transition-transform duration-600 ease-out group-hover:scale-104 motion-reduce:transition-none"
    >
      {children}
    </div>
  );
}
