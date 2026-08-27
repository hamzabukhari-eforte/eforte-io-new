"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";

const insightCategories = [
  "News",
  "Cloud",
  "Culture & Events",
  "Data and AI",
  "Design",
  "Case Studies",
  "Software Engineering",
];

const articles = [
  {
    tag: "DATA AND AI",
    title:
      "Data science in 2024: Why it matters more than ever and how eForte turns analytics into business impact",
    author: "Maria Eugenia Millan",
    date: "January 29, 2024",
    imageSrc: "/assets/images/velocity-ai/insight-1.png",
    imageAlt: "Abstract network data visualization",
  },
  {
    tag: "CASE STUDY",
    title: "Understanding Databricks costs through System Tables",
    author: "Santiago Fernández and Aida Stonezak",
    date: "January 29, 2024",
    imageSrc: "/assets/images/velocity-ai/insight-2.png",
    imageAlt: "Professionals discussing data",
  },
  {
    tag: "CASE STUDY",
    title: "Designing a practical and scalable tagging strategy in Databricks",
    author: "Santiago Fernández and Aida Stonezak",
    date: "January 29, 2024",
    imageSrc: "/assets/images/velocity-ai/insight-3.png",
    imageAlt: "Databricks and data strategy",
  },
];

export default function FoundationalDataLayerInsightsSection() {
  return (
    <section
      id="insights"
      className="py-16 md:py-24 bg-black"
      aria-labelledby="insights-heading"
    >
      <Container>
        <div className="text-center mb-12">
          <span
            id="insights-heading"
            className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3 block"
          >
            EXPERT INSIGHTS
          </span>
          <h2 className="text-4xl font-medium mb-8 text-white">
            Imagine. Learn. Discuss.
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {insightCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className="inline-flex h-[25px] items-center justify-center px-4 py-0 rounded-full leading-none border border-white/20 text-xs text-white hover:bg-white/10 transition"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.title}
              href="#"
              className="group block cursor-pointer"
            >
              <div className="h-48 overflow-hidden rounded-t-[12px] relative">
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase text-white">
                  {article.tag}
                </div>
              </div>
              <div className="bg-white p-6 rounded-b-[12px] text-black h-[220px] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-3 leading-snug group-hover:text-[#2D4EFF] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500">By {article.author}</p>
                </div>
                <div className="text-[10px] text-gray-400 mt-4">{article.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
