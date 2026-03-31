import { notFound } from "next/navigation";
import IntroSection from "@/components/sections/case-studies/IntroSection";
import TechnologiesSection from "@/components/sections/case-studies/TechnologiesSection";
import DetailsSection from "@/components/sections/case-studies/DetailsSection";
import BForm from "@/components/sections/case-studies/BForm";
import { caseStudies } from "@/data/caseStudies";

export const dynamicParams = true;

export function generateStaticParams() {
  return caseStudies.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const legacyToNewSlug: Record<string, string> = {
    avant: "krank",
    shopify: "investment-markets",
    "tabula-rasa": "oddysee",
    "computer-vision": "prism",
    onepay: "scheduling-engine",
    myrow: "sellsmart",
    youscience: "validatr",
  };

  const { slug: rawSlug } = await params;
  const incomingSlug =
    typeof rawSlug === "string" ? rawSlug.trim().toLowerCase() : "";

  if (!incomingSlug) return notFound();
  const normalizedSlug = legacyToNewSlug[incomingSlug] ?? incomingSlug;

  const p = caseStudies.find((item) => item.slug === normalizedSlug);

  if (!p) return notFound();

  return (
    <div className="relative">
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

      <DetailsSection
        title={p.Details.title}
        theme={p.Details.theme}
        sections={p.Details.sections}
      />

      {/* <BForm /> */}
    </div>
  );
}

