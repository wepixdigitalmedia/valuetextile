"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/Button";
import { submitEnquiry } from "@/lib/firebase";

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryDrawer({ isOpen, onClose }: EnquiryDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      firstInputRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    try {
      await submitEnquiry({
        source: "enquiry-drawer",
        fullName: formData.fullName,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      setSubmitted(true);
      setFormData({ fullName: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Error submitting enquiry drawer to Firestore:", err);
      setErrorMsg("Unable to submit right now. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const inputClass =
    "w-full bg-[var(--white)] border border-[var(--line)] px-3.5 py-2.5 text-[16px] sm:text-[14px] text-[var(--black)] placeholder:text-[var(--text-muted)] rounded-[8px] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25 transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 bg-[var(--black)]/50 flex justify-end"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-drawer-title"
    >
      <div
        ref={panelRef}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md h-full bg-[var(--surface)] border-l border-[var(--line)] p-5 sm:p-8 flex flex-col justify-between overflow-y-auto"
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[var(--line)]">
            <div>
              <span className="text-[13px] font-bold tracking-[0.14em] text-[var(--accent)] uppercase">QUICK ENQUIRY</span>
              <h2
                id="enquiry-drawer-title"
                className="text-[26px] font-extrabold text-[var(--black)] tracking-[-0.02em] leading-[1.1] mt-2"
              >
                Send an Enquiry
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 text-[var(--text-muted)] hover:text-[var(--black)] rounded-full hover:bg-[var(--white)] transition-colors cursor-pointer"
              aria-label="Close enquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="mt-10 py-10 px-6 text-center space-y-4 bg-[var(--white)] rounded-[12px] border border-[var(--line)]">
              <div className="w-12 h-12 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[var(--black)]">
                Enquiry Received
              </h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                Thank you. Our export desk will reply within 24 working hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[var(--black)] hover:text-[var(--accent)] underline underline-offset-4 cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="drawerName"
                  className="block text-[13px] font-semibold text-[var(--black)] mb-1"
                >
                  Full Name *
                </label>
                <input
                  ref={firstInputRef}
                  id="drawerName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Jane Doe"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="drawerCompany"
                  className="block text-[13px] font-semibold text-[var(--black)] mb-1"
                >
                  Company / Brand *
                </label>
                <input
                  id="drawerCompany"
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Clothing Co."
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="drawerEmail"
                  className="block text-[13px] font-semibold text-[var(--black)] mb-1"
                >
                  Work Email *
                </label>
                <input
                  id="drawerEmail"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@acme.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="drawerWhatsapp"
                  className="block text-[13px] font-semibold text-[var(--black)] mb-1"
                >
                  WhatsApp Number
                </label>
                <input
                  id="drawerWhatsapp"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 555 123 4567"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="drawerMessage"
                  className="block text-[13px] font-semibold text-[var(--black)] mb-1"
                >
                  Message &amp; Specs
                </label>
                <textarea
                  id="drawerMessage"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify garment style, fabric type, GSM, target quantities..."
                  className={inputClass}
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-[var(--accent)] font-medium">{errorMsg}</p>
              )}

              <div className="pt-2">
                <Button type="submit" variant="primary" disabled={submitting} className="w-full justify-center">
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <div className="pt-6 border-t border-[var(--line)] text-[12px] text-[var(--text-muted)]">
          <p>Direct inquiries: +91 93456 30303</p>
          <p>Tiruppur 641607, Tamil Nadu, India</p>
        </div>
      </div>
    </div>
  );
}
