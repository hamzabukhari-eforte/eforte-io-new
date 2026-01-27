"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LegacyToIntelligenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative w-full min-h-auto bg-default py-16 md:py-24 lg:py-32">
      <Container>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/landing/legacy-intelligence.png"
            alt="Legacy to Intelligence Background"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-default/70 z-10"></div>

        {/* Content Overlay */}
        <div ref={ref} className="relative z-20">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* EVOLVING Label */}
            <motion.div
              className="inline-flex items-center justify-center mb-6 md:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-primary-pink text-xs md:text-sm font-medium uppercase tracking-wider px-8 py-2 border border-primary-pink rounded-full">
                Evolving
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-[52px] font-bold text-white leading-tight mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              From Legacy to Intelligence
            </motion.h2>

            {/* Description */}
            <motion.div
              className="space-y-4 text-sm md:text-base lg:text-lg text-desc leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <p>
                Navigating the Shift to the <span className="italic">AI-Native Era</span>: Intuitive, Secure, and Data-Driven Solutions.
              </p>
              <p>
                To unlock their full potential, modern digital solutions must be designed to be intrinsically intelligent, secure, and data-fueled from day one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
