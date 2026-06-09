"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "AI Pillars",
    links: [
      { label: "Velocity AI", href: "#" },
      { label: "Agentic Orchestration", href: "#" },
      { label: "Data Foundation", href: "#" },
    ],
  },
  {
    title: "Core Capabilities",
    links: [
      { label: "Customer Service & Support", href: "#" },
      { label: "Sales & Marketing", href: "#" },
      { label: "Financial Operations", href: "#" },
      { label: "Human Resources", href: "#" },
      { label: "Operations & Compliance", href: "#" },
      { label: "Project Management & Data", href: "#" },
    ],
  },
  {
    title: "Impact Studies",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "BioResearch Labs", href: "#" },
      { label: "Iberian Ventures", href: "#" },
      { label: "Allied Insurance", href: "#" },
      { label: "Global Manufacturing Corp", href: "#" },
      { label: "GlobalTrade Solutions", href: "#" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Financial Services", href: "#" },
      { label: "Healthcare", href: "#" },
      { label: "Insurance", href: "#" },
      { label: "Media and Entertainment", href: "#" },
    ],
  },
  {
    title: "Strategic Partners",
    links: [
      { label: "Amazon Web Services (AWS)", href: "#" },
      { label: "Databricks", href: "#" },
      { label: "Snowflake", href: "#" },
      { label: "UX Pilot AI", href: "#" },
    ],
  },
  {
    title: "About eForte",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Press and announcements", href: "#" },
      { label: "Information Security Policy", href: "#" },
      { label: "Trust Center", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Insights", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Events", href: "#" },
      { label: "Reports", href: "#" },
      { label: "Diversity", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px", amount: 0.15 });

  return (
    <footer ref={ref} className="w-full bg-default text-white">
      <Container>
        <div className="py-12 md:py-16 lg:py-20">
          {/* Logo */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/logo.svg"
                alt="eForte Logo"
                width={105}
                height={32}
                className="h-6 md:h-8 w-auto"
              />
            </Link>
          </motion.div>

          {/* Footer Columns */}
          <motion.div
            className="columns-2 md:columns-3 lg:columns-4 xl:columns-7 gap-8 md:gap-12 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {footerColumns.map((column) => (
              <div key={column.title} className="break-inside-avoid mb-8">
                <h3 className="text-sm md:text-base font-semibold text-white mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-desc hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-700 pt-8 md:pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-sm text-desc">
                © {new Date().getFullYear()} eForte.io. All rights reserved.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="text-desc hover:text-white transition-colors duration-200 p-2"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
}
