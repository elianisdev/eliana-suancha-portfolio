import type { ProjectDetailLabels } from "@/types/project";

type ArchitectureDetailsVariant = "panel" | "overlay";

type ArchitectureDetailsProps = {
  labels: ProjectDetailLabels;
  architecture: string;
  stack: string;
  quality?: string;
  variant?: ArchitectureDetailsVariant;
};

const variantClassNames: Record<ArchitectureDetailsVariant, string> = {
  panel: "border-line bg-ink text-sm",
  overlay: "border-accent/30 text-xs",
};

export function ArchitectureDetails({
  labels,
  architecture,
  stack,
  quality,
  variant = "panel",
}: ArchitectureDetailsProps) {
  const rows = [
    { term: labels.architecture, detail: architecture },
    { term: labels.stack, detail: stack },
    ...(quality ? [{ term: labels.quality, detail: quality }] : []),
  ];

  return (
    <dl
      className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 rounded-xl border px-3.25 py-2.75 ${variantClassNames[variant]}`}
    >
      {rows.map(({ term, detail }) => (
        <div key={term} className="contents">
          <dt className="text-xs font-semibold text-accent">{term}</dt>
          <dd className="min-w-0">{detail}</dd>
        </div>
      ))}
    </dl>
  );
}
