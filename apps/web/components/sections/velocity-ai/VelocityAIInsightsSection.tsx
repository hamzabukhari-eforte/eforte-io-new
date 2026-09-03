"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { section } from "./layout";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { cn } from "@/lib/utils";

const INSIGHTS_IMG_1 = "/assets/images/velocity-ai/insight-1.png";
const INSIGHTS_IMG_2 = "/assets/images/velocity-ai/insight-2.png";
const INSIGHTS_IMG_3 = "/assets/images/velocity-ai/insight-3.png";
// Profile avatars intentionally unused on cards — kept for possible reuse
// const AVATAR_2 = "/assets/images/velocity-ai/avatar-2.jpg";
// const AVATAR_3 = "/assets/images/velocity-ai/avatar-3.jpg";
// const AVATAR_4 = "/assets/images/velocity-ai/avatar-4.jpg";
// const AVATAR_5 = "/assets/images/velocity-ai/avatar-5.jpg";

const categories = ["News", "Cloud", "Culture & Events", "Data and AI", "Design", "Case Studies", "Software Engineering"];

const articles: {
  id: string;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
}[] = [
  {
    id: "1",
    image: INSIGHTS_IMG_1,
    category: "Data and AI",
    title: "The strategic edge: How eForte's Prompt System brings structure to AI-powered development",
    author: "by Nicolas Gerolami",
    date: "September 1, 2025",
  },
  {
    id: "2",
    image: INSIGHTS_IMG_2,
    category: "Data and AI",
    title: "eForte is compliant with NIST AI Risk Management Framework (AI RMF)",
    author: "by Michell Mamrut and Nicolas Gerolami",
    date: "July 29, 2025",
  },
  {
    id: "3",
    image: INSIGHTS_IMG_3,
    category: "Data and AI",
    title: "Roo Code review: A perspective on AI-powered coding",
    author: "by Lesly Acuña",
    date: "March 17, 2025",
  },
];

export default function VelocityAIInsightsSection({
  className,
  plainEyebrow: _plainEyebrow = false,
}: {
  className?: string;
  plainEyebrow?: boolean;
} = {}) {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className={cn(
        `pt-16 pb-16 ${section.paddingX} max-w-[1300px] mx-auto`,
        className
      )}
    >
      <motion.div
        className="text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
          Expert Insights
        </p>
        {/* Capsule eyebrow preserved for possible reuse
        {plainEyebrow ? null : (
          <div className="inline-flex h-10 items-center justify-center px-4 py-0 md:px-5 rounded-full leading-none border border-[#D3287A] bg-pink-900/5 backdrop-blur-sm mb-4 md:mb-6">
            <span className={typography.badge + " text-[#D3287A] tracking-[0.2em] block"}>
              Expert Insights
            </span>
          </div>
        )}
        */}
        <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
          Imagine. Learn. Discuss.
        </h2>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-6 md:mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-6 py-2 rounded-full border text-[13px] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-white/20 text-white hover:bg-white hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          >
            <Link
              href="#"
              className="group block bg-white rounded-[12px] overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col shadow-lg cursor-pointer"
            >
              <div className="relative min-h-[240px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={100}
                  height={100}
                  unoptimized
                  className="object-cover w-full h-[240px] transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <span className="text-[#2563EB] text-[13px] font-semibold mb-3 block">{article.category}</span>
                <h3 className="text-[22px] font-bold text-black leading-[1.3] mb-4 group-hover:text-[#2563EB] transition-colors">
                  {article.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-[13px] text-black mb-6">{article.author}</p>
                  <p className="text-[13px] text-black">{article.date}</p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
      >
        <Link
          href="#"
          className="inline-flex h-10 items-center justify-center bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-0 rounded-full leading-none text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
        >
          Discover more
        </Link>
      </motion.div>
    </section>
  );
}
