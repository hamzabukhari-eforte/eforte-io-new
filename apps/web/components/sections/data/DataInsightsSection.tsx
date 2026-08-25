"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { dataInsights } from "@/data/capabilities/data";

export default function DataInsightsSection() {
  return (
    <section className="bg-white py-20 text-default md:py-28">
      <Container>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl text-center text-3xl font-semibold md:text-4xl"
          >
            Insights from the latest developments in data engineering
          </motion.h2>

          <div className="mt-14 space-y-12 md:mt-16 md:space-y-16">
            {dataInsights.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.15 }}
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
                    <h3 className="text-2xl font-semibold leading-snug text-default transition-colors group-hover:text-primary-pink md:text-[28px]">
                      {article.title}
                    </h3>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#666]">
                      {article.excerpt}
                    </p>
                  </Link>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="text-[#888]">{article.date}</span>
                    {article.categories.map((category) => (
                      <Link
                        key={category}
                        href="/blog"
                        className="font-medium text-primary-pink hover:underline"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/blog"
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-[12px] md:aspect-[4/3]"
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
