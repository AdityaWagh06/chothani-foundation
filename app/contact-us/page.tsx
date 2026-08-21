"use client";

import React, { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { Mail, Phone, Globe, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 lg:space-y-24 py-12 lg:py-16">
      {/* Header Banner */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-brand">
          Get In Touch
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-brand">
          Contact Us
        </h1>
        <p className="text-lg text-muted max-w-2xl mx-auto font-normal">
          We welcome communication rooted in purpose, partnership, and service.
        </p>
        <div className="h-1 w-20 bg-brand/30 mx-auto rounded-full" />
      </section>

      {/* Main Grid: Info + Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Detail Cards */}
          <SectionReveal className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-brand-dark text-cream p-8 sm:p-10 border border-gold/30 shadow-xl space-y-8">
              <div className="space-y-2">
                <h2 className="font-serif text-2xl font-bold text-white">
                  Foundation Office
                </h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Shrirampur, Maharashtra
                </p>
              </div>

              <div className="space-y-6 text-sm sm:text-base">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/30 text-gold border border-gold/30 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gold font-bold">Email</span>
                    <a href="mailto:chothanifoundation@gmail.com" className="text-cream hover:underline font-medium">
                      chothanifoundation@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/30 text-gold border border-gold/30 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gold font-bold">Contact Number</span>
                    <a href="tel:+919699653181" className="text-cream hover:underline font-medium">
                      +91 9699 65 3181
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/30 text-gold border border-gold/30 shrink-0">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gold font-bold">Website</span>
                    <a href="https://www.chothanifoundation.com" target="_blank" rel="noopener noreferrer" className="text-cream hover:underline font-medium">
                      www.chothanifoundation.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light/30 text-gold border border-gold/30 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gold font-bold">Registered Address</span>
                    <p className="text-cream/90 leading-relaxed font-normal">
                      C/o Chothani Hospital, Office No. 1, Ward No. 7, Near Sarvamat Press, Shrirampur – 413709, District Ahmednagar, Maharashtra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Right Column: Interactive Form */}
          <SectionReveal className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 sm:p-10 border border-brand/15 shadow-xl space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand">
                  Send Us a Message
                </h2>
                <p className="text-sm text-muted">
                  Reach out to collaborate, inquire, or learn more about our initiatives.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 rounded-2xl bg-cream p-6 border border-brand/15">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand">Message Received</h3>
                  <p className="text-sm text-ink max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Chothani Foundation. Our team will review your inquiry and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
                    }}
                    className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-2.5 text-sm font-semibold text-cream hover:bg-brand-dark transition-all shadow-md"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-brand/20 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-brand/20 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-lg border border-brand/20 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full rounded-lg border border-brand/20 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership & Support">Partnership & Support</option>
                        <option value="Volunteering">Volunteering</option>
                        <option value="Healthcare Assistance">Healthcare Assistance</option>
                        <option value="Education Grant">Education Grant</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Please write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-lg border border-brand/20 bg-cream/40 px-4 py-3 text-sm text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand py-3.5 text-base font-semibold text-cream hover:bg-brand-dark transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionReveal>

        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="rounded-3xl bg-white p-6 border border-brand/15 shadow-xl space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-serif text-xl font-bold text-brand flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand" />
              Shrirampur Office Location
            </h3>
            <span className="text-xs text-muted font-medium">Ahmednagar District, Maharashtra</span>
          </div>

          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden border border-brand/10 bg-cream/60">
            <iframe
              title="Chothani Foundation Location Map"
              src="https://maps.google.com/maps?q=Chothani+Hospital,+Shrirampur,+Maharashtra&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </SectionReveal>
      </section>

    </div>
  );
}
