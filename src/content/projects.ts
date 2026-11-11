import biotasysReport from "@/assets/images/projects/biotasys-report.png";
import dattaJobs from "@/assets/images/projects/datta-jobs.png";
import g20Dashboard from "@/assets/images/projects/g20-dashboard.png";
import identityCapture from "@/assets/images/projects/identity-capture.png";
import kitchenRecipes from "@/assets/images/projects/kitchen-recipes.png";
import konfexInbox from "@/assets/images/projects/konfex-inbox.png";
import youCreateDashboard from "@/assets/images/projects/youcreate-dashboard.png";
import type { MoreProject, Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "datta",
    size: "featured",
    image: dattaJobs,
    stack: "React 19 · Next.js · TypeScript strict · TanStack Query · Zustand · RHF + Zod · Tailwind 4",
    quality: "Jest · RTL · Playwright · WCAG · code splitting",
    links: [{ kind: "website", href: "https://www.dattainc.com" }],
  },
  {
    id: "konfex",
    size: "regular",
    image: konfexInbox,
    stack: "Next.js · TypeScript · React Hook Form · Socket.io",
    links: [{ kind: "repo", href: "https://github.com/elianisdev/konfex-web-app" }],
  },
  {
    id: "biotasys",
    size: "regular",
    image: biotasysReport,
    stack: "React · TypeScript · NestJS · PostgreSQL · Gemini",
    links: [],
  },
  {
    id: "identity",
    size: "regular",
    image: identityCapture,
    stack: "React · TypeScript · MediaDevices API",
    links: [{ kind: "demo", href: "https://proyecto-de-identidad-react.vercel.app" }],
  },
  {
    id: "youCreate",
    size: "regular",
    image: youCreateDashboard,
    stack: "React · TypeScript · Tailwind · Chart.js",
    links: [{ kind: "repo", href: "https://github.com/igrowker/i004-youcreate-front" }],
  },
  {
    id: "g20",
    size: "regular",
    image: g20Dashboard,
    stack: "React · TypeScript · PrimeReact",
    links: [{ kind: "repo", href: "https://github.com/G20-NoCountry/g20-HealthTech" }],
  },
  {
    id: "kitchenRecipes",
    size: "regular",
    image: kitchenRecipes,
    stack: "React 19 · TypeScript · Tailwind 4 · Firebase Firestore · Vite",
    links: [{ kind: "repo", href: "https://github.com/elianisdev/kitchen-recipes" }],
  },
];

export const moreProjects: MoreProject[] = [
  {
    name: "Banco Saint Patrick · Home banking",
    href: "https://github.com/elianisdev/banco-saint-patrick-frontend",
  },
  {
    name: "Vue 3 · E-commerce · Pinia",
    href: "https://github.com/elianisdev/vue-3-ecommerce",
  },
];
