"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Do you make fabric only, garments only, or both?",
    a: "Both. You can order fabric, finished garments or a full package where we make the fabric and the garment.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "[MOQ] per colour for fabric and [MOQ] per style for garments. Smaller trial orders may be possible on selected styles [CONFIRM].",
  },
  {
    q: "Do you make private label and custom designs?",
    a: "Yes. Send your tech pack or reference sample and we develop it with you [CONFIRM].",
  },
  {
    q: "Can you arrange trims, labels, printing or embroidery?",
    a: "[CONFIRM. Example: \"Yes. We arrange them through [our unit / named partners] and check them with our own quality team.\"]",
  },
  {
    q: "How does sampling work?",
    a: "We make fabric swatches and lab dips first, then pre-production garment samples. Samples take [DAYS]. [Sample cost and refund policy.]",
  },
  {
    q: "What is your typical lead time?",
    a: "Fabric [DAYS]. Garments [DAYS] after sample and trim approval. Exact timing depends on quantity and season.",
  },
  {
    q: "Which countries do you ship to, and on what terms?",
    a: "We export to [COUNTRIES]. Terms: [FOB / CIF / other] from [PORT]. We handle export documentation.",
  },
  {
    q: "What payment terms do you offer?",
    a: "[PAYMENT TERMS] in [CURRENCIES].",
  },
  {
    q: "Which certifications do you hold?",
    a: "[LIST with certificate numbers]. Copies are available on request.",
  },
  {
    q: "Can I visit the factory or see it on video?",
    a: "[CONFIRM. Example: \"Yes. Visits are welcome by appointment, and we can run a live video tour.\"]",
  },
  {
    q: "How do I get a quote?",
    a: "Send us the product type, GSM or style, quantity and target market using the form below. We reply within [TIME] on working days (India time, IST).",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / FAQ
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            Questions from new buyers.
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-10 sm:mt-14 max-w-4xl divide-y divide-[#E8E2D9] border-y border-[#E8E2D9]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 font-heading font-bold text-base sm:text-lg text-[#1F1F1F] hover:text-[#C8741F] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#78716C] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#C8741F]" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="font-body text-sm sm:text-base text-[#554F47] leading-relaxed pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

