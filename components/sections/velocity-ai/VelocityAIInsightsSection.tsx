"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { section, typography } from "./layout";

const INSIGHTS_IMG_1 = "/assets/images/velocity-ai/insight-1.png";
const INSIGHTS_IMG_2 = "/assets/images/velocity-ai/insight-2.png";
const INSIGHTS_IMG_3 = "/assets/images/velocity-ai/insight-3.png";
const AVATAR_2 = "/assets/images/velocity-ai/avatar-2.jpg";
const AVATAR_3 = "/assets/images/velocity-ai/avatar-3.jpg";
const AVATAR_4 = "/assets/images/velocity-ai/avatar-4.jpg";
const AVATAR_5 = "/assets/images/velocity-ai/avatar-5.jpg";

const categories = ["News", "Cloud", "Culture & Events", "Data and AI", "Design", "Case Studies", "Software Engineering"];

const articles: {
  id: string;
  image: string;
  category: string;
  title: string;
  author: string;
  date: string;
  avatar?: string;
  avatars?: string[];
}[] = [
  {
    id: "1",
    image: INSIGHTS_IMG_1,
    category: "Data and AI",
    title: "The strategic edge: How eForte's Prompt System brings structure to AI-powered development",
    author: "by Nicolas Gerolami",
    date: "September 1, 2025",
    avatar: AVATAR_2,
  },
  {
    id: "2",
    image: INSIGHTS_IMG_2,
    category: "Data and AI",
    title: "eForte is compliant with NIST AI Risk Management Framework (AI RMF)",
    author: "by Michell Mamrut and Nicolas Gerolami",
    date: "July 29, 2025",
    avatars: [AVATAR_3, AVATAR_4],
  },
  {
    id: "3",
    image: INSIGHTS_IMG_3,
    category: "Data and AI",
    title: "Roo Code review: A perspective on AI-powered coding",
    author: "by Lesly Acuña",
    date: "March 17, 2025",
    avatar: AVATAR_5,
  },
];

export default function VelocityAIInsightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section ref={ref} className={`${section.padding} ${section.paddingX} max-w-[1300px] mx-auto`}>
      <motion.div
        className="text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block px-4 py-1 md:px-5 md:py-1.5 rounded-full border border-[#D3287A] bg-pink-900/5 backdrop-blur-sm mb-4 md:mb-6">
          <span className={typography.badge + " text-[#D3287A] tracking-[0.2em] block"}>
            Expert Insights
          </span>
        </div>
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
              className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col shadow-lg cursor-pointer"
            >
              <div className="relative min-h-[240px] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={100}
                  height={100}
                  unoptimized
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
                {article.avatars ? (
                  <div className="absolute bottom-1 left-8 flex -space-x-3 z-10">
                    {article.avatars.map((a, i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-[3px] border-white overflow-hidden bg-gray-200">
                        <Image src={a} alt="" width={48} height={48} className="object-cover" />
                      </div>
                    ))}
                  </div>
                ) : article.avatar ? (
                  <div className="absolute bottom-1 left-8 w-12 h-12 rounded-full border-[3px] border-white overflow-hidden z-10 bg-gray-200">
                    <Image src={article.avatar} alt="" width={48} height={48} className="object-cover" />
                  </div>
                ) : null}
              </div>
              <div className="p-8 pt-10 flex-1 flex flex-col">
                <span className="text-[#2563EB] text-[13px] font-semibold mb-3 block">{article.category}</span>
                <h3 className="text-[22px] font-bold text-black leading-[1.3] mb-4 group-hover:text-[#2563EB] transition-colors">
                  {article.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-[13px] text-gray-500 mb-6">{article.author}</p>
                  <p className="text-[13px] text-gray-400">{article.date}</p>
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
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Link
          href="#"
          className="inline-block bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-3.5 rounded-full text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
        >
          Discover more
        </Link>
      </motion.div>
    </section>
  );
}
