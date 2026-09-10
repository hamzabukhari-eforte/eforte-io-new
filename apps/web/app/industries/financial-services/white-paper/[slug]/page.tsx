import { notFound } from "next/navigation";
import {
  FinancialServicesWhitePaperArticleSection,
  FinancialServicesWhitePaperCtaSection,
  FinancialServicesWhitePaperHeroSection,
} from "@/components/sections/financial-services";
import {
  getFinanceWhitePaperBySlug,
  getFinanceWhitePaperSlugs,
} from "@/data/industries/financialServicesWhitePaper";

export function generateStaticParams() {
  return getFinanceWhitePaperSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getFinanceWhitePaperBySlug(slug);
  if (!paper) return { title: "White Paper | eForte" };

  return {
    title: `${paper.title} | eForte`,
    description: paper.description,
  };
}

export default async function FinancialServicesWhitePaperSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getFinanceWhitePaperBySlug(slug);
  if (!paper) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesWhitePaperHeroSection paper={paper} />
      <FinancialServicesWhitePaperArticleSection paper={paper} />
      <FinancialServicesWhitePaperCtaSection />
    </main>
  );
}
