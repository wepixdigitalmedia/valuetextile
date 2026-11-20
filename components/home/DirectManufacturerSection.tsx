"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Check, X } from "lucide-react";

const AGENT_POINTS = [
  { label: "Partner factories", tag: "Subcontracted" },
  { label: "Bought from whoever is available", tag: "Open Market" },
  { label: "Checks split across multiple factories", tag: "Fragmented QC" },
  { label: "Depends on each factory", tag: "Low Visibility" },
  { label: "Depends on factory availability", tag: "Variable Delays" },
  { label: "Agent margin added", tag: "Marked Up" },
];

const DIRECT_POINTS = [
  { label: "Our own units in Tirupur", tag: "3 Integrated Units" },
  { label: "Our own knitting, dyeing and lab testing", tag: "In-House Mill" },
  {
    label: "Unified standard: 4-point fabric inspection plus in-line & final garment QC",
    tag: "Unified TQM",
  },
  { label: "Integrated fabric and garment production in one system", tag: "100% Traceable" },
  { label: "Planned and scheduled in-house", tag: "Guaranteed T&A" },
  { label: "Factory-direct pricing", tag: "Zero Commission" },
];

export function DirectManufacturerSection() {
  return (
    <section className="relative w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9] overflow-hidden">
      {/* Subtle Warm Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/30 blur-[150px]"
      />

      <Container className="relative z-10">
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-[#C8741F]">
            / WHY SOURCE FROM US
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#111111] leading-[1.08] tracking-tight mt-2">
            A manufacturer, not a middleman.
          </h2>
          <p className="font-body text-base sm:text-[17px] text-[#554F47] leading-relaxed mt-3.5">
            Yarns are procured externally to exact specs, while every subsequent stage—knitting, dyeing, lab testing, cutting, and stitching—runs inside our own Tiruppur and Perundurai facilities with direct production oversight and no agent margin.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 3-PART VISUAL COMPARISON + 2x3 LUXURY BENEFIT CARDS          */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* LEFT + MIDDLE: Agent vs Direct Comparison Cards (8 Cols) */}
          <div className="lg:col-span-8 relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {/* CARD 1: Through a sourcing agent (Subdued Warm Stone) */}
            <div className="rounded-[28px] bg-[#F2ECE1]/85 border border-[#E4DDD0] p-5 sm:p-7 flex flex-col">
              <div className="flex items-center justify-between gap-3 mb-4 px-1">
                <h3 className="font-heading text-lg sm:text-[19px] font-bold text-[#3F3933] tracking-tight">
                  Through a sourcing agent
                </h3>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-[#8C8277] bg-[#EAE2D5] px-2.5 py-1 rounded-full">
                  Middleman
                </span>
              </div>

              <div className="flex-1 rounded-[20px] bg-[#FAF8F4] border border-[#E6DFD3] px-4 sm:px-5 py-1.5 flex flex-col justify-between divide-y divide-[#EDE6DB]">
                {AGENT_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="py-3.5 flex items-center justify-between gap-3 text-[13.5px] sm:text-[14px] text-[#5C554D] font-body leading-snug"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-[#CFA297] bg-[#FDF6F4] text-[#B86352] flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[2.2]" />
                      </span>
                      <span>{point.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER "VS" BADGE (Luxury Espresso & Ochre Gold Medallion) */}
            <div
              aria-hidden="true"
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#1B1612] border-[3px] border-[#FAF8F5] shadow-[0_8px_24px_rgba(27,22,18,0.22)] items-center justify-center font-heading font-extrabold text-xs tracking-wider text-[#F3B36B]"
            >
              VS
            </div>
            <div
              aria-hidden="true"
              className="flex md:hidden mx-auto -my-2 z-20 w-11 h-11 rounded-full bg-[#1B1612] border-[3px] border-[#FAF8F5] shadow-md items-center justify-center font-heading font-extrabold text-xs tracking-wider text-[#F3B36B]"
            >
              VS
            </div>

            {/* CARD 2: Direct from Value Textiles (Warm Ivory, Ochre & Espresso Theme) */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#FFFDF9] via-[#FDF7ED] to-[#F8EAD4] border-2 border-[#C8741F]/55 p-5 sm:p-7 flex flex-col shadow-[0_20px_50px_rgba(200,116,31,0.10)] overflow-hidden">
              {/* Subtle top-right golden radial highlight */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#C8741F]/12 blur-2xl"
              />

              {/* Espresso & Warm Ochre Header Pill */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-4">
                <div className="w-fit rounded-full bg-[#1B1612] text-white pl-2 pr-4 py-1.5 inline-flex items-center gap-2.5 shadow-xs">
                  <span className="w-6 h-6 rounded-full bg-[#C8741F] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <h3 className="font-heading text-[15px] sm:text-[17px] font-bold tracking-tight">
                    Direct from Value Textiles
                  </h3>
                </div>
              </div>

              <div className="relative z-10 flex-1 rounded-[20px] bg-white/85 backdrop-blur-xs border border-[#E9D8BE] px-4 sm:px-5 py-1.5 flex flex-col justify-between divide-y divide-[#F0E4D0]">
                {DIRECT_POINTS.map((point) => (
                  <div
                    key={point.label}
                    className="py-3.5 flex items-center gap-3 text-[13.5px] sm:text-[14px] font-semibold text-[#181411] font-body leading-snug"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#C8741F] text-white flex items-center justify-center shrink-0 shadow-[0_3px_10px_rgba(200,116,31,0.28)]">
                      <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                    </span>
                    <span>{point.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x3 Grid of 6 Architectural Benefit Cards (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
            {/* 1. In-house Manufacturing */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 36H38V40H10V36Z"
                    fill="#C8741F"
                    fillOpacity="0.22"
                  />
                  <path
                    d="M8 36H40M12 36V28H22V22H14V14H36V36"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 22V27M15 29H19"
                    stroke="#C8741F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="31"
                    cy="21"
                    r="3"
                    fill="#C8741F"
                    stroke="#1F1F1F"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                In-house
                <br />
                Manufacturing
              </span>
            </div>

            {/* 2. End-to-End Control */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 11L38 18.5L24 26L10 18.5L24 11Z"
                    fill="#C8741F"
                    fillOpacity="0.22"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 25L24 32.5L38 25"
                    stroke="#C8741F"
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 31.5L24 39L38 31.5"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                End-to-End
                <br />
                Control
              </span>
            </div>

            {/* 3. Consistent Quality */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 9L37 14V23.5C37 31.8 31.4 37.9 24 40C16.6 37.9 11 31.8 11 23.5V14L24 9Z"
                    fill="#C8741F"
                    fillOpacity="0.16"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.5 24.5L22.2 28.2L30 20.5"
                    stroke="#C8741F"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                Consistent
                <br />
                Quality
              </span>
            </div>

            {/* 4. Reliable Lead Time */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="13"
                    width="28"
                    height="25"
                    rx="4"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                  />
                  <path
                    d="M10 20H38M17 10V15M31 10V15"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <rect
                    x="15"
                    y="25"
                    width="7"
                    height="3"
                    rx="1"
                    fill="#C8741F"
                  />
                  <rect
                    x="25"
                    y="25"
                    width="8"
                    height="3"
                    rx="1"
                    fill="#C8741F"
                  />
                  <rect
                    x="15"
                    y="31"
                    width="12"
                    height="3"
                    rx="1"
                    fill="#C8741F"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                Reliable
                <br />
                Lead Time
              </span>
            </div>

            {/* 5. No Agent Margin */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="20"
                    cy="24"
                    rx="9"
                    ry="4"
                    fill="#C8741F"
                    fillOpacity="0.28"
                    stroke="#1F1F1F"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M11 24V30C11 32.2 15 34 20 34C25 34 29 32.2 29 30V24"
                    stroke="#1F1F1F"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M11 30V35C11 37.2 15 39 20 39C25 39 29 37.2 29 35V30"
                    stroke="#1F1F1F"
                    strokeWidth="2.2"
                  />
                  <ellipse
                    cx="29"
                    cy="16"
                    rx="8"
                    ry="3.5"
                    fill="#C8741F"
                    fillOpacity="0.35"
                    stroke="#1F1F1F"
                    strokeWidth="2.2"
                  />
                  <path
                    d="M21 16V21.5M37 16V26C37 27.8 33.8 29.2 29.5 29.5"
                    stroke="#1F1F1F"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                No Agent
                <br />
                Margin
              </span>
            </div>

            {/* 6. Better Value */}
            <div className="group rounded-[22px] bg-white border border-[#E6DFD3] hover:border-[#C8741F]/60 p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3 shadow-[0_8px_24px_rgba(31,26,21,0.03)] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center group-hover:scale-105 transition-transform">
                <svg
                  className="w-7 h-7 shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 38V22L19 27V22L28 27V13H37V38H10Z"
                    fill="#C8741F"
                    fillOpacity="0.18"
                    stroke="#1F1F1F"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="15"
                    y="31"
                    width="4"
                    height="4"
                    rx="0.8"
                    fill="#C8741F"
                  />
                  <rect
                    x="22"
                    y="31"
                    width="4"
                    height="4"
                    rx="0.8"
                    fill="#C8741F"
                  />
                  <rect
                    x="29"
                    y="31"
                    width="4"
                    height="4"
                    rx="0.8"
                    fill="#C8741F"
                  />
                </svg>
              </div>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                Better
                <br />
                Value
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
