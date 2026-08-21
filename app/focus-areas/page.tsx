"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { CheckCircle2, ArrowRightCircle } from "lucide-react";

export default function FocusAreasPage() {
  const { openDonationModal } = useDonation();

  return (
    <div className="w-full bg-white">
      
      {/* 1. Full-Width Header Banner (hero-focusareas.webp Fixed Parallax on PC) */}
      <section
        className="relative w-full min-h-[280px] sm:min-h-[340px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-12 sm:py-16"
        style={{ backgroundImage: "url('/images/hero-focusareas.webp')" }}
      >
        <div className="absolute inset-0 bg-[#356877]/85" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#DFA528] tracking-wide drop-shadow-md"
          >
            Our Core Focus Areas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-white font-medium tracking-wide drop-shadow-sm"
          >
            Rooted in compassion. Driven by action.
          </motion.p>
        </div>
      </section>

      {/* 2. Section 1: Education (Pure White Row - Loading Entrance Left) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal
            direction="left"
            delay={0.05}
            className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: education1.webp */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:col-span-5 relative h-56 sm:h-72 lg:h-[280px] overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src="/images/education1.webp"
                  alt="Education Initiative - Scholarships & Student Support"
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </motion.div>

              {/* Right Content: Education */}
              <div className="w-full lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    Education
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528] transition-all duration-300 group-hover:w-24" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Empowering minds is the foundation of lasting change.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Scholarships for deserving students</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for education of underprivileged children</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouragement of excellence, resilience, and curiosity</span>
                  </motion.li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. Section 2: Healthcare (Slight Shade Darker #F8FAFC Row - Loading Entrance Right) */}
      <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 border-y border-gray-100/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal
            direction="right"
            delay={0.08}
            className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Right Image on PC, Top on Mobile: healthcare.webp */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:col-span-5 lg:order-2 relative h-56 sm:h-72 lg:h-[280px] overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src="/images/healthcare.webp"
                  alt="Healthcare Camps & Community Assistance"
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Left Content on PC, Below on Mobile: Healthcare */}
              <div className="w-full lg:col-span-7 lg:order-1 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    Healthcare
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528] transition-all duration-300 group-hover:w-24" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Access to healthcare is a basic right, not a privilege.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Medical support initiatives</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Preventive care awareness</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Healthcare assistance for underserved families</span>
                  </motion.li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. Section 3: Animal Welfare (Pure White Row - Loading Entrance Left) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal
            direction="left"
            delay={0.05}
            className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: animals.webp */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:col-span-5 relative h-56 sm:h-72 lg:h-[280px] overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src="/images/animals.webp"
                  alt="Animal Welfare & Care Initiatives"
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Right Content: Animal Welfare */}
              <div className="w-full lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    Animal Welfare
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528] transition-all duration-300 group-hover:w-24" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Compassion extends beyond human life.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for injured and abandoned animals</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Promotion of humane treatment and care</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouragement of excellence, resilience, and curiosity</span>
                  </motion.li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 5. Section 4: Rural Development (Slight Shade Darker #F8FAFC Row - Loading Entrance Right) */}
      <section className="w-full bg-[#F8FAFC] py-12 sm:py-16 border-y border-gray-100/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal
            direction="right"
            delay={0.08}
            className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Right Image on PC, Top on Mobile: rural.webp */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:col-span-5 lg:order-2 relative h-56 sm:h-72 lg:h-[280px] overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src="/images/rural.webp"
                  alt="Rural Development & Community Upliftment"
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Left Content on PC, Below on Mobile: Rural Development */}
              <div className="w-full lg:col-span-7 lg:order-1 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    Rural Development
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528] transition-all duration-300 group-hover:w-24" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Strong villages build strong nations.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Community-driven development initiatives</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Support for rural livelihoods and infrastructure</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Holistic upliftment of rural communities</span>
                  </motion.li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 6. Section 5: Sports Development (Pure White Row - Loading Entrance Left) */}
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal
            direction="left"
            delay={0.05}
            className="rounded-2xl bg-white p-6 sm:p-10 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Image: sports.webp */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full lg:col-span-5 relative h-56 sm:h-72 lg:h-[280px] overflow-hidden rounded-xl shadow-sm border border-gray-100"
              >
                <Image
                  src="/images/sports.webp"
                  alt="Sports Development & Youth Empowerment"
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>

              {/* Right Content: Sports Development */}
              <div className="w-full lg:col-span-7 space-y-4">
                <div className="space-y-1.5">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    Sports Development
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528] transition-all duration-300 group-hover:w-24" />
                  <p className="text-sm sm:text-base font-bold text-slate-900 pt-1">
                    Discipline, confidence, and character are built on the field.
                  </p>
                </div>

                <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Encouraging sports among children and youth</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Supporting talent from rural backgrounds</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0 mt-0.5" />
                    <span>Promoting physical and mental well-being</span>
                  </motion.li>
                </ul>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 7. Section 6: Family & Governance (Dark #212529 section) */}
      <section id="governance" className="scroll-mt-24 w-full bg-[#212529] py-14 sm:py-18 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="zoom" delay={0.1}>
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
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] w-full rounded-xl overflow-hidden bg-white shadow-xl p-2"
              >
                <Image
                  src="/images/family.webp"
                  alt="Chothani Family Group Photo"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </motion.div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 8. Section 7: Impact & Initiatives Closing Banner (sector.webp Fixed Parallax on PC) */}
      <section
        className="relative w-full min-h-[260px] sm:min-h-[300px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-10 sm:py-14"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#356877]/85" />

        <SectionReveal direction="zoom" duration={0.8} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <button
                onClick={() => openDonationModal()}
                className="inline-flex items-center justify-center border border-white/70 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-semibold px-7 py-3 rounded-md transition-colors shadow-md backdrop-blur-xs text-sm sm:text-base"
              >
                Make a Donation
              </button>
            </motion.div>
          </div>
        </SectionReveal>
      </section>

    </div>
  );
}
