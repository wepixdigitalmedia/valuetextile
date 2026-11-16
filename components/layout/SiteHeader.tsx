"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
import { NavDropdown } from "./NavDropdown";
import { ContactPill } from "./ContactPill";
import { siteConfig } from "@/config/siteContent";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>("Garments");
  const pathname = usePathname();

  // Scroll listener: smoothly transitions top corners to full square header when docked at top
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || window.pageYOffset;
          setIsScrolled(scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key & lock body scroll when mobile drawer is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const toggleAccordion = (label: string) => {
    setExpandedGroup((prev) => (prev === label ? null : label));
  };

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
              onClick={() => setMobileMenuOpen(true)}
              className="size-10 -ml-1 inline-flex items-center justify-center rounded-full bg-[#FAF6EE] border border-[#E6DFD3] text-[#1F1F1F] hover:border-[#C8741F] focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C8741F] md:hidden cursor-pointer transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" strokeWidth={2.2} />
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
      </header>

      {/* ============================================================ */}
      {/* MODERN MOBILE SIDEBAR DRAWER (Outside <header> for true fixed) */}
      {/* ============================================================ */}
      <div
        className={`fixed inset-0 z-100 md:hidden transition-visibility duration-300 ${
          mobileMenuOpen
            ? "visible pointer-events-auto"
            : "invisible pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop Scrim */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`fixed inset-0 bg-[#14110E]/55 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Slide-Out Left Sidebar Panel */}
        <aside
          data-lenis-prevent
          aria-label="Mobile Navigation Drawer"
          className={`fixed top-0 left-0 bottom-0 w-[86vw] max-w-[360px] bg-[#FFFDF9] border-r border-[#E6DFD3] shadow-[20px_0_60px_rgba(20,17,14,0.25)] flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* 01. Drawer Top Header */}
          <div className="h-[76px] px-5 flex items-center justify-between border-b border-[#EAE3D8] bg-white shrink-0">
            <div onClick={() => setMobileMenuOpen(false)}>
              <Logo />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="size-9 rounded-full bg-[#FAF6EE] border border-[#E6DFD3] text-[#1F1F1F] hover:border-[#C8741F] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-4.5 h-4.5" strokeWidth={2.2} />
            </button>
          </div>

          {/* 02. Scrollable Navigation List with Smooth Accordions */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#9A9086] mb-3 px-2">
              Navigation
            </p>

            <nav className="space-y-1.5" aria-label="Mobile Navigation">
              {siteConfig.navigation.map((item) => {
                const hasDropdown =
                  item.dropdown && item.dropdown.length > 0;
                const isExpanded = expandedGroup === item.label;
                const isActive =
                  pathname === item.href ||
                  item.dropdown?.some((sub) => pathname === sub.href);

                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-transparent transition-colors"
                  >
                    {hasDropdown ? (
                      <>
                        <div
                          className={`flex items-center justify-between rounded-xl px-3 py-2.5 transition-colors ${
                            isActive
                              ? "bg-[#FAF4EA] text-[#C8741F]"
                              : "hover:bg-[#FAF6EE] text-[#1F1F1F]"
                          }`}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-heading text-[16px] font-bold tracking-tight flex-1"
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            onClick={() => toggleAccordion(item.label)}
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isExpanded}
                            className="size-8 rounded-lg flex items-center justify-center text-[#5F5B55] hover:bg-black/[0.04] cursor-pointer"
                          >
                            <ChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                isExpanded
                                  ? "rotate-180 text-[#C8741F]"
                                  : ""
                              }`}
                            />
                          </button>
                        </div>

                        {isExpanded && (
                          <div className="mt-1 ml-4 pl-3.5 border-l-2 border-[#C8741F]/30 space-y-1 py-1">
                            {item.dropdown!.map((sub) => {
                              const subActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-[14px] font-body transition-colors ${
                                    subActive
                                      ? "bg-[#FAF4EA] text-[#C8741F] font-semibold"
                                      : "text-[#554F47] hover:text-[#1F1F1F] hover:bg-[#FAF6EE]"
                                  }`}
                                >
                                  {sub.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-2.5 font-heading text-[16px] font-bold tracking-tight transition-colors ${
                          isActive
                            ? "bg-[#FAF4EA] text-[#C8741F]"
                            : "text-[#1F1F1F] hover:bg-[#FAF6EE]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-[#9A9086]" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* 03. Drawer Bottom Footer: Direct Contact + Action Pills */}
          <div className="p-5 border-t border-[#EAE3D8] bg-[#FAF6EE]/70 space-y-4 shrink-0">
            <div className="space-y-1.5 text-xs text-[#554F47]">
              <a
                href={`tel:${siteConfig.contact.phoneTel}`}
                className="flex items-center gap-2 hover:text-[#C8741F] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#C8741F]" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 hover:text-[#C8741F] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-[#C8741F]" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <Link
                href="/contact#quote"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 h-11 rounded-full bg-[#C8741F] hover:bg-[#b56618] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-xs transition-colors"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center h-11 rounded-full bg-[#1F1F1F] hover:bg-black text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
