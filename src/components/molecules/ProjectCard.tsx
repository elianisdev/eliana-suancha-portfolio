"use client";

import { type ReactNode, useId, useState } from "react";
import { PreviewFrame } from "@/components/atoms/PreviewFrame";
import { ArchitectureDetails } from "@/components/molecules/ArchitectureDetails";
import { ProjectLinks } from "@/components/molecules/ProjectLinks";
import { ProjectSummary } from "@/components/molecules/ProjectSummary";
import type { Project, ProjectDetailLabels, ProjectTranslation } from "@/types/project";

type ProjectCardProps = {
  project: Project;
  content: ProjectTranslation;
  preview: ReactNode;
  detailLabels: ProjectDetailLabels;
  showArchitectureLabel: string;
  hideArchitectureLabel: string;
};

export function ProjectCard({
  project,
  content,
  preview,
  detailLabels,
  showArchitectureLabel,
  hideArchitectureLabel,
}: ProjectCardProps) {
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const architectureId = useId();

  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-panel transition duration-300 hover:-translate-y-0.75 hover:border-accent/45 motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:col-span-2">
      <div className="relative h-47.5 shrink-0 overflow-hidden border-b border-line bg-panel-2">
        <PreviewFrame>{preview}</PreviewFrame>
        <div
          id={architectureId}
          className={`absolute inset-0 z-10 flex flex-col justify-end gap-2.5 overflow-auto bg-linear-to-b from-ink/55 to-ink/95 to-42% p-4.5 backdrop-blur-sm transition-transform duration-450 ease-out group-hover:translate-y-0 motion-reduce:transition-none ${
            isArchitectureOpen ? "translate-y-0" : "translate-y-[101%]"
          }`}
        >
          <ArchitectureDetails
            labels={detailLabels}
            architecture={content.architecture}
            stack={project.stack}
            variant="overlay"
          />
          {content.role && (
            <p className="border-l-2 border-accent-2 pl-3 text-xs">{content.role}</p>
          )}
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5.5 pb-6">
        <ProjectSummary
          title={content.title}
          description={content.description}
          tags={content.tags}
        />
        <div className="mt-auto flex flex-wrap gap-4 text-sm font-semibold">
          <button
            type="button"
            aria-expanded={isArchitectureOpen}
            aria-controls={architectureId}
            onClick={() => setIsArchitectureOpen((isOpen) => !isOpen)}
            className="cursor-pointer text-accent-2 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            {isArchitectureOpen ? hideArchitectureLabel : showArchitectureLabel}
          </button>
          <ProjectLinks links={project.links} />
        </div>
      </div>
    </article>
  );
}
