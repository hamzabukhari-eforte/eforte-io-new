"use client";

import { industriesMedia, industriesWhy } from "@/data/industriesOverview";
import IndustriesMethodologyCard, {
  type IndustryCardAccent,
} from "./IndustriesMethodologyCard";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

const iconMap = {
  experts: industriesMedia.experts,
  silicon: industriesMedia.silicon,
  secure: industriesMedia.secure,
};

const accents: IndustryCardAccent[] = ["blue", "pink", "green"];

export default function IndustriesOverviewWhySection() {
  return (
    <section className={styles["why-eforte-boxes"]}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.head} direction="bottom" duration={400}>
          <p className={styles.sectionLabel}>{industriesWhy.label}</p>
          <h2 className={styles.title}>{industriesWhy.title}</h2>
          <p className={styles.description}>
            {industriesWhy.descriptionLines.map((line) => (
              <span key={line}>{line} </span>
            ))}
          </p>
        </IndustriesReveal>

        <IndustriesReveal
          as="ul"
          className={styles.methodologyGrid}
          direction="bottom"
          duration={400}
        >
          {industriesWhy.cards.map((card, index) => (
            <li key={card.title}>
              <IndustriesMethodologyCard
                title={card.title}
                description={card.description}
                accent={accents[index] ?? "blue"}
                iconSrc={iconMap[card.iconKey]}
              />
            </li>
          ))}
        </IndustriesReveal>
      </div>
    </section>
  );
}
