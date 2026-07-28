"use client";

import { useEffect, useRef, useState } from "react";
import { capabilityStudioModel } from "@/data/capabilitiesOverview";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";
import CapabilitiesReveal from "./CapabilitiesReveal";
import styles from "./capabilitiesOverview.module.css";

export default function CapabilitiesOverviewStudioModelSection() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [stepsActive, setStepsActive] = useState(false);
  const cubeInView = useInViewReplay(cubeRef, {
    margin: "-80px",
    amount: 0.2,
  });

  useEffect(() => {
    const el = stepsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setStepsActive(true);
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const reveal = (...extra: Array<string | false | undefined>) =>
    cn(styles.reveal, cubeInView && styles.revealActive, ...extra);

  return (
    <section className={styles.specialist}>
      <div className={styles.content}>
        <div className={styles.specialistHead}>
          <CapabilitiesReveal
            className={styles.specialistLeft}
            direction="bottom"
            duration={400}
            mobileDuration={400}
          >
            <h2>
              {capabilityStudioModel.titleLines.map((line) => (
                <span key={line}>{line} </span>
              ))}
            </h2>
          </CapabilitiesReveal>
          <CapabilitiesReveal
            className={styles.specialistRight}
            direction="bottom"
            duration={500}
            mobileDuration={400}
          >
            {capabilityStudioModel.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CapabilitiesReveal>
        </div>

        <div className={styles.cube} ref={cubeRef} aria-hidden>
          <div
            className={reveal(
              styles.cubeBlue,
              styles.revealTop,
              styles.duration600,
              styles.mobileDuration600
            )}
          />
          <div
            className={reveal(
              styles.cubeYellow,
              styles.revealLeft,
              styles.duration600,
              styles.mobileDuration800
            )}
          />
          <div
            className={reveal(
              styles.cubePurple,
              styles.revealRight,
              styles.duration600,
              styles.mobileDuration600
            )}
          />
          <div
            className={reveal(
              styles.cubeRed,
              styles.revealRight,
              styles.duration600,
              styles.mobileDuration600
            )}
          />
          <div
            className={reveal(
              styles.cubeGreen,
              styles.revealLeft,
              styles.duration600,
              styles.mobileDuration800
            )}
          />
          <div
            className={reveal(
              styles.cubeCyan,
              styles.revealBottom,
              styles.duration600,
              styles.mobileDuration600
            )}
          />

          <div
            className={reveal(
              styles.arrowData,
              styles.revealTop,
              styles.duration700,
              styles.mobileDuration600
            )}
          >
            Data & AI
          </div>
          <div
            className={reveal(
              styles.arrowDesign,
              styles.revealRight,
              styles.duration800,
              styles.mobileDuration600
            )}
          >
            Design
          </div>
          <div
            className={reveal(
              styles.arrowCybersecurity,
              styles.revealRight,
              styles.duration800,
              styles.mobileDuration600
            )}
          >
            Cybersecurity
          </div>
          <div
            className={reveal(
              styles.arrowEngineering,
              styles.revealLeft,
              styles.duration800,
              styles.mobileDuration800
            )}
          >
            Engineering
          </div>
          <div
            className={reveal(
              styles.arrowQuality,
              styles.revealLeft,
              styles.duration800,
              styles.mobileDuration800
            )}
          >
            Quality
          </div>
          <div
            className={reveal(
              styles.arrowProduct,
              styles.revealBottom,
              styles.duration300,
              styles.mobileDuration300
            )}
          >
            Product
            <br />
            Management
          </div>
        </div>

        <div className={styles.steps} ref={stepsRef}>
          {capabilityStudioModel.steps.map((step, index) => (
            <CapabilitiesReveal
              key={step.title}
              className={cn(
                styles.stepWrapper,
                stepsActive && index === 0 && styles.stepOneActive,
                stepsActive && index === 1 && styles.stepTwoActive
              )}
              direction="bottom"
              duration={index === 0 ? 200 : 600}
              mobileDuration={200}
            >
              <div className={styles.stepAnimation}>
                <div className={styles.boxOne} />
                <div className={styles.boxTwo} />
                <div className={styles.boxThree} />
                <div className={styles.boxFour} />
                <div className={styles.boxActive} />
                {index === 1 ? <div className={styles.boxActiveMove} /> : null}
              </div>
              <p className={styles.stepPill}>{step.title}</p>
              <p className={styles.stepDescription}>
                {step.descriptionLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>
            </CapabilitiesReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
