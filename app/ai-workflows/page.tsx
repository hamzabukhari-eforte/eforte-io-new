import {
  AiWorkflowsDomainsSection,
  AiWorkflowsOverviewHeroSection,
} from "@/components/sections/ai-workflows";
import styles from "@/components/sections/ai-workflows/aiWorkflows.module.css";

export const metadata = {
  title: "AI Workflows | eForte",
  description:
    "AI-driven enterprise domain capabilities where AI meets execution—customer service, sales, finance, HR, operations, and project delivery workflows.",
};

export default function AiWorkflowsOverviewPage() {
  return (
    <main className={styles.page}>
      <AiWorkflowsOverviewHeroSection />
      <AiWorkflowsDomainsSection />
    </main>
  );
}
