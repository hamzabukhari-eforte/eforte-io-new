"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";

type SuccessStory = {
  id: string;
  brand: string;
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
    id: "meridian-pay",
    brand: "Meridian Pay",
    title: "Scaling a cross border payments platform without scaling risk",
    paragraphs: [
      "Meridian Pay, a fast growing cross border payments provider, was expanding into new markets faster than its manual compliance review process could keep up. eForte built an automated transaction-screening and reporting layer that adapted to each new market's regulatory requirements without slowing down releases.",
      "The result: Meridian Pay entered three new regional markets in under a year while keeping its compliance team the same size, turning what had been a growth bottleneck into a repeatable, scalable process.",
    ],
    tags: [
      "Faster market expansion",
      "Automated compliance screening",
      "Flat compliance headcount growth",
    ],
    cardHeading: "Scaling cross border payments without scaling risk",
    imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "Meridian Pay cross border payments platform",
    accentClass: "bg-[#3FA0E8]",
    tagClass: "bg-[#3FA0E8]/15 text-[#1f6fb0]",
  },
  {
    id: "cobalt-digital-bank",
    brand: "Cobalt Digital Bank",
    title: "Scaling support without scaling headcount",
    paragraphs: [
      "Cobalt Digital Bank launched with a strong product but struggled to scale customer support as its account base grew past 200, 000 users. eForte built an AI assisted support layer that resolves routine account questions instantly and routes complex cases to human agents with full context already attached.",
      "Cobalt cut average resolution time significantly and kept support headcount flat even as its user base kept growing, preserving margins during a critical growth phase.",
    ],
    tags: [
      "Faster support resolution",
      "Scalable support model",
      "Preserved unit economics",
    ],
    cardHeading: "AI assisted support that scales with growth",
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Cobalt Digital Bank support experience",
    accentClass: "bg-[#6E2585]",
    tagClass: "bg-[#6E2585]/15 text-[#6E2585]",
  },
  {
    id: "fenwick-capital",
    brand: "Fenwick Capital Markets",
    title: "Unified risk visibility across settlements",
    paragraphs: [
      "Fenwick Capital Markets relied on a patchwork of spreadsheets and legacy tools to track trade settlement risk across asset classes, creating blind spots during volatile markets. eForte consolidated Fenwick's settlement data into a unified risk-monitoring platform with real time alerts for exposures crossing risk thresholds.",
      "During a period of market volatility shortly after launch, the new platform flagged emerging risk concentrations early enough for Fenwick's risk team to act before they became losses.",
    ],
    tags: [
      "Unified risk visibility",
      "Real time exposure alerts",
      "Faster risk response",
    ],
    cardHeading: "Real time settlement risk monitoring",
    imageSrc: "/assets/images/industry/our-work-3.webp",
    imageAlt: "Fenwick Capital Markets risk platform",
    accentClass: "bg-[#1f7a6b]",
    tagClass: "bg-[#1f7a6b]/15 text-[#1f7a6b]",
  },
];


const AUTOPLAY_INTERVAL_MS = 6000;

export default function FinancialServicesSuccessStoriesSection() {
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
        className="rounded-[12px] bg-white py-20 text-default md:rounded-[12px] md:py-28"
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
                      "inline-flex h-[25px] items-center justify-center rounded-full leading-none px-4 py-0.5 text-sm font-medium",
                      story.tagClass
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="#"
                className="mt-8 inline-flex h-10 items-center justify-center rounded-full leading-none bg-default px-8 text-sm font-medium text-white transition-all duration-200 hover:bg-default/85"
              >
                Learn more
              </Link>
            </div>

            <div
              className={cn(
                "relative flex flex-col overflow-hidden rounded-[12px] px-8 pt-10 text-white md:px-10 md:pt-12",
                story.accentClass
              )}
            >
              <p className="text-center text-2xl font-semibold leading-snug md:text-[26px]">
                {story.cardHeading}
              </p>
              <div className="relative mx-auto mt-8 aspect-square w-full max-w-md">
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain object-bottom"
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
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-default/20 text-default transition-all duration-200 hover:border-default hover:bg-default hover:text-white"
          >
            <HiArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next success story"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-default/20 text-default transition-all duration-200 hover:border-default hover:bg-default hover:text-white"
          >
            <HiArrowRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
      </div>
    </section>
  );
}
