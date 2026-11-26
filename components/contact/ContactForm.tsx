"use client";

import React, { useState, useEffect } from "react";
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

  // Pre-fill enquiry context when navigated from Search or CTA query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    const type = params.get("type");
    if (q || type) {
      setFormData((prev) => ({
        ...prev,
        lookingFor:
          type === "cut-and-make"
            ? "Garments, cut and make (your fabric)"
            : type === "samples"
            ? "Sample development / Fabric swatches"
            : prev.lookingFor,
        message: q && !prev.message ? `Enquiry regarding: ${q}` : prev.message,
      }));
    }
  }, []);

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
      <div className="relative overflow-hidden bg-[var(--surface)] text-[var(--black)] border border-[var(--line)] p-8 sm:p-12 rounded-[12px] text-center flex flex-col items-center justify-center min-h-[460px]">
        <div className="w-16 h-16 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-5">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--black)] tracking-[-0.02em] mb-3">
          Thank you for reaching out.
        </h3>
        <p className="text-base text-[var(--text-muted)] leading-relaxed max-w-md mx-auto mb-7">
          We have received your message. Our merchandising and export team in Tiruppur will review your requirements and respond within 24 working hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 rounded-full border-[1.5px] border-[var(--black)] bg-transparent text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-sm font-semibold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div
      id="quote"
      className="relative overflow-hidden bg-[var(--surface)] text-[var(--black)] border border-[var(--line)] p-7 sm:p-10 lg:p-12 rounded-[12px]"
    >
      <p className="text-base font-medium text-[var(--black)] mb-7 leading-relaxed">
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
            className="w-full bg-[var(--white)] border border-[var(--line)] px-4 py-3.5 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] rounded-[12px] focus:outline-none focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/30 transition-colors"
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
            className="w-full bg-[var(--white)] border border-[var(--line)] px-4 py-3.5 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] rounded-[12px] focus:outline-none focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/30 transition-colors"
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
            className="w-full bg-[var(--white)] border border-[var(--line)] px-4 py-3.5 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] rounded-[12px] focus:outline-none focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/30 transition-colors"
          />

          <div className="flex items-stretch rounded-[12px] border border-[var(--line)] bg-[var(--white)] overflow-hidden focus-within:border-[var(--black)] focus-within:ring-2 focus-within:ring-[var(--accent)]/30 transition-colors">
            <input
              name="countryCode"
              type="text"
              value={formData.countryCode}
              onChange={(e) =>
                setFormData({ ...formData, countryCode: e.target.value })
              }
              aria-label="Country code"
              className="w-16 shrink-0 bg-transparent border-r border-[var(--line)] px-3 py-3.5 text-sm text-[var(--black)] text-center font-semibold focus:outline-none"
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
              className="w-full bg-transparent px-4 py-3.5 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-none"
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
            className="w-full bg-[var(--white)] border border-[var(--line)] px-4 py-3.5 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] rounded-[12px] focus:outline-none focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/30 transition-colors resize-y"
          />
        </div>

        {errorMsg && (
          <p className="text-sm font-medium text-[var(--black)] bg-[var(--white)] border border-[var(--accent)] rounded-[12px] px-4 py-2.5">
            {errorMsg}
          </p>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-3 min-h-[48px] pl-6 pr-2 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-[var(--on-accent)] font-semibold text-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
          >
            <span>{submitting ? "Sending..." : "Submit"}</span>
            <span className="w-9 h-9 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
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
