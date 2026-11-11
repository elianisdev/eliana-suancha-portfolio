import { PreviewFrame } from "@/components/atoms/PreviewFrame";
import { StatusPill } from "@/components/atoms/StatusPill";
import { ArchitectureDetails } from "@/components/molecules/ArchitectureDetails";
import { BoardPreview } from "@/components/molecules/BoardPreview";
import { ProjectLinks } from "@/components/molecules/ProjectLinks";
import { ProjectSummary } from "@/components/molecules/ProjectSummary";
import type {
  InProgressProject,
  InProgressProjectTranslation,
  ProjectDetailLabels,
} from "@/types/project";

type InProgressProjectCardProps = {
  project: InProgressProject;
  content: InProgressProjectTranslation;
  detailLabels: ProjectDetailLabels;
};

export function InProgressProjectCard({
  project,
  content,
  detailLabels,
}: InProgressProjectCardProps) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-dashed border-line bg-panel transition duration-300 hover:-translate-y-0.75 hover:border-accent/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:col-span-2 lg:col-span-6 lg:flex-row">
      <div className="relative h-55 shrink-0 overflow-hidden border-b border-line bg-panel-2 lg:h-auto lg:min-h-62.5 lg:w-[46%] lg:border-r lg:border-b-0">
        <PreviewFrame>
          <BoardPreview columns={content.board} />
        </PreviewFrame>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5.5 pb-6">
        <div>
          <StatusPill>{content.status}</StatusPill>
        </div>
        <ProjectSummary title={content.title} description={content.description} />
        <ArchitectureDetails
          labels={detailLabels}
          architecture={content.architecture}
          stack={project.stack}
        />
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold">
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
}
