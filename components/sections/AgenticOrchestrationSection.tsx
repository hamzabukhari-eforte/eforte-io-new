"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { SiOpenai, SiAmazon, SiNvidia, SiGooglecloud } from "react-icons/si";
import { FaWindows } from "react-icons/fa";

export default function AgenticOrchestrationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-default py-16 md:py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Side - Circles Diagram */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Mobile/Tablet Layout - Non-overlapping Circles (below lg) */}
            <div className="lg:hidden flex flex-col items-center gap-6 md:gap-8">
              {/* Top Circle - Pink Text */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary-pink/30 bg-primary-pink/5 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-primary-pink text-xl font-bold text-center px-6 leading-tight">
                  The Agentic Orchestration Stack
                </h3>
              </motion.div>

              {/* Bottom-Left Circle - White Text */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <p className="text-white text-[15px] text-center px-6 leading-relaxed">
                  We build on the eForte Agentic Platform, leveraging powerful technologies including
                </p>
              </motion.div>

              {/* Bottom-Right Circle - Logos */}
              <motion.div
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 md:gap-4 px-6">
                  {/* Row 1 - 3 logos */}
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <SiOpenai className="text-white text-xl md:text-2xl" />
                    <SiAmazon className="text-white text-xl md:text-2xl" />
                    <SiGooglecloud className="text-white text-xl md:text-2xl" />
                  </div>
                  {/* Row 2 - 2 logos */}
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <SiNvidia className="text-white text-xl md:text-2xl" />
                    <FaWindows className="text-white text-xl md:text-2xl" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Desktop Layout - Overlapping Circles (lg and above) */}
            <div className="hidden lg:block relative w-full h-[600px] flex items-center justify-center">
              {/* Top Circle - Pink Text */}
              <motion.div
                className="absolute top-15 left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary-pink/30 bg-primary-pink/5 backdrop-blur-sm flex items-center justify-center z-30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-primary-pink text-xl font-bold text-center px-6 leading-tight">
                  The Agentic Orchestration Stack
                </h3>
              </motion.div>

              {/* Bottom-Left Circle - White Text */}
              <motion.div
                className="absolute bottom-0 left-1/4 transform -translate-x-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              >
                <p className="text-white text-[15px] text-center px-6 leading-relaxed">
                  We build on the eForte Agentic Platform, leveraging powerful technologies including
                </p>
              </motion.div>

              {/* Bottom-Right Circle - Logos */}
              <motion.div
                className="absolute bottom-0 right-1/4 transform translate-x-1/2 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                <div className="flex flex-col gap-3 md:gap-4 px-6">
                  {/* Row 1 - 3 logos */}
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <SiOpenai className="text-white text-xl md:text-2xl lg:text-3xl" />
                    <SiAmazon className="text-white text-xl md:text-2xl lg:text-3xl" />
                    <SiGooglecloud className="text-white text-xl md:text-2xl lg:text-3xl" />
                  </div>
                  {/* Row 2 - 2 logos */}
                  <div className="flex items-center justify-center gap-3 md:gap-4">
                    <SiNvidia className="text-white text-xl md:text-2xl lg:text-3xl" />
                    <FaWindows className="text-white text-xl md:text-2xl lg:text-3xl" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Text Content */}
          <motion.div
            className="flex flex-col px-4 md:px-6 lg:px-8 xl:px-12"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[56px] font-medium text-white leading-tight mb-6 md:mb-8 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Agentic Orchestration
            </motion.h2>

            {/* First Paragraph */}
            <motion.p
              className="text-xl font-semibold text-white leading-relaxed mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Precision Automation for Peak Performance. Our specialized delivery model centers on the Agentic Orchestration, a capability that crafts powerful, AI-driven solutions tailored for complex, industry-specific challenges.
            </motion.p>

            {/* Second Paragraph */}
            <motion.p
              className="text-base md:text-[17px] text-desc font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Deploy industry-specific AI agents for finance, HR, sales, and operations to deliver speed, compliance, and guaranteed data quality. Our workflows represent standard business automation solutions that can be adapted to any industry
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
