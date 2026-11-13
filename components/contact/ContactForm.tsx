"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/firebase";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    company: "",
    lookingFor: "Garments, full package (our fabric)",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    try {
      await submitEnquiry({
        source: "contact-page",
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        company: formData.company,
        lookingFor: formData.lookingFor,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        location: "",
        company: "",
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
      <div className="bg-white border border-[#E8E2D9] p-8 sm:p-12 rounded-[28px] shadow-[0_12px_40px_rgba(31,31,31,0.06)] text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="w-16 h-16 rounded-full bg-[#E5F2E9] flex items-center justify-center text-[#265239] mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1F1F1F] tracking-tight mb-3">
          Thank you for reaching out.
        </h3>
        <p className="font-body text-[15px] text-[#554F47] leading-relaxed max-w-md mx-auto mb-7">
          We have received your message. Our merchandising and export team in Tirupur will review your requirements and respond within 24 working hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#E8E2D9] bg-[#FAF8F5] hover:border-[#C8741F] text-[13.5px] font-semibold text-[#1F1F1F] transition-colors cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      id="quote"
      className="bg-white border border-[#E8E2D9] p-7 sm:p-10 lg:p-12 rounded-[28px] shadow-[0_12px_40px_rgba(31,31,31,0.06)]"
    >
      <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
        HAVE QUESTIONS?
      </p>
      <h2 className="font-heading text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[#1F1F1F] tracking-tight mt-1.5 mb-2">
        Send us a Message
      </h2>
      <p className="font-body text-sm sm:text-[15px] text-[#554F47] mb-8">
        Share your garment style, fabric specification, or factory visit request and our export desk will reply promptly.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactName"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              Name *
            </label>
            <input
              id="contactName"
              name="fullName"
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Your full name"
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            />
          </div>

          <div>
            <label
              htmlFor="contactEmail"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              Email *
            </label>
            <input
              id="contactEmail"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="buyer@brand.com"
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            />
          </div>
        </div>

        {/* Row 2: Phone & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactPhone"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              Phone / WhatsApp
            </label>
            <input
              id="contactPhone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 555 123 4567"
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            />
          </div>

          <div>
            <label
              htmlFor="contactLocation"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              Location / Country
            </label>
            <input
              id="contactLocation"
              name="location"
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. United Kingdom, Germany, USA"
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            />
          </div>
        </div>

        {/* Row 3: Company & Looking For */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="contactCompany"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              Company / Brand
            </label>
            <input
              id="contactCompany"
              name="company"
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="Brand or company name"
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            />
          </div>

          <div>
            <label
              htmlFor="contactLookingFor"
              className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
            >
              What are you looking for
            </label>
            <select
              id="contactLookingFor"
              name="lookingFor"
              value={formData.lookingFor}
              onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
              className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
            >
              <option value="Garments, full package (our fabric)">
                Garments, full package (our fabric)
              </option>
              <option value="Garments, cut and make (your fabric)">
                Garments, cut and make (your fabric)
              </option>
              <option value="Fabric or yarn only (on request)">
                Fabric or yarn only (on request)
              </option>
              <option value="Factory visit / General enquiry">
                Factory visit / General enquiry
              </option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contactMessage"
            className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5"
          >
            Message *
          </label>
          <textarea
            id="contactMessage"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your garment styles, GSM, quantities, target delivery or sample requirements..."
            className="w-full bg-[#FAF8F5] border border-[#E8E2D9] px-4 py-3 text-sm text-[#1F1F1F] rounded-xl focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
          />
        </div>

        {errorMsg && (
          <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
        )}

        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] disabled:opacity-60 text-white font-semibold text-sm transition-all shadow-xs cursor-pointer"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
