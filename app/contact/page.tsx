import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Tiruppur } from "@/components/ui/Tiruppur";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Value Textiles — Garment Manufacturer & Exporter, Tirupur",
  description:
    "Contact Value Textiles in Tirupur, India. Reach our Registered Office in Parapalayam, Knitting Unit at SIDCO Tirupur, or Dyeing Unit at SIPCOT Perundurai.",
};

const DIRECT_EMAILS = [
  {
    label: "Managing Director",
    email: "eswarasamy@valuetextiles.net",
  },
  {
    label: "Director & Operations",
    email: "sundaram@valuetextiles.net",
  },
  {
    label: "Key Accounts & Export Desk",
    email: "key@valuetextiles.net",
  },
];

const FACILITY_LOCATIONS = [
  {
    title: "Registered Address:",
    subtitle: "Garmenting & Head Office",
    addressLines: ["No. 3/197 H, Parapalayam, Tirupur - 641607", "Tamil Nadu, India"],
    badgeBg: "bg-[#C8741F]",
  },
  {
    title: "Factory Address: (Knitting)",
    subtitle: "Circular Knitting Division",
    addressLines: ["Shed No. 61, SIDCO,", "Tirupur - 641606, Tamil Nadu, India"],
    badgeBg: "bg-[#1D5BD6]",
  },
  {
    title: "Factory Address: (Dyeing)",
    subtitle: "Soft-Flow Dyeing & Finishing Division",
    addressLines: [
      "K6, K7, K8, K9, SIPCOT Industrial Growth Centre",
      "P.V. Palayam (P.O), Perundurai - 638052",
    ],
    badgeBg: "bg-[#1F1F1F]",
  },
];

export default function ContactPage() {
  return (
    <main className="w-full bg-[#FAF8F5]">
      {/* ============================================================ */}
      {/* TOP HERO & DARK EMAIL STRIP (Inspired by valuetextiles.net)  */}
      {/* ============================================================ */}
      <section className="w-full bg-white pt-10 sm:pt-14 pb-12 border-b border-[#E8E2D9]">
        <Container>
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
              / CONTACT US · <Tiruppur />, INDIA
            </p>
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1F1F1F] leading-[1.06] tracking-tight mt-2">
              Talk directly to our production team.
            </h1>
            <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-4">
              Whether you are planning a full-package garment collection, cut-and-make production, or requesting fabric and garment samples, our team in Tirupur replies within 24 working hours.
            </p>
          </div>

          {/* Dark Charcoal Direct Email Bar */}
          <div className="mt-8 sm:mt-10 rounded-[24px] bg-[#1F1F1F] text-white p-5 sm:p-6 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {DIRECT_EMAILS.map((item, idx) => (
                <a
                  key={item.email}
                  href={`mailto:${item.email}`}
                  className={`group flex items-center justify-center sm:justify-start gap-3.5 px-4 py-3.5 rounded-xl transition-all ${
                    idx === 1
                      ? "border border-dashed border-white/30 bg-white/[0.04] hover:border-[#C8741F]"
                      : "bg-white/[0.03] border border-white/10 hover:border-[#C8741F]"
                  }`}
                >
                  <span className="w-9 h-9 rounded-full bg-white/10 group-hover:bg-[#C8741F] flex items-center justify-center shrink-0 transition-colors">
                    <Mail className="w-4 h-4 text-white" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-white/60">
                      {item.label}
                    </p>
                    <p className="font-body text-sm sm:text-[15px] font-semibold text-white truncate">
                      {item.email}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* MAIN SPLIT SECTION: CONTACT INFORMATION & MESSAGE FORM       */}
      {/* ============================================================ */}
      <section className="py-14 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (Col 5): Contact Information & Unit Addresses */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#1F1F1F] tracking-tight">
                  Contact Information
                </h2>
                <p className="font-body text-sm sm:text-base text-[#554F47] mt-2">
                  Our head office, knitting unit, and dyeing complex across the Tirupur and Perundurai textile corridor.
                </p>
              </div>

              {/* 3 Address Blocks matching valuetextiles.net/contact.php */}
              <div className="space-y-6">
                {FACILITY_LOCATIONS.map((loc) => (
                  <div
                    key={loc.title}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-[#E8E2D9] shadow-2xs"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${loc.badgeBg} text-white flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#1F1F1F]">
                        {loc.title}
                      </h3>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#C8741F] font-semibold">
                        {loc.subtitle}
                      </p>
                      {loc.addressLines.map((line, i) => (
                        <p
                          key={i}
                          className="font-body text-sm text-[#554F47] leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Phone, WhatsApp & Hours Card */}
              <div className="p-6 rounded-2xl bg-white border border-[#E8E2D9] space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-[#78716C]">
                      Telephone &amp; Export Desk
                    </p>
                    <a
                      href="tel:+919345630303"
                      className="font-heading text-base font-bold text-[#1F1F1F] hover:text-[#C8741F] transition-colors"
                    >
                      +91 93456 30303
                    </a>
                  </div>
                </div>

                <div className="w-full h-px bg-[#E8E2D9]" />

                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#265239] shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-[#78716C]">
                        WhatsApp Business
                      </p>
                      <a
                        href="https://wa.me/919345630303"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm font-semibold text-[#1F1F1F] hover:text-[#C8741F] transition-colors"
                      >
                        Chat on WhatsApp →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#78716C] bg-[#FAF8F5] px-3 py-1.5 rounded-full border border-[#E8E2D9]">
                    <Clock className="w-3.5 h-3.5 text-[#C8741F]" />
                    <span>Mon – Sat · 9:00 AM – 6:30 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Col 7): Send us a Message Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
