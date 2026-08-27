"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

const inputClass =
  "h-11 w-full rounded-[12px] bg-white/15 px-4 text-[16px] font-extralight leading-normal text-white placeholder:text-white/70 outline-none transition-colors duration-200 focus:bg-white/25";

export default function HealthcarePortfolioSection() {
  return (
    <section className="relative overflow-hidden bg-default py-28 md:py-44">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/industry/bg-portfolio.jpg"
          alt=""
          fill
          className="object-cover object-center"
          aria-hidden
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[12px] bg-[#3E8CEF] md:rounded-[12px]"
        >
          <div className="grid items-center gap-10 p-10 md:p-14 lg:grid-cols-2 lg:gap-8 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px", amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="max-w-md text-[46px] font-light leading-[50px] text-white">
                Meet with our team and discover our extended portfolio
              </h2>

              <form className="mt-8 max-w-md space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name*"
                    className={inputClass}
                    aria-label="First name"
                  />
                  <input
                    type="text"
                    placeholder="Last name*"
                    className={inputClass}
                    aria-label="Last name"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company name*"
                  className={inputClass}
                  aria-label="Company name"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className={inputClass}
                  aria-label="Email"
                />

                <button
                  type="submit"
                  className="mt-3 inline-flex h-10 w-fit items-center justify-center rounded-full leading-none border border-white bg-white px-8 text-sm font-medium text-default transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  Schedule a consultation
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px", amount: 0.15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden items-center justify-end self-center lg:flex"
            >
              <div className="pointer-events-none relative aspect-1400/1083 w-[122%] -mr-16 xl:-mr-24">
                <Image
                  src="/assets/images/industry/ipad.webp"
                  alt="BIOSTRAP remote health monitoring platform"
                  fill
                  sizes="(max-width: 1280px) 60vw, 760px"
                  className="object-contain object-right"
                />
                <div className="absolute bottom-[4%] left-[-3%] z-10 aspect-690/800 w-[30%]">
                  <Image
                    src="/assets/images/industry/watch.webp"
                    alt="Wearable health tracking device"
                    fill
                    sizes="(max-width: 1280px) 22vw, 240px"
                    className="object-contain object-bottom"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-2 aspect-3/2 w-full px-8 pb-8 lg:hidden">
            <Image
              src="/assets/images/industry/ipad.webp"
              alt="BIOSTRAP remote health monitoring platform"
              fill
              sizes="100vw"
              className="object-contain object-center"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
