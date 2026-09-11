import { notFound } from "next/navigation";
import {
  FoundationalDataLayerCTASection,
  FoundationalDataLayerInsightBodySection,
  FoundationalDataLayerInsightHeroSection,
} from "@/components/sections/foundational-data-layer";
import {
  getFoundationalDataInsightBySlug,
  getFoundationalDataInsightSlugs,
} from "@/data/foundationalDataInsights";

export function generateStaticParams() {
  return getFoundationalDataInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getFoundationalDataInsightBySlug(slug);
  if (!article) return { title: "Insight | eForte" };

  return {
    title: `${article.title} | eForte`,
    description: article.excerpt,
  };
}

export default async function FoundationalDataLayerInsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getFoundationalDataInsightBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <FoundationalDataLayerInsightHeroSection article={article} />
      <FoundationalDataLayerInsightBodySection article={article} />
      <FoundationalDataLayerCTASection />
    </main>
  );
}
