import { caseStudies } from "./caseStudies";

export type SiteNavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: SiteNavLink[];
};

/** Footer columns mirror navbar mega-menu items (same order as top nav). */
export const footerColumns: FooterColumn[] = [
  {
    title: "AI Pillars",
    links: [
      { label: "Velocity AI", href: "/velocity-ai" },
      { label: "Agentic Orchestration", href: "/agentic-orchestration" },
      { label: "Foundational Data Layer", href: "/foundational-data-layer" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "Capabilities Overview", href: "/capabilities" },
      { label: "Product Design", href: "/capabilities/product-design" },
      { label: "Artificial Intelligence", href: "/capabilities/artificial-intelligence" },
      { label: "Data", href: "/capabilities/data" },
      { label: "App Solutions", href: "/capabilities/app-solutions" },
      { label: "Cloud, SRE, & DevOps", href: "/capabilities/cloud-sre" },
      {
        label: "Staff Augmentation - Dedicated Resource Hiring",
        href: "/capabilities/staff-augmentation",
      },
      // Legacy studios preserved for future reuse (also commented in navbar):
      // { label: "Cybersecurity", href: "/capabilities/cybersecurity" },
      // { label: "Platform Engineering", href: "/capabilities/platform-engineering" },
      // { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      // { label: "Embedded Engineering", href: "/capabilities/embedded-engineering" },
      // { label: "Product Management", href: "/capabilities/product-management" },
      // { label: "Blockchain", href: "/capabilities/blockchain" },
    ],
  },
  {
    title: "AI Workflows",
    links: [
      { label: "AI Workflows Overview", href: "/ai-workflows" },
      { label: "Customer Service & Support", href: "/ai-workflows/customer-service" },
      { label: "Sales & Marketing", href: "/ai-workflows/sales-marketing" },
      { label: "Financial Operations", href: "/ai-workflows/financial-operations" },
      { label: "Human Resources", href: "/ai-workflows/human-resources" },
      { label: "Operations & Compliance", href: "/ai-workflows/operations-compliance" },
      { label: "Project Management & Data", href: "/ai-workflows/project-management-data" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Industries Overview", href: "/industries" },
      { label: "Health & Wellbeing", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/financial-services" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Automobile", href: "#" },
      { label: "Heavy Industries", href: "#" },
      { label: "BPO & Shared Services", href: "#" },
      { label: "Hospitality", href: "#" },
      // Legacy industries preserved for future reuse (also commented in navbar):
      // { label: "Banking", href: "/industries/banking" },
      // { label: "Media & Entertainment", href: "/industries/media-entertainment" },
      // {
      //   label: "Hi-Tech & Semiconductors",
      //   href: "/industries/embedded-engineering",
      // },
    ],
  },
  {
    title: "Impact Studies",
    links: [
      { label: "All Impact Studies", href: "/impact-studies" },
      ...caseStudies.map((study) => ({
        label: study.introSection.title,
        href: `/case-studies/${study.slug}`,
      })),
    ],
  },
  {
    title: "Insights",
    links: [
      { label: "Insights", href: "/blog" },
      // Key Categories (mega menu)
      { label: "AccelerateAI", href: "/blog" },
      { label: "Data & AI", href: "/blog" },
      { label: "Agentic Factory", href: "/blog" },
      { label: "Cybersecurity", href: "/blog" },
      { label: "Databricks", href: "/blog" },
      // More Insights (mega menu)
      { label: "White Papers", href: "/blog" },
      { label: "Events", href: "/blog" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About eForte", href: "/about-us" },
      { label: "Partners", href: "#" },
      { label: "Careers", href: "/careers" },
      // Legacy company items preserved for future reuse (also commented in navbar):
      // { label: "Locations", href: "/locations" },
      // { label: "Events & Webinars", href: "#" },
      // { label: "Press & Announcements", href: "#" },
      // { label: "Diversity & Inclusion", href: "#" },
      // { label: "Trust & Security", href: "#" },
    ],
  },
  // Legacy Databricks column preserved for future reuse (also commented in navbar):
  // {
  //   title: "Databricks",
  //   links: [
  //     { label: "Select Tier Partner", href: "/databricks" },
  //     { label: "200+ Certified Databricks Engineers", href: "/databricks" },
  //     { label: "20+ Years of Data Experience", href: "/databricks" },
  //   ],
  // },
];
