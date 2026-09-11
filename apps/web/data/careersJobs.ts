export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  workMode: "Onsite" | "Hybrid" | "Remote";
  department: string;
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
};

export const CAREER_CONTACT_EMAILS = [
  "hr@eforte.net",
  "sa@eforte.net",
] as const;

export const jobOpenings: JobOpening[] = [
  {
    id: "associate-dotnet-developer",
    title: "Associate .NET Developer",
    location: "Karachi",
    type: "Full-time",
    workMode: "Onsite",
    department: "Engineering",
    summary:
      "Join the Karachi engineering team to build and maintain .NET products in an onsite, collaborative studio.",
    about:
      "You will work onsite in Karachi with senior engineers on production .NET applications. The role is a chance to grow as an Associate Developer: writing clean C# code, contributing to APIs and web apps, and learning how eForte ships client work with code review, testing, and delivery discipline.",
    responsibilities: [
      "Build and maintain features in C# and the .NET ecosystem.",
      "Contribute to APIs, services, and web applications with guidance from senior engineers.",
      "Write tests, fix bugs, and take part in code reviews.",
      "Collaborate onsite with design, QA, and project teams on client delivery.",
    ],
    requirements: [
      "Foundations in C# and .NET, from coursework, internships, or early professional work.",
      "Familiarity with SQL, Git, and REST APIs.",
      "Willingness to work onsite in Karachi, full-time.",
      "Clear communication and a habit of asking good questions.",
    ],
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    location: "Karachi",
    type: "Full-time",
    workMode: "Hybrid",
    department: "Data & AI",
    summary:
      "Build the pipelines and data layer that let products, analytics, and AI run from one source of truth, in a Karachi hybrid role.",
    about:
      "You will design and operate data platforms for clients who need reliable ingest, modeling, and access. This is a hybrid role based in Karachi: time in studio with the team, plus focused remote days. The work includes pipelines, warehouse or lakehouse design, and the contracts that keep AI and product teams aligned.",
    responsibilities: [
      "Build and maintain batch and streaming pipelines on cloud data platforms.",
      "Model data for analytics, product features, and AI workloads.",
      "Improve data quality, observability, and documentation.",
      "Work with AI and product teams so downstream use cases stay trustworthy.",
    ],
    requirements: [
      "4+ years in data engineering on cloud platforms such as AWS, GCP, or Azure.",
      "Strong SQL plus Python or Spark experience.",
      "Familiarity with warehouses, orchestration, and data quality tooling.",
      "Ability to work hybrid from Karachi with regular onsite collaboration.",
    ],
  },
];

// Previous listings preserved for possible future reuse:
// senior-ai-engineer, product-designer, devops-engineer, qa-engineer, project-manager
// and the earlier Wilmington Data Engineer opening.

export function getJobOpening(id: string) {
  return jobOpenings.find((job) => job.id === id);
}
