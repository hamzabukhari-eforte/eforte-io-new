"use client";

import InfiniteCarousel from "@/components/sections/InfiniteCarousel";
import { motion } from "framer-motion";
import { useInViewReplay } from "@/lib/useInViewReplay";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface CarouselItem {
  id: string | number;
  content: React.ReactNode;
}

interface TrustedBySectionProps {
  items: CarouselItem[];
  heading?: string;
  variant?: "dark" | "light";
}

export default function TrustedBySection({
  items,
  heading,
  variant = "dark",
}: TrustedBySectionProps) {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref);

  const isLight = variant === "light";

  return (
    <section
      ref={ref}
      className={cn(
        "w-full overflow-visible pt-4 pb-10 md:pt-6 md:pb-12",
        isLight ? "bg-white" : "bg-default"
      )}
    >
      <div className="relative w-full overflow-visible">
        {/* Heading - Only show if heading prop is provided */}
        {heading && (
          <motion.div
            className="mb-6 text-center md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-pink">
              {heading}
            </h2>
          </motion.div>
        )}

        {/* Carousel - Full width, no container */}
        <motion.div
          className="relative z-20 overflow-visible"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: heading ? 0.2 : 0, ease: "easeOut" }}
        >
          <InfiniteCarousel items={items} />
        </motion.div>
      </div>
    </section>
  );
}
