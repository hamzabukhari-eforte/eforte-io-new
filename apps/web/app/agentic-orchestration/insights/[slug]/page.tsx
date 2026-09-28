import { pageMeta } from "@/lib/seo/meta";
import { notFound } from "next/navigation";
import {
  AgenticOrchestrationFooterCTASection,
  AgenticOrchestrationInsightBodySection,
  AgenticOrchestrationInsightHeroSection,
} from "@/components/sections/agentic-orchestration";
import {
  getAgenticInsightBySlug,
  getAgenticInsightSlugs,
} from "@/data/agenticOrchestrationInsights";

export function generateStaticParams() {
  return getAgenticInsightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getAgenticInsightBySlug(slug);
  if (!article) return { title: "Insight | eForte" };

  return pageMeta({
    title: `${article.title} | eForte`,
    description: article.excerpt,
    path: `/agentic-orchestration/insights/${slug}`,
    type: "article",
  });
}

export default async function AgenticOrchestrationInsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getAgenticInsightBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <AgenticOrchestrationInsightHeroSection article={article} />
      <AgenticOrchestrationInsightBodySection article={article} />
      <AgenticOrchestrationFooterCTASection />
    </main>
  );
}
