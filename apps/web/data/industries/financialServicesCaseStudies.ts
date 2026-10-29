import type { CaseStudy, TechItem } from "@/data/caseStudies";

const IMAGE_BASE = "/assets/final-images/industries/financial-services";

const financeFrontEnd: TechItem[] = [
  {
    name: "React",
    info: "Component-based UI for scalable web client applications.",
    image: "/assets/images/case-study/reactIcon.svg",
  },
  {
    name: "Next.js",
    info: "Server-side rendering and optimized performance for production web apps.",
    image: "/assets/images/case-study/next-js.svg",
  },
  {
    name: "React Native",
    info: "Cross-platform iOS and Android apps from a shared codebase.",
    image: "/assets/images/case-study/react-native.svg",
  },
  {
    name: "Redux",
    info: "Predictable client state management for complex application flows.",
    image: "/assets/images/case-study/redux.svg",
  },
];

const financeBackEnd: TechItem[] = [
  {
    name: "Node.js",
    info: "High-performance server runtime for APIs and background services.",
    image: "/assets/images/case-study/nodejs.svg",
  },
  {
    name: "Python",
    info: "AI/ML services, forecasting models, NLP, and agentic orchestration runtimes.",
    image: "/assets/images/case-study/python.svg",
  },
  {
    name: "AWS",
    info: "Cloud infrastructure for compute, storage, and managed services.",
    image: "/assets/images/case-study/aws.svg",
  },
];

const financeDatabase: TechItem[] = [
  {
    name: "MongoDB",
    info: "Document database designed for scalability and flexible schemas.",
    image: "/assets/images/case-study/mongodb.svg",
  },
  {
    name: "Elasticsearch",
    info: "Search and analytics engine for high-volume operational data.",
    image: "/assets/images/case-study/elasticsearch.svg",
  },
];

const financeOthers: TechItem[] = [
  {
    name: "Docker",
    info: "Portable environments for consistent deployments across systems.",
    image: "/assets/images/case-study/docker.svg",
  },
  {
    name: "Nginx",
    info: "High-performance web server and reverse proxy.",
    image: "/assets/images/case-study/nginx.svg",
  },
  {
    name: "Jenkins",
    info: "CI/CD automation for reliable build and release pipelines.",
    image: "/assets/images/case-study/jenkins.svg",
  },
];

function financeTech(theme: number[]) {
  return {
    theme,
    frontEnd: financeFrontEnd,
    BackEnd: financeBackEnd,
    Database: financeDatabase,
    Others: financeOthers,
  };
}

export const financialServicesCaseStudies: CaseStudy[] = []; // Preserved file; synthetic industry studies removed — only old-site originals remain in caseStudies.ts
