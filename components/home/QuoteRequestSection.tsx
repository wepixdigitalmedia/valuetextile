"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight, CheckCircle2, Loader2, Sparkles, Layers, ShieldCheck } from "lucide-react";
import { submitEnquiry } from "@/lib/firebase";

const PRODUCTION_MODES = [
  "Full-Package Garments (FOB)",
  "Cut & Make (CMT)",
  "Knitted Fabric / Yarn",
] as const;

const GARMENT_CATEGORIES = [
  "T-Shirts & Polos",
  "Kids & Baby Wear",
  "Men's & Women's Knitwear",
  "Activewear & Loungewear",
] as const;

export function QuoteRequestSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    lookingFor: "Full-Package Garments (FOB)",
    garmentType: "T-Shirts & Polos",
    phone: "",
    quantity: "",
    targetDelivery: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    try {
      await submitEnquiry({
        source: "homepage-quote",
        fullName: formData.fullName,
        company: formData.company,
        country: formData.country,
        email: formData.email,
        lookingFor: formData.lookingFor,
        garmentType: formData.garmentType,
        phone: formData.phone,
        quantity: formData.quantity,
        targetDelivery: formData.targetDelivery,
        message: formData.message,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting quote to Firestore:", err);
      setErrorMsg(
        "Unable to submit right now. Please try again or email key@valuetextiles.net directly."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="quote"
      className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-t border-[#E8E2D9]"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* ============================================================ */}
          {/* LEFT COLUMN: PRODUCTION BRIEF & 3-STEP ONBOARDING            */}
          {/* ============================================================ */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <p className="font-mono text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C8741F]">
                / PRODUCTION ENQUIRY
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#111111] leading-[1.08] tracking-tight">
                Start your next knitwear program with us.
              </h2>
              <p className="font-body text-[15px] sm:text-base text-[#554F47] leading-relaxed">
                Share your tech pack, target fabric GSM, or seasonal volume. Our
                Tiruppur merchandising team responds within 24 working hours
                with factory-direct costing and sampling lead times.
              </p>
            </div>

            {/* 3-Step Merchandising Deliverables (No duplicate address/footer info) */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4EFE6]/80 border border-[#E6DFD3]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD3] flex items-center justify-center text-[#C8741F] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#111111]">
                    01 · Transparent FOB & CMT Costing
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5C554D] mt-0.5 leading-relaxed">
                    Detailed breakdown by yarn count, fabric GSM, trims, and
                    target order quantity within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4EFE6]/80 border border-[#E6DFD3]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD3] flex items-center justify-center text-[#C8741F] shrink-0 mt-0.5">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#111111]">
                    02 · Lab Dips, Swatches & Fit Samples
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5C554D] mt-0.5 leading-relaxed">
                    Custom Pantone recipe development in our Perundurai ZLD
                    dyehouse and proto sampling before bulk commitment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F4EFE6]/80 border border-[#E6DFD3]">
                <div className="w-10 h-10 rounded-xl bg-white border border-[#E6DFD3] flex items-center justify-center text-[#C8741F] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#111111]">
                    03 · In-House Mill to Export Container
                  </h3>
                  <p className="font-body text-xs sm:text-[13px] text-[#5C554D] mt-0.5 leading-relaxed">
                    OEKO-TEX® & GOTS compliant production with AQL 2.5 final
                    inspection across our 3 integrated Tiruppur & Perundurai
                    units.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.1em] text-[#111111] hover:text-[#C8741F] transition-colors group"
              >
                <span>Need unit addresses or direct phone lines? Visit Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: INTERACTIVE RFQ BUILDER CARD                   */}
          {/* ============================================================ */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 lg:p-10 rounded-[28px] border border-[#E6DFD3] shadow-[0_20px_60px_rgba(31,26,21,0.05)]">
            {submitted ? (
              <div className="py-14 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#C8741F]/12 border border-[#C8741F]/30 flex items-center justify-center text-[#C8741F]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#111111]">
                  Quote Request Received
                </h3>
                <p className="font-body text-sm sm:text-base text-[#554F47] max-w-md leading-relaxed">
                  Thank you. Our export merchandising desk has received your
                  specifications and will respond within 24 working hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#FAF4EA] hover:bg-[#F0E6D6] text-[#111111] border border-[#E2D9C8] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Spec
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Interactive Program Type Pills */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#6E665E] mb-2.5">
                    01. Select Production Program *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PRODUCTION_MODES.map((mode) => {
                      const active = formData.lookingFor === mode;
                      return (
                        <button
                          key={mode}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, lookingFor: mode })
                          }
                          className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer border ${active
                              ? "bg-[#111111] text-white border-[#111111] shadow-xs"
                              : "bg-[#FAF8F5] text-[#4A433C] border-[#E4DDD3] hover:border-[#C8741F]/60"
                            }`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Interactive Garment Category Pills */}
                <div>
                  <label className="block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#6E665E] mb-2.5">
                    02. Primary Product Line
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {GARMENT_CATEGORIES.map((category) => {
                      const active = formData.garmentType === category;
                      return (
                        <button
                          key={category}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, garmentType: category })
                          }
                          className={`px-3.5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer border ${active
                              ? "bg-[#C8741F] text-white border-[#C8741F] shadow-xs"
                              : "bg-[#FAF8F5] text-[#4A433C] border-[#E4DDD3] hover:border-[#C8741F]/60"
                            }`}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Buyer & Specification Inputs */}
                <div className="pt-1 border-t border-[#EFEAE1] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Your name"
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                        Brand / Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Company or label name"
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="buyer@brand.com"
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                        Country *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) =>
                          setFormData({ ...formData, country: e.target.value })
                        }
                        placeholder="e.g. UK, Germany, UAE, USA"
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6E665E] mb-1.5">
                        Estimated Volume (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        placeholder="e.g. 3,000 pcs / style"
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6E665E] mb-1.5">
                        WhatsApp / Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+44 / +91 ..."
                        className="w-full h-11 bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl px-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-wider text-[#6E665E] mb-1.5">
                      Fabric GSM, Style & Tech Pack Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share fabric composition, GSM, target delivery window, or tech pack requirements..."
                      className="w-full bg-[#FAF8F5] border border-[#E4DDD3] rounded-xl p-4 text-sm text-[#111111] placeholder:text-[#9A9187] focus:outline-hidden focus:border-[#C8741F] focus:bg-white transition-colors resize-none"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
                )}

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[#111111] hover:bg-[#C8741F] disabled:opacity-60 text-white pl-6 pr-2.5 py-2.5 text-sm font-semibold transition-all cursor-pointer shadow-xs group"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="pr-3">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Production Quote</span>
                        <span className="w-8 h-8 rounded-full bg-white text-[#111111] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                          <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                        </span>
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[11px] text-[#78716C]">
                    Direct reply within 24 hrs · Mon–Sat IST
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
