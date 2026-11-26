import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/siteContent";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Value Textiles — Garment Manufacturer & Exporter, Tiruppur",
  description:
    "Contact Value Textiles in Tiruppur, India. Reach our Registered Office in Parapalayam, Knitting Unit at SIDCO Tiruppur, or Dyeing Unit at SIPCOT Perundurai.",
};

const FACILITY_LOCATIONS = [
  {
    title: "Registered Office (Garmenting)",
    address: "No. 3/197 H, Parapalayam, Tiruppur - 641607, Tamil Nadu, India",
  },
  {
    title: "Knitting Division",
    address: "Shed No. 61, SIDCO, Tiruppur - 641606, Tamil Nadu, India",
  },
  {
    title: "Dyeing & Finishing Division",
    address:
      "K6, K7, K8, K9, SIPCOT Industrial Growth Centre, P.V. Palayam (P.O), Perundurai - 638052",
  },
];

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <main className="w-full bg-[var(--white)]">
      {/* ============================================================ */}
      {/* 01. OVERSIZED DISPLAY TITLE + OVERLAPPING FORM SECTION       */}
      {/* ============================================================ */}
      <section className="w-full pt-12 sm:pt-16 pb-16 lg:pb-24 overflow-hidden">
        <Container>
          {/* Giant Editorial Headline */}
          <h1 className="font-extrabold uppercase text-[var(--black)] text-[48px] sm:text-[80px] md:text-[108px] lg:text-[132px] leading-[1.05] tracking-[-0.02em] select-none">
            CONTACT US
          </h1>

          {/* Clean Split Row Directly Below Title (Zero Overlap / Collision) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-8 sm:mt-10 lg:mt-12">
            {/* Left Column (5 cols): Direct Contact Channels */}
            <div className="lg:col-span-5 lg:pt-2 space-y-8">
              <div className="space-y-1">
                <p className="text-base sm:text-lg font-bold text-[var(--black)]">
                  Questions or export inquiries?
                </p>
                <p className="text-base text-[var(--text-muted)] leading-relaxed">
                  Get in touch through the options below
                </p>
              </div>

              <div className="space-y-6">
                {/* Chat with us / Email */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                      Chat with us
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-base sm:text-lg font-bold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                    >
                      {contact.email}
                    </a>
                    <p className="text-[12px] text-[var(--text-muted)] mt-0.5">
                      eswarasamy@valuetextiles.net · sundaram@valuetextiles.net
                    </p>
                  </div>
                </div>

                {/* Call us / Phone & WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                      Call or WhatsApp us
                    </p>
                    <a
                      href={`tel:${contact.phoneTel}`}
                      className="text-base sm:text-lg font-bold text-[var(--black)] hover:text-[var(--accent)] transition-colors"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[var(--text-muted)]">
                      Export desk hours
                    </p>
                    <p className="text-sm sm:text-base font-bold text-[var(--black)]">
                      Mon – Sat · 9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Surface Form Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. OUR UNIT ADDRESSES STRIP                                 */}
      {/* ============================================================ */}
      <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-t border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITY_LOCATIONS.map((unit) => (
              <div
                key={unit.title}
                className="p-6 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base font-bold text-[var(--black)]">
                    {unit.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {unit.address}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
