"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitEnquiry, type EnquiryPayload } from "@/lib/firebase";

const PRODUCTION_MODES = [
  "Full-Package Garments (FOB)",
  "Cut & Make (CMT)",
  "Knitted Fabric / Yarn",
  "Samples first",
] as const;

const GARMENT_CATEGORIES = [
  "T-Shirts & Polos",
  "Kids & Baby Wear",
  "Men's & Women's Knitwear",
  "Activewear & Loungewear",
] as const;

const MODE_BY_ID: Record<string, (typeof PRODUCTION_MODES)[number]> = {
  "full-package": PRODUCTION_MODES[0],
  "cut-and-make": PRODUCTION_MODES[1],
  samples: PRODUCTION_MODES[3],
  fabric: PRODUCTION_MODES[2],
};

const inputClass =
  "w-full h-11 bg-[var(--white)] border border-[var(--line)] rounded-[8px] px-4 text-[16px] sm:text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25 transition-colors";

interface QuoteFormProps {
  source: EnquiryPayload["source"];
}

/**
 * The one quote form for the whole site. It pre-selects an option when the visitor arrives from a
 * "Get a quote" button (event "vt:choose-way") or from a link such as /contact?type=samples.
 * After a successful send it goes to /thank-you.
 */
export function QuoteForm({ source }: QuoteFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    lookingFor: PRODUCTION_MODES[0] as string,
    garmentType: GARMENT_CATEGORIES[0] as string,
    phone: "",
    quantity: "",
    message: "",
  });

  // Pre-select from the address (?type=samples, ?q=..., ?product=..., ?category=...)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const type = params.get("type");
    const about = params.get("product") || params.get("q");
    const category = params.get("category");
    if (!type && !about && !category) return;
    const frame = requestAnimationFrame(() => {
      setFormData((prev) => ({
        ...prev,
        lookingFor: type && MODE_BY_ID[type] ? MODE_BY_ID[type] : prev.lookingFor,
        garmentType:
          category && (GARMENT_CATEGORIES as readonly string[]).includes(category)
            ? category
            : prev.garmentType,
        message: about && !prev.message ? `Enquiry about: ${about}` : prev.message,
      }));
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Pre-select from "Get a quote" buttons on the same page
  useEffect(() => {
    const onChoose = (e: Event) => {
      const id = (e as CustomEvent<{ id: string }>).detail?.id;
      if (id && MODE_BY_ID[id]) {
        setFormData((prev) => ({ ...prev, lookingFor: MODE_BY_ID[id] }));
      }
    };
    window.addEventListener("vt:choose-way", onChoose);
    return () => window.removeEventListener("vt:choose-way", onChoose);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    try {
      await submitEnquiry({
        source,
        fullName: formData.fullName,
        company: formData.company,
        country: formData.country,
        email: formData.email,
        lookingFor: formData.lookingFor,
        garmentType: formData.garmentType,
        phone: formData.phone,
        quantity: formData.quantity,
        message: formData.message,
      });
      router.push("/thank-you");
    } catch (err) {
      console.error("Error submitting quote to Firestore:", err);
      setErrorMsg("Unable to send right now. Please try again or email key@valuetextiles.net directly.");
      setSubmitting(false);
    }
  };

  const field = (
    label: string,
    key: keyof typeof formData,
    type: string,
    placeholder: string,
    required = false
  ) => (
    <div>
      <label
        className={`block text-[12px] uppercase tracking-[0.1em] mb-1.5 ${
          required ? "font-bold text-[var(--black)]" : "font-semibold text-[var(--text-muted)]"
        }`}
      >
        {label}
      </label>
      <input
        type={type}
        required={required}
        value={formData[key]}
        onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-2.5">
          What do you need? *
        </label>
        <div className="flex flex-wrap gap-2">
          {PRODUCTION_MODES.map((mode) => {
            const active = formData.lookingFor === mode;
            return (
              <button
                key={mode}
                type="button"
                onClick={() => setFormData({ ...formData, lookingFor: mode })}
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("Your Name *", "fullName", "text", "Your name", true)}
        {field("Work Email *", "email", "email", "buyer@brand.com", true)}
      </div>

      <div>
        <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-1.5">
          Style, quantity or notes (Optional)
        </label>
        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="e.g. 5,000 pcs crew-neck T-shirts, 180 GSM cotton, delivery by March"
          className="w-full bg-[var(--white)] border border-[var(--line)] rounded-[8px] p-4 text-[16px] sm:text-sm text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25 transition-colors resize-none"
        />
      </div>

      <details className="group rounded-[8px] border border-[var(--line)] open:bg-[var(--surface)]/50">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-semibold text-[var(--black)]">
          <span>Add more details (optional)</span>
          <span className="text-[var(--accent)] transition-transform group-open:rotate-45 text-lg leading-none">+</span>
        </summary>
        <div className="space-y-4 px-4 pb-4 pt-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {field("Brand / Company", "company", "text", "Company or label name")}
            {field("Country", "country", "text", "e.g. UK, Germany, UAE, USA")}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {field("Estimated Volume", "quantity", "text", "e.g. 3,000 pcs / style")}
            {field("WhatsApp / Phone", "phone", "tel", "+44 / +91 ...")}
          </div>
          <div>
            <label className="block text-[12px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] mb-2">
              Product line
            </label>
            <div className="flex flex-wrap gap-2">
              {GARMENT_CATEGORIES.map((category) => {
                const active = formData.garmentType === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setFormData({ ...formData, garmentType: category })}
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
        </div>
      </details>

      {errorMsg && <p className="text-xs text-[var(--accent)] font-semibold">{errorMsg}</p>}

      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] disabled:opacity-60 text-[var(--on-accent)] min-h-[48px] pl-6 pr-2.5 py-2 text-sm font-semibold transition-colors cursor-pointer group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span className="pr-3">Sending...</span>
            </>
          ) : (
            <>
              <span>Send quote request</span>
              <span className="w-8 h-8 rounded-full bg-[var(--white)] text-[var(--black)] flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </span>
            </>
          )}
        </button>

        <p className="text-xs text-[var(--text-muted)]">Direct reply within 24 working hours, Mon to Sat IST</p>
      </div>

      <p className="text-[12px] leading-[1.5] text-[var(--text-muted)]">
        By sending this request you agree that we may use your details to reply to you, as set out in our{" "}
        <Link href="/privacy" className="underline underline-offset-2 hover:text-[var(--accent)]">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
