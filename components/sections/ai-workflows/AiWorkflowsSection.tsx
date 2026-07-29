"use client";

import type { AiWorkflowDomain } from "@/data/ai-workflows";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

function padNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function AiWorkflowsSection({
  domain,
}: {
  domain: AiWorkflowDomain;
}) {
  return (
    <section className={styles.workflows}>
      <div className={styles.content}>
        <AiWorkflowsReveal
          className={styles.workflowsHead}
          direction="bottom"
          duration={400}
        >
          <p className={styles.workflowsHeadLabel}>Capabilities in action</p>
          <h2>The Workflows</h2>
        </AiWorkflowsReveal>

        {domain.workflows.map((workflow, index) => (
          <AiWorkflowsReveal
            key={workflow.title}
            direction="bottom"
            duration={400}
            mobileDuration={300}
          >
            <article className={styles.workflowCard}>
              <p className={styles.workflowNumber} aria-hidden>
                {padNumber(index)}
              </p>
              <h3 className={styles.workflowTitle}>{workflow.title}</h3>
              <div className={styles.workflowTriad}>
                <div className={styles.workflowBlock}>
                  <h5>The Challenge</h5>
                  <p>{workflow.challenge}</p>
                </div>
                <div className={styles.workflowBlock}>
                  <h5>The eForte Solution</h5>
                  <p>{workflow.solution}</p>
                </div>
                <div className={styles.workflowBlock}>
                  <h5>Impact</h5>
                  <p>{workflow.impact}</p>
                </div>
              </div>
            </article>
          </AiWorkflowsReveal>
        ))}
      </div>
    </section>
  );
}
