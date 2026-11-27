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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[var(--black)]/60">
      <div
        className="relative w-full max-w-4xl bg-[var(--white)] rounded-[12px] overflow-hidden flex flex-col max-h-[92vh] border border-[var(--line)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-[var(--line)] flex items-center justify-between bg-[var(--surface)]">
          <div className="flex items-center gap-2">
            <span className="text-[12px] uppercase tracking-[0.1em] text-[var(--black)] bg-[var(--white)] border border-[var(--line)] px-2.5 py-0.5 rounded-full font-bold">
              {item.type} Spec Sheet
            </span>
            <span className="text-[12px] text-[var(--text-muted)] hidden sm:inline">
              Made in our own units in <Tiruppur />
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center text-[var(--black)] hover:border-[var(--black)] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-7 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden bg-[var(--surface)] border border-[var(--line)]">
                <Image
                  src={currentImage}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {item.galleryImages.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {item.galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImgIndex(idx)}
                      className={`relative aspect-square rounded-[8px] overflow-hidden border-2 transition-all cursor-pointer ${
                        activeImgIndex === idx
                          ? "border-[var(--accent)] scale-95"
                          : "border-[var(--line)] opacity-75 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="thumbnail" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[var(--text-muted)] border border-[var(--line)] text-[11px] font-medium px-2 py-0.5 rounded-[6px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-[28px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mb-2">
                  {item.name}
                </h3>
                <p className="text-[15px] text-[var(--text-muted)] leading-[1.6] mb-4">
                  {item.description}
                </p>

                <div className="bg-[var(--surface)] rounded-[12px] border border-[var(--line)] p-4 mb-5 divide-y divide-[var(--line)]">
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[var(--text-muted)] font-medium flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[var(--black)]" /> Specifications
                    </span>
                    <span className="font-semibold text-[var(--black)] text-right">{item.specLine}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[var(--text-muted)] font-medium">Product Category</span>
                    <span className="font-semibold text-[var(--black)]">{item.type}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[var(--text-muted)] font-medium">Minimum Order Quantity</span>
                    <span className="font-bold text-[var(--black)]">{item.moq}</span>
                  </div>
                  <div className="py-2 flex items-center justify-between text-[13px]">
                    <span className="text-[var(--text-muted)] font-medium">Manufacturing Location</span>
                    <span className="font-semibold text-[var(--black)]">In-house units, Tiruppur, India</span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-[var(--black)] mb-2 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[var(--accent)]" /> Factory Quality Control
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13px] text-[var(--text-muted)]">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>In-house fabric testing lab</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>4-point fabric inspection</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>Pre-production sampling before bulk</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                      <span>Export packing &amp; documentation</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] rounded-[12px] p-4 border border-[var(--line)] mt-2">
                {enquirySent ? (
                  <div className="flex items-center gap-3 text-[var(--black)] py-2">
                    <div className="w-8 h-8 rounded-full bg-[var(--white)] border border-[var(--line)] flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <div className="font-bold text-[14px]">Request received.</div>
                      <div className="text-[12px] text-[var(--text-muted)]">
                        Our export team will reply with specification details and availability.
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[13px] font-bold text-[var(--black)]">
                        Request Samples or Quotation
                      </span>
                      <div className="flex items-center gap-1 bg-[var(--white)] p-0.5 rounded-[8px] border border-[var(--line)] text-[11px]">
                        <button
                          type="button"
                          onClick={() => setReqType("sample")}
                          className={`px-2.5 py-1 rounded-[6px] font-semibold transition-colors cursor-pointer ${
                            reqType === "sample"
                              ? "bg-[var(--accent)] text-[var(--on-accent)]"
                              : "text-[var(--text-muted)] hover:text-[var(--black)]"
                          }`}
                        >
                          Request Sample
                        </button>
                        <button
                          type="button"
                          onClick={() => setReqType("quote")}
                          className={`px-2.5 py-1 rounded-[6px] font-semibold transition-colors cursor-pointer ${
                            reqType === "quote"
                              ? "bg-[var(--accent)] text-[var(--on-accent)]"
                              : "text-[var(--text-muted)] hover:text-[var(--black)]"
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
                        className="flex-1 bg-[var(--white)] border border-[var(--line)] rounded-full px-4 py-2.5 text-[14px] text-[var(--black)] placeholder:text-[var(--text-muted)] focus:outline-hidden focus:border-[var(--black)] focus:ring-2 focus:ring-[var(--accent)]/25"
                      />
                      <button
                        type="submit"
                        className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] min-h-[48px] px-6 rounded-full font-semibold text-[14px] transition-colors flex items-center justify-center gap-1.5 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                      >
                        <span>Send Request</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </form>

                    <div className="mt-3 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] text-[var(--text-muted)]">
                      <span>Export desk: No. 3/197 H, Parapalayam, Tiruppur 641607</span>
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
