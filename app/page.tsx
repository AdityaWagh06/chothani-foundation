"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDonation } from "@/context/DonationContext";
import SectionReveal from "@/components/SectionReveal";
import {
  GraduationCap,
  HeartPulse,
  PawPrint,
  Home,
  Trophy,
  ArrowRightCircle,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const { openDonationModal } = useDonation();

  const focusAreasRow1 = [
    {
      id: "education",
      title: "Education",
      desc: "Enabling access to quality education for children in underserved rural communities.",
      icon: GraduationCap,
    },
    {
      id: "healthcare",
      title: "Healthcare",
      desc: "Improving maternal and child healthcare through outreach and support programs.",
      icon: HeartPulse,
    },
    {
      id: "animal-welfare",
      title: "Animal Welfare",
      desc: "Promoting humane care and protection of animals in rural environments.",
      icon: PawPrint,
    },
  ];

  const focusAreasRow2 = [
    {
      id: "rural-development",
      title: "Rural Development",
      desc: "Supporting infrastructure, livelihoods, and self-reliance in rural India.",
      icon: Home,
    },
    {
      id: "sports-development",
      title: "Sports Development",
      desc: "Encouraging physical development, discipline, and opportunity through sports.",
      icon: Trophy,
    },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO SECTION (Animated Hero Content) */}
      <section
        className="relative w-full min-h-[500px] sm:min-h-[560px] flex items-center justify-center text-white bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/home-hero.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/50 backdrop-brightness-95" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6 py-20 lg:py-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#DFA528] leading-tight drop-shadow-md"
          >
            A Legacy of Healing. A Future of Hope.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm"
          >
            Founded to honour 50 years of selfless service by a rural paediatrician who believed that care, dignity, and opportunity should reach every child&mdash;regardless of geography or circumstance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#story"
                className="rounded-md bg-[#DFA528] px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-[#C4881E] transition-colors shadow-md block"
              >
                Learn Our Story
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/focus-areas"
                className="rounded-md border border-white/80 bg-white/10 backdrop-blur-xs px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-slate-900 transition-colors shadow-sm block"
              >
                Our Focus Areas
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <button
                onClick={() => openDonationModal()}
                className="rounded-md border border-[#DFA528] bg-black/20 backdrop-blur-xs px-6 py-3 text-sm font-semibold text-[#DFA528] hover:bg-[#DFA528] hover:text-slate-900 transition-colors shadow-sm block"
              >
                Support the Cause
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRO EMBLEM SECTION (Animated Slide Left/Right) */}
      <section id="story" className="w-full bg-white py-14 sm:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Logo Card Slide-in */}
            <SectionReveal direction="left" className="lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-64 sm:h-72 lg:h-[300px] w-full rounded-2xl bg-white p-6 border border-gray-100 shadow-xl flex items-center justify-center"
              >
                <div className="relative h-48 w-48 sm:h-56 sm:w-56">
                  <Image
                    src="/images/logo-1.webp"
                    alt="Chothani Foundation Official Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </SectionReveal>

            {/* Right Text Content Slide-in */}
            <SectionReveal direction="right" delay={0.1} className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877] tracking-wide">
                  CHOTHANI FOUNDATION
                </h2>
                <p className="text-xs font-semibold tracking-wider uppercase text-gray-500">
                  COMPASSION. SERVICE. LEGACY
                </p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                <p>
                  Chothani Foundation is a charitable family trust established in honour of{" "}
                  <strong className="text-slate-900 font-semibold">Dr. Krishnakumar Chothani</strong>, a paediatrician devoted to rural healthcare for over five decades.
                </p>
                <p>
                  Incorporated on the occasion of his 75th birthday, the Foundation is a living institution created to carry forward his values for generations to come.
                </p>
              </div>

              <div className="pt-2">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center justify-center rounded-md bg-[#DFA528] px-6 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[#C4881E] transition-colors shadow-md"
                  >
                    Know More
                  </Link>
                </motion.div>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOTHANI FOUNDATION EXISTS (Zoom Reveal) */}
      <section
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center text-white bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <SectionReveal direction="zoom" className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-3 py-8 sm:py-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide drop-shadow-md">
            Why Chothani Foundation Exists
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed font-normal max-w-3xl mx-auto drop-shadow-sm">
            Chothani Foundation exists to institutionalise compassion—to transform individual service into a sustainable legacy.
          </p>
          <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto">
            What began as one doctor&apos;s dedication now evolves into a collective mission to uplift lives with empathy and commitment.
          </p>
        </SectionReveal>
      </section>

      {/* 4. OUR CORE FOCUS AREAS (5 Elevation Cards with Staggered Motion & Lift Effects) */}
      <section id="focus-areas" className="w-full bg-white py-14 sm:py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="up" className="text-center space-y-2 mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#356877]">
              Our Core Focus Areas
            </h2>
            <p className="text-sm sm:text-base text-gray-500">
              Rooted in compassion and driven by action
            </p>
          </SectionReveal>

          {/* Row 1 (3 Cards Staggered Animation) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {focusAreasRow1.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="h-full rounded-xl bg-white p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all text-center space-y-3 flex flex-col items-center justify-start group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-14 w-14 items-center justify-center text-[#DFA528]"
                  >
                    <IconComponent className="h-10 w-10" />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2 (2 Cards Centered Staggered Animation) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {focusAreasRow2.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: (index + 3) * 0.12 }}
                  whileHover={{ y: -7, scale: 1.02 }}
                  className="h-full rounded-xl bg-white p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all text-center space-y-3 flex flex-col items-center justify-start group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-14 w-14 items-center justify-center text-[#DFA528]"
                  >
                    <IconComponent className="h-10 w-10" />
                  </motion.div>
                  <h3 className="font-serif text-lg font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {area.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. BE PART OF THE LEGACY SECTION (Animated Image & List Slide) */}
      <section id="get-involved" className="w-full bg-[#212529] text-white py-14 sm:py-18 scroll-mt-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Slide-in */}
            <SectionReveal direction="left" className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#DFA528]">
                  Be Part of the Legacy
                </h2>
                <div className="h-0.5 w-14 bg-[#DFA528]" />
              </div>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                Chothani Foundation welcomes individuals, partners, and well-wishers who believe in meaningful social impact.
              </p>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Ways to engage:
                </h4>
                <ul className="space-y-2.5 text-sm sm:text-base text-gray-200">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Support initiatives</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Collaborate on projects</span>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Spread awareness</span>
                  </motion.li>
                </ul>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 font-normal pt-1">
                Together, we can ensure that compassion continues to create change.
              </p>
            </SectionReveal>

            {/* Right Image Card Slide-in */}
            <SectionReveal direction="right" delay={0.15} className="lg:col-span-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-80 sm:h-[420px] lg:h-[460px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700"
              >
                <Image
                  src="/images/make-a-change.webp"
                  alt="Help Us Make a Difference — Chothani Foundation"
                  fill
                  quality={100}
                  className="object-cover object-top"
                />
              </motion.div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 6. FAMILY & GOVERNANCE SECTION (Animated Image & List Slide) */}
      <section className="w-full bg-white py-14 sm:py-18 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image: family.webp */}
            <SectionReveal direction="left" className="lg:col-span-5">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-72 sm:h-96 lg:h-[360px] w-full rounded-xl overflow-hidden bg-white shadow-xl p-2 border border-gray-200"
              >
                <Image
                  src="/images/family.webp"
                  alt="Chothani Family Group Photo"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </motion.div>
            </SectionReveal>

            {/* Right Content */}
            <SectionReveal direction="right" delay={0.1} className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                  Family & Governance
                </h2>
                <h3 className="text-sm font-bold text-[#DFA528] uppercase tracking-wide">
                  A Family Legacy
                </h3>
                <div className="h-0.5 w-14 bg-[#DFA528] mt-1" />
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                Chothani Foundation is guided by the Chothani family, committed to carrying forward Dr. Chothani&apos;s values with responsibility and transparency.
              </p>

              <ul className="space-y-2.5 text-sm sm:text-base text-gray-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0" />
                  <span>Actively oversees the Foundation&apos;s mission</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0" />
                  <span>Ensures ethical governance and accountability</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="h-4.5 w-4.5 text-[#DFA528] shrink-0" />
                  <span>Works to expand impact while preserving core values</span>
                </li>
              </ul>

              <div className="pt-1">
                <p className="font-serif text-sm sm:text-base font-bold text-[#356877]">
                  This is not a one-time initiative—it is a multi-generational commitment.
                </p>
              </div>
            </SectionReveal>

          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA BANNER (Animated Zoom Reveal) */}
      <section
        className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center text-white bg-fixed bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/images/education.webp')" }}
      >
        <div className="absolute inset-0 bg-[#2F6978]/80 mix-blend-multiply" />

        <SectionReveal direction="zoom" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              A Promise for Generations
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
              This Foundation stands as a promise—to continue serving with humility, integrity, and unwavering dedication.
            </p>
          </div>

          <div className="shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
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
