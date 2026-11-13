import type { LayerMarker } from "@/types/architecture";

type ArchitectureLayerProps = {
  name: string;
  detail: string;
  position: number;
  marker: LayerMarker;
  highlighted?: boolean;
};

const dotSizeClassNames = ["size-1.5", "size-2.5", "size-3.5", "size-4.5", "size-5.5"];

function LayerMarkerIcon({ marker, position }: { marker: LayerMarker; position: number }) {
  if (marker === "number") {
    return (
      <span className="font-mono text-2xs text-accent">{String(position + 1).padStart(2, "0")}</span>
    );
  }

  return (
    <span
      className={`rounded-full bg-accent ${dotSizeClassNames[position]}`}
    />
  );
}

export function ArchitectureLayer({
  name,
  detail,
  position,
  marker,
  highlighted = false,
}: ArchitectureLayerProps) {
  const borderClassName = highlighted ? "border-accent/35" : "border-line";

  return (
    <li
      className={`grid grid-cols-[1.875rem_1fr] items-center gap-x-3 rounded-xl border bg-ink px-3.5 py-2.5 transition hover:translate-x-1 hover:border-accent/50 motion-reduce:transition-none motion-reduce:hover:translate-x-0 sm:grid-cols-[1.875rem_1fr_auto] ${borderClassName}`}
    >
      <span aria-hidden="true" className="row-span-2 flex justify-center sm:row-span-1">
        <LayerMarkerIcon marker={marker} position={position} />
      </span>
      <span className="font-display text-sm font-bold">{name}</span>
      <span className="col-start-2 font-mono text-2xs text-muted sm:col-start-auto sm:text-right">
        {detail}
      </span>
    </li>
  );
}
