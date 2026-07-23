"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { sitemapGroups } from "@/data/sitemap";

export default function SitemapPageSection() {
  return (
    <section className="bg-white pb-20 pt-28 text-default md:pb-28 md:pt-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[#666] md:text-lg">
            Browse all public pages on our website. For the XML sitemap used by
            search engines, see{" "}
            <Link
              href="/sitemap.xml"
              className="font-medium text-primary-pink underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              sitemap.xml
            </Link>
            .
          </p>
        </motion.div>

        <div className="mt-14 columns-1 gap-x-14 sm:columns-2 lg:columns-3">
          {sitemapGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 + index * 0.04 }}
              className="mb-12 break-inside-avoid"
            >
              <h2 className="text-lg font-semibold text-default">
                {group.title}
              </h2>
              <div className="mt-3 h-px w-full bg-[#E8E8E8]" />
              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#555] underline decoration-[#D0D0D0] underline-offset-2 transition-colors hover:text-primary-pink hover:decoration-primary-pink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
