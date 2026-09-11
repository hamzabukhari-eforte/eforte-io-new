import { notFound } from "next/navigation";
import {
  VelocityAIFooterCTASection,
  VelocityAIInsightBodySection,
  VelocityAIInsightHeroSection,
} from "@/components/sections/velocity-ai";
import {
  getVelocityAIInsightBySlug,
  getVelocityAIInsightSlugs,
} from "@/data/velocityAIInsights";

export function generateStaticParams() {
  return getVelocityAIInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getVelocityAIInsightBySlug(slug);
  if (!article) return { title: "Insight | eForte" };

  return {
    title: `${article.title} | eForte`,
    description: article.excerpt,
  };
}

export default async function VelocityAIInsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getVelocityAIInsightBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <VelocityAIInsightHeroSection article={article} />
      <VelocityAIInsightBodySection article={article} />
      <VelocityAIFooterCTASection />
    </main>
  );
}
