"use client";

import { motion } from "framer-motion";
import AboutLocationsSection from "@/components/sections/about-us/AboutLocationsSection";
import AboutUsSection from "@/components/sections/about-us/AboutUsSection";
import OurTimelineSection from "@/components/sections/about-us/OurTimelineSection";
import OurValuesSection from "@/components/sections/about-us/OurValuesSection";
import WhatMakesUsDifferentSection from "@/components/sections/about-us/WhatMakesUsDifferentSection";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function AboutUsPageContent() {
  return (
    <main className="min-h-screen bg-default">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <AboutUsSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px", amount: 0.15 }}
        variants={sectionVariants}
      >
        <OurTimelineSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px", amount: 0.15 }}
        variants={sectionVariants}
      >
        <WhatMakesUsDifferentSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px", amount: 0.15 }}
        variants={sectionVariants}
      >
        <OurValuesSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px", amount: 0.15 }}
        variants={sectionVariants}
      >
        <AboutLocationsSection />
      </motion.div>
    </main>
  );
}
