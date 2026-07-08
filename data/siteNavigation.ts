import { caseStudies } from "./caseStudies";

export type SiteNavLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: SiteNavLink[];
};

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
      { label: "Product Design", href: "/capabilities/product-design" },
      { label: "Artificial Intelligence", href: "#capabilities" },
      { label: "Data", href: "#capabilities" },
      { label: "App Solutions", href: "#capabilities" },
      { label: "Cloud, SRE, & DevOps", href: "#capabilities" },
      { label: "Cybersecurity", href: "#capabilities" },
      { label: "Platform Engineering", href: "#capabilities" },
      { label: "Quality Assurance", href: "#capabilities" },
      { label: "Embedded Engineering", href: "/industries/embedded-engineering" },
      { label: "Product Management", href: "#capabilities" },
      { label: "Blockchain", href: "#capabilities" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banking", href: "/industries/banking" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Health & Wellbeing", href: "/industries/healthcare" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Media & Entertainment", href: "/industries/media-entertainment" },
      {
        label: "Hi-Tech & Semiconductors",
        href: "/industries/embedded-engineering",
      },
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
      { label: "AccelerateAI", href: "/blog" },
      { label: "Data & AI", href: "/blog" },
      { label: "Agentic Factory", href: "/blog" },
      { label: "Cybersecurity", href: "/blog" },
      { label: "Databricks", href: "/blog" },
      { label: "White Papers", href: "/blog" },
      { label: "Events", href: "/blog" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "About eForte", href: "/about-us" },
      { label: "Locations", href: "/locations" },
      { label: "Careers", href: "/careers" },
      { label: "Events & Webinars", href: "#" },
      { label: "Press & Announcements", href: "#" },
      { label: "Diversity & Inclusion", href: "#" },
      { label: "Trust & Security", href: "#" },
    ],
  },
  {
    title: "Databricks",
    links: [
      { label: "Databricks Solutions", href: "#databricks" },
      { label: "Select Tier Partner", href: "#databricks" },
      { label: "Certified Databricks Engineers", href: "#databricks" },
      { label: "20+ Years of Data Experience", href: "#databricks" },
    ],
  },
];
