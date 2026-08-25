"use client";

import Image from "next/image";
import { Hanken_Grotesk, Be_Vietnam_Pro } from "next/font/google";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import Container from "@/components/atoms/Container";
import { aiCustomerSatisfaction } from "@/data/capabilities/ai";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function AiCustomerSatisfactionSection() {
  return (
    <section className="bg-black py-16 text-white md:py-24">
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="ml-auto max-w-md lg:pr-0"
        >
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            {aiCustomerSatisfaction.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
            {aiCustomerSatisfaction.title}
          </h2>
        </motion.div>

        <div className="relative mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="relative z-0 mb-6 aspect-3/4 w-full overflow-hidden rounded-[12px] lg:absolute lg:left-0 lg:top-1/2 lg:mb-0 lg:aspect-auto lg:h-[142%] lg:w-[36%] lg:-translate-y-1/2"
          >
            <Image
              src={aiCustomerSatisfaction.image}
              alt="eForte team collaborating"
              fill
              sizes="(max-width: 1024px) 100vw, 320px"
              className="object-cover object-center"
            />
          </motion.div>

          <div className="relative z-10 grid items-stretch gap-5 lg:grid-cols-3 lg:pl-[22%]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative rounded-[12px] border border-black/5 bg-white p-7 text-default shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute -top-10 right-6 h-24 w-20">
                <Image
                  src="/assets/images/industry/nps2.svg"
                  alt="Top score NPS 82"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className={`${hankenGrotesk.className} text-[37px] font-medium leading-[44px] text-[#090D10]`}
              >
                NPS 82
              </h3>
              <div
                className={`${beVietnamPro.className} mt-5 space-y-3 text-[15px] font-light leading-[24px] text-[#6D6D6D]`}
              >
                <p>Our clients are at the heart of everything we do.</p>
                <p>
                  Our highly customer-centric approach, with a focus on delivering
                  value to clients, is demonstrated by having one of the highest
                  client Net Promoter Scores in the industry.
                </p>
                <p>Our score of 82 was audited by PwC.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="relative rounded-[12px] border border-black/5 bg-white p-7 text-default shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute -top-12 right-6 h-24 w-20">
                <Image
                  src="/assets/images/industry/gptw.webp"
                  alt="Great Place to Work Certified"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className={`${hankenGrotesk.className} text-[37px] font-medium leading-[44px] text-[#090D10]`}
              >
                Nr.1 Great
                <br />
                Place to Work
              </h3>
              <div
                className={`${beVietnamPro.className} mt-5 space-y-3 text-[15px] font-light leading-[24px] text-[#6D6D6D]`}
              >
                <p>
                  We&apos;re proud of our collaborative, high-performance
                  workplace.
                </p>
                <p>
                  We&apos;ve been repeatedly recognized as being one of the best
                  places to work, as well as specifically for women and for
                  millennials.
                </p>
                <p>
                  98% of our people stated they would recommend us as a place to
                  work for family and friends.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="relative rounded-[12px] border border-black/5 bg-white p-7 text-default shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
            >
              <div className="absolute -top-8 right-6 h-[72px] w-[72px]">
                <Image
                  src="/assets/images/industry/clutch.svg"
                  alt="Clutch"
                  fill
                  className="object-contain"
                />
              </div>
              <h3
                className={`${hankenGrotesk.className} text-[37px] font-medium leading-[44px] text-[#090D10]`}
              >
                Clutch
              </h3>
              <p
                className={`${beVietnamPro.className} mt-5 text-[15px] font-light leading-[24px] text-[#6D6D6D]`}
              >
                {aiCustomerSatisfaction.clutch.description}
              </p>

              <div className="mt-6">
                <p
                  className={`${beVietnamPro.className} text-[15px] font-light leading-[24px] text-[#6D6D6D]`}
                >
                  Average Review Rating
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className={`${beVietnamPro.className} text-[26px] font-bold leading-[31px] text-black`}
                  >
                    {aiCustomerSatisfaction.clutch.reviewRating}
                  </span>
                  <span className="flex items-center gap-0.5 text-black">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <HiStar key={i} className="h-4 w-4" />
                    ))}
                  </span>
                  <span
                    className={`${beVietnamPro.className} text-[13px] font-light text-[#6D6D6D]`}
                  >
                    ({aiCustomerSatisfaction.clutch.reviewCount})
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <p
                  className={`${beVietnamPro.className} text-[15px] font-light leading-[24px] text-[#6D6D6D]`}
                >
                  Average Referral Rating
                </p>
                <p
                  className={`${beVietnamPro.className} mt-1 text-[26px] font-bold leading-[31px] text-black`}
                >
                  {aiCustomerSatisfaction.clutch.referralRating}{" "}
                  <span className="text-[13px] font-light text-[#6D6D6D]">
                    / 5
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
