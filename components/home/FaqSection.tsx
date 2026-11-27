"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { ArrowDown, ArrowRight } from "lucide-react";
import { factValue } from "@/config/ownerFacts";

interface FaqItem {
  id: number;
  q: string;
  a: string;
}

const LEFT_FAQS: FaqItem[] = [
  {
    id: 0,
    q: "What Types Of Garments Can You Manufacture?",
    a: "Global fashion brands can manufacture a wide range of knitwear and apparel with us, including crew-neck and V-neck t-shirts, structured polos, infant and children's wear, men's and women's casual knitwear, hoodies, sweatshirts, activewear, and loungewear. Value Textiles specializes in private-label and bulk manufacturing produced from tech packs, reference samples, or original design specifications.",
  },
  {
    id: 1,
    q: "Which Fabrics Are Available For Apparel Production?",
    a: "All core fabrics are knitted and dyed in our own Tiruppur and Perundurai units, including 100% Combed and Organic Cotton Single Jersey, Interlock, Rib, Auto-Striper knits, Mini Jacquards, Cotton-Modal, Tencel, and Cotton-Lycra stretch blends.",
  },
  {
    id: 2,
    q: "What Stays In-House, And What Do You Buy In?",
    a: "We do not spin yarn. We buy yarn to your specification from vetted mills and test every lot before knitting. Everything after that is done in our own units: circular knitting, soft-flow dyeing, finishing, lab testing, inspection, garmenting and export packing. One team answers for shade, fit and delivery date.",
  },
];

const RIGHT_FAQS: FaqItem[] = [
  {
    id: 3,
    q: "Do You Offer Custom Private-Label Clothing Manufacturing?",
    a: "Yes. We provide complete Full-Package (FOB) and Cut & Make (CMT) manufacturing with custom Pantone lab dips, screen and water-based printing, embroidery, custom neck labels, care tags, barcode stickers, and buyer-specified polybag and master carton packing.",
  },
  {
    id: 4,
    q: "What Is The Minimum Order Quantity For Garment Manufacturing?",
    a: (factValue("moq")
      ? `Our minimum order is ${factValue("moq")}. `
      : "MOQs are set per style and colour. Tell us the style and quantity you have in mind and we will confirm. ") +
      "We make fit samples, fabric swatches and pre-production size sets for your approval before bulk cutting.",
  },
  {
    id: 5,
    q: "What Are Your Lead Times, Certifications, And Shipping Terms?",
    a: [
      factValue("bulkLeadTime")
        ? `Bulk orders ship ${factValue("bulkLeadTime")}.`
        : "We confirm the bulk lead time with your quote, once the sample is approved.",
      factValue("ports")
        ? `We ship from ${factValue("ports")} on FOB or CIF terms.`
        : "We ship from South India ports on FOB or CIF terms.",
      "Our production is certified to OEKO-TEX® Standard 100, GOTS, GRS and BCI standards.",
    ].join(" "),
  },
];

export function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const renderItem = (faq: FaqItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`py-6 border-b transition-colors ${
          isOpen ? "border-[var(--accent)]" : "border-[var(--line)]"
        }`}
      >
        <button
          type="button"
          onClick={() => toggle(faq.id)}
          className="w-full flex items-start justify-between text-left gap-6 font-bold text-[16px] text-[var(--black)] hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="leading-[1.4]">{faq.q}</span>
          <span className="shrink-0 mt-0.5 text-[var(--black)]">
            {isOpen ? (
              <ArrowDown className="w-4 h-4 stroke-[2]" />
            ) : (
              <ArrowRight className="w-4 h-4 stroke-[2]" />
            )}
          </span>
        </button>

        {isOpen && (
          <p className="mt-4 pr-8 text-[15px] text-[var(--text-muted)] leading-[1.6]">
            {faq.a}
          </p>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--black)]">
            <span className="inline-block w-[28px] h-[3px] bg-[var(--accent)] shrink-0" aria-hidden="true" />
            <span>FAQS</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 items-start">
          <div>{LEFT_FAQS.map(renderItem)}</div>
          <div>{RIGHT_FAQS.map(renderItem)}</div>
        </div>
      </Container>
    </section>
  );
}
