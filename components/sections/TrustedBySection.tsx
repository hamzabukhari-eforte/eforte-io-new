"use client";

import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface TrustedBySectionProps {
  items: CarouselItem[];
  heading?: string;
}

export default function TrustedBySection({ items, heading }: TrustedBySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-default py-12 md:py-16">
      <div className="w-full">
        {/* Heading - Only show if heading prop is provided */}
        {heading && (
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-base md:text-[17px] font-light text-desc">
              {heading}
            </h2>
          </motion.div>
        )}

        {/* Carousel - Full width, no container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: heading ? 0.2 : 0, ease: "easeOut" }}
        >
          <InfiniteCarousel items={items} />
        </motion.div>
      </div>
    </section>
  );
}
