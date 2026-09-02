"use client";

import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import ValueCard from "./ValueCard";
import { values } from "./valuesData";

export default function OurValuesSection() {
  return (
    <section className="w-full bg-default pb-16 pt-0">
      <Container>
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-pink text-center">
          CULTURE
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white text-center mt-2">
          Our values
        </h2>
        <p className="text-base md:text-lg text-white text-center mt-4 mb-14 max-w-2xl mx-auto leading-relaxed">
          We foster a collaborative and uplifting workplace environment, where
          personal growth and professional excellence go hand in hand.
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
