"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/atoms/Container";
import { insightProfileImages } from "@/data/capabilities/insightProfileImages";
import { motion } from "@/lib/replayMotion";

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
    id: "agentic-ai-regulated-finance",
    author: "Gabriel Fagundez",
    authorAvatar: "/assets/images/capabilities/ai/avatar-gabriel-fagundez.jpg",
    title:
      "Agentic AI in regulated finance only works when the data layer is audit-ready",
    excerpt:
      "Banks and fintechs are moving AI agents into payments, collections, and credit operations — not as chatbots, but as systems that take action. In 2026 that shift is colliding with NIST AI RMF, the EU AI Act, and audit requirements that still expect a human-readable trail. The institutions that get this right do not start with the agent. They start with a governed foundational data layer, then applied AI, then orchestration — the same sequence Finance Studio uses to move a transaction from insight to an explainable decision.",
    date: "August 21, 2026",
    categories: ["Data and AI"],
    imageSrc: "/assets/images/velocity-ai/insight-2.png",
    imageAlt: "NIST AI Risk Management Framework for governed financial AI",
  },
  {
    id: "embedded-finance-core-apis",
    author: "Marcelo Cordini",
    authorAvatar: insightProfileImages.benjamin,
    title:
      "Embedded finance is becoming the financial fabric. Core banking APIs are the glue.",
    excerpt:
      "The global conversation has moved past dropping a payment widget into an app. Platforms now expect accounts, lending, and payouts to live inside their own product, while a licensed bank or BaaS partner remains the regulated core. That only holds if open APIs, ISO 20022-rich payment data, and core banking integration are treated as product infrastructure — not a side project. It is the same problem our Embedded Banking and Core Banking API work is built to solve.",
    date: "July 30, 2026",
    categories: ["Software Engineering"],
    imageSrc: "/assets/images/industry/wrappers.jpg",
    imageAlt: "Customer sending a cross-border payment from a mobile banking app",
  },
  {
    id: "alternative-data-credit-scoring",
    author: "Sebastian Diaz",
    authorAvatar: insightProfileImages.edward,
    title:
      "Alternative-data credit scoring is going mainstream. Explainability has to travel with it.",
    excerpt:
      "Cash-flow, rent, and utility signals are finally letting lenders underwrite thin-file borrowers that legacy bureau scores miss. Regulators are not far behind: creditworthiness models sit in the high-risk tier of the EU AI Act, and US lenders still have to show that a score is fair, stable, and contestable. The next advantage is not a slightly better model. It is pairing alternative-data scoring with early delinquency prediction and collections prioritization — so credit teams can see risk forming before the first missed payment, and defend every decision.",
    date: "June 12, 2026",
    categories: ["Data and AI", "Software Engineering"],
    imageSrc: "/assets/images/industry/bi.jpg",
    imageAlt: "Risk and credit analytics dashboards used to underwrite and monitor lending",
  },
];

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
          {articles.map((article, index) => (
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
                      src={article.authorAvatar}
                      alt={article.author}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-black">{article.author}</p>
                </div>

                <Link href="/blog" className="group mt-4 block">
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
