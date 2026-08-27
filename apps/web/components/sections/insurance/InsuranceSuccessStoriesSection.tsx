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
    id: "medmarc",
    title: "AI for smarter underwriting with MedMarc Life Sciences Insurance",
    paragraphs: [
      "Medmarc is a leader in healthcare liability insurance. To remain at the forefront of the industry, they worked with eForte to create a custom AI solution to modernize its underwriting and claims workflows.",
      "The AI-powered solution streamlined research and document review, allowing underwriters and claims examiners to surface insights faster, improve decision accuracy, and strengthen operational efficiency.",
    ],
    tags: ["Secure AI", "Streamlined workflows", "Scalable infrastructure"],
    cardHeading: "Transforming insurance workflows with secure AI",
    imageSrc: "/assets/images/industry/solutions-1.jpg",
    imageAlt: "MedMarc secure AI insurance workflows",
    accentClass: "bg-[#1f7a6b]",
    tagClass: "bg-[#1f7a6b] text-white",
  },
  {
    id: "income-lab",
    title: "Reimagining life insurance and retirement planning",
    paragraphs: [
      "eForte partnered with Income Lab to modernize retirement planning by addressing the challenges of an aging population and the need for more personalized, dynamic financial strategies.",
      "Income Lab's advanced analytics, combined with eForte's technical expertise, resulted in the creation of tools like LifeHub and Tax Lab.",
    ],
    tags: [
      "DevSecOps",
      "Agentic AI",
      "Frontend & backend development",
      "APIs",
    ],
    cardHeading: "Modernizing life insurance strategies",
    imageSrc: "/assets/images/industry/driving-2.jpg",
    imageAlt: "Income Lab life insurance strategies",
    accentClass: "bg-[#E8822E]",
    tagClass: "bg-[#E8822E] text-white",
  },
];

const AUTOPLAY_INTERVAL_MS = 6000;

export default function InsuranceSuccessStoriesSection() {
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
    <section className="relative -mt-8 bg-default md:-mt-10 mb-10">
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
                        "inline-flex h-10 items-center justify-center rounded-full leading-none px-4 py-0.5 text-sm font-medium",
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
                  "relative flex flex-col overflow-hidden rounded-[12px] px-8 pt-10 text-white md:px-10 md:pt-12",
                  story.accentClass
                )}
              >
                <p className="text-center text-2xl font-semibold leading-snug md:text-[26px]">
                  {story.cardHeading}
                </p>
                <div className="relative mx-auto mt-8 aspect-square w-full max-w-md overflow-hidden rounded-t-[12px]">
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
