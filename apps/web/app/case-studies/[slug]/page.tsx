import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IntroSection from "@/components/sections/case-studies/IntroSection";
import TechnologiesSection from "@/components/sections/case-studies/TechnologiesSection";
import DetailsSection from "@/components/sections/case-studies/DetailsSection";
import CaseStudyNarrative from "@/components/sections/case-studies/CaseStudyNarrative";
// import BForm from "@/components/sections/case-studies/BForm";
import { caseStudies } from "@/data/caseStudies";
import { impactStudyNarratives } from "@/data/impactStudyNarratives";
import { trimMetaDescription } from "@/lib/seo/meta";
import JsonLd from "@/components/atoms/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonLd";

export const dynamicParams = true;

const legacyToNewSlug: Record<string, string> = {
  avant: "krank",
  shopify: "investment-markets",
  "tabula-rasa": "oddysee",
  "computer-vision": "prism",
  onepay: "scheduling-engine",
  myrow: "sellsmart",
  youscience: "validatr",
};

function resolveCaseStudySlug(rawSlug: string): string {
  const incomingSlug = rawSlug.trim().toLowerCase();
  return legacyToNewSlug[incomingSlug] ?? incomingSlug;
}

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug: rawSlug } = await params;
  if (!rawSlug) return { title: "Case Study | eForte" };

  const normalizedSlug = resolveCaseStudySlug(rawSlug);
  const study = caseStudies.find((item) => item.slug === normalizedSlug);
  if (!study) return { title: "Case Study | eForte" };

  const title = `${study.introSection.title} Case Study | eForte`;
  const description = trimMetaDescription(study.introSection.description);
  const canonical = `/case-studies/${normalizedSlug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: rawSlug } = await params;
  const incomingSlug =
    typeof rawSlug === "string" ? rawSlug.trim().toLowerCase() : "";

  if (!incomingSlug) return notFound();
  const normalizedSlug = resolveCaseStudySlug(incomingSlug);

  const p = caseStudies.find((item) => item.slug === normalizedSlug);

  if (!p) return notFound();

  const narrative = impactStudyNarratives[normalizedSlug];
  const breadcrumb = breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Impact Studies", path: "/impact-studies" },
    {
      name: p.introSection.title,
      path: `/case-studies/${normalizedSlug}`,
    },
  ]);

  return (
    <div className="relative">
      <JsonLd data={breadcrumb} />
      <IntroSection
        title={p.introSection.title}
        description={p.introSection.description}
        image={p.introSection.image}
        link={p.introSection.link}
        theme={p.introSection.theme}
      />

      <TechnologiesSection
        theme={p.technologySection.theme}
        frontend={p.technologySection.frontEnd}
        backend={p.technologySection.BackEnd}
        database={p.technologySection.Database}
        others={p.technologySection.Others}
      />

      {narrative ? (
        <CaseStudyNarrative
          content={narrative}
          theme={p.introSection.theme}
        />
      ) : (
        <DetailsSection
          title={p.Details.title}
          theme={p.Details.theme}
          sections={p.Details.sections}
        />
      )}

      {/* <BForm /> */}
    </div>
  );
}
