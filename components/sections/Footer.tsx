"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { footerColumns } from "@/data/siteNavigation";
import FooterImpactStudiesColumn from "@/components/sections/FooterImpactStudiesColumn";

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

          {/* Footer Columns — one row on lg (7 cols matching top nav; Databricks commented out) */}
          <motion.div
            className="mb-12 grid grid-cols-2 gap-8 md:mb-16 md:grid-cols-3 lg:grid-cols-7 md:gap-10 lg:gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {footerColumns.map((column) =>
              column.title === "Impact Studies" ? (
                <FooterImpactStudiesColumn
                  key={column.title}
                  title={column.title}
                  links={column.links}
                />
              ) : (
                <div key={column.title}>
                  <h3 className="mb-4 text-sm font-semibold text-white md:text-base">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-desc transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-gray-700 pt-8 md:pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
                <p className="text-sm text-desc">
                  © {new Date().getFullYear()} eForte.io. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href="/privacy-policy"
                    className="text-desc transition-colors duration-200 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="text-desc transition-colors duration-200 hover:text-white"
                  >
                    Terms &amp; Conditions
                  </Link>
                  <Link
                    href="/site-map"
                    className="text-desc transition-colors duration-200 hover:text-white"
                  >
                    Sitemap
                  </Link>
                </div>
              </div>

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
