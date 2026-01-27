"use client";

import Container from "@/components/atoms/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetsCoCreateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: "#131320" }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[52px] font-bold text-white leading-tight mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let&apos;s Co-Create the Future
          </motion.h2>

          {/* Sub-heading */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white font-medium mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ready to transform your ideas into intelligent products.
          </motion.p>

          {/* Descriptive Paragraph */}
          <motion.p
            className="text-sm md:text-base lg:text-lg text-desc leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            Get in touch with our experts to review your idea or existing product, and collaborate on the best strategic approach to achieve your goals.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-medium text-white bg-primary-pink hover:bg-primary-pink/90 transition-all duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
