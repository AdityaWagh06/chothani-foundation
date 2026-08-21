"use client";

import React from "react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { Image as ImageIcon, ArrowLeft } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <SectionReveal className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">
            CHOTHANI FOUNDATION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand">
            Foundation Gallery
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto font-normal">
            Visual highlights of our healthcare outreach, community programs, and social initiatives.
          </p>
          <div className="h-1 w-20 bg-brand/30 mx-auto rounded-full" />
        </SectionReveal>

        <SectionReveal className="rounded-3xl bg-white p-12 sm:p-16 border border-brand/15 shadow-xl space-y-6 max-w-2xl mx-auto">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream border-2 border-brand/20 text-brand">
            <ImageIcon className="h-10 w-10" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-brand">
              Documenting Our Journey
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Our full photo archive documenting 50 years of paediatric care and active community development initiatives is currently being curated. Check back soon for updates.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-cream hover:bg-brand-dark transition-all shadow-md"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Home
            </Link>
          </div>
        </SectionReveal>

      </div>
    </div>
  );
}
