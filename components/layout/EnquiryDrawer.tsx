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

  // Close on Escape & trap focus
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

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-drawer-title"
    >
      <div
        ref={panelRef}
        data-lenis-prevent
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md h-full bg-[#FAF8F5] border-l border-[#E6E2DB] shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-250 ease-out"
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[#E6E2DB]">
            <div>
              <span className="text-[11px] font-bold tracking-[0.18em] text-[#C8741F] uppercase">
                QUICK SOURCING INQUIRY
              </span>
              <h2
                id="enquiry-drawer-title"
                className="font-heading text-[26px] font-extrabold text-[#1F1F1F] tracking-[-0.03em] mt-1"
              >
                Send an Enquiry
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 text-[#5F5B55] hover:text-[#1F1F1F] rounded-full hover:bg-black/5 transition-colors"
              aria-label="Close enquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submitted ? (
            <div className="mt-10 py-10 px-4 text-center space-y-4 bg-white rounded-xl border border-[#E6E2DB]">
              <div className="w-12 h-12 rounded-full bg-[#E5F2E9] flex items-center justify-center text-[#265239] mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1F1F1F]">
                Enquiry Received
              </h3>
              <p className="text-sm text-[#5F5B55] leading-relaxed">
                Thank you. Our export desk will reply within 24 working hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-[#C8741F] underline underline-offset-4 cursor-pointer"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            /* Form */
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="drawerName"
                  className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
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
                  className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
                />
              </div>

              <div>
                <label
                  htmlFor="drawerCompany"
                  className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
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
                  className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
                />
              </div>

              <div>
                <label
                  htmlFor="drawerEmail"
                  className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
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
                  className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
                />
              </div>

              <div>
                <label
                  htmlFor="drawerWhatsapp"
                  className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
                >
                  WhatsApp Number
                </label>
                <input
                  id="drawerWhatsapp"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 555 123 4567"
                  className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
                />
              </div>

              <div>
                <label
                  htmlFor="drawerMessage"
                  className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
                >
                  Message &amp; Specs
                </label>
                <textarea
                  id="drawerMessage"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify garment style, fabric type, GSM, target quantities..."
                  className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
              )}

              <div className="pt-2">
                <Button type="submit" variant="primary" disabled={submitting} className="w-full justify-center">
                  {submitting ? "Submitting..." : "Submit Enquiry"}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Drawer Footer info */}
        <div className="pt-6 border-t border-[#E6E2DB] text-[12px] text-[#5F5B55]">
          <p>Direct inquiries: +91 93456 30303</p>
          <p>Tirupur 641607, Tamil Nadu, India</p>
        </div>
      </div>
    </div>
  );
}

