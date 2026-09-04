"use client";

import ContactCTA from "@/components/atoms/ContactCTA";
import PartnerLogosRow from "@/components/atoms/PartnerLogosRow";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

const industryLinks = [
  "High-Tech",
  "Fintech",
  "Health & Life-Science",
];

export default function VelocityAIHeroSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden flex flex-col justify-center items-center pt-24 bg-black md:min-h-[500px] lg:min-h-[700px] ${section.paddingX}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-30%] md:right-[-10%] w-[120%] md:w-[80%] h-[140%] md:h-[120%] bg-[#581c87] rounded-full blur-[120px] md:blur-[180px] opacity-80 md:opacity-90" />
        <div className="absolute top-[10%] right-[10%] w-[80%] md:w-[60%] h-[100%] md:h-[80%] bg-[#4338ca] rounded-full blur-[100px] md:blur-[150px] opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <motion.p
          className={`${typography.sectionLabel} mb-6 md:mb-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          AI DEVELOPMENT SERVICES
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-medium tracking-tight mb-6 leading-[1.1] text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          The Velocity AI Framework
        </motion.h1>

        <motion.p
          className="text-2xl font-light leading-relaxed tracking-wide text-white max-w-2xl mx-auto mb-8 md:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Secure-First Governance for AI Delivery
        </motion.p>

        <motion.p
          className="text-lg font-light leading-relaxed text-white max-w-4xl mx-auto mb-8 md:mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        >
          Velocity AI is eForte&apos;s comprehensive methodology detailing best
          practices, workflows, and tools that enhance digital delivery
          efficiency and quality while ensuring a secure-first approach. We
          transform traditional Agile squads into AI-first teams equipped for
          data-driven development.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-base text-white font-medium mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          {industryLinks.map((label) => (
            <span key={label} className="cursor-pointer transition-colors">
              {label}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        >
          <ContactCTA
            className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-8 py-0 md:px-9 md:py-0 rounded-full leading-none text-sm md:text-[15px] font-semibold transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
          >
            Let&apos;s build intelligence together
          </ContactCTA>
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <PartnerLogosRow />
        </motion.div>
      </div>
    </section>
  );
}
