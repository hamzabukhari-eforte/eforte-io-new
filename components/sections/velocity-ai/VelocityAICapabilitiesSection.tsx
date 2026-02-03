"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { section, typography } from "./layout";
import {
  FaDatabase,
  FaBrain,
  FaCloud,
  FaPalette,
  FaMobileAlt,
  FaUsersCog,
} from "react-icons/fa";

const capabilities = [
  {
    id: "data",
    icon: FaDatabase,
    iconBg: "bg-blue-900/30",
    iconColor: "text-blue-400",
    title: "Data",
    description: "Data manipulation, engineering, visualization, and prediction analytics.",
  },
  {
    id: "ai-ml",
    icon: FaBrain,
    iconBg: "bg-purple-900/30",
    iconColor: "text-purple-400",
    title: "AI & Machine Learning",
    description: "Generative AI, machine learning, NLP, computer vision.",
  },
  {
    id: "cloud",
    icon: FaCloud,
    iconBg: "bg-indigo-900/30",
    iconColor: "text-indigo-400",
    title: "Cloud SRE & DevOps",
    description: "Cloud migration, CI/CD pipelines, Infrastructure as Code (IaC), MLOps, FinOps.",
  },
  {
    id: "design",
    icon: FaPalette,
    iconBg: "bg-red-900/30",
    iconColor: "text-red-400",
    title: "Product Design",
    description: "UX research, service design, design thinking, and UI design.",
  },
  {
    id: "app",
    icon: FaMobileAlt,
    iconBg: "bg-green-900/30",
    iconColor: "text-green-400",
    title: "App Solutions",
    description: "Native & hybrid apps, SDK development, system integrations, and app store positioning.",
  },
  {
    id: "staff",
    icon: FaUsersCog,
    iconBg: "bg-orange-900/30",
    iconColor: "text-orange-400",
    title: "Staff Augmentation – Dedicated Resource Hiring",
    description: "Accelerate delivery with dedicated AI, data, cloud, and engineering talent",
  },
];

export default function VelocityAICapabilitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className={`${section.padding} ${section.paddingX} max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 lg:gap-20`}>
      <motion.div
        className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className={typography.badge + " text-[#2563EB] tracking-widest"}>AGILE Solutions</span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 text-white leading-tight">
          Capabilities amplified by AI
        </h2>
        <p className={typography.cardBody}>
          The Velocity AI model enables eForte to tackle complex challenges by embedding experts across multiple domains, providing the agility to deliver tailored, secure, and AI-augmented solutions.
        </p>
      </motion.div>

      <div className="lg:w-2/3 flex flex-col gap-4 md:gap-6">
        {capabilities.map((cap, index) => {
          const Icon = cap.icon;
          return (
            <motion.div
              key={cap.id}
              className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 md:gap-8 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            >
              <div
                className={`w-12 h-12 md:w-20 md:h-20 rounded-lg md:rounded-xl ${cap.iconBg} flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform shrink-0`}
              >
                <Icon className={`text-3xl ${cap.iconColor}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-white">{cap.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{cap.description}</p>
                <Link href="#" className="text-xs text-[#2563EB] font-semibold group-hover:underline">
                  Learn more &gt;
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
