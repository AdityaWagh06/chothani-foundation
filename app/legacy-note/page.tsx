import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Note — Chothani Family",
  description: "A message from the Chothani Family and Trustees on their commitment to multi-generational service.",
};

export default function LegacyNotePage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Emblem */}
        <div className="text-center space-y-4">
          <div className="relative h-20 w-20 mx-auto overflow-hidden rounded-2xl bg-white p-2 border border-gray-100 shadow-md">
            <Image
              src="/images/logo-1.webp"
              alt="Chothani Foundation Official Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#356877]">
            CHOTHANI FOUNDATION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#356877] uppercase tracking-wide">
            LEGACY NOTE
          </h1>
          <p className="text-lg sm:text-xl font-serif text-gray-800">
            Message From the <strong className="text-[#356877] font-bold">Chothani</strong> Family
          </p>
          <div className="h-1 w-24 bg-[#DFA528] mx-auto rounded-full" />
        </div>

        {/* Letter Container */}
        <SectionReveal className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-2xl space-y-10">
          
          {/* Family Photo Banner */}
          <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/images/photo-3.jpg"
              alt="The Chothani Family Photo"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <p className="font-serif text-xl sm:text-2xl font-bold text-white">
                The Chothani Family & Trustees
              </p>
            </div>
          </div>

          {/* Letter Body */}
          <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-relaxed space-y-6 text-base sm:text-lg">
            <p className="font-bold text-xl text-[#356877]">Dear Friends,</p>

            <p>
              Chothani Foundation is born not only from a lifetime of service, but from a shared family conviction that values must outlive individuals.
            </p>

            <p>
              For us, <strong className="text-[#356877] font-bold">Dr. Krishnakumar Chothani</strong> has always been more than a doctor. He has been a living example of humility, discipline, and compassion in action.
            </p>

            <p>
              For over five decades, we have watched him place service above comfort, people above process, and conscience above convenience. His work has never sought recognition—only relevance.
            </p>

            <p>
              As a family, we felt a deep responsibility to ensure that this way of life does not remain confined to memory, but evolves into a structured, enduring institution. <strong className="text-[#356877] font-bold">Chothani Foundation</strong> represents that responsibility.
            </p>

            {/* Promise Box */}
            <div className="my-8 rounded-2xl bg-gray-50 border-l-4 border-[#DFA528] p-6 sm:p-8 space-y-3 font-sans text-base">
              <p className="font-serif font-bold text-lg text-[#356877]">
                This Foundation is our collective promise:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>To uphold the ethics and empathy that defined his work</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>To serve with sincerity, not symbolism</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>To build impact that is patient, sustainable, and rooted at the grassroots</span>
                </li>
              </ul>
            </div>

            <p>
              Each of the Foundation&apos;s focus areas—education, healthcare, animal welfare, rural development, and sports—reflects causes that have been close to his heart and integral to his life&apos;s work.
            </p>

            <p className="font-semibold text-[#356877] italic">
              They are not initiatives chosen for scale, but for significance.
            </p>

            {/* Commitment Box */}
            <div className="my-8 rounded-2xl bg-[#1A1D24] text-white p-6 sm:p-8 space-y-3 font-sans text-base">
              <p className="font-serif font-bold text-lg text-[#DFA528]">
                As trustees and family members, we commit ourselves to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>Transparent and ethical governance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>Long-term vision over short-term visibility</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span>Compassion-led action guided by accountability</span>
                </li>
              </ul>
            </div>

            <p>
              We view this Foundation not as a project, but as a continuum—a bridge between generations, carrying forward a philosophy of service that believes real change happens quietly, consistently, and with integrity.
            </p>

            <p>
              Our hope is simple: that Chothani Foundation becomes a place where values are practised, lives are touched, and service remains sacred.
            </p>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#356877] italic">
                &ldquo;This is our legacy. This is our responsibility. This is our offering to the future.&rdquo;
              </p>
            </div>
          </div>

          {/* Sign-off */}
          <div className="pt-8 border-t border-gray-100 space-y-2 font-serif">
            <p className="text-2xl font-bold text-[#356877]">The Chothani Family</p>
            <p className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-wider">
              Trustees, Chothani Foundation
            </p>
          </div>

        </SectionReveal>

        {/* Closing Line */}
        <div className="text-center py-4">
          <p className="font-serif text-xl italic font-semibold text-[#356877]">
            &ldquo;Values endure when they are lived—and passed forward.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
