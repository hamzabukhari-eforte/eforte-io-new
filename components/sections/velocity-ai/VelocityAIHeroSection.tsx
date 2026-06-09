"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import {
  FaLayerGroup,
  FaMicrosoft,
  FaProjectDiagram,
  FaSitemap,
} from "react-icons/fa";
import { SiNvidia, SiAmazon } from "react-icons/si";

const techStack: { id: string; icon?: React.ReactNode; label: string | null; isText?: boolean }[] = [
  { id: "databricks", icon: <FaLayerGroup className="text-2xl text-white/80" />, label: "databricks" },
  { id: "aws", icon: <SiAmazon className="text-3xl text-white/80" />, label: "" },
  { id: "azure", icon: <FaMicrosoft className="text-2xl text-white/80" />, label: "Azure" },
  { id: "pilot", icon: <FaSitemap className="text-2xl text-white/80" />, label: "" },
  { id: "adobe", label: "Adobe Cloude", isText: true },
  { id: "langgraph", icon: <FaProjectDiagram className="text-xl text-white/80" />, label: "LangGraph" },
  { id: "nvidia", icon: <SiNvidia className="text-2xl text-white/80" />, label: "Nvidia" },
];

export default function VelocityAIHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden flex flex-col justify-center items-center bg-black pt-24 pb-16 md:pt-40 md:pb-20 md:min-h-[900px] ${section.paddingX}`}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] right-[-30%] md:right-[-10%] w-[120%] md:w-[80%] h-[140%] md:h-[120%] bg-[#581c87] rounded-full blur-[120px] md:blur-[180px] opacity-80 md:opacity-90" />
        <div className="absolute top-[10%] right-[10%] w-[80%] md:w-[60%] h-[100%] md:h-[80%] bg-[#4338ca] rounded-full blur-[100px] md:blur-[150px] opacity-70 md:opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-0" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 mt-[-50px]">
        <motion.div
          className="inline-flex items-center justify-center px-5 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-gray-300 font-bold">
            AI Development Services
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-medium tracking-tight mb-6 leading-[1.1] text-white drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          The Velocity AI Framework
        </motion.h1>

        <motion.p
          className="text-sm md:text-lg lg:text-xl text-gray-300/90 max-w-2xl mx-auto mb-8 md:mb-12 px-2 font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          Secure-First Governance for AI Delivery
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          <Link
            href="#"
            className="group relative inline-flex px-10 py-3 rounded-full border-2 border-[#db2777] text-[#db2777] font-medium text-lg transition-all duration-300 hover:bg-[#db2777] hover:text-white hover:shadow-[0_0_30px_rgba(219,39,119,0.4)]"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </motion.div>

        {/* Tech stack logos */}
        <motion.div
          className="mt-12 md:mt-32 w-full max-w-4xl mx-auto px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {techStack.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-2 group cursor-default transition-transform duration-500 hover:-translate-y-1"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
              >
                {item.icon}
                {item.isText ? (
                  <span className="text-xs md:text-lg font-bold text-white/80 group-hover:text-white tracking-widest uppercase">
                    {item.label}
                  </span>
                ) : (
                  item.label && (
                    <span className="text-xs md:text-lg lg:text-xl font-semibold text-white/80 group-hover:text-white tracking-tight">
                      {item.label}
                    </span>
                  )
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
    </section>
  );
}
