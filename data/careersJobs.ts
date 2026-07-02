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
    department: "Artificial Intelligence",
  },
  {
    id: "product-designer",
    title: "Product Designer",
    location: "Montevideo, Uruguay · Hybrid",
    type: "Full-time",
    department: "Product Design",
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    location: "New York, NY · Hybrid",
    type: "Full-time",
    department: "Data",
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    location: "Chicago, IL · Remote",
    type: "Full-time",
    department: "Cloud, SRE & DevOps",
  },
  {
    id: "qa-engineer",
    title: "QA Engineer",
    location: "Cali, Colombia · On-site",
    type: "Full-time",
    department: "Quality Assurance",
  },
  {
    id: "embedded-engineer",
    title: "Embedded Software Engineer",
    location: "Nashville, TN · Hybrid",
    type: "Full-time",
    department: "Embedded Engineering",
  },
];
