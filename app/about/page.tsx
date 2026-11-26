import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { AboutHeroCarousel } from "@/components/about/AboutHeroCarousel";
import { DirectManufacturerSection } from "@/components/home/DirectManufacturerSection";
import { BrandLogoGrid } from "@/components/home/TrustStatsAndLogosSection";
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
    "Value Textiles is a vertically integrated knitwear garment and fabric manufacturer in Tiruppur, India, with in-house circular knitting, soft-flow dyeing, lab testing, and garment production.",
};

const DIVISIONS = [
  {
    icon: Scissors,
    title: "Garment Manufacturing Division",
    location: "No. 3/197 H, Parapalayam, Tiruppur - 641607",
    description:
      "Pattern grading, automated spreading and cutting, dedicated stitching lines, thread trimming, steam pressing, needle detection, and export cartooning.",
    tag: "Cut, Stitch & Pack",
  },
  {
    icon: Layers,
    title: "Circular Knitting Division",
    location: "Shed No. 61, SIDCO, Tiruppur - 641606",
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
    location: "Integrated across Tiruppur & Perundurai Units",
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

export default function AboutPage() {
  return (
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. TOP BANNER & "WE ARE" SECTION                            */}
      {/* ============================================================ */}
      <section className="relative w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (Col 6): Auto-Playing Editorial Carousel & Floating Badge */}
            <div className="lg:col-span-6">
              <AboutHeroCarousel />
            </div>

            {/* Right Column (Col 6): "We Are" Story & Non-Numeric Highlights */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <Eyebrow>ABOUT VALUE TEXTILES</Eyebrow>
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
                  We Are
                </h1>
                <div className="w-12 h-[3px] bg-[var(--accent)] mt-3" />
              </div>

              <div className="space-y-4 text-base sm:text-[17px] text-[var(--text-muted)] leading-relaxed">
                <p>
                  <strong className="font-bold text-[var(--black)]">Value Textiles</strong> is a vertically integrated textile and garment manufacturing company in{" "}
                  <Tiruppur />, India. We are engaged in the manufacture of a wide range of knitted garments and fabrics from state-of-the-art production facilities.
                </p>
                <p>
                  We have evolved into producing finished garments and fabrics across{" "}
                  <strong className="font-semibold text-[var(--black)]">
                    Cotton, Polyester, Tencel, Modal, Viscose, Lycra
                  </strong>{" "}
                  and custom engineered blends for international apparel brands.
                </p>
                <p>
                  Our yarn-dyed fabrics, printing techniques, finishing, processing, circular knitting, and garment stitching are a mark of excellence—making every garment and fabric lot ready for global export.
                </p>
              </div>

              {/* Two Clean Non-Numeric Capability Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[var(--line)]">
                <div className="flex items-start gap-3.5 p-4 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                  <div className="w-11 h-11 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[var(--black)]">
                      Vertically Integrated
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      In-house knitting, dyeing, lab testing &amp; garment lines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-[12px] bg-[var(--white)] border border-[var(--line)]">
                  <div className="w-11 h-11 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[var(--black)]">
                      Global Export Partner
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      Supplying international brands &amp; retail chains worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact#quote" variant="primary">
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/products" variant="secondary">
                  <span>Explore Our Range</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. OUR PRODUCTION UNITS & INFRASTRUCTURE                    */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>OUR INFRASTRUCTURE</Eyebrow>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              State-of-the-art units across Tiruppur &amp; Perundurai.
            </h2>
            <p className="text-base text-[var(--text-muted)] leading-relaxed mt-3">
              Every core stage is controlled by our own team across our dedicated garmenting, circular knitting, and soft-flow dyeing facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
            {DIVISIONS.map((div) => {
              const Icon = div.icon;
              return (
                <div
                  key={div.title}
                  className="p-5 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex flex-col justify-between space-y-4 hover:border-[var(--black)] transition-colors"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-semibold text-[var(--black)] px-2.5 py-1 rounded-full border border-[var(--line)] truncate">
                        {div.tag}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold text-[var(--black)] leading-snug">
                        {div.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {div.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[var(--line)] flex items-start gap-1.5 text-[12px] text-[var(--text-muted)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="leading-snug">{div.location}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* FULL-WIDTH FACTORY BANNER                                    */}
      {/* ============================================================ */}
      <section className="relative w-full h-[320px] sm:h-[440px] lg:h-[540px] overflow-hidden border-b border-[var(--line)] bg-[var(--black)]">
        <Image
          src="https://ik.imagekit.io/wpxassets/value%20textiles/Textile%20Knitting%20Factory%20in%20Action.webp"
          alt="Value Textiles knitting and garment manufacturing floor in action in Tiruppur"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[var(--black)]/55"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 py-8 sm:py-12">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2 text-[var(--white)]">
                <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--white)]">
                  INSIDE OUR TIRUPPUR &amp; PERUNDURAI UNITS
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em]">
                  Knitted, dyed, tested, and stitched across our integrated units.
                </h2>
              </div>

              <Link
                href="/infrastructure"
                className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-full bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--on-accent)] text-sm font-semibold transition-colors shrink-0 w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--white)]"
              >
                <span>Explore Infrastructure</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 03. OUR CERTIFICATIONS                                       */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--white)] py-16 lg:py-24 border-b border-[var(--line)]">
        <Container>
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <Eyebrow>COMPLIANCE &amp; STANDARDS</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
              Our Certifications
            </h2>
            <div className="w-12 h-[3px] bg-[var(--accent)] mx-auto mt-3 mb-4" />
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
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
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24">
        <Container className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-[var(--black)] text-center mb-8">
              Brands we supply
            </h3>
            <BrandLogoGrid />
          </div>

          {/* Bottom Call-to-Action Card */}
          <div className="rounded-[12px] bg-[var(--white)] border border-[var(--line)] text-[var(--black)] p-8 sm:p-12 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <Eyebrow>WORK DIRECTLY WITH OUR UNITS</Eyebrow>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em]">
                Ready to start a garment or fabric program?
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                Send your tech pack, reference sample, or fabric specification to our merchandising desk in Tiruppur.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Button href="/contact#quote" variant="primary">
                <span>Contact Export Desk</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
