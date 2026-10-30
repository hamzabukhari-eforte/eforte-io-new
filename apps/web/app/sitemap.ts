import type { MetadataRoute } from "next";
import { getSitemapPaths } from "@/data/sitemap";
import { getAllInsightSlugs } from "@/lib/strapi/insights";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";

function changeFrequencyFor(
  path: string,
): NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]> {
  if (path === "/" || path.startsWith("/blog/")) return "weekly";
  return "monthly";
}

function priorityFor(path: string): number {
  if (path === "/") return 1;
  if (path.startsWith("/blog/")) return 0.7;
  if (path.split("/").length <= 2) return 0.8;
  return 0.6;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = getSitemapPaths();
  const blogSlugs = await getAllInsightSlugs();
  const blogPaths = blogSlugs.map((slug) => `/blog/${slug}`);

  const allPaths = Array.from(new Set([...staticPaths, ...blogPaths]));

  return allPaths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: changeFrequencyFor(path),
    priority: priorityFor(path),
  }));
}
