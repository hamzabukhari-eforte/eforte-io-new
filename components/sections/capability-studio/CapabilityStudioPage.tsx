import CapabilityStudioHero from "./CapabilityStudioHero";
import CapabilityStudioFeatures from "./CapabilityStudioFeatures";
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
      <CapabilityStudioMidCta
        accent={content.accent}
        midCta={content.midCta}
        graphicSrc={content.hero.graphicSrc}
      />
    </main>
  );
}
