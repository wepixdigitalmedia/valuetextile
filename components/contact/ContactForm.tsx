"use client";

import React, { useState } from "react";
import { Button } from "../ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF8F5] border border-[#E6E2DB] p-8 sm:p-10 rounded-[2px] text-center">
        <h3 className="font-heading text-[26px] font-extrabold text-[#1F1F1F] tracking-[-0.03em] mb-3">
          Thank you for reaching out.
        </h3>
        <p className="font-body text-[15px] text-[#5F5B55] leading-relaxed max-w-md mx-auto mb-6">
          Our international merchandising and technical textile team will review your inquiry and respond within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="text-[13px] font-semibold text-[#C8741F] underline underline-offset-4"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF8F5] border border-[#E6E2DB] p-8 sm:p-10 rounded-[2px]">
      <h2 className="font-heading text-[26px] font-extrabold text-[#1F1F1F] tracking-[-0.03em] mb-2">
        Request a Quote or Swatch Kit
      </h2>
      <p className="font-body text-[14px] text-[#5F5B55] mb-8">
        Fill in your program requirements and our merchandising team will reply within 24 hours.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5"
            >
              Your Name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Jane Doe"
              className="w-full bg-white border border-[#E6E2DB] px-4 py-2.5 text-[15px] text-[#1F1F1F] rounded-[2px] focus:outline-hidden focus:border-[#C8741F]"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5"
            >
              Company / Brand Name *
            </label>
            <input
              id="company"
              name="company"
              type="text"
              required
              placeholder="Acme Apparel Ltd."
              className="w-full bg-white border border-[#E6E2DB] px-4 py-2.5 text-[15px] text-[#1F1F1F] rounded-[2px] focus:outline-hidden focus:border-[#C8741F]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5"
            >
              Email Address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
              className="w-full bg-white border border-[#E6E2DB] px-4 py-2.5 text-[15px] text-[#1F1F1F] rounded-[2px] focus:outline-hidden focus:border-[#C8741F]"
            />
          </div>

          <div>
            <label
              htmlFor="inquiryType"
              className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5"
            >
              Inquiry Type
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              className="w-full bg-white border border-[#E6E2DB] px-4 py-2.5 text-[15px] text-[#1F1F1F] rounded-[2px] focus:outline-hidden focus:border-[#C8741F]"
            >
              <option value="quote">Get a Quote for Production</option>
              <option value="samples">Request Fabric Samples</option>
              <option value="general">General Inquiries / Factory Visit</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[13px] font-medium text-[#1F1F1F] mb-1.5"
          >
            Requirement Details (Fabric specs, target quantity, delivery date)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="E.g., 200 GSM 100% Combed Cotton Single Jersey, 5000 pcs..."
            className="w-full bg-white border border-[#E6E2DB] px-4 py-2.5 text-[15px] text-[#1F1F1F] rounded-[2px] focus:outline-hidden focus:border-[#C8741F]"
          />
        </div>

        <div className="pt-2">
          <Button type="submit" variant="primary" className="w-full sm:w-auto">
            Submit Inquiry
          </Button>
        </div>
      </form>
    </div>
  );
}

