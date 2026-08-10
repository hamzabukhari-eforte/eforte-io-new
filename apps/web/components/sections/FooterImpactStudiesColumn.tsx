"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi";
import type { SiteNavLink } from "@/data/siteNavigation";

const PAGE_SIZE = 10;

type Props = {
  title: string;
  links: SiteNavLink[];
};

export default function FooterImpactStudiesColumn({ title, links }: Props) {
  const overview = links[0];
  const studies = useMemo(() => links.slice(1), [links]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const isFullyOpen = visibleCount >= studies.length;
  const visibleStudies = studies.slice(0, Math.min(visibleCount, studies.length));
  const extraStudies = visibleStudies.slice(PAGE_SIZE);

  const toggle = () => {
    if (isFullyOpen) {
      setVisibleCount(PAGE_SIZE);
      return;
    }
    setVisibleCount((current) =>
      Math.min(current + PAGE_SIZE, studies.length)
    );
  };

  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white md:text-base">
        {title}
      </h3>
      <ul className="space-y-3">
        {overview ? (
          <li>
            <Link
              href={overview.href}
              className="text-sm text-desc transition-colors duration-200 hover:text-white"
            >
              {overview.label}
            </Link>
          </li>
        ) : null}

        {visibleStudies.slice(0, PAGE_SIZE).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-desc transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <motion.div
        initial={false}
        animate={{
          height: extraStudies.length > 0 ? "auto" : 0,
          opacity: extraStudies.length > 0 ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <ul className="mt-3 space-y-3">
          <AnimatePresence initial={false}>
            {extraStudies.map((link, index) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{
                  duration: 0.28,
                  delay: Math.min(index % PAGE_SIZE, 9) * 0.03,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-desc transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </motion.div>

      {studies.length > PAGE_SIZE ? (
        <div className="mt-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/15" aria-hidden />
          <button
            type="button"
            onClick={toggle}
            aria-expanded={visibleCount > PAGE_SIZE}
            aria-label={
              isFullyOpen
                ? "Show fewer impact studies"
                : "Show more impact studies"
            }
            className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-primary-pink hover:text-primary-pink"
          >
            {isFullyOpen ? (
              <HiMinus className="h-3.5 w-3.5" aria-hidden />
            ) : (
              <HiPlus className="h-3.5 w-3.5" aria-hidden />
            )}
          </button>
        </div>
      ) : null}
    </div>
  );
}
