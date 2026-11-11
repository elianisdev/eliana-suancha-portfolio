import { FeaturedProjectCard } from "@/components/molecules/FeaturedProjectCard";
import { InProgressProjectCard } from "@/components/molecules/InProgressProjectCard";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ProjectScreenshot } from "@/components/molecules/ProjectScreenshot";
import { SectionHeader } from "@/components/molecules/SectionHeader";
import { sectionIds } from "@/content/profile";
import { inProgressProject, moreProjects, projects } from "@/content/projects";
import type { Dictionary } from "@/types/dictionary";

type ProjectsContent = Dictionary["projects"];

type ProjectsProps = {
  content: ProjectsContent;
};

export function Projects({ content }: ProjectsProps) {
  return (
    <section id={sectionIds.projects} className="border-t border-line py-18 lg:py-23">
      <div className="mx-auto max-w-page px-4">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <SectionHeader eyebrow={content.eyebrow} titleStart={content.title} />
          <p className="max-w-md text-muted">{content.description}</p>
        </div>

        <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project) => {
            const preview = <ProjectScreenshot image={project.image} size={project.size} />;
            const projectContent = content.items[project.id];

            if (project.size === "featured") {
              return (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  content={projectContent}
                  preview={preview}
                  detailLabels={content.detailLabels}
                />
              );
            }

            return (
              <ProjectCard
                key={project.id}
                project={project}
                content={projectContent}
                preview={preview}
                detailLabels={content.detailLabels}
                showArchitectureLabel={content.showArchitecture}
                hideArchitectureLabel={content.hideArchitecture}
              />
            );
          })}
          <InProgressProjectCard
            project={inProgressProject}
            content={content.inProgress}
            detailLabels={content.detailLabels}
          />
        </div>

        <div className="mt-5.5 flex flex-wrap items-center gap-2.5 text-sm text-muted">
          <span>{content.moreProjects}</span>
          {moreProjects.map(({ name, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-dashed border-line px-3 py-1.5 font-mono text-xs text-fg transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
