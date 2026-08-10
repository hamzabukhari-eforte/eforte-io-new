"use client";

import Link from "next/link";
import ContactCTA from "@/components/atoms/ContactCTA";
import { aiWorkflowsOverview } from "@/data/ai-workflows";
import AiWorkflowsReveal from "./AiWorkflowsReveal";
import styles from "./aiWorkflows.module.css";

export default function AiWorkflowsDomainsSection() {
  const {
    domainsLabel,
    domainsTitle,
    domainsDescription,
    cards,
  } = aiWorkflowsOverview;

  return (
    <section className={styles.collection}>
      <div className={`${styles.content} ${styles.collectionContent}`}>
        <div className={styles.collectionLeft}>
          <AiWorkflowsReveal
            direction="bottom"
            duration={500}
            mobileDuration={500}
          >
            <p className={styles.collectionLabel}>{domainsLabel}</p>
            <h2>{domainsTitle}</h2>
            <p className={styles.collectionDescription}>{domainsDescription}</p>
            <ContactCTA className={styles.buttonBlack}>Contact Us</ContactCTA>
          </AiWorkflowsReveal>
        </div>

        <div className={styles.collectionRight}>
          <ul className={styles.domainsList}>
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <AiWorkflowsReveal
                  key={card.href}
                  as="li"
                  direction="bottom"
                  duration={300}
                  mobileDuration={300}
                >
                  <Link href={card.href} className="block">
                    <div className={styles.domainCard}>
                      <div
                        className={styles.domainHover}
                        style={{ background: card.hoverGradient }}
                        aria-hidden
                      />
                      <div
                        className={styles.domainIcon}
                        style={{ color: card.iconColor }}
                      >
                        <Icon style={{ width: "1em", height: "1em" }} />
                      </div>
                      <div className={styles.domainText}>
                        <h4>{card.title}</h4>
                        <p className={styles.domainTagline}>{card.tagline}</p>
                        <p>{card.description}</p>
                        <span className={styles.learnMore}>
                          Learn more
                          <span className={styles.learnMoreArrow} aria-hidden>
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </AiWorkflowsReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
