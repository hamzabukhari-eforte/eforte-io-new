"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

export default function IntegratedAIOfferingsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="inline-block px-6 md:px-8 py-2 text-primary-pink text-[11px] font-bold uppercase tracking-[0.15em] border border-primary-pink rounded-full">
              INTEGRATED AI-FIRST OFFERINGS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white text-center leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Unlocking Business Value by Weaving Velocity AI Across Our Full Suite of Services.
          </motion.h2>
        </div>
      </Container>
    </section>
  );
}
