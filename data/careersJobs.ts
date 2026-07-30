export type JobOpening = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
};

export const jobOpenings: JobOpening[] = [
  {
    id: "senior-ai-engineer",
    title: "Senior AI Engineer",
    location: "Austin, TX · Remote",
    type: "Full-time",
    department: "Data & AI",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "San Jose, CA · Hybrid",
    type: "Full-time",
    department: "Product Design",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    location: "Wilmington, DE · Hybrid",
    type: "Full-time",
    department: "Data & AI",
  },
  {
    id: "devops-engineer",
    title: "Cloud & DevOps Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Cloud & DevOps",
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    location: "Remote",
    type: "Full-time",
    department: "Quality Assurance",
  },
  {
    id: "project-manager",
    title: "Project Manager",
    location: "Austin, TX · Hybrid",
    type: "Full-time",
    department: "Project Management",
  },
];
