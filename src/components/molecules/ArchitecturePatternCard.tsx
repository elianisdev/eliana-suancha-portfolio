import { Eyebrow } from "@/components/atoms/Eyebrow";
import { ArchitectureLayer } from "@/components/molecules/ArchitectureLayer";
import type { ArchitecturePattern, ArchitecturePatternTranslation } from "@/types/architecture";

type ArchitecturePatternCardProps = {
  pattern: ArchitecturePattern;
  content: ArchitecturePatternTranslation;
};

export function ArchitecturePatternCard({ pattern, content }: ArchitecturePatternCardProps) {
  return (
    <article className="min-w-0 rounded-2xl border border-line bg-panel p-6">
      <Eyebrow>{content.eyebrow}</Eyebrow>
      <h3 className="mt-2 mb-1.5 font-display text-xl font-extrabold">{content.title}</h3>
      <p className="mb-4.5 text-sm text-muted">{content.description}</p>
      <ol className="grid gap-2">
        {content.layers.map(({ name, detail }, position) => (
          <ArchitectureLayer
            key={name}
            name={name}
            detail={detail}
            position={position}
            marker={pattern.marker}
            highlighted={pattern.highlightedLayers.includes(position)}
          />
        ))}
      </ol>
    </article>
  );
}
