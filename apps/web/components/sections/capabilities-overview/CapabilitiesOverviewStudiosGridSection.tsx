"use client";

import Link from "next/link";
import ContactCTA from "@/components/atoms/ContactCTA";
import { capabilityStudios } from "@/data/capabilitiesOverview";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewStudiosGridSection() {
  return (
    <section className={styles.collection}>
      <div className={`${styles.content} ${styles.collectionContent}`}>
        <div className={styles.collectionLeft}>
          <CapabilitiesReveal
            direction="bottom"
            duration={500}
            mobileDuration={500}
          >
            <p className={styles.collectionLabel}>Agile Solutions</p>
            <h2>eForte Studios</h2>
            <p className={styles.collectionDescription}>
              Each Studio provides focused expertise while working as part of a
              cohesive whole.
            </p>
            <ContactCTA className={styles.buttonBlack}>Contact Us</ContactCTA>
          </CapabilitiesReveal>
        </div>

        <div className={styles.collectionRight}>
          <ul className={styles.studiosList}>
            {capabilityStudios.map((studio) => {
              const Icon = studio.icon;
              const card = (
                <div className={styles.studioCard}>
                  <div
                    className={styles.studioHover}
                    style={{ background: studio.hoverGradient }}
                    aria-hidden
                  />
                  <div
                    className={styles.studioIcon}
                    style={{ color: studio.iconColor }}
                  >
                    <Icon style={{ width: "1em", height: "1em" }} />
                  </div>
                  <div className={styles.studioText}>
                    <h4>{studio.title}</h4>
                    <p>
                      {studio.descriptionLines ? (
                        studio.descriptionLines.map((line) => (
                          <span key={line}>{line}</span>
                        ))
                      ) : (
                        studio.description
                      )}
                    </p>
                    {studio.href ? (
                      <span className={styles.learnMore}>
                        Learn more
                        <span className={styles.learnMoreArrow} aria-hidden>
                          →
                        </span>
                      </span>
                    ) : null}
                  </div>
                </div>
              );

              return (
                <CapabilitiesReveal
                  key={studio.title}
                  as="li"
                  direction="bottom"
                  duration={300}
                  mobileDuration={300}
                >
                  {studio.href ? (
                    <Link href={studio.href} className="block">
                      {card}
                    </Link>
                  ) : (
                    card
                  )}
                </CapabilitiesReveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
