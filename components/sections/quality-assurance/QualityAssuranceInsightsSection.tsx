"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { qualityAssuranceInsights } from "@/data/capabilities/qualityAssurance";

export default function QualityAssuranceInsightsSection() {
  return (
    <section className="bg-white py-20 text-default md:pb-16 md:pt-24">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold md:text-4xl lg:text-[42px]"
        >
          Our latest ideas and expertise
        </motion.h2>

        <div className="mt-12 divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {qualityAssuranceInsights.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="py-10 md:py-12"
            >
              <Link
                href="/blog"
                className="group grid gap-8 lg:grid-cols-[1fr_minmax(240px,320px)] lg:items-start lg:gap-12"
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

                  <h3 className="mt-5 text-2xl font-semibold leading-snug text-default transition-opacity group-hover:opacity-80 md:text-[28px] md:leading-snug">
                    {article.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#555] md:text-base">
                    {article.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                    <span className="text-[#888]">{article.date}</span>
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-medium"
                        style={{ color: "#2563EB" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative aspect-16/11 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
