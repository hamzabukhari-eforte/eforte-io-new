"use client";

import Container from "@/components/atoms/Container";
import { databricksExperience } from "@/data/databricks";
import { motion } from "@/lib/replayMotion";

export default function DatabricksExperienceSection() {
  return (
    <section className="bg-black pb-16 pt-6 text-white md:pb-24 md:pt-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[0.45fr_1fr] lg:items-start lg:gap-16"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">
            {databricksExperience.eyebrow}
          </p>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
            {databricksExperience.stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px", amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <p
                  className="bg-linear-to-r from-white via-[#FF8A8A] to-[#E11D2E] bg-clip-text text-6xl tracking-tight text-transparent md:text-[130px] md:leading-none"
                  style={{
                    fontFamily: "var(--font-geist-sans), system-ui, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  {stat.value}
                </p>
                <div className="mt-4 h-px w-full max-w-[180px] bg-white/25" />
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80 md:text-[15px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
