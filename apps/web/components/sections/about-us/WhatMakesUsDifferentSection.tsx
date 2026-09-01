"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import DifferentiatorCard from "./DifferentiatorCard";
import { differentiatorsCards } from "./differentiatorsData";
import { motion } from "@/lib/replayMotion";
// PartnerLogosRow (generic icon + label row) preserved for other pages.

const clientLogos = [
  {
    name: "Shopify",
    src: "/assets/final-images/brands/shopify.svg",
  },
  {
    name: "OneSignal",
    src: "/assets/final-images/brands/onesignal.svg",
  },
  {
    name: "Ripple",
    src: "/assets/final-images/brands/ripple.svg",
  },
  {
    name: "Land id.",
    src: "/assets/final-images/brands/landid.svg",
  },
];

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

export default function WhatMakesUsDifferentSection() {
  return (
    <section className="w-full bg-default py-16">
      <Container>
        <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink text-center">
          What makes us different
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-white text-center mt-4 mb-6 max-w-3xl mx-auto leading-relaxed">
          Our focus on these key differentiators allows us to consistently
          provide exceptional value to our clients.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {differentiatorsCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-40px", amount: 0.15 }}
              variants={cardVariants}
              custom={index}
            >
              <DifferentiatorCard card={card} />
            </motion.div>
          ))}
        </div>
        <div className="w-full max-w-6xl mx-auto mt-12">
          <h2 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary-pink text-center mb-6">
            Some of our incredible clients
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <Image
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                width={120}
                height={32}
                className="h-6 w-auto object-contain md:h-7"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
