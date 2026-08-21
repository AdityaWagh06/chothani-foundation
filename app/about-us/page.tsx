"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { CheckCircle2, ArrowRightCircle, HeartHandshake } from "lucide-react";

export default function AboutUsPage() {
  const { openDonationModal } = useDonation();

  return (
    <div className="w-full bg-white">
      
      {/* 1. Green Banner 1: Header Banner (image001.webp background) */}
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
          <div className="absolute inset-0 bg-[#356877]/85" />
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

      {/* 2. Our Story (Using image003.webp matching SS 1) */}
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

      {/* 3. Green Banner 2: Our Vision & Philosophy (sector.webp background) */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center text-white overflow-hidden py-10 sm:py-14">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sector.webp"
            alt="Our Vision & Philosophy Background"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#356877]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Our Vision & Philosophy
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm px-2">
            Chothani Foundation is built on the belief that meaningful social change is achieved not through grand gestures alone, but through quiet, consistent, and compassionate action.
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
                    <CheckCircle2 className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To support healthcare initiatives for underserved rural communities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To enable access to quality education for deserving students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To promote compassion towards animal welfare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>To encourage rural development and youth sports</span>
                  </li>
                </ul>
              </div>

              {/* Right Image: image004.webp */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[350px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/image004.webp"
                  alt="Our Mission Initiative"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Green Banner 3: Mid-page Philosophy Callout (sector.webp background) */}
      <section className="relative w-full min-h-[240px] sm:min-h-[280px] flex items-center justify-center text-white overflow-hidden py-8 sm:py-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sector.webp"
            alt="Mid-page Callout Background"
            fill
            quality={100}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#356877]/85" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Quiet, Consistent, and Compassionate Action
          </h2>
          <p className="text-sm sm:text-base text-white/95 leading-relaxed max-w-2xl mx-auto px-2">
            Every initiative is designed to create long-term impact with dignity and transparency.
          </p>
        </div>
      </section>

      {/* 6. Founder Profile Section (blurry.webp matching SS 3) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image: blurry.webp */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                <Image
                  src="/images/blurry.webp"
                  alt="Dr. Krishnakumar Chothani Portrait"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>

              {/* Right Content: Founder Profile */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-1">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Dr. Krishnakumar Chothani
                  </h2>
                  <h3 className="text-sm font-bold text-[#DFA528] uppercase tracking-wide">
                    Founder & Chairperson, Chothani Foundation
                  </h3>
                  <div className="h-0.5 w-14 bg-[#DFA528] mt-1" />
                </div>

                <p className="text-sm sm:text-base text-slate-800 font-semibold italic">
                  &ldquo;Healthcare and education are not privileges—they are fundamental rights that belong to every child.&rdquo;
                </p>

                <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    Dr. Krishnakumar Chothani has spent over five decades serving rural communities with medical expertise and compassionate leadership. His career is characterized by an unwavering dedication to child healthcare, community welfare, and uplifting vulnerable families.
                  </p>
                  <p>
                    The Foundation stands as an expression of his values—built to institutionalise care and extend opportunity to generations to come.
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Family & Governance (Dark #212529 section with family.webp matching SS 4) */}
      <section className="w-full bg-[#212529] py-14 sm:py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
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

            {/* Right Image: family.webp */}
            <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] w-full rounded-xl overflow-hidden bg-white shadow-xl p-2">
              <Image
                src="/images/family.webp"
                alt="Chothani Family Group Photo"
                fill
                quality={100}
                className="object-contain p-2"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 8. Service as a Way of Life (education.webp matching SS 5) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Image: education.webp */}
              <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-[350px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <Image
                  src="/images/education.webp"
                  alt="Service as a Way of Life"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content: Service as a Way of Life */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Service as a Way of Life
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <h3 className="text-base sm:text-lg font-bold text-slate-800 pt-1">
                    Building a Circle of Compassion
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  <p>
                    At Chothani Foundation, we believe that true service is not a singular act, but a continuous way of life. By supporting scholarships, healthcare outreach, and rural upliftment, we invite others to join a growing circle of impact.
                  </p>
                  <p>
                    Together, we work to build communities grounded in opportunity, dignity, and care for all living beings.
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 9. Green Banner 4: Closing CTA (education.webp background) */}
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
