import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { siteConfig } from "@/config/siteContent";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Quotation | Value Textiles",
  description: "Get in touch with Value Textiles in Tirupur, India. Request custom fabric quotes, garment sample kits, or production schedules.",
};

export default function ContactPage() {
  const { contact } = siteConfig;

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5">
            <Eyebrow>GET IN TOUCH</Eyebrow>
            <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
              Let&apos;s build your next collection.
            </h1>
            <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
            <p className="font-body text-[16px] text-[#5F5B55] leading-relaxed mb-8">
              Whether you need fabric swatches, technical yarn specifications, or full CMT/FOB production quotes, our international merchandising team is ready to assist.
            </p>

            <div className="space-y-6 border-t border-[#E6E2DB] pt-6">
              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F] mb-1">
                  Factory & Registered Office
                </p>
                <p className="text-[15px] text-[#5F5B55]">{contact.addressFull}, India</p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F] mb-1">
                  Telephone
                </p>
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="text-[15px] text-[#5F5B55] hover:text-[#1F1F1F] transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F] mb-1">
                  Direct Email
                </p>
                <p className="font-mono text-[14px] text-[#5F5B55]">{contact.email}</p>
              </div>

              <div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#1F1F1F] mb-1">
                  WhatsApp Business
                </p>
                <p className="font-mono text-[14px] text-[#5F5B55]">{contact.whatsapp}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry & Quote Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
