"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/firebase";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    lookingFor: "Garments, full package (our fabric)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const fullPhone = formData.phone
      ? `${formData.countryCode} ${formData.phone}`.trim()
      : "";

    try {
      await submitEnquiry({
        source: "contact-page",
        fullName,
        email: formData.email,
        phone: fullPhone,
        lookingFor: formData.lookingFor,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        lookingFor: "Garments, full package (our fabric)",
        message: "",
      });
    } catch (err) {
      console.error("Error submitting inquiry to Firestore:", err);
      setErrorMsg(
        "Unable to submit right now. Please try again or email key@valuetextiles.net directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden bg-[#231E1A] text-white border border-[#3A322B] p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-[#C8741F]/20 border border-[#C8741F]/40 flex items-center justify-center text-[#F29B52] mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Thank you for reaching out.
        </h3>
        <p className="font-body text-[15px] text-white/75 leading-relaxed max-w-md mx-auto mb-7">
          We have received your message. Our merchandising and export team in Tirupur will review your requirements and respond within 24 working hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/25 bg-white/10 hover:border-[#F29B52] text-[13.5px] font-semibold text-white transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      id="quote"
      style={{
        background:
          "radial-gradient(circle at 88% 12%, rgba(200, 116, 31, 0.28) 0%, transparent 48%), linear-gradient(155deg, #26201B 0%, #1C1815 60%, #151210 100%)",
      }}
      className="relative overflow-hidden text-white border border-[#3A322B] p-7 sm:p-10 lg:p-12 rounded-[32px] sm:rounded-[40px] shadow-[0_24px_60px_rgba(31,25,20,0.18)]"
    >
      <p className="font-body text-sm sm:text-base font-medium text-white/90 mb-7">
        We&apos;re excited to hear from you and start your next garment program together
      </p>

      <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            placeholder="FIRST NAME *"
            aria-label="First Name"
            className="w-full bg-white/[0.04] border border-white/30 px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/65 placeholder:font-mono placeholder:tracking-wider rounded-2xl focus:outline-hidden focus:border-[#F29B52] transition-colors"
          />

          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            placeholder="LAST NAME / COMPANY"
            aria-label="Last Name or Company"
            className="w-full bg-white/[0.04] border border-white/30 px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/65 placeholder:font-mono placeholder:tracking-wider rounded-2xl focus:outline-hidden focus:border-[#F29B52] transition-colors"
          />
        </div>

        {/* Row 2: Email & Split Country Code + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="EMAIL ID *"
            aria-label="Email ID"
            className="w-full bg-white/[0.04] border border-white/30 px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/65 placeholder:font-mono placeholder:tracking-wider rounded-2xl focus:outline-hidden focus:border-[#F29B52] transition-colors"
          />

          <div className="flex items-stretch rounded-2xl border border-white/30 bg-white/[0.04] overflow-hidden focus-within:border-[#F29B52] transition-colors">
            <input
              name="countryCode"
              type="text"
              value={formData.countryCode}
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              aria-label="Country code"
              className="w-16 shrink-0 bg-transparent border-r border-white/25 px-3 py-3.5 text-xs sm:text-sm text-white text-center font-mono focus:outline-hidden"
            />
            <input
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="PHONE NUMBER *"
              aria-label="Phone Number"
              className="w-full bg-transparent px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/65 placeholder:font-mono placeholder:tracking-wider focus:outline-hidden"
            />
          </div>
        </div>

        {/* Row 3: Message Textarea */}
        <div>
          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="TYPE YOUR MESSAGE *"
            aria-label="Type your message"
            className="w-full bg-white/[0.04] border border-white/30 px-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/65 placeholder:font-mono placeholder:tracking-wider rounded-2xl focus:outline-hidden focus:border-[#F29B52] transition-colors resize-y"
          />
        </div>

        {errorMsg && (
          <p className="text-xs text-[#F7C08A] bg-white/5 border border-[#F7C08A]/30 rounded-xl px-4 py-2.5">
            {errorMsg}
          </p>
        )}

        {/* Submit Button Matching Reference Pill Style in Our Theme */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-3 h-[48px] pl-6 pr-1.5 rounded-full bg-[#C8741F] hover:bg-[#b56618] disabled:opacity-60 text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
          >
            <span>{submitting ? "Sending..." : "Submit"}</span>
            <span className="w-9 h-9 rounded-full bg-white text-[#1F1F1F] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
