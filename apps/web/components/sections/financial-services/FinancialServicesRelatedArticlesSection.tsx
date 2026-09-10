"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import { financialServicesArticles } from "@/data/industries/financialServicesArticles";
import { motion } from "@/lib/replayMotion";

export default function FinancialServicesRelatedArticlesSection() {
  return (
    <section className="bg-white pt-16 pb-0 text-black">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-40px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center text-3xl font-semibold text-black md:text-4xl"
        >
          Related Articles
        </motion.h2>

        <div className="mt-16 space-y-8 md:space-y-10">
          {financialServicesArticles.map((article, index) => (
            <motion.article
              key={article.slug}
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
                      src={article.authorAvatar}
                      alt={article.author}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-black">{article.author}</p>
                </div>

                <Link href={article.href} className="group mt-4 block">
                  <h3 className="text-2xl font-semibold leading-snug text-black transition-colors group-hover:text-brand-blue md:text-[28px]">
                    {article.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-black">
                    {article.excerpt}
                  </p>
                </Link>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                  <span className="text-black">{article.date}</span>
                  {article.categories.map((category) => (
                    <Link
                      key={category}
                      href={article.href}
                      className="font-medium text-primary-pink hover:underline"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={article.href}
                className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] md:aspect-[3/2]"
              >
                <Image
                  src={article.imageSrc}
                  alt={article.imageAlt}
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

/*
  Previous Related Articles entries preserved for possible future reuse:

  {
    id: "agentic-ai-regulated-finance",
    author: "Gabriel Fagundez",
    title: "Agentic AI in regulated finance only works when the data layer is audit-ready",
    imageSrc: "/assets/images/velocity-ai/insight-2.png",
  },
  {
    id: "embedded-finance-core-apis",
    author: "Marcelo Cordini",
    title: "Embedded finance is becoming the financial fabric. Core banking APIs are the glue.",
    imageSrc: "/assets/images/industry/wrappers.jpg",
  },
  {
    id: "alternative-data-credit-scoring",
    author: "Sebastian Diaz",
    title: "Alternative-data credit scoring is going mainstream. Explainability has to travel with it.",
    imageSrc: "/assets/images/industry/bi.jpg",
  },
*/
