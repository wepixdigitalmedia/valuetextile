"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Tiruppur } from "../ui/Tiruppur";
import { MapPin, Truck, Anchor, CheckCircle } from "lucide-react";

export function WhyTirupurSection() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / WHY TIRUPUR
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            Knitwear sourcing in India starts in Tirupur.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
            Tirupur, in Tamil Nadu (also spelled <Tiruppur />), is India&apos;s main knitwear export cluster. Yarn, knitting, dyeing, printing, embroidery and garment units sit close together. [ADD ONE SOURCED FACT with source and year, e.g. share of India&apos;s knitwear exports. Do not publish a number without a source.]
          </p>
        </div>

        {/* 3 Cluster Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">
          {/* Point 1 */}
          <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-[#E8E2D9] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#1F1F1F] mb-2">
                A short supply chain
              </h3>
              <p className="font-body text-[14.5px] text-[#554F47] leading-relaxed">
                Trims, printing, embroidery and washing are available within the cluster [CONFIRM which ones you use].
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-[#E8E2D9] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#1F1F1F] mb-2">
                Export experience
              </h3>
              <p className="font-body text-[14.5px] text-[#554F47] leading-relaxed">
                The cluster has shipped knitwear to global brands for decades, and our team works to buyer specifications and export paperwork every week.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="p-7 rounded-[28px] bg-[#FAF8F5] border border-[#E8E2D9] flex flex-col justify-between space-y-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
              <Anchor className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-[#1F1F1F] mb-2">
                Reachable ports
              </h3>
              <p className="font-body text-[14.5px] text-[#554F47] leading-relaxed">
                We ship through [PORTS, e.g. Chennai, Tuticorin, Cochin, CONFIRM].
              </p>
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <div className="mt-8 p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center gap-3 text-sm text-[#554F47]">
          <MapPin className="w-4 h-4 text-[#C8741F] shrink-0" />
          <span>
            Our units are in Parapalayam, Tirupur. Visit in person or take a video tour [CONFIRM which you offer].
          </span>
        </div>
      </Container>
    </section>
  );
}

