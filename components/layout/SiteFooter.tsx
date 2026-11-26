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
    <footer className="w-full bg-[var(--black)] text-[var(--white)] rounded-t-[28px] sm:rounded-t-[36px] pt-16 pb-8 overflow-hidden">
      <Container>
        {/* Top Bar: Copyright left + Pill navigation right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 sm:pb-16">
          <p className="text-sm text-[var(--white)]/80">
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
                className="px-4 py-2 rounded-full border border-[var(--white)]/25 text-xs sm:text-[13px] font-medium text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Middle Grid: Statement + Socials Left, 2x2 Info Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 items-start">
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8 sm:space-y-12">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[var(--white)] leading-[1.1] tracking-[-0.02em] max-w-md">
              Simplifying garment sourcing for global brands.
            </h2>

            <div className="flex items-center gap-4 text-[var(--white)]">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-[8px] border border-[var(--white)]/25 flex items-center justify-center text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors"
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
                className="w-9 h-9 rounded-[8px] border border-[var(--white)]/25 flex items-center justify-center text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors"
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
                className="w-9 h-9 rounded-[8px] border border-[var(--white)]/25 flex items-center justify-center text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${contact.phoneTel}`}
                aria-label="Call Value Textiles"
                className="w-9 h-9 rounded-[8px] border border-[var(--white)]/25 flex items-center justify-center text-[var(--white)] hover:bg-[var(--white)] hover:text-[var(--black)] transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-y-10 sm:gap-x-12">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white)]/65">
                Location
              </p>
              <p className="text-sm text-[var(--white)] leading-relaxed max-w-xs">
                {contact.addressFull}, Tamil Nadu, India.
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white)]/65">
                Open from
              </p>
              <p className="text-sm text-[var(--white)] leading-relaxed">
                Monday to Saturday
                <br />
                9:00 am – 6:30 pm IST
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white)]/65">
                Contact us
              </p>
              <p className="text-sm text-[var(--white)]">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:underline transition-opacity"
                >
                  {contact.phoneDisplay}
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white)]/65">
                Email id
              </p>
              <p className="text-sm text-[var(--white)]">
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:underline transition-opacity"
                >
                  {contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Oversized Typographic Watermark */}
        <div
          className="py-2 sm:py-4 select-none overflow-hidden"
          aria-hidden="true"
        >
          <p className="font-extrabold uppercase text-center text-[11vw] sm:text-[10.5vw] lg:text-[112px] xl:text-[132px] leading-[0.88] tracking-[0.04em] text-[var(--white)]/10 whitespace-nowrap">
            VALUE TEXTILES
          </p>
        </div>

        {/* Bottom Links Strip */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--white)]/75">
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/capabilities/garment-manufacturing"
              className="hover:text-[var(--white)] hover:underline transition-colors"
            >
              Garment Division
            </Link>
            <span>·</span>
            <Link
              href="/capabilities/knitting-division"
              className="hover:text-[var(--white)] hover:underline transition-colors"
            >
              Knitting Division
            </Link>
            <span>·</span>
            <Link
              href="/capabilities/dyeing-division"
              className="hover:text-[var(--white)] hover:underline transition-colors"
            >
              Dyeing Division
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link href="/quality" className="hover:text-[var(--white)] hover:underline transition-colors">
              Quality &amp; Compliance
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-[var(--white)] hover:underline transition-colors">
              Export Enquiries
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
