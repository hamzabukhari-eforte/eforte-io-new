"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/atoms/Container";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const cards = [
  {
    image: "/assets/images/case-study/krank-banner.png",
    title: "Krank",
    heading: "Heavy Machinery",
    description:
      "Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how market buys and sells heavy equipment. For that reason Krank offers to make a sales network for your own company where you can list your machinery for sell/rent/auction. The privacy of the platform ensures that the integrity of a network remains intact while others on the platform interact with the company's news, posts, sell/rent/auction listings and most of all the contacts book.",
    link: "/case-studies/krank",
  },
  {
    image: "/assets/images/case-study/oddysee-banner.png",
    title: "Oddysee",
    heading: "Civic Municipal, Project Management",
    description:
      "Oddysee is the platform to automate the licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written templates of documents to choose from. A business plan module to automate business plans writing according to the industry and a financial forecast module. All supported with project management tools so to meet deadlines and evaluate team performances.",
    link: "/case-studies/oddysee",
  },
  {
    image: "/assets/images/case-study/invesment-banner.png",
    title: "Investment Markets",
    heading: "Investments | Finance",
    description:
      "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both. The platform offers investors a wide range of investment listings and be directly connected with the listee's. In addition to establishing business networking, InvestmentMarkets provides potential investors with and investment seekers latest news and events to stay informed and gain the market insights to inspire their investment journey.",
    link: "/case-studies/investment-markets",
  },
  {
    image: "/assets/images/case-study/prism-banner.png",
    title: "Prism",
    heading: "Retail Forecasting",
    description:
      "A trends forecasting engine, Prism is a procedure for forecasting time series data based on an additive model.",
    link: "/case-studies/prism",
  },
  {
    image: "/assets/images/case-study/scheduling1.png",
    title: "Scheduling Engine",
    heading: "Work Force Management | Support Center",
    description:
      "The scheduling engine software developed for Stratex was successful in automating the scheduling process and reducing labor costs for their clients.",
    link: "/case-studies/scheduling-engine",
  },
  {
    image: "/assets/images/case-study/sellsMart4.png",
    title: "Sellsmart",
    heading: "Retail | Finance | Accounting | Supply-chain",
    description:
      "Sellsmart.biz is an online Point of Sale System aimed to be a SaaS platform and equipped with all the right features of an online POS system.",
    link: "/case-studies/sellsmart",
  },
  {
    image: "/assets/images/case-study/Validatr.png",
    title: "Validatr",
    heading: "Startup / Business Management",
    description:
      "Validatr.io is a tool for startups and businesses to do market validation of new ideas and generate detailed report-style documents for business plans and investor rounds.",
    link: "/case-studies/validatr",
  },
];

export default function ImpactStudiesContent() {
  return (
    <main className="w-full bg-[#0b0b14]">
      <section className="relative w-full flex flex-col items-center gap-16 py-20 px-6 md:px-12">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px", amount: 0.3 }}
          className="text-3xl lg:text-4xl font-semibold text-center text-white"
        >
          Empowering positive change,
          <br />
          One client at a time.
          <br />
          Experience the best, because you deserve the best.
        </motion.div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

        <Container className="relative z-10 flex flex-col items-center gap-10">
          {cards.map((item) => (
            <motion.article
              key={item.title}
              className="w-full max-w-6xl rounded-2xl overflow-hidden bg-linear-to-r from-[#0f1020] to-[#0b0b14] shadow-xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-120px", amount: 0.3 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                <motion.div
                  className="p-6 lg:p-12 flex flex-col gap-5 text-white"
                  variants={itemVariants}
                >
                  <motion.span
                    variants={itemVariants}
                    className="text-sm uppercase tracking-widest bg-clip-text text-[#db2777]"
                  >
                    {item.title}
                  </motion.span>

                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl lg:text-4xl font-semibold"
                  >
                    {item.heading}
                  </motion.h2>

                  <motion.p
                    variants={itemVariants}
                    className="text-gray-300 leading-relaxed text-sm"
                  >
                    {item.description}
                  </motion.p>

                  <motion.div variants={itemVariants}>
                    <Link
                      href={item.link}
                      className="inline-block mt-6 md:mt-8 px-7 py-2.5 md:px-9 md:py-3 rounded-full border-2 border-[#db2777] text-[#db2777] font-medium text-sm md:text-[15px] hover:bg-[#db2777] hover:text-white transition-all duration-300" >
                      View Case Study
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="relative w-full min-h-[260px] lg:min-h-[340px] flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={640}
                    height={400}
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </Container>
      </section>
    </main>
  );
}

