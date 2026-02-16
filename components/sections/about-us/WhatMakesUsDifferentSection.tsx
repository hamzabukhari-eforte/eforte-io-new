"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import DifferentiatorCard from "./DifferentiatorCard";
import { differentiatorsCards } from "./differentiatorsData";
import PartnerLogosRow from "@/components/atoms/PartnerLogosRow";

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
    <section className="w-full bg-default py-16 md:py-24">
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
              viewport={{ once: false, margin: "-40px" }}
              variants={cardVariants}
              custom={index}
            >
              <DifferentiatorCard card={card} />
            </motion.div>
          ))}
        </div>
        <PartnerLogosRow heading="Some of our incredible clients" />
      </Container>
    </section>
  );
}
