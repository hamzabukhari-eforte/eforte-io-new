"use client";

import { motion } from "@/lib/replayMotion";
import {
  HiCloud,
  HiLink,
  HiShieldCheck,
  HiUserGroup,
} from "react-icons/hi";
import type { IconType } from "react-icons";
import Container from "@/components/atoms/Container";
import { dataServices } from "@/data/capabilities/data";

const serviceIcons: Record<(typeof dataServices)[number]["id"], IconType> = {
  platform: HiCloud,
  team: HiUserGroup,
  integrate: HiLink,
  governance: HiShieldCheck,
};

export default function DataServicesSection() {
  return (
    <section className="relative z-10">
      <div className="rounded-[12px] bg-[#F5F5F5] py-20 text-default md:rounded-[12px] md:py-28">
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
              From strategic advice to execution — practical governance
              capabilities that keep your data trustworthy and usable.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2">
            {dataServices.map((service, index) => {
              const Icon = serviceIcons[service.id];

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-80px", amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group flex flex-col rounded-[12px] border border-white/10 bg-white/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-primary-pink/10 text-primary-pink transition-colors duration-300 group-hover:bg-primary-pink group-hover:text-white">
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-105" aria-hidden />
                  </span>

                  <h3 className="mt-5 text-2xl font-semibold text-default">
                    {service.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {service.bullets.map((bullet) => (
                      <p
                        key={bullet}
                        className="text-base leading-relaxed"
                      >
                        {bullet}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex h-[25px] items-center justify-center rounded-full leading-none bg-default px-3 py-0 text-xs font-medium text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
