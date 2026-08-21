"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import {
  Quote,
  Star,
  HeartHandshake,
  CheckCircle2,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  image: string;
  rating: number;
  category: string;
}

export default function TestimonialsPage() {
  const { openDonationModal } = useDonation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", message: "" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Ramesh Patil",
      role: "Village Elder & Farmer",
      location: "Shrirampur, Maharashtra",
      quote:
        "Dr. Chothani treated three generations of our family over the last 40 years. He never turned away a single sick child, regardless of whether a family had money or not. His foundation is a true blessing to our rural villages.",
      image: "/images/photo-1.jpg",
      rating: 5,
      category: "Healthcare",
    },
    {
      id: "2",
      name: "Sunita Deshmukh",
      role: "Mother & Scholarship Beneficiary",
      location: "Ahmednagar District",
      quote:
        "When my daughter stood first in her 10th exams, we couldn't afford her junior college fees. The Chothani Foundation scholarship paid her full tuition. Today she is studying engineering!",
      image: "/images/photo-2.jpg",
      rating: 5,
      category: "Education",
    },
    {
      id: "3",
      name: "Aniket Shinde",
      role: "Rural Youth Leader",
      location: "Rahuri Village",
      quote:
        "The Foundation provided complete sports equipment and training gear to our rural school grounds. It gave our village boys and girls a constructive outlet, health, and athletic confidence.",
      image: "/images/photo-3.jpg",
      rating: 5,
      category: "Sports Development",
    },
    {
      id: "4",
      name: "Dr. Priya Kulkarni",
      role: "Community Health Officer",
      location: "Rural Health Center",
      quote:
        "Working alongside Dr. Chothani inspired my entire medical career. His humility, ethical practice, and devotion to child healthcare set an extraordinary benchmark for rural medicine in India.",
      image: "/images/photo-4.jpg",
      rating: 5,
      category: "Medical Legacy",
    },
    {
      id: "5",
      name: "Santosh More",
      role: "Primary School Headmaster",
      location: "Nevasa Taluka",
      quote:
        "Chothani Foundation donated learning kits, slates, and books to over 150 students in our village school. Their focus on early education has brought enthusiasm back to our classrooms.",
      image: "/images/photo-5.jpg",
      rating: 5,
      category: "Education",
    },
    {
      id: "6",
      name: "Ganpatrao Jadhav",
      role: "Farmer & Dairy Producer",
      location: "Belapur Village",
      quote:
        "During severe droughts, their animal welfare team organized free veterinary treatment and fodder support for our cattle. They care for animals with the same empathy as humans.",
      image: "/images/photo-6.jpg",
      rating: 5,
      category: "Animal Welfare",
    },
  ];

  // Auto-play timer for smooth slider
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", role: "", message: "" });
    }
  };

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO BANNER (Fixed Parallax on PC) */}
      <section
        className="relative w-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-14 sm:py-20"
        style={{ backgroundImage: "url('/images/education.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-95" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#DFA528]/20 border border-[#DFA528]/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#DFA528] backdrop-blur-md"
          >
            Community Voices
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md"
          >
            Testimonials & Stories
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-200 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm"
          >
            Personal experiences and reflections from families, students, farmers, and healthcare workers served across five decades.
          </motion.p>
        </div>
      </section>

      {/* 2. FOUNDER SPOTLIGHT CARD */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-4 relative h-64 sm:h-72 lg:h-[300px] w-full rounded-2xl overflow-hidden bg-white shadow-xl p-2 border border-slate-700">
                <Image
                  src="/images/blurry.webp"
                  alt="Dr. Krishnakumar Chothani"
                  fill
                  quality={100}
                  className="object-contain p-2"
                />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-[#DFA528]">
                  <Quote className="h-8 w-8 opacity-80" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#DFA528]">
                    FOUNDER&apos;S GUIDING PHILOSOPHY
                  </span>
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl font-bold leading-relaxed text-white italic">
                  &ldquo;Healthcare and education are not privileges—they are fundamental rights that belong to every child. True service requires no ego, no discrimination, and no expectation.&rdquo;
                </blockquote>

                <div className="pt-2 border-t border-slate-800">
                  <h3 className="font-serif text-lg font-bold text-[#DFA528]">
                    Dr. Krishnakumar Chothani
                  </h3>
                  <p className="text-xs text-gray-400">
                    Founder Chairperson & Paediatrician (50+ Years Service)
                  </p>
                </div>
              </div>

            </div>
          </SectionReveal>
        </div>
      </section>

      {/* 3. SMOOTH HORIZONTAL SLIDER (PC & Mobile) */}
      <section className="w-full py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          <SectionReveal className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#356877]">
              Reflections of Impact
            </h2>
            <div className="h-1 w-16 bg-[#DFA528] mx-auto rounded-full" />
            <p className="text-sm sm:text-base text-slate-600">
              Hear directly from the people whose lives have been touched by Chothani Foundation.
            </p>
          </SectionReveal>

          {/* Interactive Slider Container */}
          <div
            className="relative max-w-5xl mx-auto px-2 sm:px-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            
            {/* Left & Right Arrow Navigation Buttons */}
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-[#356877] hover:bg-[#356877] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-[#356877] hover:bg-[#356877] hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slider Card Viewport */}
            <div className="overflow-hidden py-4 px-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50, scale: 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6 max-w-3xl mx-auto"
                >
                  {/* Top Rating & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#DFA528]">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#DFA528]" />
                      ))}
                    </div>
                    <span className="rounded-full bg-[#356877]/10 px-3 py-1 text-xs font-bold text-[#356877] uppercase tracking-wider">
                      {testimonials[currentIndex].category}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <Quote className="h-10 w-10 text-[#DFA528]/20 absolute -top-4 -left-2 z-0" />
                    <p className="relative z-10 font-serif text-lg sm:text-xl lg:text-2xl text-slate-800 leading-relaxed font-normal italic pl-4">
                      &ldquo;{testimonials[currentIndex].quote}&rdquo;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden shrink-0 border-2 border-[#DFA528] shadow-md">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#356877]">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">
                        {testimonials[currentIndex].role}
                      </p>
                      <p className="text-xs text-slate-500">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots Indicator */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-[#356877]"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 4. SHARE YOUR EXPERIENCE SECTION */}
      <section className="w-full py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#DFA528]">
                COMMUNITY FEEDBACK
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                Share Your Experience
              </h2>
              <p className="text-sm text-slate-600 max-w-lg mx-auto">
                Have you or your family been touched by Dr. Chothani or the Foundation? We would love to hear your story.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-2xl bg-teal-50 p-6 text-center space-y-2 border border-teal-200">
                <CheckCircle2 className="h-10 w-10 text-teal-600 mx-auto" />
                <h3 className="font-serif text-lg font-bold text-teal-900">
                  Thank You for Sharing!
                </h3>
                <p className="text-sm text-teal-700">
                  Your response has been recorded. Our team deeply appreciates your support.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patil"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-[#356877] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Role / Location
                    </label>
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      placeholder="e.g. Parent / Village Resident"
                      className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm focus:border-[#356877] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Reflection / Testimonial
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share how Dr. Chothani or the Foundation impacted you..."
                    className="w-full rounded-xl border border-slate-300 p-4 text-sm focus:border-[#356877] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#356877] py-3 text-sm font-semibold text-white hover:bg-[#2a5360] transition-colors shadow-md"
                >
                  <Send className="h-4 w-4" />
                  Submit Reflection
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <section
        className="relative w-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-12 sm:py-16"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-[#356877]/85" />

        <SectionReveal direction="zoom" duration={0.8} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Support Our Mission
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal pt-1">
              Help us reach more families, educate more children, and support rural development across Maharashtra.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => openDonationModal()}
              className="inline-flex items-center gap-2 border border-white/80 bg-white/10 hover:bg-white hover:text-slate-900 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-lg backdrop-blur-xs text-sm sm:text-base"
            >
              <HeartHandshake className="h-5 w-5" />
              Make a Donation
            </button>
          </div>
        </SectionReveal>
      </section>

    </div>
  );
}
