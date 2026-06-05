"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/atoms/Container";

type Service = {
  id: string;
  icon: string;
  title: string;
  paragraphs: string[];
};

const services: Service[] = [
  {
    id: "data-platform",
    icon: "/assets/images/industry/data.svg",
    title: "Data platform modernization",
    paragraphs: [
      "eForte helps media and entertainment companies move from legacy platforms to modern, AI-ready environments like the Databricks Lakehouse. This transformation unlocks scalable, high-performance, and unified analytics across content, audiences, and operations.",
      "By applying data engineering best practices - from pipeline optimization to governance and monitoring - we ensure that data is reliable, actionable, and ready to power AI-driven personalization, insights, and business decisions.",
    ],
  },
  {
    id: "streaming",
    icon: "/assets/images/industry/traffic.svg",
    title: "Intelligent traffic & streaming management",
    paragraphs: [
      "eForte develops advanced, AI-powered traffic management systems that monitor streaming networks in real time and automatically detect performance issues before they affect viewers.",
      "By applying intelligent anomaly detection and predictive analytics, our solutions dynamically optimize delivery paths. The result is a smoother streaming experience, reduced buffering, and higher customer satisfaction.",
    ],
  },
  {
    id: "product-design",
    icon: "/assets/images/industry/design.svg",
    title: "Product design & experience innovation",
    paragraphs: [
      "In media and entertainment, great content needs a great experience. eForte designs intuitive, user-centered platforms that make streaming, gaming, and publishing effortless and engaging.",
      "We combine usability testing, behavioral analytics, and AI-driven capabilities to deliver seamless, accessible, and memorable experiences that keep audiences coming back.",
    ],
  },
  {
    id: "cloud-scalable",
    icon: "/assets/images/industry/cloud.svg",
    title: "Cloud & scalable architecture design",
    paragraphs: [
      "eForte designs and builds cloud-native architectures that support millions of users, massive content libraries, and real-time performance demands.",
      "From global asset management systems to multi-cloud deployments, we create resilient, cost-efficient infrastructures optimized for scalability, security, and seamless delivery.",
    ],
  },
  {
    id: "data-analytics",
    icon: "/assets/images/industry/media.svg",
    title: "Media data analytics & insights",
    paragraphs: [
      "Unlock actionable insights from your audience and content data. eForte builds AI-powered pipelines and dashboards that capture consumption patterns, platform activity, and content performance in real time.",
      "By combining predictive analytics, anomaly detection, and model monitoring, media leaders can optimize engagement, fine-tune recommendations, and make data-driven decisions.",
    ],
  },
  {
    id: "platform-security",
    icon: "/assets/images/industry/platform.svg",
    title: "Media platform security & compliance",
    paragraphs: [
      "eForte protects media and entertainment platforms with AI-driven security that safeguards content, user data, and accounts.",
      "Our security solutions include real-time threat detection, automated response, and compliance with industry standards, ensuring secure experiences without disrupting audiences.",
    ],
  },
];

export default function MediaEntertainmentServicesSection() {
  return (
    <section className="bg-default">
      <div className="rounded-[36px] bg-white py-20 text-default md:rounded-[42px] md:py-28">
        <Container>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px", amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center text-[38px] font-semibold leading-[46px] text-default"
          >
            Media and entertainment services
          </motion.h2>

          <div className="mt-14 grid gap-x-10 gap-y-14 md:mt-20 md:grid-cols-3 md:gap-x-12 md:gap-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-80px", amount: 0.3 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
                className="flex flex-col"
              >
                <div className="relative h-[60px] w-[60px]">
                  <Image
                    src={service.icon}
                    alt=""
                    fill
                    className="object-contain object-left"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 max-w-[240px] text-[21px] font-medium leading-[25px] text-default">
                  {service.title}
                </h3>
                <div className="mt-4 space-y-4 text-[15px] font-normal leading-[21px] text-[#383838]">
                  {service.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
