"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Check, X } from "lucide-react";

const AGENT_POINTS = [
  "Partner factories",
  "Bought from whoever is available",
  "Checks split across multiple factories",
  "Depends on each factory",
  "Depends on factory availability",
  "Agent margin added",
];

const DIRECT_POINTS = [
  "Our own units in Tirupur",
  "Our own knitting, dyeing and lab testing",
  "One team, one standard, 4-point fabric inspection plus garment checks",
  "Fabric to garment in one place",
  "Planned and scheduled in-house",
  "Factory-direct pricing",
];

export function DirectManufacturerSection() {
  return (
    <section className="w-full bg-[#FCFBF8] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D97724]">
            / WHY SOURCE FROM US
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight tracking-tight mt-2">
            A manufacturer, not a middleman.
          </h2>
          <p className="font-body text-base sm:text-[17px] text-[#554F47] leading-relaxed mt-4">
            Every stage from yarn to finished garment happens in our own units in
            Tirupur. That means one quality standard, one team to talk to and no
            agent margin in the price.
          </p>
        </div>

        {/* ============================================================ */}
        {/* 3-PART VISUAL COMPARISON + 2x3 VALUE CARDS                   */}
        {/* ============================================================ */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* LEFT + MIDDLE: Agent vs Direct Comparison Cards (8 Cols) */}
          <div className="lg:col-span-8 relative grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
            {/* CARD 1: Through a sourcing agent */}
            <div className="rounded-[24px] bg-[#F4F0E8] p-5 sm:p-7 flex flex-col">
              <h3 className="font-heading text-lg sm:text-[20px] font-bold text-[#1F1F1F] mb-4 px-1">
                Through a sourcing agent
              </h3>

              <div className="flex-1 rounded-[18px] bg-[#FAF8F4] px-4 sm:px-5 py-2 flex flex-col justify-between divide-y divide-[#EAE3D8]">
                {AGENT_POINTS.map((point) => (
                  <div
                    key={point}
                    className="py-3.5 flex items-center gap-3.5 text-[14px] sm:text-[14.5px] text-[#3B3630] font-body leading-snug"
                  >
                    <span className="w-6 h-6 rounded-full border border-[#D47A6A] text-[#D47A6A] flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.2]" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER "VS" BADGE (Desktop absolute center, Mobile inline) */}
            <div
              aria-hidden="true"
              className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#F5E5D5] border-2 border-[#FCFBF8] shadow-xs items-center justify-center font-heading font-extrabold text-sm text-[#1F1F1F]"
            >
              VS
            </div>
            <div
              aria-hidden="true"
              className="flex md:hidden mx-auto -my-2 z-20 w-11 h-11 rounded-full bg-[#F5E5D5] border-2 border-[#FCFBF8] shadow-xs items-center justify-center font-heading font-extrabold text-xs text-[#1F1F1F]"
            >
              VS
            </div>

            {/* CARD 2: Direct from Value Textiles */}
            <div className="rounded-[24px] bg-[#F2F7F1] border border-[#96BC92] p-5 sm:p-7 flex flex-col shadow-[0_8px_28px_rgba(46,106,41,0.05)]">
              {/* Forest Green Header Pill */}
              <div className="w-fit rounded-full bg-[#2E6A29] text-white pl-2.5 pr-5 py-2 inline-flex items-center gap-2.5 mb-4">
                <span className="w-6 h-6 rounded-full bg-white text-[#2E6A29] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <h3 className="font-heading text-[16px] sm:text-[18px] font-bold tracking-tight">
                  Direct from Value Textiles
                </h3>
              </div>

              <div className="flex-1 px-1 py-1 flex flex-col justify-between divide-y divide-[#DCE8DA]">
                {DIRECT_POINTS.map((point) => (
                  <div
                    key={point}
                    className="py-3.5 flex items-center gap-3.5 text-[14px] sm:text-[14.5px] font-semibold text-[#182218] font-body leading-snug"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#4C9A42] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 2x3 Grid of 6 Benefit Icon Cards (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3.5 sm:gap-4 items-stretch">
            {/* 1. In-house Manufacturing */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 36H38V40H10V36Z"
                  fill="#D97724"
                  fillOpacity="0.2"
                />
                <path
                  d="M8 36H40M12 36V28H22V22H14V14H36V36"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 22V27M15 29H19"
                  stroke="#D97724"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle
                  cx="31"
                  cy="21"
                  r="3"
                  fill="#D97724"
                  stroke="#1F1F1F"
                  strokeWidth="1.8"
                />
              </svg>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                In-house
                <br />
                Manufacturing
              </span>
            </div>

            {/* 2. End-to-End Control */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 11L38 18.5L24 26L10 18.5L24 11Z"
                  fill="#D97724"
                  fillOpacity="0.22"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 25L24 32.5L38 25"
                  stroke="#D97724"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 31.5L24 39L38 31.5"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                End-to-End
                <br />
                Control
              </span>
            </div>

            {/* 3. Consistent Quality */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 9L37 14V23.5C37 31.8 31.4 37.9 24 40C16.6 37.9 11 31.8 11 23.5V14L24 9Z"
                  fill="#D97724"
                  fillOpacity="0.14"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 24.5L22.2 28.2L30 20.5"
                  stroke="#D97724"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                Consistent
                <br />
                Quality
              </span>
            </div>

            {/* 4. Reliable Lead Time */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
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
                  strokeWidth="2.2"
                />
                <path
                  d="M10 20H38M17 10V15M31 10V15"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <rect
                  x="15"
                  y="25"
                  width="7"
                  height="3"
                  rx="1"
                  fill="#D97724"
                />
                <rect
                  x="25"
                  y="25"
                  width="8"
                  height="3"
                  rx="1"
                  fill="#D97724"
                />
                <rect
                  x="15"
                  y="31"
                  width="12"
                  height="3"
                  rx="1"
                  fill="#D97724"
                />
              </svg>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                Reliable
                <br />
                Lead Time
              </span>
            </div>

            {/* 5. No Agent Margin */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="20"
                  cy="24"
                  rx="9"
                  ry="4"
                  fill="#D97724"
                  fillOpacity="0.28"
                  stroke="#1F1F1F"
                  strokeWidth="2.1"
                />
                <path
                  d="M11 24V30C11 32.2 15 34 20 34C25 34 29 32.2 29 30V24"
                  stroke="#1F1F1F"
                  strokeWidth="2.1"
                />
                <path
                  d="M11 30V35C11 37.2 15 39 20 39C25 39 29 37.2 29 35V30"
                  stroke="#1F1F1F"
                  strokeWidth="2.1"
                />
                <ellipse
                  cx="29"
                  cy="16"
                  rx="8"
                  ry="3.5"
                  fill="#D97724"
                  fillOpacity="0.35"
                  stroke="#1F1F1F"
                  strokeWidth="2.1"
                />
                <path
                  d="M21 16V21.5M37 16V26C37 27.8 33.8 29.2 29.5 29.5"
                  stroke="#1F1F1F"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-heading text-[13.5px] sm:text-[14px] font-bold text-[#1F1F1F] leading-tight">
                No Agent
                <br />
                Margin
              </span>
            </div>

            {/* 6. Better Value */}
            <div className="rounded-[20px] bg-[#F4F0E8] p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-3">
              <svg
                className="w-11 h-11 shrink-0"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 38V22L19 27V22L28 27V13H37V38H10Z"
                  fill="#D97724"
                  fillOpacity="0.14"
                  stroke="#1F1F1F"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <rect
                  x="15"
                  y="31"
                  width="4"
                  height="4"
                  rx="0.8"
                  fill="#D97724"
                />
                <rect
                  x="22"
                  y="31"
                  width="4"
                  height="4"
                  rx="0.8"
                  fill="#D97724"
                />
                <rect
                  x="29"
                  y="31"
                  width="4"
                  height="4"
                  rx="0.8"
                  fill="#D97724"
                />
              </svg>
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
