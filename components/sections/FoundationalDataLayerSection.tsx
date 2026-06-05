"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCheck } from "react-icons/fa";

const features = [
  "AI & Generative AI (GenAI) Readiness",
  "Real-time Analytics & Business Intelligence",
  "Scalable Data Management Systems",
  "Optimized Data Storage Solutions",
  "Strict Data Governance and Quality Control",
];

export default function FoundationalDataLayerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[56px] font-medium text-white leading-tight mb-4 md:mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Future-Proof Foundational Data Layer
            </motion.h2>

            {/* Subtitle */}
            <motion.h3
              className="text-xl font-semibold text-white mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Forging the Rock-Solid Data Infrastructure Essential for the AI-Native Enterprise.
            </motion.h3>

            {/* Paragraph */}
            <motion.p
              className="text-base md:text-[17px] text-desc font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              We help clients master the complete data lifecycle— from high-volume ingestion to rigorous governance—building the robust, scalable data foundation required for every AI and GenAI initiative.
            </motion.p>
          </motion.div>

          {/* Right Side - Features List */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-[#0f0a1a] border border-gray-500/30 rounded-xl p-5 md:p-6 lg:p-8 w-full max-w-md lg:max-w-lg">
              <div className="flex flex-col gap-3 md:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4 md:gap-5 bg-[#1A1A2E] rounded-lg p-4 md:p-5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  >
                    {/* Tick Icon with Gradient Background */}
                    <div 
                      className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{
                        background: `linear-gradient(to bottom, #2A0079, #10082C, #0A0A1A)`,
                      }}
                    >
                      <FaCheck className="text-white text-base md:text-lg" />
                    </div>
                    {/* Feature Text */}
                    <span className="text-[15px] text-white flex-1">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
