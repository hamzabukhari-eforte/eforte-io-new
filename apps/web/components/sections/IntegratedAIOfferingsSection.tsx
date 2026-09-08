"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";

export default function IntegratedAIOfferingsSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  return (
    <section ref={ref} className="w-full bg-default pt-16 pb-2 md:pb-4">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Badge */}
          <motion.div
            className="flex justify-center mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              INTEGRATED AI-FIRST OFFERINGS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            className="text-center text-[48px] font-medium leading-tight tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Unlocking Business Value by Weaving Velocity AI Across Our Full Suite of Services.
          </motion.h2>
        </div>
      </Container>
    </section>
  );
}
