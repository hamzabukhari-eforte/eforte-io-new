import { notFound } from "next/navigation";
import { InsightsHeroSection, InsightsPostsSection } from "@/components/sections/insights";
import {
  findCategoryBySlug,
  getInsightCategories,
  getInsightPosts,
} from "@/lib/strapi/insights";

export async function generateStaticParams() {
  const categories = await getInsightCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categories = await getInsightCategories();
  const category = findCategoryBySlug(slug, categories);
  if (!category) return { title: "Insights | eForte" };
  return {
    title: `${category.title} | Insights | eForte`,
    description: `Expert insights in ${category.title} from the eForte team.`,
  };
}

export default async function InsightsCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [allPosts, categories] = await Promise.all([getInsightPosts(), getInsightCategories()]);
  const category = findCategoryBySlug(slug, categories);
  if (!category) notFound();

  return (
    <main className="min-h-screen bg-black text-white">
      <InsightsHeroSection categories={categories} />
      <InsightsPostsSection
        key={slug}
        categorySlug={slug}
        categoryTitle={category.title}
        allPosts={allPosts}
      />
    </main>
  );
}
