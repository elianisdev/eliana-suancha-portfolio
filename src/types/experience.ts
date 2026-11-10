export type ExperienceId =
  | "datta"
  | "techCommunities"
  | "techyWe"
  | "casaToro"
  | "softwareCorporation"
  | "tongoDesign";

export type Technology = {
  name: string;
  highlighted?: boolean;
};

export type Experience = {
  id: ExperienceId;
  role: string;
  technologies: Technology[];
  current?: boolean;
};

export type ExperienceTranslation = {
  company: string;
  period: string;
  description: string;
};
