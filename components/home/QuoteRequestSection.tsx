"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Send, CheckCircle2, Phone, Mail, MapPin, Clock } from "lucide-react";

export function QuoteRequestSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    country: "",
    email: "",
    lookingFor: "Fabric and garments (full package)",
    productOrStyle: "",
    phone: "",
    quantity: "",
    targetDelivery: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="quote" className="w-full bg-[#FAF8F5] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column (Col 5): Contact Information & Overview */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
                / REQUEST A QUOTE
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#1F1F1F] leading-tight">
                Request a quote.
              </h2>
              <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed">
                Tell us what you are looking for. Our export team replies within [TIME] on working days (India time, IST).
              </p>
            </div>

            {/* Contact Details Block */}
            <div className="space-y-4 p-6 rounded-2xl bg-white border border-[#E8E2D9]">
              <h3 className="font-heading font-bold text-base text-[#1F1F1F]">
                Export Desk Contact
              </h3>
              <div className="space-y-3 text-sm text-[#554F47]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8741F] shrink-0 mt-0.5" />
                  <span>No. 3/197 H, Parapalayam, Tirupur 641607, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8741F] shrink-0" />
                  <span>+91 93456 30303</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C8741F] shrink-0" />
                  <span>[EXPORT EMAIL]</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#C8741F] shrink-0" />
                  <span>Hours: [DAYS AND HOURS, IST]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Col 7): Five Required Fields Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-[32px] border border-[#E8E2D9] shadow-xs">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E5F2E9] flex items-center justify-center text-[#265239]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-[#1F1F1F]">
                  Thank you.
                </h3>
                <p className="font-body text-base text-[#554F47] max-w-md">
                  We have received your enquiry and will reply within [TIME].
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 5 Required Fields Header Notice */}
                <p className="text-xs text-[#78716C] font-mono">
                  * Five required fields
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 1: Full Name (Required) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>

                  {/* Field 2: Company (Required) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                      Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Brand or company name"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Field 3: Country (Required) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                      Country *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. United Kingdom, Germany, USA"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>

                  {/* Field 4: Email (Required) */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="buyer@brand.com"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>
                </div>

                {/* Field 5: What are you looking for (Required) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#1F1F1F] mb-1.5">
                    What are you looking for *
                  </label>
                  <select
                    required
                    value={formData.lookingFor}
                    onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                  >
                    <option value="Fabric">Fabric supply</option>
                    <option value="Garments">Garment manufacturing</option>
                    <option value="Fabric and garments (full package)">
                      Fabric and garments (full package)
                    </option>
                    <option value="Sourcing support [CONFIRM]">
                      Sourcing support [CONFIRM]
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Optional Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-medium text-[#78716C] mb-1.5">
                      Estimated quantity (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      placeholder="e.g. 5,000 pieces or 500 kg"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#78716C] mb-1.5">
                      Target delivery (optional)
                    </label>
                    <input
                      type="text"
                      value={formData.targetDelivery}
                      onChange={(e) => setFormData({ ...formData, targetDelivery: e.target.value })}
                      placeholder="e.g. Q3 2026 or month"
                      className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#78716C] mb-1.5">
                    Message / Specifications (optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Fabric composition, GSM, colours, tech pack or reference links..."
                    className="w-full bg-[#FAF8F5] border border-[#E8E2D9] rounded-xl px-4 py-2.5 text-sm text-[#1F1F1F] focus:outline-hidden focus:ring-2 focus:ring-[#C8741F]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-[52px] rounded-full bg-[#1F1F1F] text-white hover:bg-black font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Enquiry</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

