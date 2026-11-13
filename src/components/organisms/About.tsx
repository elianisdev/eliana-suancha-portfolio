import { Portrait } from "@/components/molecules/Portrait";
import { ProcessStep } from "@/components/molecules/ProcessStep";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { sectionIds } from "@/content/profile";
import portrait from "@/assets/images/eliana-suancha-portrait.jpg";
import type { Dictionary } from "@/types/dictionary";

type AboutProps = {
  content: Dictionary["about"];
};

export function About({ content }: AboutProps) {
  return (
    <section id={sectionIds.about} className="py-18 lg:py-23">
      <div className="mx-auto grid max-w-page items-center gap-14 px-4 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Portrait image={portrait} alt={content.photoAlt} caption={content.location} />
        <div>
          <SectionHeader
            eyebrow={content.eyebrow}
            titleStart={content.titleStart}
            titleHighlight={content.titleHighlight}
            description={content.description}
          />
          <ol className="relative mt-8 before:absolute before:top-3 before:bottom-3 before:left-1.25 before:w-px before:bg-line">
            {content.steps.map((step) => (
              <ProcessStep key={step.title} title={step.title} description={step.description} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
