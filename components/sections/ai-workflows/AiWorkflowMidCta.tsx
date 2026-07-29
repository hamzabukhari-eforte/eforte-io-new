"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import type { AiWorkflowDomain } from "@/data/ai-workflows";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowMidCta({
  domain,
}: {
  domain: AiWorkflowDomain;
}) {
  return (
    <section className={styles.midCta}>
      <div className={styles.content}>
        <AiWorkflowsReveal direction="bottom" duration={400}>
          <div className={styles.midCtaInner}>
            <div className={styles.midCtaOrb} aria-hidden />
            <div className={styles.midCtaCopy}>
              <h2>
                Ready to modernize{" "}
                <span>{domain.label}</span>?
              </h2>
              <p>
                Let&apos;s map agentic workflows to your stack and ship measurable
                outcomes with Velocity AI, Agentic Orchestration, and a solid
                data foundation.
              </p>
            </div>
            <div className={styles.midCtaActions}>
              <ContactCTA className={styles.buttonPinkHoverWhite}>
                Contact Us
              </ContactCTA>
            </div>
          </div>
        </AiWorkflowsReveal>
      </div>
    </section>
  );
}
