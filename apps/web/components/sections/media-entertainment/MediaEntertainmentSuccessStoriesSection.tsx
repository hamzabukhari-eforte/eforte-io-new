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
    id: "us-open",
    title: "Powering the 2025 US Open Pickleball Championships",
    paragraphs: [
      "eForte powered the world's biggest pickleball event, drawing 50,000+ fans and live coverage on streaming and national TV.",
      "Our technology was key, delivering real-time \u201con-court view\u201d experiences for fans and a platform that flawlessly managed everything from court assignments to medal ceremonies.",
    ],
    tags: ["Live streaming", "Real-time experiences", "Event platform"],
    cardHeading: "Real-time, on-court experiences at scale",
    imageSrc: "/assets/images/case-study/prism-banner.png",
    imageAlt: "US Open Pickleball Championships platform",
    accentClass: "bg-[#3E8CEF]",
    tagClass: "bg-[#3E8CEF] text-white",
  },
  {
    id: "streaming",
    title: "Building a next-generation entertainment streaming platform",
    paragraphs: [
      "eForte partnered with a leading media company to design and launch a proprietary entertainment platform delivering exceptional, personalized user experiences.",
      "Our end-to-end work spanned design, development, deployment, and ongoing support - driving audience engagement and seamless content delivery at scale.",
    ],
    tags: ["Streaming", "Personalization", "Cloud-native"],
    cardHeading: "A proprietary entertainment platform built end-to-end",
    imageSrc: "/assets/images/case-study/oddysee-banner.png",
    imageAlt: "Entertainment streaming platform",
    accentClass: "bg-[#6E2585]",
    tagClass: "bg-[#6E2585] text-white",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function MediaEntertainmentSuccessStoriesSection() {
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
    <section className="relative bg-default">
      <div
        className="rounded-[36px] bg-white py-20 text-default md:rounded-[42px] md:py-28"
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
