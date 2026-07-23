import { caseStudies } from "./caseStudies";

export type SitemapLink = {
  label: string;
  href: string;
};

export type SitemapGroup = {
  title: string;
  links: SitemapLink[];
};

/** Shared site map used by /site-map page and sitemap.xml */
export const sitemapGroups: SitemapGroup[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About eForte", href: "/about-us" },
      { label: "Locations", href: "/locations" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
      { label: "Impact Studies", href: "/impact-studies" },
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
        label: "Embedded Engineering",
        href: "/capabilities/embedded-engineering",
      },
      {
        label: "Product Management",
        href: "/capabilities/product-management",
      },
      { label: "Blockchain", href: "/capabilities/blockchain" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Banking", href: "/industries/banking" },
      { label: "Financial Services", href: "/industries/financial-services" },
      { label: "Health & Wellbeing", href: "/industries/healthcare" },
      { label: "Insurance", href: "/industries/insurance" },
      {
        label: "Media & Entertainment",
        href: "/industries/media-entertainment",
      },
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
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Sitemap", href: "/site-map" },
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
