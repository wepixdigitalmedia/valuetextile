import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { DirectManufacturerSection } from "@/components/home/DirectManufacturerSection";
import {
  Factory,
  Globe,
  Layers,
  FlaskConical,
  Scissors,
  Sparkles,
  MapPin,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Value Textiles — Vertically Integrated Garment & Textile Manufacturer",
  description:
    "Value Textiles is a vertically integrated knitwear garment and fabric manufacturer in Tirupur, India, with in-house circular knitting, soft-flow dyeing, lab testing, and garment production.",
};

const DIVISIONS = [
  {
    icon: Scissors,
    title: "Garment Manufacturing Division",
    location: "No. 3/197 H, Parapalayam, Tirupur - 641607",
    description:
      "Pattern grading, automated spreading and cutting, dedicated stitching lines, thread trimming, steam pressing, needle detection, and export cartooning.",
    tag: "Cut, Stitch & Pack",
  },
  {
    icon: Layers,
    title: "Circular Knitting Division",
    location: "Shed No. 61, SIDCO, Tirupur - 641606",
    description:
      "High-speed Mayer & Cie circular knitting machines producing Single Jersey, Auto-Striper, Interlock, Rib, Pique, French Terry, and 2/3-Thread Fleece.",
    tag: "Mayer & Cie · 18–28 GG",
  },
  {
    icon: Sparkles,
    title: "Dyeing & Processing Division",
    location:
      "K6, K7, K8, K9, SIPCOT Industrial Growth Centre, P.V. Palayam (P.O), Perundurai - 638052",
    description:
      "Brazzoli & Dilmenler HTHP soft-flow dyeing with ORGATEX automation, TubeTex compacting, silicon/enzyme finishing, and Zero Liquid Discharge (ZLD) recycling.",
    tag: "Soft-Flow HTHP & ZLD",
  },
  {
    icon: FlaskConical,
    title: "In-House Testing & Quality Lab",
    location: "Integrated across Tirupur & Perundurai Units",
    description:
      "Spectrophotometer colour matching, physical testing across shrinkage, GSM, spirality, pilling, colourfastness, and 4-point fabric inspection before cutting.",
    tag: "Lab & 4-Point QC",
  },
];

const CERTS = [
  {
    id: "oeko-tex",
    name: "OEKO-TEX® Standard 100",
    image: "/images/certifications/cert-1-clean.png",
  },
  {
    id: "bci",
    name: "Better Cotton Initiative (BCI)",
    image: "/images/certifications/cert-2-clean.png",
  },
  {
    id: "grs",
    name: "Global Recycled Standard (GRS)",
    image: "/images/certifications/cert-3-clean.png",
  },
  {
    id: "gots",
    name: "GOTS (Global Organic Textile Standard)",
    image: "/images/certifications/cert-4-clean.png",
  },
];

const BRAND_LOGOS = [
  { name: "Jack & Jones", src: "/images/brands/jac.png" },
  { name: "LC Waikiki", src: "/images/brands/lc.png" },
  { name: "Desigual", src: "/images/brands/des.png" },
  { name: "Pepco", src: "/images/brands/pep.png" },
  { name: "s.Oliver", src: "/images/brands/so.png" },
  { name: "OVS", src: "/images/brands/ov.png" },
  { name: "HE", src: "/images/brands/he.png" },
  { name: "KappAhl", src: "/images/brands/ke.png" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      {/* ============================================================ */}
      {/* 01. TOP BANNER & "WE ARE" SECTION (Inspired by valuetextiles.net/about.php) */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[#FFFDF9] py-14 sm:py-20 lg:py-24 border-b border-[#E8E2D9] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (Col 6): Editorial Collage & "Welcome to Value Textiles" Badge */}
            <div className="lg:col-span-6 relative">
              <div className="grid grid-cols-12 gap-4 items-end">
                {/* Main Stacked Fabric & Knitwear Photo */}
                <div className="col-span-7 sm:col-span-7 relative h-[360px] sm:h-[460px] rounded-[28px] overflow-hidden border border-[#E8E2D9] shadow-sm">
                  <Image
                    src="/images/hero-fabrics.jpeg"
                    alt="Stacked dyed knitted fabrics at Value Textiles"
                    fill
                    priority
                    sizes="(max-width: 1024px) 60vw, 400px"
                    className="object-cover"
                  />
                </div>

                {/* Secondary Swatch Hanger Photo */}
                <div className="col-span-5 sm:col-span-5 relative h-[240px] sm:h-[300px] rounded-[24px] overflow-hidden border border-[#E8E2D9] shadow-sm">
                  <Image
                    src="/images/slider/fabric-sourcing.webp"
                    alt="Yarn-dyed and striped knitted fabric swatches"
                    fill
                    sizes="(max-width: 1024px) 40vw, 280px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating Warm Ochre Hexagon/Stadium Badge */}
              <div className="absolute top-6 right-4 sm:right-12 lg:right-8 z-10 w-36 h-36 sm:w-44 sm:h-44 rounded-[32px] rotate-3 bg-[#C8741F] text-white shadow-xl flex flex-col items-center justify-center text-center p-4 border-4 border-white">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 mb-1">
                  <Tiruppur />, India
                </span>
                <p className="font-heading text-lg sm:text-xl font-extrabold leading-tight -rotate-3">
                  Welcome to Value Textiles
                </p>
              </div>
            </div>

            {/* Right Column (Col 6): "We Are" Story & Non-Numeric Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                  / ABOUT VALUE TEXTILES
                </p>
                <h1 className="font-heading text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[#1F1F1F] leading-[1.08] tracking-tight mt-2">
                  We Are
                </h1>
                <div className="w-14 h-1 bg-[#C8741F] rounded-full mt-3" />
              </div>

              <div className="space-y-4 font-body text-base sm:text-[16.5px] text-[#554F47] leading-relaxed">
                <p>
                  <strong className="font-bold text-[#1F1F1F]">Value Textiles</strong> is a vertically integrated textile and garment manufacturing company in{" "}
                  <Tiruppur />, India. We are engaged in the manufacture of a wide range of knitted garments and fabrics from state-of-the-art production facilities.
                </p>
                <p>
                  We have evolved into producing finished garments and fabrics across{" "}
                  <strong className="font-semibold text-[#1F1F1F]">
                    Cotton, Polyester, Tencel, Modal, Viscose, Lycra
                  </strong>{" "}
                  and custom engineered blends for international apparel brands.
                </p>
                <p>
                  Our yarn-dyed fabrics, printing techniques, finishing, processing, circular knitting, and garment stitching are a mark of excellence—making every garment and fabric lot ready for global export.
                </p>
              </div>

              {/* Two Clean Non-Numeric Capability Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E8E2D9]">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E8E2D9]">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-base font-bold text-[#1F1F1F]">
                      Vertically Integrated
                    </h2>
                    <p className="font-body text-xs text-[#78716C] mt-0.5 leading-relaxed">
                      In-house knitting, dyeing, lab testing &amp; garment lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-[#E8E2D9]">
                  <div className="w-11 h-11 rounded-xl bg-[#FAF4EA] border border-[#ECDDC3] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-base font-bold text-[#1F1F1F]">
                      Global Export Partner
                    </h2>
                    <p className="font-body text-xs text-[#78716C] mt-0.5 leading-relaxed">
                      Supplying international brands &amp; retail chains worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact#quote"
                  className="inline-flex items-center gap-2.5 h-[50px] px-7 rounded-full bg-[#1F1F1F] hover:bg-black text-white text-sm font-semibold transition-all shadow-xs"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 h-[50px] px-7 rounded-full border border-[#1F1F1F] text-[#1F1F1F] hover:bg-[#1F1F1F] hover:text-white text-sm font-semibold transition-all"
                >
                  <span>Explore Our Range</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. OUR PRODUCTION UNITS & INFRASTRUCTURE                    */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / OUR INFRASTRUCTURE
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              State-of-the-art units across Tirupur &amp; Perundurai.
            </h2>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-3">
              Every core stage is controlled by our own team across our dedicated garmenting, circular knitting, and soft-flow dyeing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-14">
            {DIVISIONS.map((div) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.title}
                  className="p-7 sm:p-8 rounded-[28px] bg-white border border-[#E8E2D9] flex flex-col justify-between space-y-5 shadow-2xs hover:border-[#C8741F] transition-all"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#C8741F]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#78716C] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E2D9]">
                      {div.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-xl font-bold text-[#1F1F1F]">
                      {div.title}
                    </h3>
                    <p className="font-body text-sm sm:text-[15px] text-[#554F47] leading-relaxed">
                      {div.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E2D9] flex items-start gap-2 text-xs font-mono text-[#78716C]">
                    <MapPin className="w-4 h-4 text-[#C8741F] shrink-0 mt-0.5" />
                    <span>{div.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 03. OUR CERTIFICATIONS (Matching valuetextiles.net/about.php) */}
      {/* ============================================================ */}
      <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / COMPLIANCE &amp; STANDARDS
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
              Our Certifications
            </h2>
            <div className="w-12 h-1 bg-[#C8741F] rounded-full mx-auto mt-3 mb-4" />
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
              The organization is proud to be honoured with the below certifications, which are testimonials of our commitment towards quality and workmanship.
            </p>
          </div>

          {/* Clean Logo Strip (Only Logos, No Cards) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center mt-12 pt-4">
            {CERTS.map((c) => (
              <div
                key={c.id}
                className="w-full flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={c.image}
                  alt={c.name}
                  width={240}
                  height={80}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                  className="max-h-14 sm:max-h-16 lg:max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 04. DIRECT MANUFACTURER VS SOURCING AGENT COMPARISON         */}
      {/* ============================================================ */}
      <DirectManufacturerSection />

      {/* ============================================================ */}
      {/* 05. BRANDS WE SUPPLY & EXPORT CTA                            */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
        <Container className="space-y-16">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#1F1F1F] text-center mb-8">
              Brands we supply
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {BRAND_LOGOS.map((brand) => (
                <div
                  key={brand.name}
                  className="h-20 sm:h-24 rounded-2xl bg-white border border-[#E8E2D9] flex items-center justify-center p-4 transition-all duration-300 hover:border-[#C8741F] hover:shadow-2xs group"
                >
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={160}
                    height={60}
                    sizes="(max-width: 640px) 50vw, 200px"
                    className="max-h-12 w-auto object-contain filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dark Call-to-Action Banner */}
          <div className="rounded-[32px] bg-[#1F1F1F] text-white p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F7C08A]">
                / WORK DIRECTLY WITH OUR UNITS
              </p>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Ready to start a garment or fabric program?
              </h2>
              <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                Send your tech pack, reference sample, or fabric specification to our merchandising desk in Tirupur.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact#quote"
                className="inline-flex items-center gap-2.5 h-[52px] px-8 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Contact Export Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
