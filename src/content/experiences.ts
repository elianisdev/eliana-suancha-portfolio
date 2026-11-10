import type { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "datta",
    role: "Frontend Developer · React / Next.js",
    current: true,
    technologies: [
      { name: "React 19", highlighted: true },
      { name: "Clean Architecture", highlighted: true },
      { name: "TanStack Query" },
      { name: "Zustand" },
      { name: "Zod" },
      { name: "Playwright" },
    ],
  },
  {
    id: "techCommunities",
    role: "Frontend Developer · React",
    technologies: [
      { name: "Next.js", highlighted: true },
      { name: "WebSockets" },
      { name: "Tailwind" },
      { name: "Jest" },
      { name: "Cypress" },
    ],
  },
  {
    id: "techyWe",
    role: "Software Developer · React / Next.js",
    technologies: [
      { name: "Next.js", highlighted: true },
      { name: "React Native", highlighted: true },
      { name: "AWS S3" },
      { name: "Adobe PDF Services" },
      { name: "Node.js" },
    ],
  },
  {
    id: "casaToro",
    role: "Frontend Developer · React / Vue",
    technologies: [
      { name: "React", highlighted: true },
      { name: "Vue.js", highlighted: true },
      { name: "REST" },
      { name: "SCSS" },
    ],
  },
  {
    id: "softwareCorporation",
    role: "Web Frontend Developer · React",
    technologies: [{ name: "React", highlighted: true }, { name: "JavaScript" }, { name: "REST" }],
  },
  {
    id: "tongoDesign",
    role: "Web Developer · React / Vue",
    technologies: [{ name: "Vue → React", highlighted: true }, { name: "CI/CD" }],
  },
];
