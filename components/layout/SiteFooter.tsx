import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { CurrentYear } from "../ui/CurrentYear";
import { siteConfig } from "@/config/siteContent";

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer className="w-full bg-[#FAF8F5] border-t border-[#E6E2DB] pt-16 md:pt-20 pb-12 text-[#5F5B55]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16">
          {/* Brand & Address Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-5">
            <Logo imageClassName="h-14 sm:h-16 md:h-18 lg:h-20 w-auto" />
            <address className="not-italic text-[14px] leading-relaxed text-[#5F5B55] max-w-sm pt-1">
              <p>{contact.addressFull}</p>
              <p className="pt-2">
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:text-[#1F1F1F] transition-colors"
                >
                  {contact.phoneDisplay}
                </a>{" "}
                ·{" "}
                <span className="font-mono text-[13px]">{contact.email}</span>
              </p>
            </address>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F]">
              Explore
            </p>
            <ul className="space-y-2.5 text-[14px]">
              {siteConfig.footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-[#1F1F1F] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Divisions Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F]">
              Divisions
            </p>
            <ul className="space-y-2.5 text-[14px]">
              {siteConfig.divisions.map((div) => (
                <li key={div.label}>
                  <Link
                    href={div.href}
                    className="hover:text-[#1F1F1F] transition-colors"
                  >
                    {div.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Subtle Info */}
        <div className="border-t border-[#E6E2DB] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#5F5B55]">
          <p>© <CurrentYear /> Value Textiles. All rights reserved.</p>
          <p className="text-center sm:text-right">
            From yarn to garment, under one roof. · Tirupur, India
          </p>
        </div>
      </Container>
    </footer>
  );
}
