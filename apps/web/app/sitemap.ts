import type { MetadataRoute } from "next";
import { getSitemapPaths } from "@/data/sitemap";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://eforte.io";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return getSitemapPaths().map((path) => ({
    url: `${siteUrl}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
