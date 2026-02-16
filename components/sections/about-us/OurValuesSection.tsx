"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { values, type ValueItem, type ValueIconName } from "./valuesData";

const valueImageMap: Record<ValueIconName, string> = {
  impact: "/assets/images/about/drive.svg",
  relationships: "/assets/images/about/hearth.svg",
  standards: "/assets/images/about/check.svg",
  team: "/assets/images/about/handshake.svg",
  grow: "/assets/images/about/cup.svg",
  determination: "/assets/images/about/hand.svg",
  action: "/assets/images/about/oriented.svg",
  deliver: "/assets/images/about/magic.svg",
};

const imageSlotClass =
  "w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-48 lg:h-48 shrink-0 flex items-center justify-center overflow-hidden";

function ValueImage({ name }: { name: ValueIconName }) {
  const src = valueImageMap[name];
  return (
    <div className={imageSlotClass}>
      <Image
        src={src}
        alt=""
        width={100}
        height={100}
        className="w-80 h-full object-contain"
        aria-hidden
      />
    </div>
  );
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
      delay: i * 0.08,
    },
  }),
};

function ValueCard({ item, index }: { item: ValueItem; index: number }) {
  return (
    <motion.div
      className="relative flex items-start gap-0 min-h-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-40px" }}
      variants={cardVariants}
      custom={index}
    >
      <div className="shrink-0 pt-0.5 -mt-4 md:-mt-5">
        <ValueImage name={item.iconName} />
      </div>
      <div className="min-w-0 flex-1 -ml-6 sm:-ml-8 md:-ml-28 py-3 pl-8 pr-4 md:py-20 md:pl-10 md:pr-5">
        {item.titleLine1 != null && (
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl bold text-white mb-0.5">
            {item.titleLine1}
          </p>
        )}
        <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl bold text-white mb-2">
          {item.title}
        </h3>
        <p className="text-sm md:text-base text-desc leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function OurValuesSection() {
  return (
    <section className="w-full bg-default py-16 md:py-24">
      <Container>
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink text-center">
          CULTURE
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center mt-2">
          Our values
        </h2>
        <p className="text-base md:text-lg text-white text-center mt-4 mb-14 max-w-2xl mx-auto leading-relaxed">
          We foster a collaborative and uplifting workplace environment, where personal growth is
          not just encouraged, but integral to who we are.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 md:gap-y-14">
          {values.map((item, index) => (
            <ValueCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
