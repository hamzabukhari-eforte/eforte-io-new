"use client";

import { capabilityBenefits } from "@/data/capabilitiesOverview";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewAdvantagesSection() {
  return (
    <section className={styles.advantages}>
      <div className={styles.content}>
        <div className={styles.advantagesHead}>
          <CapabilitiesReveal
            className={styles.advantagesLeft}
            direction="bottom"
            duration={400}
            mobileDuration={400}
          >
            <p className={styles.advantagesLabel}>
              Creating Competitive Advantage
            </p>
            <h2>
              <span>The benefits</span> of our approach
            </h2>
          </CapabilitiesReveal>
          <CapabilitiesReveal
            className={styles.advantagesRight}
            direction="bottom"
            duration={700}
            mobileDuration={400}
          >
            <p>
              Our unified, flexible service approach empowers you to deliver
              high-quality digital products and rapidly adapt to evolving market
              demands.
            </p>
          </CapabilitiesReveal>
        </div>
      </div>

      <ul className={styles.advantagesList}>
        {capabilityBenefits.map((benefit, index) => {
          const Icon = benefit.icon;
          const duration = index % 2 === 0 ? 400 : 700;

          return (
            <CapabilitiesReveal
              key={benefit.title}
              as="li"
              direction="bottom"
              duration={duration}
              mobileDuration={400}
            >
              <div className={styles.advantageCard}>
                <div
                  className={styles.advantageIcon}
                  style={{
                    background: benefit.iconBg,
                    color: benefit.iconColor,
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h5>{benefit.title}</h5>
                <p>{benefit.description}</p>
              </div>
            </CapabilitiesReveal>
          );
        })}
      </ul>
    </section>
  );
}
