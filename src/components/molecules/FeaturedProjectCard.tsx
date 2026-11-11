import type { ReactNode } from "react";
import { PreviewFrame } from "@/components/atoms/PreviewFrame";
import { ArchitectureDetails } from "@/components/molecules/ArchitectureDetails";
import { ProjectLinks } from "@/components/molecules/ProjectLinks";
import { ProjectSummary } from "@/components/molecules/ProjectSummary";
import type { Project, ProjectDetailLabels, ProjectTranslation } from "@/types/project";

type FeaturedProjectCardProps = {
  project: Project;
  content: ProjectTranslation;
  preview: ReactNode;
  detailLabels: ProjectDetailLabels;
};

export function FeaturedProjectCard({
  project,
  content,
  preview,
  detailLabels,
}: FeaturedProjectCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-0.75 hover:border-accent/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:col-span-2 lg:col-span-6 lg:flex-row">
      <div className="relative min-h-62.5 shrink-0 overflow-hidden border-b border-line bg-panel-2 lg:min-h-75 lg:w-[46%] lg:border-r lg:border-b-0">
        <PreviewFrame>{preview}</PreviewFrame>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5.5 pb-6">
        <ProjectSummary title={content.title} description={content.description} tags={content.tags} />
        <ArchitectureDetails
          labels={detailLabels}
          architecture={content.architecture}
          stack={project.stack}
          quality={project.quality}
        />
        {content.highlights && (
          <ul className="grid list-disc gap-1 pl-4.5 text-sm text-muted">
            {content.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
}
