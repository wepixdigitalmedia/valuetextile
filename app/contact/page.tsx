import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/siteContent";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Value Textiles — Garment Manufacturer & Exporter, Tirupur",
  description:
    "Contact Value Textiles in Tirupur, India. Reach our Registered Office in Parapalayam, Knitting Unit at SIDCO Tirupur, or Dyeing Unit at SIPCOT Perundurai.",
};

const FACILITY_LOCATIONS = [
  {
    title: "Registered Office (Garmenting)",
    address: "No. 3/197 H, Parapalayam, Tirupur - 641607, Tamil Nadu, India",
  },
  {
    title: "Knitting Division",
    address: "Shed No. 61, SIDCO, Tirupur - 641606, Tamil Nadu, India",
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
    <main className="w-full bg-[#FFFDF9]">
      {/* ============================================================ */}
      {/* 01. OVERSIZED DISPLAY TITLE + OVERLAPPING FORM SECTION       */}
      {/* ============================================================ */}
      <section className="w-full pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden">
        <Container>
          {/* Giant Editorial Headline */}
          <h1 className="font-heading font-black uppercase text-[#1F1F1F] text-[52px] sm:text-[92px] md:text-[124px] lg:text-[148px] leading-[0.86] tracking-[-0.04em] select-none">
            CONTACT US
          </h1>

          {/* Split Row Overlapping the Giant Title on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mt-6 lg:-mt-8 relative z-10">
            {/* Left Column (5 cols): Direct Contact Channels */}
            <div className="lg:col-span-5 lg:pt-16 space-y-8">
              <div className="space-y-1">
                <p className="font-heading text-base sm:text-lg font-bold text-[#1F1F1F]">
                  Questions or export inquiries?
                </p>
                <p className="font-body text-sm sm:text-base text-[#554F47]">
                  Get in touch through the options below
                </p>
              </div>

              <div className="space-y-6">
                {/* Chat with us / Email */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FAF4EA] border border-[#E8DEC8] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs sm:text-sm text-[#554F47]">
                      Chat with us
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-heading text-base sm:text-lg font-bold text-[#C8741F] hover:underline"
                    >
                      {contact.email}
                    </a>
                    <p className="font-mono text-[11px] text-[#78716C] mt-0.5">
                      eswarasamy@valuetextiles.net · sundaram@valuetextiles.net
                    </p>
                  </div>
                </div>

                {/* Call us / Phone & WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FAF4EA] border border-[#E8DEC8] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs sm:text-sm text-[#554F47]">
                      Call or WhatsApp us
                    </p>
                    <a
                      href={`tel:${contact.phoneTel}`}
                      className="font-heading text-base sm:text-lg font-bold text-[#C8741F] hover:underline"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#FAF4EA] border border-[#E8DEC8] flex items-center justify-center text-[#C8741F] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-body text-xs sm:text-sm text-[#554F47]">
                      Export desk hours
                    </p>
                    <p className="font-heading text-sm sm:text-base font-bold text-[#1F1F1F]">
                      Mon – Sat · 9:00 AM – 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (7 cols): Warm-Themed Overlapping Form Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 02. OUR UNIT ADDRESSES STRIP                                 */}
      {/* ============================================================ */}
      <section className="w-full bg-[#FAF8F5] py-14 sm:py-16 border-t border-[#E8E2D9]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACILITY_LOCATIONS.map((unit) => (
              <div
                key={unit.title}
                className="p-6 rounded-[24px] bg-white border border-[#E8E2D9] flex items-start gap-3.5"
              >
                <div className="w-10 h-10 rounded-full bg-[#FAF4EA] border border-[#E8DEC8] flex items-center justify-center text-[#C8741F] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h2 className="font-heading text-base font-bold text-[#1F1F1F]">
                    {unit.title}
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-[#554F47] leading-relaxed">
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
