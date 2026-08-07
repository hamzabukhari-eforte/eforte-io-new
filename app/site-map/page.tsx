import SitemapPageSection from "@/components/sections/SitemapPageSection";

export const metadata = {
  title: "Sitemap | eForte",
  description:
    "Browse all public pages on the eForte website. View the XML sitemap for search engines.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-default text-white">
      <SitemapPageSection />
    </main>
  );
}
