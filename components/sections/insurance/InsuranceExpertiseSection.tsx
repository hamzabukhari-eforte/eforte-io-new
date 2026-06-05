"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

type SolutionCard = {
  id: string;
  title: string;
  glow: string;
  bullets: { title: string; text: string }[];
};

const solutionCards: SolutionCard[] = [
  {
    id: "ai-powered",
    title: "Data and AI-powered insurance solutions",
    glow: "/assets/images/industry/bg-4.png",
    bullets: [
      {
        title: "AI-enabled damage estimation.",
        text: "For damage assessments, AI-enabled solutions provide fast, accurate damage estimates, streamlining claims processing and elevating overall claims accuracy. This accelerates settlements and enhances customer trust.",
      },
      {
        title: "Usage-based auto insurance.",
        text: "Usage-based solutions can be tailored to individual driving habits. Such a technology-driven approach provides more accurate risk assessment, leading to fairer pricing and greater customer satisfaction.",
      },
      {
        title: "AI-driven property insurance underwriting.",
        text: "Redefine property insurance underwriting through AI-driven technologies. Innovative systems can now analyze vast datasets to assess risks more accurately, enabling more precise policy pricing and a more efficient underwriting process.",
      },
    ],
  },
  {
    id: "customer-engagement",
    title: "New, modern customer engagement solutions",
    glow: "/assets/images/industry/bg-1.png",
    bullets: [
      {
        title: "Digital self-service claims.",
        text: "We have experience building digital self-service solutions across a range of industries. Our approach ensures a streamlined, user-friendly experience, significantly reducing processing times and enhancing customer satisfaction.",
      },
      {
        title: "Automated insurance client onboarding.",
        text: "Redefine client onboarding in the insurance sector through automation. Our solutions are designed to simplify complex processes, ensuring a smooth, efficient, and error-free journey from start to finish.",
      },
      {
        title: "Scalable and secure architectures.",
        text: "Adapt to growing customer bases and transaction volumes with systems that scale effortlessly. We focus on cloud-native infrastructures, including automated infrastructure provisioning with infrastructure-as-code.",
      },
    ],
  },
  {
    id: "product-development",
    title: "Innovative product development in insurance",
    glow: "/assets/images/industry/bg-2.png",
    bullets: [
      {
        title: "On-demand Insurance.",
        text: "Revolutionize the way insurance is accessed with on-demand offerings. Our product development expertise will help you drive forward these initiatives.",
      },
      {
        title: "Personalized insurance policy development.",
        text: "Use advanced analytics and a technology-first approach to design tailored insurance products that align with individual risk profiles, lifestyle needs, and financial goals. This personalization enhances customer satisfaction, improves risk selection, and strengthens long-term loyalty.",
      },
    ],
  },
  {
    id: "connected-systems",
    title: "Advancing connected systems for enhanced efficiency",
    glow: "/assets/images/industry/bg-3.png",
    bullets: [
      {
        title: "Modern transactions with electronic payment systems.",
        text: "Redefine financial exchanges with state-of-the-art electronic payment systems that have been specifically designed for speed, security, and simplicity.",
      },
      {
        title: "Calorie counting devices and other health devices.",
        text: "In health and wellness, we design connected devices that combine seamless user experiences with actionable insights. These smart tools empower individuals to proactively manage their health, driving better outcomes and supporting insurers in promoting preventive care and member engagement.",
      },
      {
        title: "Automated First-Notice-of-Loss (FNOL).",
        text: "By introducing automation in the early stages of claims reporting, insurers are improving accuracy and speed, significantly enhancing the efficiency of the claims handling process.",
      },
    ],
  },
];

const stats = [
  {
    value: "20+",
    label: "years of experience in insurance & financial services",
  },
  {
    value: "100M+",
    label:
      "100 million+ customers use insurance & financial systems built by eForte every day",
  },
  {
    value: "75%",
    label: "75% of eForte's largest clients are in insurance & financial services",
  },
];

export default function InsuranceExpertiseSection() {
  return (
    <section className="bg-default py-16 text-white md:py-24">
      <div className="mx-auto w-[90%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] bg-white p-8 text-default md:rounded-[40px] md:p-12 lg:p-14"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-12">
            <div className="max-w-md">
              <h2 className="text-[36px] font-bold leading-[40px] text-black">
                Our insurance &amp; financial services expertise
              </h2>
              <p className="mt-5 text-[15px] leading-[23px] text-[#454545]">
                Our skilled team has worked with leading insurance and financial
                organizations worldwide, ensuring secure and powerful digital
                experiences for their customers.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-2xl border border-default/10 bg-[#F6F8FC] p-6"
                >
                  <p className="w-fit bg-linear-to-br from-[#5AA0F0] to-[#0A2EC1] bg-clip-text text-[62px] font-normal leading-[74px] text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-[14px] leading-[20px] text-[#002EC1]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Container className="mt-16 grid gap-8 md:mt-20 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-medium text-white md:text-4xl"
          >
            Our Solutions
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-white/70 md:text-base"
          >
            <p>
              eForte&apos;s insurance solutions transform how insurers operate
              across the entire value chain.
            </p>
            <p>
              Our work includes streamlining policy lifecycle management,
              accelerating claims processing, and enhancing underwriting and risk
              assessment - leveraging advanced data analytics and AI/machine
              learning to drive smarter and faster outcomes.
            </p>
          </motion.div>
      </Container>

      <Container className="mt-10 space-y-6 md:mt-12 md:space-y-8">
        {solutionCards.map((card) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0C16] p-8 md:p-12 lg:p-14"
          >
            <div className="pointer-events-none absolute left-0 top-0 h-[90%] w-[55%]">
              <Image
                src={card.glow}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 740px"
                className="object-contain object-left-top"
                aria-hidden
              />
            </div>
            <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col">
                <h3 className="max-w-md text-3xl font-medium leading-tight text-white md:text-4xl">
                  {card.title}
                </h3>
                <Link
                  href="#contact"
                  className="mt-auto inline-flex h-11 w-fit items-center justify-center rounded-full border border-white/50 px-7 text-sm font-medium text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-default"
                >
                  Learn more
                </Link>
              </div>

              <ul className="space-y-6">
                {card.bullets.map((bullet) => (
                  <li key={bullet.title} className="flex gap-3">
                    <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                    <div>
                      <p className="text-base font-semibold text-white md:text-[17px]">
                        {bullet.title}
                      </p>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-white/65">
                        {bullet.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </Container>
    </section>
  );
}
