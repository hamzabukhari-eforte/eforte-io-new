"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { dataServices } from "@/data/capabilities/data";

export default function DataServicesSection() {
  return (
    <section className="relative z-10">
      <div className="rounded-[36px] bg-[#F5F5F5] py-20 text-default md:rounded-[42px] md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold md:text-4xl">
            Our services for data-governance strategy
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#666]">
            From strategic advice to execution — practical governance capabilities
            that keep your data trustworthy and usable.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
          {dataServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-[#E8E8E8] bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-default">
                {service.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-[14px] leading-relaxed text-[#666]"
                  >
                    <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-pink" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-default px-3 py-1 text-xs font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
      </div>
    </section>
  );
}
