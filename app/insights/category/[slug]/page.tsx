import { notFound } from "next/navigation";
import { InsightsHeroSection, InsightsPostsSection } from "@/components/sections/insights";
import { INSIGHT_CATEGORIES, categoryToSlug, slugToCategory } from "@/components/sections/insights/data";

export function generateStaticParams() {
  return INSIGHT_CATEGORIES.map((category) => ({
    slug: categoryToSlug(category),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) return { title: "Insights | eForte" };
  return {
    title: `${category} | Insights | eForte`,
    description: `Expert insights in ${category} from the eForte team.`,
  };
}

export default async function InsightsCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = slugToCategory(slug);
  if (!category) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <InsightsHeroSection />
      <InsightsPostsSection key={slug} categorySlug={slug} />
    </main>
  );
}
