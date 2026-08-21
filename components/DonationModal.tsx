"use client";

import React, { useState, useEffect } from "react";
import { useDonation } from "@/context/DonationContext";
import { X, CheckCircle2, HeartHandshake, ArrowLeft, ArrowRight } from "lucide-react";

const focusAreaOptions = [
  "General Support",
  "Education",
  "Healthcare",
  "Animal Welfare",
  "Rural Development",
  "Sports Development",
];

const presetAmounts = ["500", "1000", "2500", "5000", "10000"];

export default function DonationModal() {
  const { isOpen, closeDonationModal, preselectedFocusArea } = useDonation();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [amount, setAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [focusArea, setFocusArea] = useState(preselectedFocusArea || "General Support");
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (preselectedFocusArea) {
      setFocusArea(preselectedFocusArea);
    }
  }, [preselectedFocusArea]);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setErrorMsg("");
      setConfirmed(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const finalAmount = customAmount ? customAmount : amount;

  const handleStep1Next = (e: React.FormEvent) => {
    e.preventDefault();
    const numericAmount = parseFloat(finalAmount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setErrorMsg("Please enter a valid donation amount.");
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handleStep2Next = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    if (!mobile.trim() || mobile.length < 8) {
      setErrorMsg("Please enter a valid mobile number.");
      return;
    }
    setErrorMsg("");
    setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmed) {
      setErrorMsg("Please confirm your donation details to proceed.");
      return;
    }
    setErrorMsg("");
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#356877] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DFA528] text-white">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold tracking-wide text-white">Support the Cause</h3>
              <p className="text-xs text-white/80">Chothani Foundation • Family Trust</p>
            </div>
          </div>
          <button
            onClick={closeDonationModal}
            className="rounded-full p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step <= 3 && (
          <div className="bg-gray-50 border-b border-gray-100 px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 1 ? "bg-[#356877] text-white" : "bg-gray-200 text-gray-500"}`}>
                  1
                </span>
                <span className={`text-xs font-semibold ${step === 1 ? "text-[#356877]" : "text-gray-500"}`}>
                  Details
                </span>
              </div>
              <div className={`h-0.5 flex-1 mx-3 ${step >= 2 ? "bg-[#356877]" : "bg-gray-200"}`} />
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 2 ? "bg-[#356877] text-white" : "bg-gray-200 text-gray-500"}`}>
                  2
                </span>
                <span className={`text-xs font-semibold ${step === 2 ? "text-[#356877]" : "text-gray-500"}`}>
                  Donor Info
                </span>
              </div>
              <div className={`h-0.5 flex-1 mx-3 ${step >= 3 ? "bg-[#356877]" : "bg-gray-200"}`} />
              <div className="flex items-center gap-2">
                <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step >= 3 ? "bg-[#356877] text-white" : "bg-gray-200 text-gray-500"}`}>
                  3
                </span>
                <span className={`text-xs font-semibold ${step === 3 ? "text-[#356877]" : "text-gray-500"}`}>
                  Confirm
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Error notification banner */}
        {errorMsg && (
          <div className="bg-red-50 border-l-4 border-red-600 px-6 py-3 text-xs font-semibold text-red-600">
            {errorMsg}
          </div>
        )}

        {/* Body Content */}
        <div className="p-6">
          {/* STEP 1 */}
          {step === 1 && (
            <form onSubmit={handleStep1Next} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Select Focus Area
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-[#356877] focus:outline-none focus:ring-2 focus:ring-[#356877]/20 shadow-sm font-medium"
                >
                  {focusAreaOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Donation Amount (₹)
                </label>
                <div className="grid grid-cols-5 gap-2 mb-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-2 text-sm font-semibold rounded-lg border transition-all ${
                        amount === amt && !customAmount
                          ? "bg-[#356877] text-white border-[#356877] shadow-sm"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#356877]"
                      }`}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 text-sm font-bold">
                    ₹
                  </span>
                  <input
                    type="number"
                    min="10"
                    placeholder="Other Amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full rounded-lg border border-gray-200 bg-white pl-9 pr-4 py-3 text-sm text-gray-800 focus:border-[#356877] focus:outline-none focus:ring-2 focus:ring-[#356877]/20 shadow-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-md bg-[#DFA528] py-3.5 text-sm font-semibold text-slate-900 hover:bg-[#C4881E] shadow-md hover:shadow-lg transition-all"
                >
                  Continue to Donor Information
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <form onSubmit={handleStep2Next} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Shah"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[#356877] focus:outline-none focus:ring-2 focus:ring-[#356877]/20"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="e.g. ramesh@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[#356877] focus:outline-none focus:ring-2 focus:ring-[#356877]/20"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[#356877] focus:outline-none focus:ring-2 focus:ring-[#356877]/20"
                  required
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-md border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-[2] flex items-center justify-center gap-2 rounded-md bg-[#DFA528] py-3 text-sm font-semibold text-slate-900 hover:bg-[#C4881E] transition-all shadow-md"
                >
                  Continue to Confirmation
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-3">
                <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Donation Amount:</span>
                  <span className="font-bold text-[#356877] text-base">₹{finalAmount}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Focus Area:</span>
                  <span className="font-semibold text-gray-800">{focusArea}</span>
                </div>
                <div className="flex justify-between items-center text-sm border-b border-gray-200 pb-2">
                  <span className="text-gray-500 font-medium">Donor Name:</span>
                  <span className="font-semibold text-gray-800">{fullName}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500 font-medium">Contact:</span>
                  <span className="text-xs text-gray-800">{email} | {mobile}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">
                Your donation will be used responsibly and transparently in line with the Foundation&apos;s mission.
              </p>

              <label className="flex items-start gap-3 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={confirmed}
                  onChange={(e) => setConfirmed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-[#356877] focus:ring-[#356877]"
                />
                <span className="text-xs text-gray-700 leading-normal font-medium">
                  I confirm the above details and wish to proceed with this voluntary contribution.
                </span>
              </label>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 flex items-center justify-center gap-1 rounded-md border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!confirmed}
                  className={`flex-[2] flex items-center justify-center gap-2 rounded-md py-3 text-sm font-semibold transition-all shadow-md ${
                    confirmed
                      ? "bg-[#DFA528] text-slate-900 hover:bg-[#C4881E] cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Proceed to Payment
                </button>
              </div>
            </form>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="text-center py-6 space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#356877]">Thank You for Your Generosity!</h3>
              <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                Your contribution of <strong className="text-[#356877]">₹{finalAmount}</strong> to{" "}
                <strong>{focusArea}</strong> is deeply appreciated. A confirmation email has been sent to{" "}
                <span className="font-semibold text-[#356877]">{email}</span>.
              </p>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-xs text-gray-500 max-w-md mx-auto">
                Chothani Foundation is committed to complete transparency. Official 80G tax exemption receipt details will be shared upon payment verification.
              </div>
              <button
                onClick={closeDonationModal}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-[#356877] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#254A56] transition-colors shadow-md"
              >
                Close & Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
