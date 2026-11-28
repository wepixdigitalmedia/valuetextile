import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { CurrentYear } from "../ui/CurrentYear";
import { siteConfig } from "@/config/siteContent";
import { Mail, Phone } from "lucide-react";

const FOOTER_PILL_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Garments", href: "/garments" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
  { label: "How to order", href: "/how-to-order" },
  { label: "Blogs", href: "/blog" },
  { label: "Get a quote", href: "/contact" },
];

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer className="w-full bg-[var(--black)] text-[var(--white)] rounded-t-[28px] sm:rounded-t-[36px] pt-16 pb-8 overflow-hidden">
      <Container>
        {/* Top Bar: Copyright left + Pill navigation right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-12 sm:pb-16">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[var(--white)]/80">
            <p>
              © <CurrentYear />, Value Textiles.
            </p>
            <Link href="/privacy" className="hover:text-[var(--white)] hover:underline transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--white)] hover:underline transition-colors">
              Terms
            </Link>
          </div>

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
              One partner, from knit to shipped.
            </h2>

            <div className="flex items-center gap-4 text-[var(--white)]">
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

            <div className="space-y-2 min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--white)]/65">
                Email id
              </p>
              <p className="text-sm text-[var(--white)] break-words">
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
          <p className="font-extrabold uppercase text-center text-[10vw] sm:text-[10.5vw] lg:text-[112px] xl:text-[132px] leading-[0.88] tracking-[0.04em] text-[var(--white)]/10 whitespace-nowrap">
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
              Garment manufacturing
            </Link>
            <span>·</span>
            <Link
              href="/capabilities/knitting-division"
              className="hover:text-[var(--white)] hover:underline transition-colors"
            >
              Knitting
            </Link>
            <span>·</span>
            <Link
              href="/capabilities/dyeing-division"
              className="hover:text-[var(--white)] hover:underline transition-colors"
            >
              Dyeing
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
