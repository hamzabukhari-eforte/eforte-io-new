"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import {
  capabilityMedia,
  capabilityWorkTogether,
} from "@/data/capabilitiesOverview";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewWorkTogetherSection() {
  return (
    <section
      className={styles.workTogether}
      style={{ backgroundImage: `url('${capabilityMedia.workTogetherBg}')` }}
    >
      <div className={styles.workTogetherContent}>
        <h3>{capabilityWorkTogether.title}</h3>
        <p>{capabilityWorkTogether.description}</p>
        <ContactCTA className={styles.buttonBlueHoverWhite}>
          Get in touch
        </ContactCTA>
      </div>
    </section>
  );
}
