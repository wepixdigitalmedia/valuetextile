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
    q: "What garments do you make?",
    a: "T-shirts and polos, kids and baby wear, men's and women's knitwear, activewear and loungewear, and custom styles developed to your tech pack or sample.",
  },
  {
    q: "Do you work with your own fabric or ours?",
    a: "Both. In a full package program we make the garment using our own knitted and dyed fabric. For cut and make, you supply the fabric and trims and our lines assemble and pack.",
  },
  {
    q: "Do you sell fabric or yarn only?",
    a: "We take fabric-only and yarn-only orders on request. Send your technical requirement and volume and our export desk will quote it.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "We offer clear MOQs per style and per colour. Smaller initial trial runs are supported for emerging brands and new collections.",
  },
  {
    q: "Do you make private label and custom designs?",
    a: "Yes. Send your tech pack, CAD or reference sample and our merchandising team develops counter-samples, grading and custom branding.",
  },
  {
    q: "How does sampling work?",
    a: "Fit samples, fabric lab dips, and pre-production size-set samples are submitted before bulk cutting. Sampling takes typically 7–14 days depending on fabric development.",
  },
  {
    q: "What is your typical lead time?",
    a: "Typically 30 to 45 days after approval of samples, trims and fabric colour. Exact lead times depend on style complexity, quantity and seasonal production schedules.",
  },
  {
    q: "Which countries do you ship to, and on what terms?",
    a: "We export globally across Europe, the UK, North America, Australia, and the Middle East on FOB or CIF terms via Tuticorin, Chennai, or Cochin ports.",
  },
  {
    q: "What payment terms do you offer?",
    a: "We work with standard export commercial terms (including Letter of Credit / LC and Advance against shipping documents) in USD, EUR, and GBP.",
  },
  {
    q: "Which certifications do you hold?",
    a: "Our partner and production facilities hold OEKO-TEX Standard 100, BCI, GRS, and GOTS certifications. Certificate copies and audit documents are available upon request.",
  },
  {
    q: "Can I visit the factory or see it on video?",
    a: "Yes. Factory visits in Tirupur are welcome by appointment, and our export desk can coordinate a live video walkthrough of our production lines.",
  },
  {
    q: "How do I get a quote?",
    a: "Send us the garment type, quantity, target market and your tech pack or reference sample using the form below. We reply within 24 working hours.",
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

