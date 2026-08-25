"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { CLOUD_SRE_ACCENT, cloudSreInsights } from "@/data/capabilities/cloudSre";

export default function CloudSreInsightsSection() {
  return (
    <section className="bg-white py-20 text-default md:pb-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold md:text-4xl"
        >
          Latest insights
        </motion.h2>

        <div className="mt-10 divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
          {cloudSreInsights.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href="/blog"
                className="group grid gap-6 py-8 md:grid-cols-[1fr_200px] md:items-center md:gap-10"
              >
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: CLOUD_SRE_ACCENT }}
                  >
                    {article.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-default transition-colors group-hover:opacity-80 md:text-2xl">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#888]">{article.date}</p>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-[12px] md:aspect-[4/3]">
                  <Image
                    src={article.image}
                    alt=""
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
