"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { ArrowRightCircle, HeartHandshake, Heart } from "lucide-react";

export default function AboutUsPage() {
  const { openDonationModal } = useDonation();

  return (
    <div className="w-full bg-white">
      
      {/* 1. Header Banner (image001.webp background - Clear photo) */}
      <section className="relative w-full min-h-[280px] sm:min-h-[340px] flex items-center justify-center text-white overflow-hidden py-12 sm:py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image001.webp"
            alt="About the Foundation Header"
            fill
            quality={100}
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-95" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DFA528] tracking-wide drop-shadow-md">
            About the Foundation
          </h1>
          <p className="text-base sm:text-lg text-white font-medium tracking-wide drop-shadow-sm">
            Compassion. Service. Legacy.
          </p>
        </div>
      </section>

      {/* 2. Our Story (image003.webp) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image: image003.webp */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[350px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image003.webp"
                  alt="Our Story Initiative"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Right Content: Our Story */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Our Story
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <h3 className="text-base sm:text-lg font-bold text-[#DFA528] pt-1">
                    A Lifetime Dedicated to Care
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    For over 50 years, <strong className="text-slate-900 font-semibold">Dr. Krishnakumar Chothani</strong> served as a beacon of hope and healing in rural India. As a dedicated paediatrician, his work went far beyond medical treatment—it was a life defined by empathy, selflessness, and an unwavering commitment to the most vulnerable.
                  </p>
                  <p>
                    On the occasion of his 75th birthday, his family established Chothani Foundation to ensure that his lifelong mission does not end with his individual practice, but continues as a structured, enduring movement of service.
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Green Banner 2: Our Vision (matching Screenshot 1 Top) */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center text-white overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sector.webp"
            alt="Our Vision Background"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#356877]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Our Vision
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm px-2">
            To build a compassionate, inclusive society where health, education, dignity, and opportunity are accessible to all&mdash;especially in rural and underserved communities.
          </p>
        </div>
      </section>

      {/* 4. Our Mission (matching Screenshot 1 Bottom: image004.webp top on mobile, text below) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Image: image004.webp (Top on mobile) */}
              <div className="w-full lg:col-span-5 relative h-64 sm:h-80 lg:h-[350px] rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image004.webp"
                  alt="Our Mission Initiative"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

              {/* Text Content: Our Mission */}
              <div className="w-full lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Our Mission
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                </div>

                <ul className="space-y-3.5 text-sm sm:text-base text-gray-700">
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

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Green Banner 3: A Philosophy That Guides Every Action (matching Screenshot 2 Top) */}
      <section className="relative w-full min-h-[240px] sm:min-h-[280px] flex items-center justify-center text-white overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sector.webp"
            alt="A Philosophy That Guides Every Action Background"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#356877]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            A Philosophy That Guides Every Action
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-2xl mx-auto px-2">
            Compassion in practice. Integrity in action. Service for life.
          </p>
        </div>
      </section>

      {/* 6. Dr. Krishnakumar Chothani Section (matching Screenshot 2 Bottom & Screenshot 3) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Image: blurry.webp (Top on mobile) */}
              <div className="w-full lg:col-span-5 relative h-72 sm:h-96 lg:h-[400px] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <Image
                  src="/images/blurry.webp"
                  alt="Dr. Krishnakumar Chothani Portrait"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>

              {/* Content: Founder Profile matching SS 2 & 3 */}
              <div className="w-full lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Dr. Krishnakumar Chothani
                  </h2>
                  <h3 className="text-sm font-bold text-slate-800 tracking-wide">
                    Founder Chairperson
                  </h3>
                  <div className="h-0.5 w-14 bg-[#DFA528] mt-1" />
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  Dr. Krishnakumar Chothani is not defined by titles or accolades, but by five decades of quiet, consistent service.
                </p>

                <div className="space-y-3 pt-1">
                  <p className="text-sm sm:text-base font-semibold text-slate-900">
                    As a paediatrician in rural India, he has:
                  </p>
                  <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4.5 w-4.5 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Treated generations of children</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4.5 w-4.5 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Served families across socio-economic boundaries</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Heart className="h-4.5 w-4.5 text-[#DFA528] fill-[#DFA528] shrink-0 mt-0.5" />
                      <span>Practised medicine with empathy, patience, and moral conviction</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#356877] pl-4 py-1 bg-slate-50 rounded-r-md">
                  <p className="font-serif text-sm sm:text-base font-semibold text-slate-900 italic">
                    &ldquo;Healing is not only about medicine&mdash;it is about trust, care, and presence.&rdquo;
                  </p>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    His work has always extended beyond clinical practice&mdash;touching education, community welfare, ethical living, and social responsibility.
                  </p>
                  <p>
                    Chothani Foundation reflects his philosophy: <strong className="text-slate-900 font-semibold">serve without discrimination, give without expectation, and work without ego.</strong>
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Family & Governance (Dark #212529 section with family.webp matching SS 3 Bottom) */}
      <section className="w-full bg-[#212529] py-14 sm:py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Image: family.webp (TOP on mobile) */}
            <div className="w-full lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] rounded-xl overflow-hidden bg-white shadow-xl p-2">
              <Image
                src="/images/family.webp"
                alt="Chothani Family Group Photo"
                fill
                quality={100}
                className="object-contain p-2"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:col-span-7 space-y-5 text-white">
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

      {/* 8. Closing CTA Banner (education.webp background) */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center text-white overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/education.webp"
            alt="Closing CTA Background"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#356877]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              A Promise for Generations
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              This Foundation stands as a promise&mdash;to continue serving with humility, integrity, and unwavering dedication.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => openDonationModal()}
              className="inline-flex items-center justify-center border border-white/70 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-semibold px-7 py-3 rounded-md transition-all shadow-md backdrop-blur-xs text-sm sm:text-base"
            >
              <HeartHandshake className="h-4.5 w-4.5 mr-2" />
              Make a Donation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
