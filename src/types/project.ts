import type { StaticImageData } from "next/image";

export type ProjectId = "datta" | "konfex" | "identity" | "youCreate" | "g20" | "biotasys" | "kitchenRecipes";

export type ProjectSize = "featured" | "regular";

export type ProjectLinkKind = "repo" | "demo" | "website";

export type ProjectLink = {
  kind: ProjectLinkKind;
  href: string;
};

export type Project = {
  id: ProjectId;
  size: ProjectSize;
  image: StaticImageData;
  stack: string;
  quality?: string;
  links: ProjectLink[];
};

export type ProjectTag = {
  label: string;
  tone: "accent" | "secondary";
};

export type ProjectTranslation = {
  title: string;
  tags: ProjectTag[];
  description: string;
  architecture: string;
  role?: string;
  highlights?: string[];
};

export type ProjectDetailLabels = {
  architecture: string;
  stack: string;
  quality: string;
};

export type MoreProject = {
  name: string;
  href: string;
};
