"use client";

import Image from "next/image";
import ContactCTA from "@/components/atoms/ContactCTA";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";

const CUBE_IMG = "/assets/images/velocity-ai/cube-3d.png";

export default function VelocityAIEngineeringSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <section ref={ref} className={`bg-black relative overflow-hidden flex items-center ${section.padding} ${section.paddingX} md:min-h-[900px]`}>
      <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          className="relative z-10 order-2 lg:order-1"
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="mb-6 md:mb-10">
            <span className={`inline-block px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-white/30 ${typography.badge} text-white bg-white/5 backdrop-blur-sm`}>
              VELOCITY AI Services
            </span>
          </div>
          <h2 className="text-[28px] sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-white leading-[1.1] mb-4 md:mb-8 tracking-tight">
            AI-Augmented
            <br />
            Software Development
          </h2>
          <p className={typography.lead + " text-gray-400 mb-8 md:mb-12 max-w-xl"}>
            Velocity AI empowers engineering teams to become AI-first, turning traditional agile pods into data-centric, AI-driven squads for faster, smarter software delivery.
          </p>
          <ContactCTA
            className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-8 py-0 md:px-10 md:py-0 rounded-full leading-none font-medium text-sm md:text-[15px] transition-all shadow-[0_4px_20px_rgba(219,39,119,0.4)] hover:shadow-[0_6px_25px_rgba(219,39,119,0.6)] hover:-translate-y-0.5"
          >
            Contact Us
          </ContactCTA>
          <div className="flex items-center gap-3 mt-12 md:mt-24 hidden lg:flex">
            <div className="w-3 h-3 rounded-full border-2 border-white bg-white cursor-pointer shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            <div className="w-2 h-2 rounded-full bg-white/20 cursor-pointer hover:bg-white/40 transition-colors" />
            <div className="w-2 h-2 rounded-full bg-white/20 cursor-pointer hover:bg-white/40 transition-colors" />
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center h-full perspective-1000 group order-1 lg:order-2 min-h-[256px] md:min-h-[400px]"
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
          <div className="relative w-full aspect-square max-w-[256px] md:max-w-[400px] lg:max-w-[600px] animate-float">
            <Image
              src={CUBE_IMG}
              alt="AI-Augmented Software Development"
              width={600}
              height={600}
              className="w-full h-full object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(0,255,255,0.3)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
