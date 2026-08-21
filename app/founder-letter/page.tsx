import React from "react";
import Image from "next/image";
import SectionReveal from "@/components/SectionReveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder's Letter — Dr. Krishnakumar Chothani",
  description: "A message from Founder & Chairperson Dr. Krishnakumar Chothani on the founding of Chothani Foundation.",
};

export default function FounderLetterPage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Emblem */}
        <div className="text-center space-y-4">
          <div className="relative h-20 w-20 mx-auto overflow-hidden rounded-2xl bg-white p-2 border border-gray-100 shadow-md">
            <Image
              src="/images/logo-1.webp"
              alt="Chothani Foundation Official Logo"
              fill
              className="object-contain p-1"
            />
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-[#356877]">
            CHOTHANI FOUNDATION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#356877] uppercase tracking-wide">
            FOUNDER&apos;S LETTER
          </h1>
          <p className="text-lg sm:text-xl font-serif text-gray-800">
            A Message from Our Visionary <strong className="text-[#356877] font-bold">Dr. Krishnakumar Chothani</strong>
          </p>
          <div className="h-1 w-24 bg-[#DFA528] mx-auto rounded-full" />
        </div>

        {/* Letter Container */}
        <SectionReveal className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16 border border-gray-100 shadow-2xl space-y-10">
          
          {/* Formal Portrait Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center border-b border-gray-100 pb-10">
            <div className="sm:col-span-4 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-md mx-auto">
              <Image
                src="/images/photo-7.jpg"
                alt="Formal Portrait of Dr. Krishnakumar Chothani"
                fill
                className="object-cover"
              />
            </div>
            <div className="sm:col-span-8 space-y-3">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#356877]">
                Dr. Krishnakumar Chothani
              </h2>
              <p className="text-sm font-bold uppercase tracking-wider text-[#DFA528]">
                Founder & Chairperson • Chothani Foundation
              </p>
              <p className="text-sm text-gray-600 leading-relaxed italic font-serif">
                &ldquo;Serving children and families in rural India, particularly in and around the Shrirampur region, has been a responsibility and a privilege.&rdquo;
              </p>
            </div>
          </div>

          {/* Letter Body */}
          <div className="prose prose-lg max-w-none text-gray-800 font-serif leading-relaxed space-y-6 text-base sm:text-lg">
            <p className="font-bold text-xl text-[#356877]">Dear Friends,</p>

            <p>
              When one looks back at a life spent in service, the memories are not measured in years or milestones, but in faces, stories, and quiet moments of trust.
            </p>

            <p>
              For over fifty years, my life as a paediatrician has been guided by a simple belief: <strong className="text-[#356877] font-bold">every child deserves care, dignity, and a fair chance at life</strong>, regardless of where they are born or what they possess.
            </p>

            <p>
              Serving children and families in rural India, particularly in and around the Shrirampur region, has never felt like a profession to me—it has been a responsibility and a privilege.
            </p>

            <p>
              I have been fortunate to witness generations grow up, to see families place their faith in compassion rather than circumstance, and to experience firsthand how empathy can heal far beyond medicine.
            </p>

            <p>
              This journey has taught me that true service is quiet, consistent, and rooted in sincerity.
            </p>

            <p>
              On the occasion of my 75th birthday, my family and I felt it was time to institutionalise this spirit of service—not as a tribute to an individual, but as a commitment to the future. That thought gave birth to <strong className="text-[#356877] font-bold">Chothani Foundation.</strong>
            </p>

            <div className="my-8 rounded-2xl bg-gray-50 border-l-4 border-[#DFA528] p-6 sm:p-8 space-y-3 font-sans text-base">
              <p className="font-serif font-bold text-lg text-[#356877]">
                This Foundation reflects everything that has been close to my heart:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span><strong>Education</strong> that empowers minds and builds character</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span><strong>Healthcare</strong> that reaches those who need it most</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span><strong>Compassion for animals</strong> who cannot speak for themselves</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span><strong>Rural development</strong> that strengthens communities at the grassroots</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#DFA528] mt-2 shrink-0" />
                  <span><strong>Sports</strong> that instil discipline, confidence, and resilience</span>
                </li>
              </ul>
            </div>

            <p>
              Chothani Foundation is a family trust, guided by values rather than recognition. My family has taken on the responsibility of carrying this mission forward with integrity, humility, and long-term vision—ensuring that this work continues well beyond my lifetime.
            </p>

            <p>
              I firmly believe that legacy is not about what we accumulate, but about what we leave behind in the lives of others. If this Foundation can help even a few children dream bigger, a few families feel supported, or a few communities stand stronger, then its purpose will be fulfilled.
            </p>

            <p>
              I invite you to walk alongside us in this journey—whether through support, partnership, or simply by believing in the power of compassion.
            </p>
          </div>

          {/* Letter Sign-off & Signature SVG */}
          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
            <div className="space-y-3 font-serif">
              <p className="text-base font-semibold text-[#356877]">With gratitude and faith in service,</p>
              <div className="relative h-16 w-64 my-2">
                <Image
                  src="/images/photo-8.svg"
                  alt="Signature of Dr. Krishnakumar Chothani"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <div>
                <p className="text-xl font-bold text-[#356877]">Dr. Krishnakumar Chothani</p>
                <p className="text-sm font-sans font-semibold text-gray-500 uppercase tracking-wider">
                  Founder & Chairperson • Chothani Foundation
                </p>
              </div>
            </div>
          </div>

        </SectionReveal>

        {/* Closing Line */}
        <div className="text-center py-4">
          <p className="font-serif text-xl italic font-semibold text-[#356877]">
            &ldquo;Legacy lives on through compassion, consistency, and care.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
}
