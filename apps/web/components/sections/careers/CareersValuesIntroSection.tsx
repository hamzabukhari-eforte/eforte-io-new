"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import { useInViewReplay } from "@/lib/useInViewReplay";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function CareersValuesIntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section id="our-values" className="scroll-mt-24">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
          className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12 lg:gap-16"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl lg:text-[42px] lg:leading-tight">
            Our Values
          </h2>
          <p className="text-base leading-relaxed text-white md:text-lg md:leading-relaxed">
          We foster a collaborative and uplifting workplace environment, where personal growth and professional excellence go hand in hand.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
