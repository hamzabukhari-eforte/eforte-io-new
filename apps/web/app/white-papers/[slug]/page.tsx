import { pageMeta } from "@/lib/seo/meta";
import { notFound } from "next/navigation";
import FinancialServicesWhitePaperArticleSection from "@/components/sections/financial-services/FinancialServicesWhitePaperArticleSection";
import WhitePaperCtaSection from "@/components/sections/white-papers/WhitePaperCtaSection";
import WhitePaperHeroSection from "@/components/sections/white-papers/WhitePaperHeroSection";
import JsonLd from "@/components/atoms/JsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonLd";
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

  return pageMeta({
    title: `${paper.title} | eForte`,
    description: paper.description,
    path: `/white-papers/${slug}`,
    type: "article",
  });
}

export default async function WhitePaperSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getAiAdoptionWhitePaperBySlug(slug);
  if (!paper) notFound();

  const path = `/white-papers/${slug}`;

  return (
    <main className="min-h-screen bg-white text-default">
      <JsonLd
        data={[
          articleJsonLd({
            title: paper.title,
            description: paper.description,
            path,
            datePublished: paper.date,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: paper.title, path },
          ]),
        ]}
      />
      <WhitePaperHeroSection paper={paper} />
      <FinancialServicesWhitePaperArticleSection paper={paper} />
      <WhitePaperCtaSection />
    </main>
  );
}
