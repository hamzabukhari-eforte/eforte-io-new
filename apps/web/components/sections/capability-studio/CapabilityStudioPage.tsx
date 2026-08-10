import CapabilityStudioHero from "./CapabilityStudioHero";
import CapabilityStudioFeatures from "./CapabilityStudioFeatures";
import CapabilityStudioProprietaryTechSection from "./CapabilityStudioProprietaryTechSection";
import CapabilityStudioFaqSection from "./CapabilityStudioFaqSection";
import CapabilityStudioMidCta from "./CapabilityStudioMidCta";
import type { StudioPageContent } from "@/data/capabilities/types";

type CapabilityStudioPageProps = {
  content: StudioPageContent;
};

export default function CapabilityStudioPage({
  content,
}: CapabilityStudioPageProps) {
  return (
    <main className="min-h-screen bg-white text-default">
      <CapabilityStudioHero accent={content.accent} hero={content.hero} />
      <CapabilityStudioFeatures
        accent={content.accent}
        features={content.features}
      />
      {content.proprietaryTech && content.proprietaryTech.length > 0 ? (
        <CapabilityStudioProprietaryTechSection
          accent={content.accent}
          items={content.proprietaryTech}
        />
      ) : null}
      {content.faqs && content.faqs.length > 0 ? (
        <CapabilityStudioFaqSection
          faqs={content.faqs}
          subtitle={content.faqsSubtitle}
        />
      ) : null}
      <CapabilityStudioMidCta
        accent={content.accent}
        midCta={content.midCta}
        graphicSrc={content.hero.graphicSrc}
      />
    </main>
  );
}
