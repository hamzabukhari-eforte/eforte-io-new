import { pageMeta } from "@/lib/seo/meta";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AiWorkflowPage } from "@/components/sections/ai-workflows";
import {
  aiWorkflowSlugs,
  getAiWorkflowBySlug,
} from "@/data/ai-workflows";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return aiWorkflowSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const domain = getAiWorkflowBySlug(slug);
  if (!domain) {
    return { title: "AI Workflows | eForte" };
  }
  return pageMeta({
    title: `${domain.label} | AI Workflows | eForte`,
    description: domain.body,
    path: `/ai-workflows/${slug}`,
  });
}

export default async function AiWorkflowDomainPage({ params }: PageProps) {
  const { slug } = await params;
  const domain = getAiWorkflowBySlug(slug);
  if (!domain) notFound();
  return <AiWorkflowPage domain={domain} />;
}
