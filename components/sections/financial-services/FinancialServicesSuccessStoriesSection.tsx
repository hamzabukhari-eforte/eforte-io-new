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
    id: "onepay",
    brand: "OnePay",
    title:
      "Data-fueled growth: How OnePay is becoming one of the world's leading fintechs",
    paragraphs: [
      "OnePay, majority-owned by Walmart, is simplifying banking with its all-in-one financial experience.",
      "The collaboration with eForte has enabled OnePay to harness data-driven insights, driving its growth and delivering a superior banking experience to customers. It has become one of the standout leaders in the fintech industry.",
    ],
    tags: [
      "Data-driven product",
      "CI/CD pipelines",
      "Powerful mobile experience",
      "Modern fintech solutions",
    ],
    cardHeading: "Driving OnePay's growth to be a world-leading fintech",
    imageSrc: "/assets/images/industry/our-work-2.webp",
    imageAlt: "OnePay mobile banking app",
    accentClass: "bg-[#3FA0E8]",
    tagClass: "bg-[#3FA0E8]/15 text-[#1f6fb0]",
  },
  {
    id: "experian",
    brand: "Experian",
    title: "Building Experian's core digital banking platform",
    paragraphs: [
      "With clients in over 100 countries, and over 21,000 employees, Experian is at the forefront of global information and financial services.",
      "Experian is relying on eForte's data and financial expertise to build new financial services products at scale. This work involves massive scale integrations including banking-as-a-service integrations. We play a crucial role in ensuring the accuracy, security, and efficiency of transactions.",
    ],
    tags: [
      "Data integration",
      "Galileo API",
      "Digital banking",
      "BaaS integration",
    ],
    cardHeading: "Building Experian's core digital banking platform",
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Experian digital banking platform",
    accentClass: "bg-[#6E2585]",
    tagClass: "bg-[#6E2585]/15 text-[#6E2585]",
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

              <Link
                href="#"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-default px-8 text-sm font-medium text-white transition-all duration-200 hover:bg-default/85"
              >
                Learn more
              </Link>
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
