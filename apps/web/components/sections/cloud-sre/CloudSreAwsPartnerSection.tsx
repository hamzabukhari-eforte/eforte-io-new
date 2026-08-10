"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { CLOUD_SRE_ACCENT } from "@/data/capabilities/cloudSre";

export default function CloudSreAwsPartnerSection() {
  return (
    <section className="bg-[#F4F6FA] text-default">
      <div className="bg-[#F4F6FA] py-20 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          >
            <div>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                An AWS Advanced Tier Partner
              </h2>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#555] md:text-base">
                We are an Advanced Tier Partner providing comprehensive AWS
                services.
              </p>
              <Link
                href="/contact-us"
                className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: CLOUD_SRE_ACCENT }}
              >
                Learn more
                <HiArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mx-auto flex h-44 w-44 items-center justify-center md:h-56 md:w-56">
              <div
                className="absolute inset-0 border-2 border-[#FF9900]"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
                }}
                aria-hidden
              />
              <div className="relative h-28 w-28 md:h-36 md:w-36">
                <Image
                  src="/assets/images/industry/aws-partner.png"
                  alt="AWS Partner Advanced Tier Services"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
