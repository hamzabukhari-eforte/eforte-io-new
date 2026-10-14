"use client";

import Container from "@/components/atoms/Container";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInViewReplay } from "@/lib/useInViewReplay";

import { footerColumns } from "@/data/siteNavigation";
import FooterImpactStudiesColumn from "@/components/sections/FooterImpactStudiesColumn";
import FooterItemLink from "@/components/sections/FooterItemLink";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/eforte-solutions/",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/eForteSolutions/",
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    href: "https://x.com/eforte_net",
    label: "X",
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInViewReplay(ref, { margin: "0px", amount: 0.25 });

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
                width={140}
                height={42}
                className="h-8 md:h-10 w-auto"
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
                  <h3 className="mb-4 text-base font-semibold text-white md:text-lg">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <FooterItemLink href={link.href} label={link.label} />
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
            <div className="mb-6 max-w-xl text-center text-sm text-white/70 sm:text-left">
              <p className="text-white/90">eForte Solutions</p>
              <p className="mt-1">
                1207 Delaware Ave, Suite 2858, Wilmington, DE 19806
              </p>
              <p className="mt-1">
                <a
                  href="mailto:inquiry@eforte.io"
                  className="underline-offset-2 hover:text-primary-pink hover:underline"
                >
                  inquiry@eforte.io
                </a>
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex flex-col items-center gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
                <p className="shrink-0 text-white">
                  © {new Date().getFullYear()} eForte.io. All rights reserved.
                </p>
                <nav
                  aria-label="Legal"
                  className="flex flex-wrap items-center justify-center gap-4 sm:justify-start"
                >
                  <FooterItemLink href="/privacy-policy" label="Privacy Policy" />
                  <FooterItemLink
                    href="/terms-and-conditions"
                    label="Terms & Conditions"
                  />
                  <FooterItemLink href="/sitemap" label="Sitemap" />
                </nav>
              </div>

              <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-2 text-white transition-colors duration-200 hover:text-primary-pink"
                    >
                      <Icon className="h-5 w-5" />
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
