import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#212529] text-gray-300 border-t border-gray-800 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 bg-white p-1 rounded-xl shadow-md">
                <Image
                  src="/images/logo-1.webp"
                  alt="Chothani Foundation Official Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-tight text-white leading-none">
                  CHOTHANI
                </span>
                <span className="text-xs tracking-widest uppercase text-[#DFA528] font-semibold mt-1">
                  FOUNDATION
                </span>
                <span className="text-[10px] text-gray-400 font-serif tracking-wider">
                  हिताय सर्वेषम्
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed font-normal pt-2">
              A family trust dedicated to service, inspired by a life of compassion, and committed to building a better tomorrow.
            </p>
            <div className="pt-1">
              <span className="inline-block text-xs font-semibold tracking-widest text-[#DFA528] uppercase border-b border-[#DFA528]/30 pb-1">
                Registered Charitable Family Trust
              </span>
            </div>
          </div>

          {/* Column 2 — Important Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-[#DFA528] pl-3">
              Important Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/focus-areas" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Core Focus Areas
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/#get-involved" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Join the Cause
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Letters */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-[#DFA528] pl-3">
              Letters & Notes
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/legacy-note" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Legacy Note
                </Link>
              </li>
              <li>
                <Link href="/founder-letter" className="text-gray-300 hover:text-[#DFA528] transition-colors">
                  Founder&apos;s Letter
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Get in Touch */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-l-2 border-[#DFA528] pl-3">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                <a href="mailto:chothanifoundation@gmail.com" className="hover:underline text-gray-300">
                  chothanifoundation@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                <a href="tel:+919699653181" className="hover:underline text-gray-300">
                  +91 9699 65 3181
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                <a href="https://www.chothanifoundation.com" target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-300">
                  www.chothanifoundation.com
                </a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <MapPin className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                <span>
                  C/o Chothani Hospital, Office No. 1, Ward No. 7, Near Sarvamat Press, Shrirampur – 413709, District Ahmednagar, Maharashtra
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>Copyright © 2026 Chothani Foundation. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/about-us#governance" className="hover:text-white transition-colors">
              Governance & Transparency
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
