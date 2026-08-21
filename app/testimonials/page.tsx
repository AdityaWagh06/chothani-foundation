"use client";

import React from "react";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { MessageSquareQuote, ArrowLeft } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <SectionReveal className="space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand">
            VOICES OF COMMUNITY
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand">
            Testimonials & Stories
          </h1>
          <p className="text-lg text-muted max-w-xl mx-auto font-normal">
            Reflections from families, patients, and partners served across five decades.
          </p>
          <div className="h-1 w-20 bg-brand/30 mx-auto rounded-full" />
        </SectionReveal>

        <SectionReveal className="rounded-3xl bg-white p-12 sm:p-16 border border-brand/15 shadow-xl space-y-6 max-w-2xl mx-auto">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream border-2 border-brand/20 text-brand">
            <MessageSquareQuote className="h-10 w-10" />
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-brand">
              Stories of Impact
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              We are collecting personal experiences and testimonials from community members across the Shrirampur region whose lives have been touched by Dr. Chothani&apos;s service.
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
