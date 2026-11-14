import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { CurrentYear } from "../ui/CurrentYear";
import { siteConfig } from "@/config/siteContent";
import { Mail, Phone } from "lucide-react";

const FOOTER_PILL_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Garments", href: "/garments" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer className="w-full bg-[#0A0A0A] text-white rounded-t-[28px] sm:rounded-t-[36px] pt-12 sm:pt-16 pb-8 overflow-hidden">
      <Container>
        {/* ============================================================ */}
        {/* 01. TOP BAR: COPYRIGHT LEFT + PILL NAVIGATION RIGHT          */}
        {/* ============================================================ */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 sm:pb-16">
          <p className="font-body text-xs sm:text-sm text-white/65">
            © <CurrentYear />, Value Textiles.
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {FOOTER_PILL_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/15 text-xs sm:text-[13px] font-medium text-white/90 hover:bg-white hover:text-[#0A0A0A] transition-all"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* ============================================================ */}
        {/* 02. MIDDLE GRID: STATEMENT + SOCIALS LEFT, 2x2 INFO RIGHT    */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 items-start">
          {/* Left Column: Big Statement & Social Icons */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-[1.08] tracking-tight max-w-md">
              Simplifying garment sourcing for global brands.
            </h2>

            <div className="flex items-center gap-4 text-white/80">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center hover:text-white hover:border-white/40 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center hover:text-white hover:border-white/40 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email Value Textiles"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center hover:text-white hover:border-white/40 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${contact.phoneTel}`}
                aria-label="Call Value Textiles"
                className="w-9 h-9 rounded-lg border border-white/15 flex items-center justify-center hover:text-white hover:border-white/40 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 2x2 Contact Metadata Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-y-10 sm:gap-x-12">
            {/* Location */}
            <div className="space-y-2">
              <p className="font-body text-xs text-white/45">Location</p>
              <p className="font-body text-sm text-white/90 leading-relaxed max-w-xs">
                {contact.addressFull}, Tamil Nadu, India.
              </p>
            </div>

            {/* Open from */}
            <div className="space-y-2">
              <p className="font-body text-xs text-white/45">Open from</p>
              <p className="font-body text-sm text-white/90 leading-relaxed">
                Monday to Saturday
                <br />
                9:00 am – 6:30 pm IST
              </p>
            </div>

            {/* Contact us */}
            <div className="space-y-2">
              <p className="font-body text-xs text-white/45">Contact us</p>
              <p className="font-body text-sm text-white/90">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:text-[#F29B52] transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
            </div>

            {/* Email id */}
            <div className="space-y-2">
              <p className="font-body text-xs text-white/45">Email id</p>
              <p className="font-body text-sm text-white/90">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#F29B52] transition-colors"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 03. OVERSIZED TYPOGRAPHIC WATERMARK                          */}
        {/* ============================================================ */}
        <div
          className="py-2 sm:py-4 select-none overflow-hidden"
          aria-hidden="true"
        >
          <p className="font-heading font-black uppercase text-center text-[11vw] sm:text-[10.5vw] lg:text-[112px] xl:text-[132px] leading-[0.88] tracking-[0.04em] text-white/[0.08] whitespace-nowrap">
            VALUE TEXTILES
          </p>
        </div>

        {/* ============================================================ */}
        {/* 04. BOTTOM LINKS STRIP                                       */}
        {/* ============================================================ */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/capabilities/garment-manufacturing"
              className="hover:text-white transition-colors"
            >
              Garment Division
            </Link>
            <span>·</span>
            <Link
              href="/capabilities/knitting-division"
              className="hover:text-white transition-colors"
            >
              Knitting Division
            </Link>
            <span>·</span>
            <Link
              href="/infrastructure#dyeing"
              className="hover:text-white transition-colors"
            >
              Dyeing Division
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link href="/quality" className="hover:text-white transition-colors">
              Quality &amp; Compliance
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Export Enquiries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
