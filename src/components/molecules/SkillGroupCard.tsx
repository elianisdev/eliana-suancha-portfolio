import { Chip } from "@/components/atoms/Chip";

type SkillGroupCardProps = {
  title: string;
  skills: string[];
};

export function SkillGroupCard({ title, skills }: SkillGroupCardProps) {
  return (
    <div className="rounded-2xl border border-line bg-panel p-6">
      <h3 className="mb-4 font-mono text-xs tracking-widest text-accent uppercase">{title}</h3>
      <ul className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <li key={skill}>
            <Chip>{skill}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}
