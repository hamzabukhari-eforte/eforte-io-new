"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/atoms/Container";
import { locations, type Location } from "@/data/locations";
import { useInViewReplay } from "@/lib/useInViewReplay";

const INTRO_TEXT =
  "Our client partnerships go beyond technology. We become deeply involved in our client's day-to-day realities, working collaboratively to build superior digital experiences for global advancement.";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

function LocationCard({ location }: { location: Location }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInViewReplay(ref, { margin: "-40px", amount: 0.2 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.5, ease }}
      className="group relative w-full max-w-[300px] pb-2 sm:max-w-[320px] md:max-w-[460px]"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
        <Image
          src={location.imageSrc}
          alt={`${location.city} office`}
          fill
          sizes="(max-width: 740px) 380px, 440px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative z-10 -mt-10 ml-3 mr-5 flex max-w-[94%] items-end justify-between gap-3 rounded-xl bg-default px-5 py-4 transition-transform duration-300 group-hover:-translate-y-0.5 md:-mt-11 md:ml-4 md:px-6 md:py-5">
        <div className="min-w-0">
          <h3 className="text-lg font-bold text-white md:text-xl">
            {location.city}
          </h3>
          <div className="mt-1.5 space-y-0.5 text-xs leading-relaxed text-white/85 md:text-sm">
            {location.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <Link
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-0.5 shrink-0 rounded-full bg-[#3b82f6] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#2563eb] md:px-5 md:text-sm"
        >
          Learn more
        </Link>
      </div>
    </motion.article>
  );
}

export default function LocationsGridSection() {
  const introRef = useRef<HTMLDivElement>(null);
  const introInView = useInViewReplay(introRef, { margin: "-60px", amount: 0.15 });

  return (
    <section className="relative z-10 -mt-16 rounded-t-[40px] bg-white pb-20 pt-14 shadow-[0_-12px_40px_rgba(0,0,0,0.12)] md:-mt-20 md:pb-28 md:pt-20">
      <Container>
        <motion.div
          ref={introRef}
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease }}
        >
          <h2 className="text-3xl font-semibold text-default md:text-4xl lg:text-[42px]">
            About us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:mt-6 md:text-lg md:leading-relaxed">
            {INTRO_TEXT}
          </p>
        </motion.div>

        <div className="mt-12 grid justify-items-center gap-8 sm:grid-cols-2 lg:mt-16 lg:gap-x-4 lg:gap-y-10">
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      </Container>
    </section>
  );
}
