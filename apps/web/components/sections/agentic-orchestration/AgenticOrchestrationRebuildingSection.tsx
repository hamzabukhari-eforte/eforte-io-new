"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";

const industries = [
  { label: "Fintech & Banking", href: "/industries/fintech" },
  { label: "Health & Life Sciences", href: "/industries/health" },
  { label: "Heavy Industries", href: "/industries/heavy-industries" },
  { label: "Automobile", href: "/industries/automobile" },
  { label: "Insurance", href: "/industries/insurance" },
  { label: "BPO & Shared Services", href: "/industries/bpo" },
  { label: "Hospitality", href: "/industries/hospitality" },
];

export default function AgenticOrchestrationRebuildingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-80px", amount: 0.15 });

  return (
    <section
      ref={ref}
      id="rebuilding-industries"
      className={`bg-black overflow-hidden relative ${section.padding} ${section.paddingX}`}
    >
      <div className={`${section.container} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2 className={`${typography.sectionTitleLg} text-white leading-[1.1] mb-6 md:mb-8`}>
            Rebuilding industries with AI
          </h2>
          <p className={`${typography.lead} text-gray-400 max-w-xl mb-8 md:mb-12`}>
            eForte empowers organizations to create AI agents and solutions that streamline operations, enhance efficiency, and unlock new revenue streams. By combining specialized AI teams with your deep domain expertise, we operate as a single, integrated unit focused on delivering measurable business impact from day one.
          </p>
          <div className="space-y-4 md:space-y-6">
            <p className="text-lg md:text-xl font-medium text-white">
              Industries We&apos;re Transforming
            </p>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {industries.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center justify-center h-10 px-3 py-0 md:px-5 md:py-0 rounded-full leading-none bg-[#1A1A1A] border border-white/5 text-sm md:text-[15px] font-medium text-gray-300 hover:bg-[#252525] hover:text-white transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            {/* industries-tiles.svg intentionally not shown here — duplicates the pill list above */}
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center lg:justify-end"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[480px] aspect-square">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-blue-900/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />
            <Image
              src="/assets/images/package/ai-pillars/ai-solutions-hub-diagram.svg"
              alt="eForte AI Solutions hub diagram: Industry Knowledge, Digital Capabilities, and Data & AI"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
