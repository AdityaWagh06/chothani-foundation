"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import {
  Check,
  ArrowRightCircle,
  GraduationCap,
  HeartPulse,
  PawPrint,
  Home,
  Trophy,
  HeartHandshake,
} from "lucide-react";

export default function FocusAreasPage() {
  const { openDonationModal } = useDonation();

  const pillars = [
    {
      number: "01",
      tag: "KNOWLEDGE & EMPOWERMENT",
      title: "Education",
      quote: "Empowering young minds is the cornerstone of sustainable social transformation.",
      desc: "For children in rural and underprivileged communities, quality education is the ultimate bridge to opportunity and dignity.",
      bullets: [
        "Merit and need-based scholarships for deserving students",
        "Support for rural school infrastructure and learning materials",
        "Encouraging academic excellence, resilience, and curiosity",
      ],
      image: "/images/education1.webp",
      icon: GraduationCap,
      bgClass: "bg-white",
      reverse: false,
    },
    {
      number: "02",
      tag: "HEALTH & WELLBEING",
      title: "Healthcare",
      quote: "Access to compassionate medical care is a fundamental human right.",
      desc: "Carrying forward Dr. Chothani’s 50-year legacy as a paediatrician, we work to ensure families in remote villages receive essential health support.",
      bullets: [
        "Medical aid initiatives for vulnerable children & mothers",
        "Preventive healthcare awareness and community health camps",
        "Direct assistance for emergency treatments in rural areas",
      ],
      image: "/images/healthcare.webp",
      icon: HeartPulse,
      bgClass: "bg-slate-50/70 border-y border-slate-100",
      reverse: true,
    },
    {
      number: "03",
      tag: "HUMANE CARE",
      title: "Animal Welfare",
      quote: "True compassion extends beyond human life to all living beings.",
      desc: "Animals in rural areas are essential companions to farming communities yet often suffer without medical care or protection.",
      bullets: [
        "Medical care and shelter support for injured & stray animals",
        "Promoting humane treatment and coexistence in rural villages",
        "Supporting local animal welfare workers and shelters",
      ],
      image: "/images/animals.webp",
      icon: PawPrint,
      bgClass: "bg-white",
      reverse: false,
    },
    {
      number: "04",
      tag: "COMMUNITY & LIVELIHOOD",
      title: "Rural Development",
      quote: "Strong, self-reliant villages build a resilient nation.",
      desc: "We support grassroots initiatives that improve daily living conditions, water security, and economic dignity for rural families.",
      bullets: [
        "Community-driven sanitation and drinking water support",
        "Promoting sustainable rural livelihoods and skill development",
        "Holistic development of underserved village infrastructure",
      ],
      image: "/images/rural.webp",
      icon: Home,
      bgClass: "bg-slate-50/70 border-y border-slate-100",
      reverse: true,
    },
    {
      number: "05",
      tag: "YOUTH & CHARACTER",
      title: "Sports Development",
      quote: "Discipline, teamwork, and confidence are forged on the playing field.",
      desc: "Sports provide rural youth with physical health, mental resilience, and a constructive pathway toward leadership and camaraderie.",
      bullets: [
        "Providing sports equipment and training gear to rural schools",
        "Organizing local sports tournaments and athletic talent hunts",
        "Instilling discipline, teamwork, and healthy lifestyle habits",
      ],
      image: "/images/sports.webp",
      icon: Trophy,
      bgClass: "bg-white",
      reverse: false,
    },
  ];

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO BANNER (Fixed Parallax on PC) */}
      <section
        className="relative w-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-14 sm:py-20"
        style={{ backgroundImage: "url('/images/hero-focusareas.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/60 backdrop-brightness-95" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#DFA528]/20 border border-[#DFA528]/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#DFA528] backdrop-blur-md"
          >
            Pillars of Impact
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md"
          >
            Our Core Focus Areas
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-200 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm"
          >
            Rooted in compassion. Driven by sustainable action across five key dimensions of human and social welfare.
          </motion.p>
        </div>
      </section>

      {/* 2. PILLARS OF FOCUS (5 World-Class Cards) */}
      <div className="w-full">
        {pillars.map((pillar, idx) => {
          const IconComp = pillar.icon;
          return (
            <section key={pillar.title} className={`w-full py-14 sm:py-20 ${pillar.bgClass}`}>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl bg-white p-6 sm:p-10 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/60 transition-all duration-500 group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Image Box */}
                    <div className={`w-full lg:col-span-5 ${pillar.reverse ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative h-64 sm:h-80 lg:h-[340px] w-full overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                        <Image
                          src={pillar.image}
                          alt={pillar.title}
                          fill
                          quality={100}
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                        />
                        {/* Number Badge */}
                        <div className="absolute top-4 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 backdrop-blur-md text-[#DFA528] font-serif font-bold text-lg border border-white/20 shadow-lg">
                          {pillar.number}
                        </div>
                      </div>
                    </div>

                    {/* Content Box */}
                    <div className={`w-full lg:col-span-7 space-y-5 ${pillar.reverse ? "lg:order-1" : "lg:order-2"}`}>
                      
                      {/* Category Tag & Title */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#356877]/10 text-[#356877]">
                            <IconComp className="h-4 w-4" />
                          </span>
                          <span className="text-xs font-bold uppercase tracking-widest text-[#DFA528]">
                            {pillar.tag}
                          </span>
                        </div>

                        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#356877] group-hover:text-[#DFA528] transition-colors duration-300">
                          {pillar.title}
                        </h2>
                        
                        <div className="h-1 w-16 bg-[#DFA528] rounded-full transition-all duration-500 group-hover:w-28" />
                      </div>

                      {/* Description & Quote */}
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base font-semibold text-slate-800 italic border-l-2 border-[#356877] pl-3 py-0.5">
                          &ldquo;{pillar.quote}&rdquo;
                        </p>
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                          {pillar.desc}
                        </p>
                      </div>

                      {/* Bullet Items */}
                      <div className="pt-1">
                        <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                          {pillar.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DFA528]/15 text-[#DFA528] mt-0.5">
                                <Check className="h-3.5 w-3.5 stroke-[3]" />
                              </span>
                              <span className="font-medium text-slate-800">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                  </div>
                </motion.div>

              </div>
            </section>
          );
        })}
      </div>

      {/* 3. FAMILY & GOVERNANCE SECTION */}
      <section id="governance" className="scroll-mt-24 w-full bg-[#212529] py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal direction="up" delay={0.06}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 text-white">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                    TRANSPARENCY & INTEGRITY
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#DFA528]">
                    Family & Governance
                  </h2>
                  <div className="h-0.5 w-14 bg-[#DFA528]" />
                </div>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  Chothani Foundation is guided by the Chothani family, committed to carrying forward Dr. Chothani&apos;s values with responsibility, humility, and transparency.
                </p>

                <ul className="space-y-3.5 text-sm sm:text-base text-gray-200">
                  <li className="flex items-center gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Actively oversees the Foundation&apos;s strategic vision</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Ensures ethical governance and financial accountability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ArrowRightCircle className="h-5 w-5 text-[#DFA528] shrink-0" />
                    <span>Expands community impact while preserving core family values</span>
                  </li>
                </ul>

                <div className="pt-2 border-t border-gray-800">
                  <p className="font-serif text-sm sm:text-base font-bold text-white">
                    This is not a one-time initiative—it is a multi-generational commitment.
                  </p>
                </div>
              </div>

              {/* Right Image: family.webp */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-[380px] w-full rounded-2xl overflow-hidden bg-white shadow-2xl p-2">
                <Image
                  src="/images/family.webp"
                  alt="Chothani Family Group Photo"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 4. IMPACT & INITIATIVES CLOSING BANNER */}
      <section
        className="relative w-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-12 sm:py-16"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => openDonationModal()}
              className="inline-flex items-center gap-2 border border-white/80 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg backdrop-blur-xs text-sm sm:text-base"
            >
              <HeartHandshake className="h-5 w-5" />
              Make a Donation
            </motion.button>
          </div>
        </SectionReveal>
      </section>

    </div>
  );
}
