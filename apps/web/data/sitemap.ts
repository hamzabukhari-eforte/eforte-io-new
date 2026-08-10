import { caseStudies } from "./caseStudies";

export type SitemapLink = {
  label: string;
  href: string;
};

export type SitemapGroup = {
  title: string;
  links: SitemapLink[];
  /** When true, long lists render in a scrollable column (like the reference sitemap) */
  scrollable?: boolean;
};

/** Shared site map used by /sitemap page and sitemap.xml */
export const sitemapGroups: SitemapGroup[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About eForte", href: "/about-us" },
      { label: "Technology Partners", href: "/technology-partners" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
      { label: "Impact Studies", href: "/impact-studies" },
      { label: "Locations", href: "/locations" },
      { label: "Databricks", href: "/databricks" },
    ],
  },
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
      {
        label: "Artificial Intelligence",
        href: "/capabilities/artificial-intelligence",
      },
      { label: "Data", href: "/capabilities/data" },
      { label: "App Solutions", href: "/capabilities/app-solutions" },
      { label: "Cloud, SRE, & DevOps", href: "/capabilities/cloud-sre" },
      { label: "Cybersecurity", href: "/capabilities/cybersecurity" },
      {
        label: "Platform Engineering",
        href: "/capabilities/platform-engineering",
      },
      { label: "Quality Assurance", href: "/capabilities/quality-assurance" },
      {
        label: "Product Management",
        href: "/capabilities/product-management",
      },
      { label: "Blockchain", href: "/capabilities/blockchain" },
      {
        label: "Staff Augmentation: Dedicated Resource Hiring",
        href: "/capabilities/staff-augmentation",
      },
      // Embedded Engineering preserved for future reuse (not in mega menu DOC):
      // {
      //   label: "Embedded Engineering",
      //   href: "/capabilities/embedded-engineering",
      // },
    ],
  },
  {
    title: "AI Workflows",
    links: [
      { label: "AI Workflows Overview", href: "/ai-workflows" },
      {
        label: "Customer Service & Support",
        href: "/ai-workflows/customer-service",
      },
      { label: "Sales & Marketing", href: "/ai-workflows/sales-marketing" },
      {
        label: "Financial Operations",
        href: "/ai-workflows/financial-operations",
      },
      { label: "Human Resources", href: "/ai-workflows/human-resources" },
      {
        label: "Operations & Compliance",
        href: "/ai-workflows/operations-compliance",
      },
      {
        label: "Project Management & Data",
        href: "/ai-workflows/project-management-data",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Industries Overview", href: "/industries" },
      { label: "Health & Wellbeing", href: "/industries/healthcare" },
      { label: "Finance", href: "/industries/financial-services" },
      { label: "Insurance", href: "/industries/insurance" },
      { label: "Automobile", href: "/industries/automobile" },
      { label: "Heavy Industries", href: "/industries/heavy-industries" },
      { label: "BPO & Shared Services", href: "/industries/bpo-shared-services" },
      { label: "Hospitality", href: "/industries/hospitality" },
      // Legacy industries preserved for future reuse:
      // { label: "Banking", href: "/industries/banking" },
      // {
      //   label: "Media & Entertainment",
      //   href: "/industries/media-entertainment",
      // },
      // {
      //   label: "Hi-Tech & Semiconductors",
      //   href: "/industries/embedded-engineering",
      // },
    ],
  },
  {
    title: `Impact Studies (${caseStudies.length})`,
    scrollable: true,
    links: [
      { label: "All Impact Studies", href: "/impact-studies" },
      ...caseStudies.map((study) => ({
        label: study.introSection.title,
        href: `/case-studies/${study.slug}`,
      })),
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

/** Flat list of unique paths for sitemap.xml */
export function getSitemapPaths(): string[] {
  const paths = new Set<string>();
  for (const group of sitemapGroups) {
    for (const link of group.links) {
      if (link.href.startsWith("/") && !link.href.includes("#")) {
        paths.add(link.href);
      }
    }
  }
  return Array.from(paths).sort();
}
