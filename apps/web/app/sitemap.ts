import type { MetadataRoute } from "next";
import { getSitemapPaths } from "@/data/sitemap";
import { getAllInsightSlugs } from "@/lib/strapi/insights";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticPaths = getSitemapPaths();
  const blogSlugs = await getAllInsightSlugs();
  const blogPaths = blogSlugs.map((slug) => `/blog/${slug}`);

  const allPaths = Array.from(new Set([...staticPaths, ...blogPaths]));

  return allPaths.map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency:
      path === "/" ? "weekly" : path.startsWith("/blog/") ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/blog/")
          ? 0.7
          : path.split("/").length <= 2
            ? 0.8
            : 0.6,
  }));
}
