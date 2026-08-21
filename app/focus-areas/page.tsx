"use client";

import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { CheckCircle2, ArrowRightCircle } from "lucide-react";

export default function FocusAreasPage() {
  const { openDonationModal } = useDonation();

  return (
    <div className="w-full bg-white">
      
      {/* 1. Full-Width Centered Header Banner (hero-focusareas.webp fixed background) */}
      <section
        className="relative w-full h-[300px] sm:h-[360px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-focusareas.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3 py-12 sm:py-16">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DFA528] tracking-wide drop-shadow-md">
            Our Core Focus Areas
          </h1>
          <p className="text-base sm:text-lg text-white font-medium tracking-wide drop-shadow-sm">
            Rooted in compassion. Driven by action.
          </p>
        </div>
      </section>

      {/* 2. Section 1: Education (Image left education1.webp, text right - exact SS sizing) */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: education1.webp */}
              <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-[270px] w-full overflow-hidden rounded-md shadow-sm border border-gray-100">
                <Image
                  src="/images/education1.webp"
                  alt="Education Initiative - Scholarships & Student Support"
                  fill
                  quality={100}
                  className="object-cover object-center"
                  priority
                />
              </div>

              {/* Right Content: Education */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Education
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Empowering minds is the foundation of lasting change.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Scholarships for deserving students</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for education of underprivileged children</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouragement of excellence, resilience, and curiosity</span>
                  </li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Section 2: Healthcare (Text left, Image right healthcare.webp - exact SS sizing) */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content: Healthcare */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Healthcare
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Access to healthcare is a basic right, not a privilege.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Medical support initiatives</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Preventive care awareness</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Healthcare assistance for underserved families</span>
                  </li>
                </ul>
              </div>

              {/* Right Image: healthcare.webp */}
              <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-[270px] w-full overflow-hidden rounded-md shadow-sm border border-gray-100">
                <Image
                  src="/images/healthcare.webp"
                  alt="Healthcare Camps & Community Assistance"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Section 3: Animal Welfare (Image left animals.webp, text right - exact SS sizing) */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: animals.webp */}
              <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-[270px] w-full overflow-hidden rounded-md shadow-sm border border-gray-100">
                <Image
                  src="/images/animals.webp"
                  alt="Animal Welfare & Care Initiatives"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content: Animal Welfare */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Animal Welfare
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Compassion extends beyond human life.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for injured and abandoned animals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Promotion of humane treatment and care</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouragement of excellence, resilience, and curiosity</span>
                  </li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Section 4: Rural Development (Text left, Image right rural.webp - exact SS sizing) */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content: Rural Development */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Rural Development
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Strong villages build strong nations.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Community-driven development initiatives</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for rural livelihoods and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Holistic upliftment of rural communities</span>
                  </li>
                </ul>
              </div>

              {/* Right Image: rural.webp */}
              <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-[270px] w-full overflow-hidden rounded-md shadow-sm border border-gray-100">
                <Image
                  src="/images/rural.webp"
                  alt="Rural Development & Community Upliftment"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Section 5: Sports Development (Image left sports.webp, text right - exact SS sizing) */}
      <section className="w-full bg-white py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: sports.webp */}
              <div className="lg:col-span-5 relative h-56 sm:h-72 lg:h-[270px] w-full overflow-hidden rounded-md shadow-sm border border-gray-100">
                <Image
                  src="/images/sports.webp"
                  alt="Sports Development & Youth Empowerment"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
              </div>

              {/* Right Content: Sports Development */}
              <div className="lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                    Sports Development
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Discipline, confidence, and character are built on the field.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouraging sports among children and youth</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Supporting talent from rural backgrounds</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Promoting physical and mental well-being</span>
                  </li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Section 6: Family & Governance (Dark rgb(33, 37, 41) / #212529 section matching SS 5) */}
      <section id="governance" className="scroll-mt-24 w-full bg-[#212529] py-14 sm:py-18 text-white">
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

      {/* 8. Section 7: Impact & Initiatives Closing Banner (sector.webp background fixed parallax) */}
      <section
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center text-white bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Impact & Initiatives
            </h2>
            <h3 className="text-sm font-semibold text-teal-200">
              Lives Touched
            </h3>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal pt-1">
              Through scholarships, medical support, recognition of courage and kindness, and community initiatives, Chothani Foundation has begun building a growing circle of impact.
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
