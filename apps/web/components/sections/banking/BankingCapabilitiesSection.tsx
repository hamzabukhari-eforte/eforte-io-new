"use client";

import Image from "next/image";
import Container from "@/components/atoms/Container";
import { motion } from "@/lib/replayMotion";

const modernizationRows = [
  {
    title: "Legacy-to-cloud core migration",
    tech: ["aws", "Google Cloud", "Azure"],
    imageSrc: "/assets/images/industry/deliver-1.svg",
  },
  {
    title: "API-driven integration with fintech and payment platforms",
    tech: ["stripe", "fiserv.", "galileo"],
    imageSrc: "/assets/images/industry/deliver-2.svg",
  },
  {
    title: "Data modernization and architecture redesign",
    tech: ["databricks", "snowflake"],
    imageSrc: "/assets/images/industry/deliver-3.svg",
  },
  {
    title: "Modular, scalable service models for rapid product deployment",
    tech: ["LangChain", "Terraform", "kubernetes"],
    imageSrc: "/assets/images/industry/deliver-4.svg",
  },
];

export default function BankingCapabilitiesSection() {
  const complianceItems = [
    {
      title: "AML and KYC automation",
      iconSrc: "/assets/images/industry/compliance-1.svg",
    },
    {
      title: "Regulatory data pipelines and reporting",
      iconSrc: "/assets/images/industry/compliance-2.svg",
    },
    {
      title: "Model risk management for AI systems",
      iconSrc: "/assets/images/industry/compliance-3.svg",
    },
    {
      title: "Data privacy alignment with GDPR, CCPA, and local frameworks",
      iconSrc: "/assets/images/industry/compliance-4.svg",
    },
  ];

  return (
    <>
      <section className="bg-default pb-20 pt-24">
        <Container>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
            Core Banking Modernization
          </p>
          <h2 className="mt-4 text-center text-4xl font-medium text-white md:text-5xl lg:text-[56px]">
            Banking services &amp; capabilities
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-relaxed text-white/80 md:text-[17px]">
            Modernize your core systems to move at the speed of innovation.
            <br />
            eForte&apos;s engineering and data experts design, migrate, and integrate core banking
            services that enable banks to scale efficiently and launch new products faster.
          </p>
          <div className="mt-14 flex justify-center">
            <span className="inline-flex items-center justify-center h-10 rounded-full leading-none border border-primary-pink px-8 py-0 text-[11px] font-bold uppercase tracking-[0.15em] text-primary-pink">
              What We Deliver
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-default pb-20">
        <Container className="space-y-16">
          {modernizationRows.map((row, index) => (
            <motion.div
              key={row.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-80px", amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`mx-auto grid max-w-5xl items-center gap-6 md:grid-cols-2 md:gap-10 ${index % 2 === 1 ? "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1" : ""}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-80px", amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 + 0.05 }}
                className="relative mx-auto h-[240px] w-[240px] md:h-[280px] md:w-[280px]"
              >
                <Image
                  src={row.imageSrc}
                  alt={row.title}
                  fill
                  className="object-contain"
                  sizes="300px"
                />
              </motion.div>

              <div className="text-center md:text-left">
                <h3 className="max-w-xl text-2xl font-medium leading-tight text-white md:text-4xl">
                  {row.title}
                </h3>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 md:justify-start">
                  {row.tech.map((tech) => (
                    <span key={tech} className="text-lg font-medium text-white md:text-xl">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </Container>
      </section>

      <section className="bg-default py-24">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-medium leading-tight text-white md:text-5xl lg:text-[56px]">
              Digital banking solutions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-[17px]">
              Deliver seamless, intelligent experiences that customers trust. We combine design,
              data, and AI to help banks build next-generation digital banking solutions - from
              personalized mobile apps to omnichannel onboarding journeys.
            </p>
            <p className="mt-8 text-xl font-medium text-white md:text-2xl">Our focus areas:</p>
            <ul className="mt-5 space-y-3 text-sm text-white/85 md:text-base">
              <li>• AI-powered onboarding and customer engagement</li>
              <li>• Digital wallets and real-time payments</li>
              <li>• Open Banking and Banking-as-a-Service (BaaS) platforms</li>
              <li>• Predictive analytics and personalization engines</li>
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px", amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto min-h-80 w-full "
          >
            <Image
              src="/assets/images/industry/solutions-1.jpg"
              alt="Digital banking solutions visual"
              width={560}
              height={340}
              className="object-cover"
            />
          </motion.div>
        </Container>
      </section>

      <section className="-mt-8 rounded-t-[12px] bg-slate-50 py-24 text-slate-900 md:-mt-10 md:rounded-t-[12px]">
        <Container>
          <h2 className="text-center text-4xl font-medium md:text-5xl lg:text-[56px] max-w-2xl mx-auto">
            Bank compliance and risk management
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:text-[17px]">
            eForte embeds bank compliance and governance frameworks into every solution with deep
            expertise in banking compliance. We help you automate compliance processes, improve
            transparency, and reduce risk exposure.
          </p>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative h-14 w-14">
                  <Image src={item.iconSrc} alt={item.title} fill className="object-contain" />
                </div>
                <p className="mt-4 text-lg font-semibold leading-snug text-slate-900 md:text-xl">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="rounded-b-[12px] bg-slate-50 pb-24 text-slate-900 md:rounded-b-[12px]">
        <Container className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-medium leading-tight md:text-5xl lg:text-[56px]">
              Financial cybersecurity and resilience
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-[17px]">
              Security and operational resilience are core to modern banking. eForte helps
              financial institutions protect critical systems, sensitive data, and customer trust -
              enabling secure innovation under regulatory scrutiny.
            </p>
            <p className="mt-8 text-xl font-medium md:text-2xl">Banking security capabilities:</p>
            <ul className="mt-4 space-y-3 text-base text-slate-800 md:text-[17px]">
              <li>• Secure-by-design architecture and DevSecOps</li>
              <li>• Threat modeling and vulnerability management</li>
              <li>• AI lifecycle protection and model auditability</li>
              <li>• Zero-trust cloud and endpoint security frameworks</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-80px", amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[640px]"
          >
            <Image
              src="/assets/images/industry/financial-cybersecurity.png"
              alt="Financial cybersecurity trend and shield visual"
              width={1024}
              height={768}
              className="h-auto w-full object-contain"
            />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
