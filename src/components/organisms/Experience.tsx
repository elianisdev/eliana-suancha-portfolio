import { Pill } from "@/components/atoms/Pill";
import { ExperienceCard } from "@/components/molecules/ExperienceCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { experiences } from "@/content/experiences";
import { sectionIds } from "@/content/profile";
import type { Dictionary } from "@/types/dictionary";

type ExperienceProps = {
  content: Dictionary["experience"];
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section id={sectionIds.experience} className="border-t border-line py-18 lg:py-23">
      <div className="mx-auto max-w-page px-4">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleStart={content.title}
          description={content.description}
          align="center"
        />
        <ul className="mt-4 flex flex-wrap justify-center gap-2">
          {content.sectors.map((sector) => (
            <li key={sector}>
              <Pill>{sector}</Pill>
            </li>
          ))}
        </ul>

        <div className="relative mx-auto mt-12 max-w-250">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1.5 w-px bg-linear-to-b from-accent via-line via-30% to-transparent lg:left-1/2"
          />
          <ol className="flex flex-col gap-5.5">
            {experiences.map(({ id, role, technologies, current }) => (
              <ExperienceCard
                key={id}
                role={role}
                technologies={technologies}
                current={current}
                {...content.items[id]}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
