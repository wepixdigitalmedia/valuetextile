"use client";

import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Button } from "../ui/Button";

interface EnquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnquiryDrawer({ isOpen, onClose }: EnquiryDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

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

          {/* Form */}
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("TODO: Connect enquiry submission backend API.");
              onClose();
            }}
          >
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
                placeholder="+1 555 123 4567"
                className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
              />
            </div>

            <div>
              <label
                htmlFor="drawerMessage"
                className="block text-[13px] font-medium text-[#1F1F1F] mb-1"
              >
                Message & Fabric Specs
              </label>
              <textarea
                id="drawerMessage"
                rows={3}
                placeholder="Specify fabric type, GSM, target quantities..."
                className="w-full bg-white border border-[#E6E2DB] px-3.5 py-2.5 text-[14px] text-[#1F1F1F] rounded-[4px] focus:outline-hidden focus:border-[#C8741F]"
              />
            </div>

            <div className="pt-2">
              <Button type="submit" variant="primary" className="w-full justify-center">
                Submit Enquiry
              </Button>
            </div>

            <p className="text-[11px] text-[#5F5B55] text-center pt-1 font-mono">
              [TODO: Backend integration for enquiry form]
            </p>
          </form>
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

