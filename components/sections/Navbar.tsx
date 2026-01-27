"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";
import Container from "@/components/atoms/Container";
import { HiMenu, HiX } from "react-icons/hi";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Process", href: "#" },
  { label: "Case Studies", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  const isScrolled = useScroll(10);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "h-16 md:h-20",
          isScrolled || isMobileMenuOpen
            ? "bg-white shadow-sm"
            : "bg-transparent"
        )}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Image
              src={isScrolled || isMobileMenuOpen ? "/assets/images/logo-black.svg" : "/assets/images/logo.svg"}
              alt="eForte Logo"
              width={105}
              height={32}
              className="h-6 md:h-8 w-full max-w-28"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "text-base font-normal transition-colors duration-200",
                  "hover:opacity-80",
                  isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-desc"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="#"
              className={cn(
                "px-4 md:px-6 h-12 rounded-md flex items-center justify-center",
                "text-sm md:text-base font-semibold",
                "bg-primary-pink text-white border border-primary-pink",
                "hover:bg-transparent transition-all duration-200",
                "whitespace-nowrap",
                isScrolled
                  ? "hover:text-gray-900"
                  : "hover:text-white"
              )}
            >
              Let&apos;s build intelligence together.
            </Link>
          </div>

          {/* Mobile/Tablet Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className={cn(
              "lg:hidden p-2 rounded-md transition-colors duration-200",
              "flex items-center justify-center",
              isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
        onClick={closeMobileMenu}
      >
        {/* Backdrop */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

        {/* Menu Panel - Full Width, Below Navbar */}
        <div
          className={cn(
            "absolute top-16 md:top-20 left-0 right-0 bottom-0 w-full",
            "bg-white transform transition-transform duration-300",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "px-6 py-4 text-base font-normal text-gray-900",
                      "hover:bg-gray-50 transition-colors duration-200",
                      "border-b border-gray-200"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-gray-200">
              <Link
                href="#"
                onClick={closeMobileMenu}
                className={cn(
                  "w-full h-12 rounded-md flex items-center justify-center",
                  "text-sm font-semibold",
                  "bg-primary-pink text-white border border-primary-pink",
                  "hover:bg-transparent hover:text-primary-pink transition-all duration-200"
                )}
              >
                Let&apos;s build intelligence together.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
