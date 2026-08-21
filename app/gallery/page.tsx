"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { X, ZoomIn, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "healthcare" | "education" | "community";
  image: string;
  caption: string;
}

export default function GalleryPage() {
  const { openDonationModal } = useDonation();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Pure action & field images only (10 high-quality photos)
  const galleryItems: GalleryItem[] = [
    {
      id: "4",
      title: "Community Medical Outreach",
      category: "healthcare",
      image: "/images/healthcare.webp",
      caption: "Organizing medical assistance and health camps in underserved rural regions.",
    },
    {
      id: "5",
      title: "50 Years of Healthcare Service",
      category: "healthcare",
      image: "/images/image003.webp",
      caption: "A legacy of selfless medical care and empathy for children and families.",
    },
    {
      id: "8",
      title: "Student Support & Empowerment",
      category: "education",
      image: "/images/image004.webp",
      caption: "Supporting children with educational tools to foster curiosity and excellence.",
    },
    {
      id: "9",
      title: "Youth Literacy & Skill Building",
      category: "education",
      image: "/images/education1.webp",
      caption: "Empowering rural youth through foundation education and career guidance.",
    },
    {
      id: "10",
      title: "Animal Welfare & Veterinary Care",
      category: "community",
      image: "/images/photo-6.jpg",
      caption: "Providing medical treatment and humane care for injured farm and domestic animals.",
    },
    {
      id: "11",
      title: "Humane Care & Animal Protection",
      category: "community",
      image: "/images/animals.webp",
      caption: "Supporting rural animal shelters, fodder distribution, and emergency veterinary care.",
    },
    {
      id: "12",
      title: "Community Livelihood Program",
      category: "community",
      image: "/images/photo-7.jpg",
      caption: "Promoting self-reliance, village infrastructure, and rural economic dignity.",
    },
    {
      id: "13",
      title: "Agricultural & Rural Upliftment",
      category: "community",
      image: "/images/image001.webp",
      caption: "Supporting sustainable farming, irrigation, and community development.",
    },
    {
      id: "14",
      title: "Rural Infrastructure & Sanitation",
      category: "community",
      image: "/images/rural.webp",
      caption: "Improving clean drinking water access and village living conditions.",
    },
    {
      id: "15",
      title: "Youth Sports Equipment Support",
      category: "community",
      image: "/images/sports.webp",
      caption: "Equipping rural youth with athletic gear to promote teamwork and physical health.",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const maxIndex = Math.max(0, filteredItems.length - 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevMobileSlide = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const nextMobileSlide = () => {
    setMobileIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
    setMobileIndex(0);
  };

  // Slice visible items for desktop (3 items at a time)
  const visibleItems = filteredItems.slice(currentIndex, currentIndex + 3);
  const displayItems =
    visibleItems.length < 3 && filteredItems.length >= 3
      ? filteredItems.slice(-3)
      : visibleItems;

  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO BANNER (Fixed Parallax on PC) */}
      <section
        className="relative w-full min-h-[300px] sm:min-h-[360px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-14 sm:py-20"
        style={{ backgroundImage: "url('/images/sector.webp')" }}
      >
        <div className="absolute inset-0 bg-slate-950/65 backdrop-brightness-95" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#DFA528]/20 border border-[#DFA528]/40 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#DFA528] backdrop-blur-md"
          >
            Field Action & Initiatives
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight drop-shadow-md"
          >
            Foundation Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-gray-200 font-medium tracking-wide max-w-2xl mx-auto drop-shadow-sm"
          >
            Real field photography documenting healthcare outreach, scholarship distribution, animal welfare, and rural development.
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY CONTROLS & DUAL SLIDER (3-Card Desktop / 1-Card Mobile Hero) */}
      <section className="w-full py-12 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "All Field Photos" },
              { id: "healthcare", label: "Healthcare Outreach" },
              { id: "education", label: "Education & Youth" },
              { id: "community", label: "Community & Rural" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#356877] text-white shadow-md shadow-[#356877]/30"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* DESKTOP VIEW (>= md): 3-Card Grid Slider */}
          <div className="hidden md:block relative max-w-7xl mx-auto px-12">
            
            {/* Left Arrow Button */}
            {filteredItems.length > 3 && (
              <button
                onClick={prevSlide}
                aria-label="Previous Photos"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-[#356877] hover:bg-[#356877] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Right Arrow Button */}
            {filteredItems.length > 3 && (
              <button
                onClick={nextSlide}
                aria-label="Next Photos"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl border border-slate-200 text-[#356877] hover:bg-[#356877] hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* 3-Card Grid Slider Container */}
            <div className="overflow-hidden py-4 px-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab + "-" + currentIndex}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-3 gap-6 lg:gap-8"
                >
                  {displayItems.map((item) => (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -6, scale: 1.02 }}
                      onClick={() => setSelectedImage(item)}
                      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-80 sm:h-90"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        quality={100}
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                      {/* Content & Zoom Badge */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 text-white">
                        <div className="flex justify-end">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <ZoomIn className="h-5 w-5" />
                          </span>
                        </div>

                        <div className="space-y-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-block rounded-md bg-[#DFA528] px-2.5 py-0.5 text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                            {item.category}
                          </span>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug drop-shadow-sm">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-200 line-clamp-2 font-normal">
                            {item.caption}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Desktop Counter Indicator */}
            {filteredItems.length > 3 && (
              <div className="flex items-center justify-center gap-2 pt-4">
                <span className="text-xs font-semibold text-[#356877]">
                  Showing {currentIndex + 1} - {Math.min(currentIndex + 3, filteredItems.length)} of {filteredItems.length} photos
                </span>
              </div>
            )}
          </div>

          {/* MOBILE VIEW (< md): Single-Card Hero Slider with Touch & Floating Overlay Arrows */}
          <div className="block md:hidden relative max-w-md mx-auto px-2">
            <div className="relative overflow-hidden py-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileIndex}
                  initial={{ opacity: 0, x: 45, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -45, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedImage(filteredItems[mobileIndex])}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-xl cursor-pointer h-96 w-full"
                >
                  <Image
                    src={filteredItems[mobileIndex]?.image || ""}
                    alt={filteredItems[mobileIndex]?.title || ""}
                    fill
                    quality={100}
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-90" />
                  
                  {/* Floating Action Overlay & Captions */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 text-white">
                    <div className="flex justify-between items-center">
                      <span className="inline-block rounded-md bg-[#DFA528] px-2.5 py-1 text-[10px] font-bold text-slate-900 uppercase tracking-widest">
                        {filteredItems[mobileIndex]?.category}
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/25 backdrop-blur-md text-white">
                        <ZoomIn className="h-4.5 w-4.5" />
                      </span>
                    </div>

                    <div className="space-y-1.5 pt-4">
                      <h3 className="font-serif text-xl font-bold text-white leading-snug drop-shadow-md">
                        {filteredItems[mobileIndex]?.title}
                      </h3>
                      <p className="text-xs text-gray-200 leading-relaxed font-normal">
                        {filteredItems[mobileIndex]?.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Mobile Floating Left/Right Overlay Arrows */}
              <button
                onClick={prevMobileSlide}
                aria-label="Previous Photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 backdrop-blur-md border border-white/30 text-white shadow-xl"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextMobileSlide}
                aria-label="Next Photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/80 backdrop-blur-md border border-white/30 text-white shadow-xl"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Dots Indicator */}
            <div className="flex items-center justify-center gap-1.5 pt-4">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    mobileIndex === idx ? "w-6 bg-[#356877]" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative h-72 sm:h-96 lg:h-[480px] w-full bg-slate-900">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 bg-white space-y-2 border-t border-slate-100">
                <span className="text-xs font-bold uppercase tracking-widest text-[#DFA528]">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#356877]">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. CLOSING CTA BANNER */}
      <section
        className="relative w-full min-h-[280px] sm:min-h-[320px] flex items-center justify-center text-white bg-cover bg-center md:bg-fixed overflow-hidden py-12 sm:py-16"
        style={{ backgroundImage: "url('/images/education.webp')" }}
      >
        <div className="absolute inset-0 bg-[#356877]/85" />

        <SectionReveal direction="zoom" duration={0.8} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              Be Part of Our Journey
            </h2>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal pt-1">
              Join us in expanding healthcare outreach, scholarship distribution, and grassroots community upliftment.
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
