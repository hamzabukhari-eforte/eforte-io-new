import { notFound } from "next/navigation";
import FinancialServicesWhitePaperArticleSection from "@/components/sections/financial-services/FinancialServicesWhitePaperArticleSection";
import WhitePaperCtaSection from "@/components/sections/white-papers/WhitePaperCtaSection";
import WhitePaperHeroSection from "@/components/sections/white-papers/WhitePaperHeroSection";
import {
  getAiAdoptionWhitePaperBySlug,
  getAiAdoptionWhitePaperSlugs,
} from "@/data/whitePapers/aiAdoptionWhitePaper";

export function generateStaticParams() {
  return getAiAdoptionWhitePaperSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getAiAdoptionWhitePaperBySlug(slug);
  if (!paper) return { title: "White Paper | eForte" };

  return {
    title: `${paper.title} | eForte`,
    description: paper.description,
  };
}

export default async function WhitePaperSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getAiAdoptionWhitePaperBySlug(slug);
  if (!paper) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <WhitePaperHeroSection paper={paper} />
      <FinancialServicesWhitePaperArticleSection paper={paper} />
      <WhitePaperCtaSection />
    </main>
  );
}
