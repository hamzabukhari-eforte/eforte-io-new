import type { AiWorkflowDomain } from "@/data/ai-workflows";
import AiWorkflowDetailHero from "./AiWorkflowDetailHero";
// AiWorkflowMidCta preserved for future reuse — layout already includes get-in-touch CTA
// import AiWorkflowMidCta from "./AiWorkflowMidCta";
import AiWorkflowPillarsSection from "./AiWorkflowPillarsSection";
import AiWorkflowsSection from "./AiWorkflowsSection";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowPage({
  domain,
}: {
  domain: AiWorkflowDomain;
}) {
  return (
    <main className={styles.page}>
      <AiWorkflowDetailHero domain={domain} />
      <AiWorkflowsSection domain={domain} />
      <AiWorkflowPillarsSection domain={domain} />
      {/* Mid CTA removed — shared layout already provides get-in-touch */}
      {/* <AiWorkflowMidCta domain={domain} /> */}
    </main>
  );
}
