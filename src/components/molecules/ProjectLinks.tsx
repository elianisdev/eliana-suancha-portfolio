import type { ProjectLink, ProjectLinkKind } from "@/types/project";

type ProjectLinksProps = {
  links: ProjectLink[];
};

const linkLabels: Record<ProjectLinkKind, string> = {
  repo: "Repo ↗",
  demo: "Demo ↗",
  website: "Landing ↗",
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  return links.map(({ kind, href }) => (
    <a
      key={href}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline focus-visible:outline-2 focus-visible:outline-accent"
    >
      {linkLabels[kind]}
    </a>
  ));
}
