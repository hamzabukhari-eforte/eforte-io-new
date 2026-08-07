"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { sitemapGroups } from "@/data/sitemap";

export default function SitemapPageSection() {
  return (
    <section className="bg-default pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-base leading-relaxed text-desc md:text-lg">
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
              <h2 className="text-lg font-semibold text-white">{group.title}</h2>
              <div className="mt-3 h-px w-full bg-white/15" />
              <ul
                className={
                  group.scrollable
                    ? "mt-5 max-h-[420px] space-y-3 overflow-y-auto pr-3 [scrollbar-color:rgba(255,255,255,0.25)_transparent] [scrollbar-width:thin]"
                    : "mt-5 space-y-3"
                }
              >
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}-${link.label}`}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-[#A0A0C0] underline decoration-white/20 underline-offset-2 transition-colors hover:text-primary-pink hover:decoration-primary-pink"
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
