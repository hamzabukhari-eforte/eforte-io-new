"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiArrowLeft,
  HiArrowRight,
} from "react-icons/hi";
import {
  HiOutlineCpuChip,
  HiOutlineSparkles,
  HiOutlineCog6Tooth,
  HiOutlineCommandLine,
  HiOutlineSquares2X2,
  HiOutlineMagnifyingGlass,
} from "react-icons/hi2";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";

type Card = { icon: IconType; text: string };

type Story = {
  id: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  cards: Card[];
};

const stories: Story[] = [
  {
    id: "dev-center",
    heading: "A world-class firmware and embedded engineering development center",
    description:
      "We built the first nearshore development center in Latin America for one of the world's best known chip and semiconductor companies.",
    image: "/assets/images/industry/cpu-large.jpg",
    imageAlt: "Semiconductor chip and circuit visualization",
    cards: [
      {
        icon: HiOutlineCpuChip,
        text: "Crafting cutting-edge firmware solutions. This is for both current and future (years ahead) CPU and GPU models.",
      },
      {
        icon: HiOutlineSparkles,
        text: "Handling coprocessors and hardware accelerators for end-to-end AI application development and deployment. Ensuring quality with world class simulation platforms to reduce rebuild and rework for our presilicon solutions.",
      },
      {
        icon: HiOutlineCog6Tooth,
        text: "Developing Real-time Operating System (RTOS) solutions including virtual memory management, processes, virtualization, and isolation.",
      },
    ],
  },
  {
    id: "cardiex",
    heading:
      "For award-winning CardieX, eForte is providing firmware support for the world's first dual blood pressure and arterial health monitor",
    description:
      "eForte is proud to partner with CardieX to provide firmware support for their industry-leading medical device. It's poised to transform core elements of how care can be provided.",
    image: "/assets/images/industry/cardiex-machine.jpg",
    imageAlt: "CardieX dual blood pressure and arterial health monitor",
    cards: [
      {
        icon: HiOutlineCommandLine,
        text: "Developing and supporting firmware for medical devices targeting home health, remote patient monitoring, and decentralized clinical trial markets.",
      },
      {
        icon: HiOutlineSquares2X2,
        text: "Creating applications for a cohesive product family across all consumer channels including mobile, desktop, and tablet.",
      },
      {
        icon: HiOutlineMagnifyingGlass,
        text: "Tracking and analysis of clinical trial results. This involves the design of the tablet and mobile app for in-consult measurements.",
      },
    ],
  },
];

const AUTOPLAY_INTERVAL_MS = 7000;

export default function EmbeddedEngineeringSuccessStoriesSection() {
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
    <section
      className="relative overflow-hidden bg-default py-16 text-white md:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Container className="relative">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous success story"
          className="absolute left-0 top-[160px] z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default md:top-[180px]"
        >
          <HiArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next success story"
          className="absolute right-0 top-[160px] z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default md:top-[180px]"
        >
          <HiArrowRight className="h-5 w-5" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={story.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="px-12 md:px-16"
          >
            <div className="relative min-h-[300px] md:min-h-[360px]">
              <div className="pointer-events-none absolute inset-y-0 -right-12 w-[58%] md:-right-16 md:w-[55%]">
                <Image
                  src={story.image}
                  alt={story.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-default via-default/40 to-transparent" />
              </div>

              <div className="relative z-10 max-w-xl py-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/70">
                  Success Stories
                </p>
                <h2 className="mt-4 text-2xl font-semibold leading-snug text-white md:text-[28px]">
                  {story.heading}
                </h2>
                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-white/60 md:text-[15px]">
                  {story.description}
                </p>
                <span className="mt-7 inline-flex h-10 items-center justify-center rounded-full border border-white/30 px-5 py-2 text-sm font-medium text-white">
                  Our work includes
                </span>
              </div>
            </div>

            <div className=" grid gap-6 md:grid-cols-3 md:gap-8">
              {story.cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="rounded-[12px] bg-white p-8 text-default shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                  >
                    <Icon className="h-8 w-8 text-default" />
                    <p className="mt-10 text-[14px] leading-relaxed text-[#555]">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
