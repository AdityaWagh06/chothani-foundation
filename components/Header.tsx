"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useDonation } from "@/context/DonationContext";
import { ChevronDown, Menu, X, HeartHandshake } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const pathname = usePathname();
  const { openDonationModal } = useDonation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-2.5"
          : "bg-white py-3 border-b border-gray-100"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Using official logo-1.webp */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          <div className="relative h-14 sm:h-16 w-14 sm:w-16 transition-transform group-hover:scale-105">
            <Image
              src="/images/logo-1.webp"
              alt="Chothani Foundation Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#356877] leading-none">
              CHOTHANI
            </span>
            <span className="text-[11px] sm:text-xs tracking-widest uppercase text-[#356877] font-semibold mt-0.5">
              FOUNDATION
            </span>
            <span className="text-[10px] text-[#DFA528] font-serif tracking-wider">
              हिताय सर्वेषम्
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          <Link
            href="/"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <button
              onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
              className={`flex items-center gap-1 transition-colors hover:text-[#DFA528] ${
                pathname.startsWith("/about-us") ||
                pathname === "/founder-letter" ||
                pathname === "/legacy-note"
                  ? "text-[#DFA528] font-bold"
                  : "text-[#356877]"
              }`}
              aria-expanded={aboutDropdownOpen}
            >
              <span>About</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${aboutDropdownOpen ? "rotate-180 text-[#DFA528]" : ""}`} />
            </button>

            {/* Dropdown Menu */}
            {aboutDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-xl bg-white p-2 shadow-xl border border-gray-100 text-sm space-y-1">
                  <Link
                    href="/about-us"
                    className="block px-4 py-2.5 rounded-lg text-[#356877] hover:bg-[#F8FAFC] hover:text-[#DFA528] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about-us#governance"
                    className="block px-4 py-2.5 rounded-lg text-[#356877] hover:bg-[#F8FAFC] hover:text-[#DFA528] transition-colors"
                  >
                    Governance
                  </Link>
                  <Link
                    href="/founder-letter"
                    className="block px-4 py-2.5 rounded-lg text-[#356877] hover:bg-[#F8FAFC] hover:text-[#DFA528] transition-colors"
                  >
                    Founder&apos;s Letter
                  </Link>
                  <Link
                    href="/legacy-note"
                    className="block px-4 py-2.5 rounded-lg text-[#356877] hover:bg-[#F8FAFC] hover:text-[#DFA528] transition-colors"
                  >
                    Legacy Note
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/focus-areas"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/focus-areas" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Core Focus Areas
          </Link>

          <Link
            href="/gallery"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/gallery" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Gallery
          </Link>

          <Link
            href="/testimonials"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/testimonials" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Testimonials
          </Link>

          <Link
            href="/contact-us"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/contact-us" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Contact Us
          </Link>

          <Link
            href="/#get-involved"
            className={`transition-colors hover:text-[#DFA528] ${
              pathname === "/#get-involved" ? "text-[#DFA528] font-bold" : "text-[#356877]"
            }`}
          >
            Join the Cause
          </Link>

          {/* Make a Donation Button */}
          <button
            onClick={() => openDonationModal()}
            className="inline-flex items-center gap-1.5 rounded-md bg-[#DFA528] px-4 py-2 text-sm font-semibold text-white hover:bg-[#C4881E] transition-all shadow-sm"
          >
            <HeartHandshake className="h-4 w-4" />
            Donate
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => openDonationModal()}
            className="inline-flex items-center gap-1 rounded-md bg-[#DFA528] px-3 py-1.5 text-xs font-semibold text-white"
          >
            <HeartHandshake className="h-3.5 w-3.5" />
            Donate
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-[#356877] hover:bg-gray-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-[#356877]" /> : <Menu className="h-6 w-6 text-[#356877]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[73px] z-50 bg-white lg:hidden flex flex-col p-6 border-t border-gray-100 overflow-y-auto">
          <nav className="flex flex-col space-y-4 text-base font-semibold">
            <Link href="/" className="py-2 border-b border-gray-100 text-[#356877]">Home</Link>

            <div className="border-b border-gray-100 pb-2">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between py-2 text-[#356877]"
              >
                <span>About</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${mobileAboutOpen ? "rotate-180 text-[#DFA528]" : ""}`} />
              </button>

              {mobileAboutOpen && (
                <div className="ml-4 pl-3 border-l-2 border-[#DFA528] mt-2 space-y-2.5 text-sm">
                  <Link href="/about-us" className="block text-[#356877] py-1">About Us</Link>
                  <Link href="/about-us#governance" className="block text-[#356877] py-1">Governance</Link>
                  <Link href="/founder-letter" className="block text-[#356877] py-1">Founder&apos;s Letter</Link>
                  <Link href="/legacy-note" className="block text-[#356877] py-1">Legacy Note</Link>
                </div>
              )}
            </div>

            <Link href="/focus-areas" className="py-2 border-b border-gray-100 text-[#356877]">Core Focus Areas</Link>
            <Link href="/gallery" className="py-2 border-b border-gray-100 text-[#356877]">Gallery</Link>
            <Link href="/testimonials" className="py-2 border-b border-gray-100 text-[#356877]">Testimonials</Link>
            <Link href="/contact-us" className="py-2 border-b border-gray-100 text-[#356877]">Contact Us</Link>
            <Link href="/#get-involved" className="py-2 border-b border-gray-100 text-[#356877]">Join the Cause</Link>

            <div className="pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonationModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-md bg-[#DFA528] py-3 text-base font-semibold text-white hover:bg-[#C4881E] transition-all shadow-md"
              >
                <HeartHandshake className="h-5 w-5" />
                Make a Donation
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
