"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { CheckCircle2, ArrowRightCircle, Heart } from "lucide-react";

export default function AboutUsPage() {
  const { openDonationModal } = useDonation();

  return (
    <div className="w-full bg-white">
      
      {/* 1. Green Banner 1: Header Banner (image001.webp with fixed background) */}
      <section
        className="relative w-full h-[300px] sm:h-[360px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image001.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DFA528] tracking-wide drop-shadow-md">
            About the Foundation
          </h1>
          <p className="text-base sm:text-lg text-white font-medium tracking-wide drop-shadow-sm">
            Compassion. Service. Legacy.
          </p>
        </div>
      </section>

      {/* 2. Our Story (Using image003.webp matching SS 1) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image: image003.webp */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[350px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image003.webp"
                  alt="Dr. Krishnakumar Chothani Healthcare Service"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Right Story Content */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Our Story
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pt-1">
                    For over 50 years, <strong className="text-slate-900 font-semibold">Dr. Krishnakumar Chothani</strong> has served thousands of children and families in and around the Shrirampur region—often beyond the call of duty, without regard for time, recognition, or reward.
                  </p>
                </div>

                <div className="space-y-2.5">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#356877]">
                    Chothani Foundation was established to:
                  </p>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                      <span>Honour this extraordinary journey of service</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                      <span>Preserve the values he lived by</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                      <span>Expand the impact through organised, transparent, and scalable initiatives</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm text-gray-800 font-normal leading-relaxed pt-1">
                  This is a family-led charitable organization, guided by the belief that <strong className="font-bold text-[#356877]">service is not an act—it is a way of life.</strong>
                </p>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Green Banner 2: Our Vision Banner (sector.webp with identical fixed background) */}
      <section
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3 py-8 sm:py-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm">
            To build a compassionate, inclusive society where health, education, dignity, and opportunity are accessible to all—especially in rural and underserved communities.
          </p>
        </div>
      </section>

      {/* 4. Our Mission (Using image004.webp matching SS 2) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Content: Our Mission */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Our Mission
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                </div>

                <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To deliver meaningful, grassroots-level impact in areas of human and social development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To support children, families, and communities with integrity and empathy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To create long-term, sustainable change rather than short-term relief</span>
                  </li>
                </ul>
              </div>

              {/* Right Image: image004.webp (Children with slate boards) */}
              <div className="lg:col-span-5 relative h-60 sm:h-72 lg:h-[300px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image004.webp"
                  alt="Rural Education Outreach Initiative - Children with Slates"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Green Banner 3: A Philosophy That Guides Every Action Banner (sector.webp with identical fixed background) */}
      <section
        className="relative w-full h-[240px] sm:h-[280px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3 py-8 sm:py-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            A Philosophy That Guides Every Action
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-normal text-white/95 leading-relaxed">
            Compassion in practice. Integrity in action. Service for life.
          </p>
        </div>
      </section>

      {/* 6. Founder Profile Section (Using blurry.webp matching SS 1 & 3) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image: blurry.webp (Dr. Krishnakumar Chothani with logo wall backdrop) */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[400px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
                <Image
                  src="/images/blurry.webp"
                  alt="Dr. Krishnakumar Chothani Founder Portrait"
                  fill
                  quality={100}
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Right Profile Info */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Dr. Krishnakumar Chothani
                  </h2>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#356877]">
                    Founder Chairperson
                  </p>
                  <div className="h-0.5 w-14 bg-[#DFA528] mt-1" />
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Dr. Krishnakumar Chothani is not defined by titles or accolades, but by five decades of quiet, consistent service.
                </p>

                <div className="space-y-2 text-sm text-gray-700">
                  <p className="font-semibold text-gray-900">As a paediatrician in rural India, he has:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4 w-4 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Treated generations of children</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4 w-4 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Served families across socio-economic boundaries</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4 w-4 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Practised medicine with empathy, patience, and moral conviction</span>
                    </li>
                  </ul>
                </div>

                {/* Quote line as per SS 1 */}
                <div className="pl-4 border-l-2 border-gray-300 py-1">
                  <p className="font-serif text-sm sm:text-base italic font-medium text-gray-800">
                    &ldquo;Healing is not only about medicine—it is about trust, care, and presence.&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  His work has always extended beyond clinical practice—touching education, community welfare, ethical living, and social responsibility.
                </p>

                <p className="text-xs sm:text-sm text-gray-800 font-medium leading-relaxed">
                  Chothani Foundation reflects his philosophy: <strong className="text-slate-900 font-bold">serve without discrimination, give without expectation, and work without ego.</strong>
                </p>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Family & Governance Section (Using family.webp on rgb(33, 37, 41) dark background matching SS 2) */}
      <section id="governance" className="scroll-mt-24 w-full bg-[#212529] py-14 sm:py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image: family.webp (Chothani Family Group Photo) */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] w-full rounded-xl overflow-hidden bg-white shadow-xl p-2">
              <Image
                src="/images/family.webp"
                alt="Chothani Family & Governance Group Photo"
                fill
                quality={100}
                className="object-contain p-2"
              />
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6 text-white">
              <div className="space-y-1">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#DFA528]">
                  Family & Governance
                </h2>
                <h3 className="text-sm font-semibold text-teal-300 tracking-wide">
                  A Family Legacy
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Chothani Foundation is guided by the Chothani family, committed to carrying forward Dr. Chothani&apos;s values with responsibility and transparency.
              </p>

              <ul className="space-y-3 text-sm sm:text-base text-gray-200">
                <li className="flex items-center gap-3">
                  <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                  <span>Actively oversees the Foundation&apos;s mission</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                  <span>Ensures ethical governance and accountability</span>
                </li>
                <li className="flex items-center gap-3">
                  <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                  <span>Works to expand impact while preserving core values</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-gray-800">
                <p className="font-serif text-sm sm:text-base font-bold text-white">
                  This is not a one-time initiative—it is a multi-generational commitment.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Green Banner 4: Closing Banner "Service as a Way of Life" (education.webp with identical fixed background) */}
      <section
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/education.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Service as a Way of Life
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              The Chothani Foundation carries forward a legacy rooted in humility, compassion, and unwavering dedication to humanity.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => openDonationModal()}
              className="inline-flex items-center justify-center border border-white/70 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-semibold px-7 py-3 rounded-md transition-all shadow-md backdrop-blur-xs text-sm sm:text-base"
            >
              Make a Donation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
