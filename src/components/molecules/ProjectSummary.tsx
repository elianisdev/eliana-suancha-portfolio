import { Tag } from "@/components/atoms/Tag";
import type { ProjectTag } from "@/types/project";

type ProjectSummaryProps = {
  title: string;
  description: string;
  tags: ProjectTag[];
};

export function ProjectSummary({ title, description, tags }: ProjectSummaryProps) {
  return (
    <>
      <div className="flex flex-wrap gap-1.5">
        {tags.map(({ label, tone }) => (
          <Tag key={label} tone={tone}>
            {label}
          </Tag>
        ))}
      </div>
      <h3 className="font-display text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </>
  );
}
