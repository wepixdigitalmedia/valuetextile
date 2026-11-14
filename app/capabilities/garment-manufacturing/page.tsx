import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { GARMENT_CATEGORY_DETAILS } from "@/config/garmentsData";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Factory,
  Shirt,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Garment Manufacturing Capabilities | Value Textiles — Tirupur",
  description:
    "Value Textiles manufactures knitted and woven garments for domestic and global markets in Tirupur with vertically integrated facilities, Total Quality Management, and sustainable production.",
};

const GARMENT_GALLERY = [
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g1.jpg",
    title: "T-Shirts & Casual Knits",
    subtitle: "Crew neck, V-neck & everyday jersey styles",
    alt: "Knitted casual garment produced at Value Textiles Garment Division",
    href: "/garments/t-shirts-and-polos",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g2.jpg",
    title: "Polos & Structured Collars",
    subtitle: "Pique, interlock & yarn-dyed polo programs",
    alt: "Export-grade polo and knitwear garment from Value Textiles",
    href: "/garments/t-shirts-and-polos",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g3.jpg",
    title: "Kids & Baby Wear",
    subtitle: "Soft, skin-safe knits to buyer safety standards",
    alt: "Children's and baby knitwear garment manufactured in Tirupur",
    href: "/garments/kids-and-baby-wear",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g4.jpg",
    title: "Men's & Women's Knitwear",
    subtitle: "Tops, dresses, layering pieces & seasonal styles",
    alt: "Men's and women's knitwear collection made with in-house fabric",
    href: "/garments/mens-and-womens-knitwear",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g5.jpg",
    title: "Activewear & Loungewear",
    subtitle: "Stretch, performance & breathable lounge knits",
    alt: "Activewear and loungewear garment stitched on dedicated lines",
    href: "/garments/activewear-and-loungewear",
  },
  {
    src: "https://ik.imagekit.io/wpxassets/value%20textiles/garments/g6.jpg",
    title: "Private Label & Custom Tech Packs",
    subtitle: "Custom trims, branding, lab dips & export packing",
    alt: "Private label finished garment ready for international export",
    href: "/contact#quote",
  },
];

const TQM_PILLARS = [
  {
    icon: Factory,
    title: "Vertically Integrated Facilities",
    text: "Our own knitting, soft-flow dyeing, testing lab, and garment stitching lines eliminate third-party delays and protect shade consistency.",
  },
  {
    icon: ShieldCheck,
    title: "Total Quality Management",
    text: "TQM initiatives embedded across every stage—from yarn testing and 4-point fabric inspection to in-line stitching checks and final garment QC.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Ethical Fashion",
    text: "Responsible manufacturing with Zero Liquid Discharge (ZLD) water recycling, BCI, GRS, GOTS, and OEKO-TEX certified production practices.",
  },
];

export default function GarmentManufacturingCapabilitiesPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. GARMENT DIVISION HERO                                    */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] pt-14 sm:pt-20 pb-14 sm:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div
          className="pointer-events-none absolute top-0 left-[-5%] w-[520px] h-[520px] rounded-full bg-[#FCE1CA]/35 blur-[150px]"
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CAPABILITIES · GARMENT DIVISION · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-[#1F1F1F] leading-[1.05] tracking-tight">
              Knitted &amp; woven garments, made in our own units.
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Value Textiles manufactures knitted and woven garments for the domestic and global markets with its vertically-integrated infrastructural facilities, hi-tech machinery and skilled personnel. A quality-centric company, Value Textiles has adopted Total Quality Management initiatives in all its processes.
            </p>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              Our commitment to sustainability extends to every stage of production, ensuring responsible manufacturing processes and promoting ethical fashion. Discover our collection that combines style and sustainability, making a positive impact on the environment and the world we live in.
            </p>

            {/* Quick Facts & CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
              >
                <span>Request Garment Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact?type=samples#quote"
                className="inline-flex items-center gap-2 h-[52px] px-8 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
              >
                <span>Request Samples</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. GARMENTS COLLECTION GALLERY (g1.jpg - g6.jpg)            */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / OUR GARMENT COLLECTION
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Made for international brands, from our own fabric.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-3">
              Every garment is developed to your tech pack, fit sample, and fabric specification—backed by in-house knitting, dyeing, and quality testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {GARMENT_GALLERY.map((item, idx) => (
              <Link
                key={item.src}
                href={item.href}
                className="group rounded-[26px] bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden flex flex-col justify-between shadow-2xs hover:border-[#C8741F] transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-1.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-heading text-lg font-bold text-[#1F1F1F] group-hover:text-[#C8741F] transition-colors">
                      {item.title}
                    </h3>
                    <Shirt className="w-4 h-4 text-[#C8741F] shrink-0" />
                  </div>
                  <p className="font-body text-sm text-[#554F47]">
                    {item.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. GARMENT CATEGORIES WE MANUFACTURE                        */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl mb-10 sm:mb-14">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / WHAT WE MANUFACTURE
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Four core garment categories, built to export standards.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GARMENT_CATEGORY_DETAILS.map((cat) => (
              <Link
                key={cat.slug}
                href={`/garments/${cat.slug}`}
                className="group p-7 rounded-[26px] bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-5 shadow-2xs hover:border-[#C8741F] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#C8741F] shrink-0" />
                    <h3 className="font-heading text-xl font-bold text-[#1F1F1F] group-hover:text-[#C8741F] transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm sm:text-[15px] text-[#554F47] leading-relaxed">
                    {cat.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8E2D9] flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] font-semibold text-[#78716C]">
                    {cat.specsSummary}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#C8741F] shrink-0 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. TQM & SUSTAINABILITY PILLARS                             */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
        <Container className="space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TQM_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 rounded-[26px] bg-[#FAF8F5] border border-[#E8E2D9] space-y-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#1F1F1F]">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm sm:text-[15px] text-[#554F47] leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Dark CTA Banner */}
          <div className="rounded-[32px] bg-[#1F1F1F] text-white p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2.5">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F7C08A]">
                / FULL PACKAGE &amp; CUT-AND-MAKE PROGRAMS
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Start your next garment program with our Tirupur team.
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Share your tech pack, target quantity, and delivery schedule. Our export desk replies within 24 working hours.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/garments"
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-full border border-white/25 hover:border-white text-white font-semibold text-sm transition-all"
              >
                <span>Explore Garment Categories</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

