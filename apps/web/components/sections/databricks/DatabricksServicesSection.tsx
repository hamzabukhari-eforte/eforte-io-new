"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi2";
import Container from "@/components/atoms/Container";
import { databricksServices } from "@/data/databricks";
import { renderBoldText } from "./renderBoldText";

export default function DatabricksServicesSection() {
  return (
    <section className="bg-black">
      <div className="rounded-t-[36px] bg-white pb-20 pt-16 text-default md:rounded-t-[48px] md:pb-28 md:pt-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid items-start gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16"
          >
            <div className="relative flex min-h-[120px] items-center">
              <div className="absolute left-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-[#E8E8E8] md:h-44 md:w-44" />
              <div className="absolute left-16 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full border border-[#E8E8E8] md:left-20 md:h-44 md:w-44" />
              <HiSparkles
                className="absolute left-[58px] top-1/2 h-4 w-4 -translate-y-1/2 text-[#CFCFCF] md:left-[74px]"
                aria-hidden
              />
              <HiSparkles
                className="absolute left-[126px] top-1/2 h-4 w-4 -translate-y-1/2 text-[#CFCFCF] md:left-[158px]"
                aria-hidden
              />
              <p className="relative z-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-default">
                {databricksServices.eyebrow}
              </p>
            </div>

            <h2 className="max-w-3xl text-2xl font-semibold leading-snug md:text-3xl lg:text-[34px] lg:leading-snug">
              {databricksServices.titleBefore}
              <span className="mx-1 inline rounded-sm bg-[#E5484D] px-1.5 py-0.5 text-white">
                {databricksServices.titleHighlight}
              </span>
              {databricksServices.titleAfter}
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
            {databricksServices.items.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px", amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="relative h-10 w-10">
                  <Image
                    src={item.iconSrc}
                    alt=""
                    fill
                    sizes="40px"
                    className="object-contain object-left"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-default md:text-[22px]">
                  {item.title}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] font-light leading-relaxed text-[#555] md:text-base">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{renderBoldText(paragraph)}</p>
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
