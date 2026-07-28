"use client";

import Image from "next/image";
import { capabilityJourney } from "@/data/capabilitiesOverview";
import { cn } from "@/lib/utils";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewJourneySection() {
  return (
    <section className={styles.journey}>
      <div className={styles.content}>
        <CapabilitiesReveal
          className={styles.journeyHead}
          direction="bottom"
          duration={400}
          mobileDuration={400}
        >
          <p className={styles.journeyLabel}>Our Approach</p>
          <h2>
            <span>A typical eForte</span> client journey
          </h2>
        </CapabilitiesReveal>

        <ul className={styles.journeyList}>
          {capabilityJourney.map((step, index) => {
            const duration = ([400, 500, 600] as const)[index] ?? 400;

            return (
              <CapabilitiesReveal
                key={step.step}
                as="li"
                className={cn(
                  index === 0 && styles.journeyStepOne,
                  index === 2 && styles.journeyStepThree
                )}
                direction="bottom"
                duration={duration}
                mobileDuration={400}
              >
                <div className={styles.journeyCard}>
                  <p className={styles.journeyMainPill}>{step.step}</p>
                  <figure className={styles.journeyImage}>
                    <Image
                      src={step.imageSrc}
                      alt={step.title}
                      fill
                      className="object-contain"
                      sizes="150px"
                    />
                  </figure>
                  <p className={styles.journeyTitle}>{step.title}</p>
                  <p className={styles.journeyDescription}>
                    {step.descriptionLines.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </p>
                  <ul className={styles.pillList}>
                    {step.pills.map((pill) => (
                      <li
                        key={pill}
                        className={cn(
                          styles.journeyPill,
                          pill === "KPIs" && styles.pillNoTransform
                        )}
                      >
                        {pill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CapabilitiesReveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
