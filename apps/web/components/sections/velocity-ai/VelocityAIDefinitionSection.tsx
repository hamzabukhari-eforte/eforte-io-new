"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { section } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";

export default function VelocityAIDefinitionSection() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

  return (
    <section ref={ref} className={`relative bg-[#03050C] ${section.padding} ${section.paddingX}`}>
      <div className="max-w-2xl md:max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-xl md:text-2xl lg:text-4xl font-light leading-snug text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <b>Velocity AI</b> is eForte&apos;s comprehensive methodology detailing best
          practices, workflows, and tools that enhance digital delivery efficiency
          and quality while ensuring a secure-first approach. We transform
          traditional Agile squads into AI-first teams equipped to handle
          data-driven development.
        </motion.h2>

        <motion.p
          className="mt-4 md:mt-6 text-white text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          eForte&apos;s AI‑Enabled Pods work within this framework to increase the
          efficiency and quality of digital delivery, using a carefully vetted
          toolset that always follows a security‑first mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center mt-6 md:mt-8 px-7 py-0 md:px-9 md:py-0 rounded-full leading-none border-2 border-[#db2777] text-[#db2777] font-medium text-sm md:text-[15px] hover:bg-[#db2777] hover:text-white transition-all duration-300"
          >
            Learn more
          </Link>
        </motion.div>
      </div>

      {/* Decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none max-w-[90vw] max-h-[90vw]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none max-w-[70vw] max-h-[70vw]" />
    </section>
  );
}
