import { Eyebrow } from "@/components/atoms/Eyebrow";
import { GradientText } from "@/components/atoms/GradientText";

type SectionHeaderAlignment = "start" | "center";

type SectionHeaderProps = {
  eyebrow: string;
  titleStart: string;
  titleHighlight?: string;
  description?: string;
  align?: SectionHeaderAlignment;
};

const alignmentClassNames: Record<SectionHeaderAlignment, string> = {
  start: "",
  center: "flex flex-col items-center text-center",
};

export function SectionHeader({
  eyebrow,
  titleStart,
  titleHighlight,
  description,
  align = "start",
}: SectionHeaderProps) {
  return (
    <div className={alignmentClassNames[align]}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-2.5 font-display text-3xl leading-tight font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {titleStart} {titleHighlight && <GradientText>{titleHighlight}</GradientText>}
      </h2>
      {description && <p className="mt-4 max-w-xl text-muted">{description}</p>}
    </div>
  );
}
