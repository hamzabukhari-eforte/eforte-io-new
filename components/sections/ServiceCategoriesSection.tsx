"use client";

import Container from "@/components/atoms/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ReactNode } from "react";

interface ServiceCategory {
  id: string;
  icon: ReactNode;
  text: string;
}

interface ServiceCategoriesSectionProps {
  items: ServiceCategory[];
}

export default function ServiceCategoriesSection({ items }: ServiceCategoriesSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full bg-default py-12 md:py-16">
      <Container>
        <div className="bg-linear-to-b from-[#1a162c] to-default rounded-t-lg border border-white/10 shadow-[0_0_30px_rgba(211,40,122,0.3)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex items-center gap-3 md:gap-4 p-4 hover:bg-white/5 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Icon */}
                <div className="shrink-0 text-gray-400 text-2xl md:text-3xl">
                  {item.icon}
                </div>
                {/* Text */}
                <span className="text-[15px] text-gray-300 font-medium leading-tight flex flex-wrap">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
