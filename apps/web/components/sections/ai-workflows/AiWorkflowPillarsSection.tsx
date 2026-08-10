"use client";

import Link from "next/link";
import { pillarLinks, type AiWorkflowDomain } from "@/data/ai-workflows";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowPillarsSection({
  domain,
}: {
  domain: AiWorkflowDomain;
}) {
  const tiles = [
    {
      ...pillarLinks.agenticOrchestration,
      body: domain.pillars.agenticOrchestration,
    },
    {
      ...pillarLinks.velocityAi,
      body: domain.pillars.velocityAi,
    },
    {
      ...pillarLinks.foundationalDataLayer,
      body: domain.pillars.foundationalDataLayer,
    },
  ];

  return (
    <section className={styles.pillars}>
      <div className={styles.content}>
        <AiWorkflowsReveal
          className={styles.pillarsHead}
          direction="bottom"
          duration={400}
        >
          <h2>How eForte delivers this domain</h2>
          <div className={styles.chips} aria-label="Workflows">
            {domain.workflowChips.map((chip) => (
              <span key={chip} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        </AiWorkflowsReveal>

        <div className={styles.pillarsGrid}>
          {tiles.map((tile) => (
            <AiWorkflowsReveal
              key={tile.href}
              direction="bottom"
              duration={400}
              mobileDuration={300}
            >
              <Link href={tile.href} className={styles.pillarCard}>
                <h4>{tile.label}</h4>
                <p>{tile.body}</p>
                <span className={styles.pillarLink}>
                  Explore
                  <span aria-hidden style={{ marginLeft: 4 }}>
                    →
                  </span>
                </span>
              </Link>
            </AiWorkflowsReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
