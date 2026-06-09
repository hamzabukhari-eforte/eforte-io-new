"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

export default function HealthcareEventsSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-[32px] md:rounded-[40px] lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center bg-[#2D68F0] p-10 text-white md:p-14 lg:p-16">
            <div className="flex items-center gap-6">
              <Image
                src="/assets/images/industry/vive.svg"
                alt="ViVE"
                width={52}
                height={15}
                className="h-6 w-auto"
              />
              <Image
                src="/assets/images/industry/hlth.svg"
                alt="hlth."
                width={50}
                height={15}
                className="h-6 w-auto"
              />
            </div>

            <h2 className="mt-8 text-[46px] font-extralight leading-[51px] text-white">
              We&apos;re on a mission to improve the healthcare space
            </h2>

            <p className="mt-6 max-w-md text-[18px] font-normal leading-[25px] text-white/85">
              eForte shares its experience and knowledge at renowned health tech,
              fitness and wearable events and podcasts.
            </p>

            <Link
              href="#contact"
              className="mt-9 inline-flex h-12 w-fit items-center justify-center rounded-full border border-white bg-white px-8 text-sm font-medium text-default transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src="/assets/images/industry/events.jpg"
              alt="eForte at a healthcare technology event"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
