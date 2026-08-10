"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { cn } from "@/lib/utils";
import { qualityAssuranceSuccessStories } from "@/data/capabilities/qualityAssurance";

const AUTOPLAY_INTERVAL_MS = 6000;

export default function QualityAssuranceSuccessStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const story = qualityAssuranceSuccessStories[activeIndex];

  const goPrev = () =>
    setActiveIndex(
      (current) =>
        (current - 1 + qualityAssuranceSuccessStories.length) %
        qualityAssuranceSuccessStories.length
    );
  const goNext = () =>
    setActiveIndex(
      (current) => (current + 1) % qualityAssuranceSuccessStories.length
    );

  useEffect(() => {
    if (isPaused) return;
    const id = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % qualityAssuranceSuccessStories.length
      );
    }, AUTOPLAY_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [isPaused, activeIndex]);

  return (
    <section className="bg-white py-20 text-default md:py-28">
      <div
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

                <Link
                  href="/impact-studies"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-default px-8 text-sm font-medium text-white transition-all duration-200 hover:bg-default/85"
                >
                  Learn more
                </Link>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-square">
                <Image
                  src={story.imageSrc}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover object-center"
                />
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
