import { pageMeta } from "@/lib/seo/meta";
import SitemapPageSection from "@/components/sections/SitemapPageSection";

export const metadata = pageMeta({
  title: "Sitemap | eForte",
  description: "Browse all public pages on the eForte website. View the XML sitemap for search engines.",
  // Public URL is /sitemap (rewrite from next.config); keep file at site-map to avoid clashing with sitemap.ts
  path: "/sitemap",
});

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <SitemapPageSection />
    </main>
  );
}
