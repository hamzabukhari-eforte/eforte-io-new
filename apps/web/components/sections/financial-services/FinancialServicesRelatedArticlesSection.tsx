"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

type Article = {
  id: string;
  author: string;
  authorAvatar: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  imageSrc: string;
  imageAlt: string;
};

const articles: Article[] = [
  {
    id: "silicon-to-systems",
    author: "Marcelo Cordini",
    authorAvatar: "/assets/images/velocity-ai/avatar-2.jpg",
    title:
      "From Silicon to Systems: How End-to-End AI Capabilities Help Generate Real Impact",
    excerpt:
      "End-to-end AI capabilities are essential for turning innovation into real-world impact. By integrating the full stack - from semiconductor and embedded engineering, to data platforms, machine learning models, and cloud infrastructure, through to user-facing applications - organizations can build scalable, efficient, and adaptable AI systems. This holistic approach reduces fragmentation between layers, accelerates deployment, and ensures that AI solutions remain reliable, interoperable, and aligned with business goals over time.",
    date: "March 19, 2026",
    categories: ["Data and AI", "Software Engineering"],
    imageSrc: "/assets/images/velocity-ai/insight-2.png",
    imageAlt: "AI chip on a circuit board",
  },
  {
    id: "fintech-conferences-2026",
    author: "Marcelo Cordini",
    authorAvatar: "/assets/images/velocity-ai/avatar-2.jpg",
    title: "List of fintech conferences in 2026",
    excerpt:
      "If you're interested in expanding your understanding of the Fintech industry, consider attending some of the most anticipated events in 2026.",
    date: "January 12, 2026",
    categories: ["Culture & Events"],
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Person checking fintech app on a phone",
  },
  {
    id: "agentic-ai-webinar",
    author: "Sebastian Diaz",
    authorAvatar: "/assets/images/velocity-ai/avatar-3.jpg",
    title:
      "Webinar: Agentic AI in finance - How to build Agents using Databricks and LangGraph",
    excerpt:
      "In this post, I share how to build production-grade systems in finance. By combining Databricks, LangGraph, Milvus, and Neo4j, enterprises can build agentic AI architectures that unify data silos, ensure compliance, and deliver trustworthy insights at scale.",
    date: "October 8, 2025",
    categories: ["Data and AI"],
    imageSrc: "/assets/images/velocity-ai/case-study-myrow.png",
    imageAlt: "Agentic AI in finance webinar",
  },
];

export default function FinancialServicesRelatedArticlesSection() {
  return (
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-medium leading-tight text-default md:text-4xl"
        >
          Related Articles
        </motion.h2>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-14">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="grid gap-6 border-b border-default/10 pb-12 last:border-b-0 last:pb-0 md:grid-cols-[1fr_260px] md:gap-10"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="relative h-7 w-7 overflow-hidden rounded-full bg-default/10">
                    <Image
                      src={article.authorAvatar}
                      alt={article.author}
                      fill
                      sizes="28px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-sm font-medium text-default">
                    {article.author}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug text-default md:text-2xl">
                  <Link href="#" className="transition-colors hover:text-primary-pink">
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-default/60">
                  {article.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <span className="text-default/60">{article.date}</span>
                  {article.categories.map((category) => (
                    <Link
                      key={category}
                      href="#"
                      className="font-medium text-[#2563eb] transition-colors hover:text-[#1d4ed8]"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="md:pt-1">
                <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-default/5 md:aspect-4/3">
                  <Image
                    src={article.imageSrc}
                    alt={article.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
