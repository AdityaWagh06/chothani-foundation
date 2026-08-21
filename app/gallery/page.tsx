"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "@/components/SectionReveal";
import { useDonation } from "@/context/DonationContext";
import { X, ZoomIn, HeartHandshake, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "healthcare" | "education" | "community" | "legacy";
  image: string;
  caption: string;
}

export default function GalleryPage() {
  const { openDonationModal } = useDonation();
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Rural Paediatric Health Camp",
      category: "healthcare",
      image: "/images/photo-1.jpg",
      caption: "Providing free pediatric checkups and medicines to children in rural Shrirampur.",
    },
    {
      id: "2",
      title: "Child Healthcare & Wellness",
      category: "healthcare",
      image: "/images/photo-2.jpg",
      caption: "Monitoring growth, nutrition, and early wellness intervention for infants.",
    },
    {
      id: "3",
      title: "Village Health Consultation",
      category: "healthcare",
      image: "/images/photo-3.jpg",
      caption: "Dr. Chothani consulting with local mothers and families in underserved hamlets.",
    },
    {
      id: "4",
      title: "Educational Scholarship Distribution",
      category: "education",
      image: "/images/photo-4.jpg",
      caption: "Empowering meritorious rural students with academic scholarships.",
    },
    {
      id: "5",
      title: "Classroom Support & Learning Kits",
      category: "education",
      image: "/images/image004.webp",
      caption: "Distributing slates, books, and educational supplies to village schoolchildren.",
    },
    {
      id: "6",
      title: "Rural Agricultural & Field Development",
      category: "community",
      image: "/images/image001.webp",
      caption: "Supporting sustainable farming, irrigation, and community self-reliance.",
    },
    {
      id: "7",
      title: "Youth Sports Equipment Support",
      category: "community",
      image: "/images/sports.webp",
      caption: "Encouraging sports, physical discipline, and teamwork among rural youth.",
    },
    {
      id: "8",
      title: "Animal Welfare & Care Camps",
      category: "community",
      image: "/images/animals.webp",
      caption: "Providing medical treatment and humane protection for farm & stray animals.",
    },
    {
      id: "9",
      title: "50 Years of Healthcare Legacy",
      category: "legacy",
      image: "/images/image003.webp",
      caption: "Honouring five decades of dedicated, selfless medical service.",
    },
    {
      id: "10",
      title: "Dr. Krishnakumar Chothani",
      category: "legacy",
      image: "/images/blurry.webp",
      caption: "Founder Chairperson and pioneer of rural child healthcare.",
    },
    {
      id: "11",
      title: "Chothani Family Trustees",
      category: "legacy",
      image: "/images/family.webp",
      caption: "Guiding the Foundation with responsibility, transparency, and unity.",
    },
    {
      id: "12",
      title: "Community Outreach & Care",
      category: "community",
      image: "/images/make-a-change.webp",
      caption: "Building a circle of compassion and grassroots-level social change.",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

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
            Visual Journey
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
            Documenting 50 years of paediatric care, scholarship distribution, and grassroots community upliftment.
          </motion.p>
        </div>
      </section>

      {/* 2. GALLERY CONTROLS & FILTER TABS */}
      <section className="w-full py-12 sm:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { id: "all", label: "All Photos" },
              { id: "healthcare", label: "Healthcare Outreach" },
              { id: "education", label: "Education & Youth" },
              { id: "community", label: "Community & Rural" },
              { id: "legacy", label: "Family & Legacy" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
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

          {/* Gallery Masonry Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedImage(item)}
                  className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer h-72 sm:h-80"
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
                      <h3 className="font-serif text-lg font-bold text-white leading-snug drop-shadow-sm">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-200 line-clamp-2 font-normal">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

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
