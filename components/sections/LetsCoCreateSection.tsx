"use client";

import Container from "@/components/atoms/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function LetsCoCreateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.3 });

  return (
    <section ref={ref} className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: "#131320" }}>
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-[56px] font-medium text-white leading-tight mb-4 md:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let&apos;s Co-Create the Future
          </motion.h2>

          {/* Sub-heading */}
          <motion.p
            className="text-xl font-medium text-white mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Ready to transform your ideas into intelligent products.
          </motion.p>

          {/* Descriptive Paragraph */}
          <motion.p
            className="text-base md:text-[17px] text-desc font-light leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10"
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
              className="inline-block bg-gradient-to-r from-[#be185d] to-[#db2777] hover:from-[#db2777] hover:to-[#be185d] text-white px-9 py-3.5 rounded-full text-[15px] font-medium transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
