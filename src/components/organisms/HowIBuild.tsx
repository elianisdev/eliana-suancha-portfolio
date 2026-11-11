import { ArchitecturePatternCard } from "@/components/molecules/ArchitecturePatternCard";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { SkillGroupCard } from "@/components/molecules/SkillGroupCard";
import { architecturePatterns, skillGroups } from "@/content/architecture";
import { sectionIds } from "@/content/profile";
import type { Dictionary } from "@/types/dictionary";

type HowIBuildProps = {
  content: Dictionary["howIBuild"];
};

export function HowIBuild({ content }: HowIBuildProps) {
  return (
    <section id={sectionIds.architecture} className="border-t border-line py-18 lg:py-23">
      <div className="mx-auto max-w-page px-4">
        <SectionHeader
          eyebrow={content.eyebrow}
          titleStart={content.title}
          description={content.description}
          align="center"
        />

        <div className="mt-12 mb-14 grid gap-4.5 lg:grid-cols-2">
          {architecturePatterns.map((pattern) => (
            <ArchitecturePatternCard
              key={pattern.id}
              pattern={pattern}
              content={content.patterns[pattern.id]}
            />
          ))}
        </div>

        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ id, skills }) => (
            <SkillGroupCard key={id} title={content.skillGroups[id]} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
}
