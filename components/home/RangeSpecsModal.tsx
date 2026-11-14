"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RangeItem } from "@/config/rangeData";
import { X, Check, ShieldCheck, ArrowRight, Ruler } from "lucide-react";
import { Tiruppur } from "../ui/Tiruppur";

interface RangeSpecsModalProps {
  item: RangeItem | null;
  onClose: () => void;
}

export function RangeSpecsModal({ item, onClose }: RangeSpecsModalProps) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [enquirySent, setEnquirySent] = useState(false);
  const [buyerEmail, setBuyerEmail] = useState("");
  const [reqType, setReqType] = useState<"sample" | "quote">("sample");

  useEffect(() => {
    setActiveImgIndex(0);
    setEnquirySent(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  const currentImage = item.galleryImages[activeImgIndex] || item.mainImage;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerEmail) return;
    setEnquirySent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-[#E8E2D9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-[#EFEBE4] flex items-center justify-between bg-[#FAF8F5]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-mono uppercase tracking-wider text-[#1F1F1F] bg-white border border-[#E8E2D9] px-2.5 py-0.5 rounded-full font-semibold">
              {item.type} Spec Sheet
            </span>
            <span className="text-[12px] text-[#78716C] hidden sm:inline">
              Made in our own units in <Tiruppur />
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white border border-[#E6E0D6] flex items-center justify-center text-[#554F47] hover:text-[#1F1F1F] hover:bg-[#F3EFE9] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            {/* Left 5 cols: Image & Angle Thumbnails */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E8E2D9]">
                <Image
                  src={currentImage}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Thumbnails */}
              {item.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {item.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImgIndex === idx
                          ? "border-[#C8741F] ring-2 ring-[#C8741F]/20 scale-95"
                          : "border-[#E8E2D9] opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="thumbnail" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#FAF8F5] text-[#554F47] border border-[#E8E2D9] text-[11px] font-medium px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right 7 cols: Specifications & Sourcing CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl sm:text-[28px] font-extrabold text-[#1F1F1F] leading-tight mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-[14px] text-[#554F47] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Specs Details Box */}
                <div className="bg-[#FAF8F5] rounded-2xl border border-[#EBE6DE] p-4 mb-5 divide-y divide-[#EBE6DE]">
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[#78716C] font-medium flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#C8741F]" /> Specifications
                    </span>
                    <span className="font-semibold text-[#1F1F1F] text-right">{item.specLine}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[#78716C] font-medium">Product Category</span>
                    <span className="font-semibold text-[#1F1F1F]">{item.type}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[#78716C] font-medium">Minimum Order Quantity</span>
                    <span className="font-bold text-[#C8741F]">{item.moq}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[#78716C] font-medium">Manufacturing Location</span>
                    <span className="font-semibold text-[#1F1F1F]">In-house units, Tirupur, India</span>
                  </div>
                </div>

                {/* In-House Quality & Testing */}
                <div className="mb-5">
                  <div className="text-[12px] font-bold uppercase tracking-wider text-[#78716C] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#1F1F1F]" /> Factory Quality Control
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[12px] text-[#4A453E]">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C8741F] shrink-0" />
                      <span>In-house fabric testing lab</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C8741F] shrink-0" />
                      <span>4-point fabric inspection</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C8741F] shrink-0" />
                      <span>Pre-production sampling before bulk</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#C8741F] shrink-0" />
                      <span>Export packing & documentation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Form */}
              <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#E8E2D9] mt-2">
                {enquirySent ? (
                  <div className="flex items-center gap-3 text-[#1F1F1F] py-2">
                    <div className="w-8 h-8 rounded-full bg-[#EBE6DF] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[#1F1F1F]" />
                    </div>
                    <div>
                      <div className="font-bold text-[14px]">Request received.</div>
                      <div className="text-[12px] text-[#554F47]">
                        Our export team will reply with specification details and availability.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-bold text-[#1F1F1F]">
                        Request Samples or Quotation
                      </span>
                      <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-[#E8E2D9] text-[11px]">
                        <button
                          type="button"
                          onClick={() => setReqType("sample")}
                          className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                            reqType === "sample"
                              ? "bg-[#1F1F1F] text-white shadow-xs"
                              : "text-[#78716C] hover:text-[#1F1F1F]"
                          }`}
                        >
                          Request Sample
                        </button>
                        <button
                          type="button"
                          onClick={() => setReqType("quote")}
                          className={`px-2.5 py-1 rounded-md font-medium transition-all cursor-pointer ${
                            reqType === "quote"
                              ? "bg-[#1F1F1F] text-white shadow-xs"
                              : "text-[#78716C] hover:text-[#1F1F1F]"
                          }`}
                        >
                          Request Quote
                        </button>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="email"
                        required
                        value={buyerEmail}
                        onChange={(e) => setBuyerEmail(e.target.value)}
                        placeholder="Enter your work email..."
                        className="flex-1 bg-white border border-[#E8E2D9] rounded-xl px-3.5 py-2.5 text-[13px] text-[#1F1F1F] placeholder:text-[#9A9388] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                      />
                      <button
                        type="submit"
                        className="bg-[#1F1F1F] text-white px-5 py-2.5 rounded-xl font-medium text-[13px] hover:bg-neutral-800 transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                      >
                        <span>Send Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>

                    <div className="mt-3 pt-3 border-t border-[#E8E2D9] flex items-center justify-between text-[11px] text-[#78716C]">
                      <span>Export desk: No. 3/197 H, Parapalayam, Tirupur 641607</span>
                      <span>Phone: +91 93456 30303</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

