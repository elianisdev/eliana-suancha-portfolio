import { TechTag } from "@/components/atoms/TechTag";
import type { Technology } from "@/types/experience";

type ExperienceCardProps = {
  company: string;
  period: string;
  role: string;
  description: string;
  technologies: Technology[];
  current?: boolean;
};

export function ExperienceCard({
  company,
  period,
  role,
  description,
  technologies,
  current = false,
}: ExperienceCardProps) {
  const markerClassName = current ? "bg-accent ring-5 ring-accent/20" : "bg-ink";

  return (
    <li className="group relative ml-8.5 lg:ml-0 lg:w-[calc(50%-34px)] lg:odd:self-start lg:even:self-end">
      <span
        aria-hidden="true"
        className={`absolute top-6.5 -left-8.5 size-3.25 rounded-full border-2 border-accent lg:group-odd:left-auto lg:group-odd:-right-10.25 lg:group-even:-left-10.25 ${markerClassName}`}
      />
      <article className="flex flex-col gap-2 rounded-2xl border border-line bg-panel px-5.5 py-5 transition-colors hover:border-accent/45">
        <header className="flex flex-wrap items-baseline justify-between gap-2.5">
          <h3 className="font-display text-xl font-bold">{company}</h3>
          <span className="whitespace-nowrap font-mono text-xs text-accent-2">{period}</span>
        </header>
        <p className="text-sm font-semibold">{role}</p>
        <p className="text-sm text-muted">{description}</p>
        <ul className="flex flex-wrap gap-1.5">
          {technologies.map(({ name, highlighted }) => (
            <li key={name}>
              <TechTag highlighted={highlighted}>{name}</TechTag>
            </li>
          ))}
        </ul>
      </article>
    </li>
  );
}
