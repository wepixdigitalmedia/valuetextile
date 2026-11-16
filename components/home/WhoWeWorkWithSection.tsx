"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/Container";
import { ArrowRight } from "lucide-react";

interface ClientSegment {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  href: string;
  ctaLabel: string;
}

const CLIENT_SEGMENTS: ClientSegment[] = [
  {
    num: "01",
    tag: "OEM & PRIVATE LABEL",
    title: "Fashion and private-label brands",
    desc: "Your design and label, made to your fit and fabric specification. Full-package development from custom Pantone lab dips and woven neck labels to bulk export packing.",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Earth-Toned%20Clothing%20on%20Vintage%20World%20Map.webp",
    alt: "Earth-toned fashion apparel styled over vintage world map for global private-label brands",
    href: "/garments/mens-and-womens-knitwear",
    ctaLabel: "Explore Knitwear Programs",
  },
  {
    num: "02",
    tag: "INFANT & CHILDREN'S APPAREL",
    title: "Kids and baby wear brands",
    desc: "Soft knits made to your safety, tenderness and labelling requirements. OEKO-TEX® Standard 100 Class 1 dyes, nickel-free snaps, and 100% metal-needle screening.",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Ten%20Children_s%20Coordinated%20Winter%20Outfits.webp",
    alt: "Coordinated children's and baby knitwear outfits manufactured to export safety standards",
    href: "/garments/kids-and-baby-wear",
    ctaLabel: "Explore Kids & Baby Wear",
  },
  {
    num: "03",
    tag: "PERFORMANCE & ATHLEISURE",
    title: "Activewear and sportswear brands",
    desc: "Stretch and performance knits engineered for active, repeat programs. High-recovery Cotton-Lycra, flatlock chafe-free seams, and moisture-wicking finishes.",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Synchronized%20Street%20Style%20Walk.webp",
    alt: "Synchronized street-style activewear and athleisure apparel showcase",
    href: "/garments/activewear-and-loungewear",
    ctaLabel: "Explore Activewear & Loungewear",
  },
  {
    num: "04",
    tag: "SCALABLE DTC & EMERGING LABELS",
    title: "Online sellers and startups",
    desc: "Smaller starting orders on selected styles with room to scale. Reliable proto sampling, barcode-ready polybagging, and transparent factory-direct costing.",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Bright%20Sneaker%20Packing%20Workspace.webp",
    alt: "Clean bright e-commerce packing workspace for online apparel sellers and startups",
    href: "/contact?q=Startup%20or%20DTC%20Order#quote",
    ctaLabel: "Start With Our Team",
  },
  {
    num: "05",
    tag: "HIGH-VOLUME RETAIL CHAINS",
    title: "Retailers and buying houses",
    desc: "Larger programs with consistent shade, size sets and planned shipping. Dedicated garment stitching lines, AQL 1.5/2.5 statistical audits, and scheduled FOB container runs.",
    image:
      "https://ik.imagekit.io/wpxassets/value%20textiles/Modern%20Menswear%20Store%20Interior.webp",
    alt: "Modern retail apparel store interior showcasing curated knitwear collections",
    href: "/contact?q=Retail%20Program%20Enquiry#quote",
    ctaLabel: "Discuss Volume Programs",
  },
];

export function WhoWeWorkWithSection() {
  return (
    <div className="w-full">
      {/* ============================================================ */}
      {/* 01. HERO SECTION: BRANDS AT EVERY STAGE                      */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-12 sm:pb-16 border-b border-[#E8E2D9] overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-[-6%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
        />

        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-[#C8741F]">
              / WHO WE WORK WITH
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#111111] leading-[1.06] tracking-tight">
              Brands at every stage.
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              From emerging DTC labels launching their first capsule to global
              retail buying houses running year-round programs, we adapt our
              knitting, dyeing, and garment lines to fit how you source.
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. INDIVIDUAL STACKED EDITORIAL SECTIONS (NO CARDS)         */}
      {/*     Title -> Short Description -> Full-Width Image           */}
      {/* ============================================================ */}
      <div id="who-we-work-with" className="w-full">
        {CLIENT_SEGMENTS.map((seg, idx) => {
          const isTinted = idx % 2 === 0;
          return (
            <section
              key={seg.num}
              className={`w-full py-14 sm:py-18 lg:py-20 border-b border-[#E8E2D9] ${
                isTinted ? "bg-[#FAF8F5]" : "bg-white"
              }`}
            >
              <Container className="space-y-6 sm:space-y-8">
                {/* 1. Title & Short Description */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
                  <div className="max-w-3xl space-y-3">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-bold text-[#C8741F] tracking-widest">
                        {seg.num}
                      </span>
                      <span className="text-[#D4CBBF]">·</span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#78716C]">
                        {seg.tag}
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#111111] leading-[1.1] tracking-tight">
                      {seg.title}
                    </h2>

                    <p className="font-body text-base sm:text-[17px] text-[#554F47] leading-relaxed">
                      {seg.desc}
                    </p>
                  </div>

                  <Link
                    href={seg.href}
                    className="inline-flex items-center gap-2 font-heading text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em] text-[#111111] hover:text-[#C8741F] transition-colors shrink-0 w-fit group pb-1"
                  >
                    <span>{seg.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* 2. Full-Width Image Below */}
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] lg:h-[520px] lg:aspect-auto rounded-[20px] sm:rounded-[28px] overflow-hidden bg-[#EFEAE1]">
                  <Image
                    src={seg.image}
                    alt={seg.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1280px) 100vw, 1280px"
                    className="object-cover object-center"
                  />
                </div>
              </Container>
            </section>
          );
        })}
      </div>
    </div>
  );
}
