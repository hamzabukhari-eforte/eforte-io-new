"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";
import { CLOUD_SRE_ACCENT } from "@/data/capabilities/cloudSre";

export default function CloudSreStudioSection() {
  return (
    <section id="studio" className="bg-[#F4F6FA] text-default">
      <div className="rounded-b-[36px] bg-white pb-20 pt-10 md:rounded-b-[42px] md:pb-28 md:pt-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden
                className="mb-6"
              >
                <path
                  d="M8 10h10l-4 8H4l4-8zm10 8h10l-4 8H14l4-8z"
                  fill={CLOUD_SRE_ACCENT}
                />
                <path
                  d="M18 6l4 8h-8l4-8zm0 16l4 8h-8l4-8z"
                  fill={CLOUD_SRE_ACCENT}
                  opacity="0.55"
                />
              </svg>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Embrace cloud-native solutions
              </h2>
              <p className="mt-4 text-lg font-semibold text-default">The Studio</p>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#555] md:text-lg">
                Our Cloud, SRE, and DevOps Studio brings deep expertise across
                AWS, Google Cloud, and Azure — helping teams design reliable
                platforms and operate them with confidence.
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#555] md:text-lg">
                We support cloud migrations, modernization, automation, security,
                and cost optimization—ensuring your infrastructure is agile,
                efficient, and future-ready.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] md:rounded-[32px]"
            >
              <Image
                src="/assets/images/industry/working.jpg"
                alt="Engineers collaborating on cloud infrastructure"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
