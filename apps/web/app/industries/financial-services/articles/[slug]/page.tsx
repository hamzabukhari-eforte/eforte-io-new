import { notFound } from "next/navigation";
import {
  FinancialServicesArticleBodySection,
  FinancialServicesArticleHeroSection,
  FinancialServicesWhitePaperCtaSection,
} from "@/components/sections/financial-services";
import {
  getFinanceArticleBySlug,
  getFinanceArticleSlugs,
} from "@/data/industries/financialServicesArticles";

export function generateStaticParams() {
  return getFinanceArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getFinanceArticleBySlug(slug);
  if (!article) return { title: "Article | eForte" };

  return {
    title: `${article.title} | eForte`,
    description: article.excerpt,
  };
}

export default async function FinancialServicesArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getFinanceArticleBySlug(slug);
  if (!article) notFound();

  return (
    <main className="min-h-screen bg-white text-default">
      <FinancialServicesArticleHeroSection article={article} />
      <FinancialServicesArticleBodySection article={article} />
      <FinancialServicesWhitePaperCtaSection />
    </main>
  );
}
