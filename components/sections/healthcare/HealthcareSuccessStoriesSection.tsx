"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type SuccessStory = {
  id: string;
  title: string;
  paragraphs: string[];
  tags: string[];
  cardHeading: string;
  imageSrc: string;
  imageAlt: string;
  accentClass: string;
  tagClass: string;
};

const stories: SuccessStory[] = [
  {
    id: "harborlight",
    title: "Harborlight Recovery",
    paragraphs: [
      "Harborlight Recovery, a behavioral health provider, needed a way to keep clients engaged between in-person sessions without overwhelming its clinical staff. eForte built a companion app combining mood check-ins, care-team messaging, and progress dashboards that clinicians could review in minutes, not hours.",
      "Client engagement between sessions increased substantially, and clinicians reported catching early warning signs of relapse more often than before, leading to timely intervention.",
    ],
    tags: [
      "Improved between-visit engagement",
      "Earlier clinical intervention",
      "Reduced clinician review time",
    ],
    cardHeading: "Between-visit engagement for behavioral health",
    imageSrc: "/assets/images/case-study/scheduling1.png",
    imageAlt: "Harborlight Recovery companion app",
    accentClass: "bg-[#2D68F0]",
    tagClass: "bg-[#2D68F0] text-white",
  },
  {
    id: "pulsewell",
    title: "PulseWell Fitness",
    paragraphs: [
      "PulseWell Fitness, a connected-fitness hardware company, needed to move its wearable data pipeline from a fragile, manually managed system to something that could support hundreds of thousands of daily-active users. eForte rebuilt PulseWell's Foundational Data Layer to handle high-volume sensor data reliably and rearchitected its mobile app for real-time coaching feedback.",
      "The new architecture supported a major surge in device sales without downtime, and real-time coaching features became one of the most used parts of the app within weeks of launch.",
    ],
    tags: [
      "Scaled to high-volume sensor data",
      "Zero-downtime device launch",
      "Increased daily app engagement",
    ],
    cardHeading: "Wearable data platform built to scale",
    imageSrc: "/assets/images/case-study/prism-banner.png",
    imageAlt: "PulseWell Fitness wearable platform",
    accentClass: "bg-[#1f7a6b]",
    tagClass: "bg-[#1f7a6b] text-white",
  },
  {
    id: "clearpath",
    title: "ClearPath Diabetes Care",
    paragraphs: [
      "ClearPath Diabetes Care wanted to give patients and care teams a shared, real-time view of glucose trends without requiring patients to manually log every reading. eForte integrated continuous glucose monitors directly into a patient-facing app and clinician dashboard, with Agentic Orchestration flagging concerning trends for care-team follow-up automatically.",
      "Care teams were able to reach out to at-risk patients proactively rather than waiting for scheduled visits, and patients reported feeling more supported managing a condition that can otherwise feel isolating.",
    ],
    tags: [
      "Proactive patient outreach",
      "Automated trend monitoring",
      "Improved patient-reported support",
    ],
    cardHeading: "Proactive diabetes care with connected CGM",
    imageSrc: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "ClearPath Diabetes Care platform",
    accentClass: "bg-[#E8822E]",
    tagClass: "bg-[#E8822E] text-white",
  },
];


const AUTOPLAY_INTERVAL_MS = 6000;

export default function HealthcareSuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const story = stories[activeIndex];

  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + stories.length) % stories.length);
  const goNext = () =>
    setActiveIndex((current) => (current + 1) % stories.length);

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % stories.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="relative -mt-8 bg-default md:-mt-10">
      <div
        className="rounded-t-[36px] bg-white py-20 text-default md:rounded-t-[42px] md:py-28"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <Container>
          <AnimatePresence mode="wait">
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <div className="max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-default/70">
                  Success Stories
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight text-default md:text-4xl lg:text-[40px]">
                  {story.title}
                </h2>

                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-default/70 md:text-base">
                  {story.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium",
                        story.tagClass
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  "relative flex flex-col overflow-hidden rounded-3xl px-8 pt-10 text-white md:px-10 md:pt-12",
                  story.accentClass
                )}
              >
                <p className="text-center text-2xl font-semibold leading-snug md:text-[26px]">
                  {story.cardHeading}
                </p>
                <div className="relative mx-auto mt-8 aspect-square w-full max-w-md overflow-hidden rounded-t-2xl">
                  <Image
                    src={story.imageSrc}
                    alt={story.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous success story"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-default/20 text-default transition-all duration-200 hover:border-default hover:bg-default hover:text-white"
            >
              <HiArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next success story"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-default/20 text-default transition-all duration-200 hover:border-default hover:bg-default hover:text-white"
            >
              <HiArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </div>
    </section>
  );
}
