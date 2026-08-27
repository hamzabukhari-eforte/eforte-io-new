"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { aiInsights } from "@/data/capabilities/ai";

export default function AiInsightsSection() {
  return (
    <section className="bg-white py-16 text-default">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center text-[36px] font-semibold leading-tight"
        >
          Our latest ideas and expertise
        </motion.h2>

        <div className="mt-14 space-y-8 md:mt-16 md:space-y-10">
          {aiInsights.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-40px", amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="grid items-start gap-6 md:grid-cols-[1fr_280px] md:gap-12 lg:grid-cols-[1fr_320px]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full">
                    <Image
                      src={article.authorImage}
                      alt=""
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-default">
                    {article.author}
                  </p>
                </div>

                <Link href="/blog" className="group mt-4 block">
                  <h3 className="text-2xl font-semibold leading-snug text-default transition-colors group-hover:text-brand-blue md:text-[28px]">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-default">
                    {article.summary}
                  </p>
                </Link>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-default">{article.date}</span>
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href="/blog"
                      className="font-medium text-primary-pink hover:underline"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] md:aspect-[3/2]"
              >
                <Image
                  src={article.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 320px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
