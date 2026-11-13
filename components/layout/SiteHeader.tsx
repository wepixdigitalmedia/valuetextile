"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { NavDropdown } from "./NavDropdown";
import { ContactPill } from "./ContactPill";
import { siteConfig } from "@/config/siteContent";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll listener: smoothly transitions top corners to full square header when docked at top
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          // Becomes full square header once scrolled past utility bar
          setIsScrolled(scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full h-[76px] sm:h-[84px] md:h-[92px] lg:h-[98px] transition-[border-radius,box-shadow,background-color,border-color] duration-300 ease-out ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E6E2DB] shadow-xs rounded-t-none border-t-transparent"
            : "bg-white rounded-t-[26px] sm:rounded-t-[30px] border-t border-black/[0.04]"
        }`}
      >
        <Container className="h-full flex items-center justify-between">
          {/* Left: Hamburger Button (Mobile) + Brand Logo */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 -ml-1 text-[#1F1F1F] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C8741F] rounded-md md:hidden cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" strokeWidth={2.2} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.2} />
              )}
            </button>
            <Logo />
          </div>

          {/* Center: Desktop Navigation with Neat Spacing */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-8"
            aria-label="Main Navigation"
          >
            {siteConfig.navigation.map((item) => (
              <NavDropdown
                key={item.label}
                label={item.label}
                href={item.href}
                items={item.dropdown}
              />
            ))}
          </nav>

          {/* Right: Contact Pill (Desktop & Mobile) */}
          <div className="flex items-center shrink-0">
            <ContactPill />
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 top-[76px] sm:top-[84px] z-50 bg-black/40 backdrop-blur-xs md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              data-lenis-prevent
              className="bg-white border-b border-[#E6E2DB] px-6 py-6 shadow-2xl flex flex-col gap-5 max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
                {siteConfig.navigation.map((item) => (
                  <div key={item.label} className="border-b border-[#E6E2DB]/60 pb-2.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[17px] font-heading font-bold text-[#1F1F1F] hover:text-[#C8741F] flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                    </Link>
                    {item.dropdown && (
                      <div className="pl-3 pt-2 space-y-1.5">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-[13.5px] font-body text-[#5F5B55] hover:text-[#1F1F1F]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="pt-2 flex flex-col gap-2.5">
                <Link
                  href="/contact#quote"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#C8741F] text-white font-heading font-bold text-[15px] text-center shadow-xs"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-[#1F1F1F] text-white font-heading font-bold text-[15px] text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
