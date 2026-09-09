"use client";

import {
  industriesCards,
  industriesGridIntro,
  industriesMedia,
} from "@/data/industriesOverview";
import IndustriesMethodologyCard, {
  type IndustryCardAccent,
} from "./IndustriesMethodologyCard";
import IndustriesReveal from "./IndustriesReveal";
import styles from "./industriesOverview.module.css";

/** One distinct accent per industry card */
const industryAccents: IndustryCardAccent[] = [
  "blue",
  "pink",
  "green",
  "orange",
  "sky",
  "violet",
  "yellow",
];

export default function IndustriesOverviewGridSection() {
  return (
    <section className={styles["service-partners"]}>
      <div className={styles.content}>
        <IndustriesReveal className={styles.head} direction="bottom" duration={400}>
          <p className={styles.sectionLabel}>{industriesGridIntro.label}</p>
          <h2 className={styles.title}>
            <span>{industriesGridIntro.titleLine1}</span>{" "}
            {industriesGridIntro.titleLine2}
          </h2>
          <p className={styles.description}>
            {industriesGridIntro.descriptionBefore}{" "}
            <span>{industriesGridIntro.descriptionHighlight}</span>
          </p>
        </IndustriesReveal>

        <IndustriesReveal
          as="ul"
          className={styles.methodologyGrid}
          direction="bottom"
          duration={400}
        >
          {industriesCards.map((card, index) => (
            <li key={card.title}>
              <IndustriesMethodologyCard
                title={card.title}
                description={card.description}
                pills={card.pills}
                href={card.href}
                accent={industryAccents[index] ?? "blue"}
                iconSrc={industriesMedia.industryIcons[card.iconKey]}
                showWatermark={false}
              />
            </li>
          ))}
        </IndustriesReveal>
      </div>
    </section>
  );
}
