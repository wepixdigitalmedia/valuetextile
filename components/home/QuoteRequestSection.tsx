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

  const inputClass =
    "w-full h-11 bg-[var(--white)] border border-[var(--line)] rounded-[8px] px-4 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25 transition-colors";

  return (
    <section
      id="quote"
      className="w-full bg-[var(--white)] py-16 lg:py-24"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
                <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
                <span>PRODUCTION ENQUIRY</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em]">
                Start your next knitwear{" "}
                <span className="text-[var(--accent)]">program</span> with us.
              </h2>
              <p className="text-[16px] text-[var(--text-muted)] leading-[1.6]">
                Share your tech pack, target fabric GSM, or seasonal volume. Our
                Tiruppur merchandising team responds within 24 working hours
                with factory-direct costing and sampling lead times.
              </p>
            </div>

            {/* 3-Step Deliverables */}
            <div className="space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-[12px] bg-[var(--surface)] border border-[var(--line)]">
                <div className="w-10 h-10 rounded-[8px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">
                    01 · Transparent FOB &amp; CMT Costing
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    Detailed breakdown by yarn count, fabric GSM, trims, and
                    target order quantity within one business day.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[12px] bg-[var(--surface)] border border-[var(--line)]">
                <div className="w-10 h-10 rounded-[8px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">
                    02 · Lab Dips, Swatches &amp; Fit Samples
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    Custom Pantone recipe development in our Perundurai ZLD
                    dyehouse and proto sampling before bulk commitment.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-[12px] bg-[var(--surface)] border border-[var(--line)]">
                <div className="w-10 h-10 rounded-[8px] bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--black)]">
                    03 · In-House Mill to Export Container
                  </h3>
                  <p className="text-[13px] text-[var(--text-muted)] mt-0.5 leading-[1.5]">
                    OEKO-TEX® &amp; GOTS compliant production with AQL 2.5 final
                    inspection across our 3 integrated Tiruppur &amp; Perundurai
                    units.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.1em] text-[var(--black)] hover:text-[var(--accent)] transition-colors group"
              >
                <span>Need unit addresses or direct phone lines? Visit Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-7 bg-[var(--white)] p-6 sm:p-9 lg:p-10 rounded-[12px] border border-[var(--line)]">
            {submitted ? (
              <div className="py-14 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--black)]">
                  Quote Request Received
                </h3>
                <p className="text-base text-[var(--text-muted)] max-w-md leading-[1.6]">
                  Thank you. Our export merchandising desk has received your
                  specifications and will respond within 24 working hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] px-5 min-h-[48px] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Spec
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-2.5">
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
                          className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer border ${
                            active
                              ? "bg-[var(--accent)] text-[var(--on-accent)] border-[var(--accent)]"
                              : "bg-[var(--white)] text-[var(--black)] border-[var(--line)] hover:border-[var(--black)]"
                          }`}
                        >
                          {mode}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-2.5">
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
                          className={`px-3.5 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-colors cursor-pointer border ${
                            active
                              ? "bg-[var(--accent)] text-[var(--on-accent)] border-[var(--accent)]"
                              : "bg-[var(--white)] text-[var(--black)] border-[var(--line)] hover:border-[var(--black)]"
                          }`}
                        >
                          {category}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--line)] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--black)] mb-1.5">
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
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--black)] mb-1.5">
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
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--black)] mb-1.5">
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
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-bold uppercase tracking-[0.1em] text-[var(--black)] mb-1.5">
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
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1.5">
                        Estimated Volume (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        placeholder="e.g. 3,000 pcs / style"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1.5">
                        WhatsApp / Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+44 / +91 ..."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1.5">
                      Fabric GSM, Style &amp; Tech Pack Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share fabric composition, GSM, target delivery window, or tech pack requirements..."
                      className="w-full bg-[var(--white)] border border-[var(--line)] rounded-[8px] p-4 text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25 transition-colors resize-none"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-xs text-[var(--accent)] font-semibold">{errorMsg}</p>
                )}

                <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-[var(--on-accent)] min-h-[48px] pl-6 pr-2.5 py-2 text-sm font-semibold transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className="pr-3">Submitting...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Production Quote</span>
                        <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                          <ArrowRight className="w-4 h-4 stroke-[2.2]" />
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[var(--text-muted)]">
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
