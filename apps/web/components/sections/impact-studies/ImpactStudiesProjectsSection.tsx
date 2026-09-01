"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ImpactProjectCard } from "@/data/impactStudiesHomepage";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";
import styles from "./impact-studies.module.css";

function LearnMore({ href }: { href: string }) {
  return (
    <Link href={href} className={styles.btnWhite}>
      <span>Learn more</span>
      <span className={styles.btnArrow} aria-hidden>
        →
      </span>
    </Link>
  );
}

function MidCardBody({ project }: { project: ImpactProjectCard }) {
  const mediaSrc = project.productImage ?? project.backgroundImage;

  return (
    <>
      <div className={styles.midScrim} aria-hidden />
      <div className={styles.midCopy}>
        <p className={styles.midLabel}>{project.name}</p>
        <h2 className={styles.midHeadline}>{project.headline}</h2>
        <p className={styles.midDesc}>{project.description ?? ""}</p>
        <div className={styles.midCta}>
          <LearnMore href={project.href} />
        </div>
      </div>
      {mediaSrc ? (
        <figure className={styles.midMedia}>
          <Image
            src={mediaSrc}
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 400px"
            className={styles.midMediaImg}
          />
        </figure>
      ) : null}
    </>
  );
}

function ProjectCard({
  project,
  delay = 0,
}: {
  project: ImpactProjectCard;
  delay?: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  const bgStyle = (() => {
    // Mid cards use solid/gradient only — media sits in the bottom slot
    if (project.layout === "midProduct" || project.layout === "midLogo") {
      if (project.accent.startsWith("linear")) {
        return { background: project.accent };
      }
      return { backgroundColor: project.accent };
    }
    if (project.layout === "photoBg" || project.layout === "photoFloat") {
      const layers: string[] = [];
      if (project.accent.startsWith("linear") || project.accent.startsWith("rgba")) {
        layers.push(
          project.accent.startsWith("linear")
            ? project.accent
            : `linear-gradient(90deg, ${project.accent}, ${project.accent})`
        );
      }
      if (project.backgroundImage) {
        layers.push(`url(${project.backgroundImage})`);
      }
      return {
        backgroundImage: layers.length ? layers.join(", ") : undefined,
        backgroundColor: project.accent.startsWith("#")
          ? project.accent
          : "#111",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
    if (project.accent.startsWith("linear")) {
      return { background: project.accent };
    }
    return { backgroundColor: project.accent };
  })();

  return (
    <motion.li
      ref={ref}
      id={project.id}
      className={cn(
        styles.projectItem,
        project.size === "full" ? styles.projectItemFull : styles.projectItemMid
      )}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <div
        className={cn(
          styles.projectContent,
          project.layout === "splitLeft" && styles.splitLeft,
          project.layout === "colorFloat" && styles.colorFloat,
          project.layout === "photoBg" && styles.photoBg,
          project.layout === "photoFloat" && styles.photoFloat
        )}
        style={bgStyle}
      >
        {project.layout === "splitLeft" ? (
          <>
            {project.productImage ? (
              <figure className={styles.splitLeftImage}>
                <Image
                  src={project.productImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={styles.splitLeftImageImg}
                />
              </figure>
            ) : null}
            <div className={styles.splitLeftText}>
              <p className={styles.projectLabel}>{project.name}</p>
              <h2 className={styles.projectHeadline}>{project.headline}</h2>
              {project.description ? (
                <p className={styles.projectDesc}>{project.description}</p>
              ) : null}
              <LearnMore href={project.href} />
            </div>
          </>
        ) : null}

        {project.layout === "colorFloat" ? (
          <>
            <div className={styles.colorFloatTriangle} aria-hidden />
            <div className={styles.colorFloatText}>
              <p className={styles.projectLabel}>{project.name}</p>
              <h2 className={styles.colorFloatHeadline}>{project.headline}</h2>
              <LearnMore href={project.href} />
            </div>
            {project.productImage ? (
              <figure className={styles.colorFloatPrimary}>
                <Image
                  src={project.productImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className={styles.colorFloatPrimaryImg}
                />
              </figure>
            ) : null}
            {project.productImageSecondary ? (
              <figure className={styles.colorFloatSecondary}>
                <Image
                  src={project.productImageSecondary}
                  alt=""
                  fill
                  sizes="200px"
                  className={styles.colorFloatSecondaryImg}
                />
              </figure>
            ) : null}
          </>
        ) : null}

        {project.layout === "photoBg" ? (
          <div className={styles.photoBgText}>
            <p className={styles.projectLabel}>{project.name}</p>
            <h2 className={styles.photoBgHeadline}>{project.headline}</h2>
            <LearnMore href={project.href} />
          </div>
        ) : null}

        {project.layout === "midProduct" || project.layout === "midLogo" ? (
          <MidCardBody project={project} />
        ) : null}

        {project.layout === "photoFloat" ? (
          <>
            <div className={styles.photoFloatText}>
              <p className={styles.projectLabel}>{project.name}</p>
              <h2 className={styles.photoBgHeadline}>{project.headline}</h2>
              <LearnMore href={project.href} />
            </div>
            {project.productImage ? (
              <figure className={styles.photoFloatImage}>
                <Image
                  src={project.productImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className={styles.photoFloatImageImg}
                />
              </figure>
            ) : null}
          </>
        ) : null}
      </div>
    </motion.li>
  );
}

export default function ImpactStudiesProjectsSection({
  projects,
}: {
  projects: ImpactProjectCard[];
}) {
  return (
    <div className={styles.projectsWrapper}>
      <ul className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={project.size === "mid" ? (index % 2) * 0.1 : 0}
          />
        ))}
      </ul>
    </div>
  );
}
