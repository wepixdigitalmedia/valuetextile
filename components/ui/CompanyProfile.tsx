import React from "react";
import Link from "next/link";
import { factValue } from "@/config/ownerFacts";
import { ArrowRight, Download } from "lucide-react";

const REQUEST_HREF = "/contact?q=Company%20profile#quote";

/**
 * Company profile block. Shows a direct download once the owner supplies the PDF
 * (config/ownerFacts.ts, companyProfilePdf). Until then it offers to send the profile by email.
 */
export function CompanyProfile({ className = "" }: { className?: string }) {
  const pdf = factValue("companyProfilePdf");

  return (
    <div
      className={`rounded-[12px] border border-[var(--line)] bg-[var(--white)] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5 ${className}`}
    >
      <div className="max-w-xl">
        <h3 className="text-[20px] font-extrabold tracking-[-0.02em] text-[var(--black)]">Not ready to quote yet?</h3>
        <p className="mt-1.5 text-[15px] leading-[1.6] text-[var(--text-muted)]">
          {pdf
            ? "Download our company profile to share with your team."
            : "Ask for our company profile and we will email it to you, so your team can review us first."}
        </p>
      </div>
      {pdf ? (
        <a
          href={pdf}
          download
          className="inline-flex w-fit shrink-0 items-center gap-2.5 min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors"
        >
          <Download className="w-4 h-4" strokeWidth={2.2} />
          <span>Download company profile (PDF)</span>
        </a>
      ) : (
        <Link
          href={REQUEST_HREF}
          className="group inline-flex w-fit shrink-0 items-center gap-2.5 min-h-[48px] px-6 py-2 rounded-full border-[1.5px] border-[var(--black)] text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] text-[14px] font-semibold transition-colors"
        >
          <span>Request our company profile</span>
          <ArrowRight className="w-4 h-4" strokeWidth={2.2} />
        </Link>
      )}
    </div>
  );
}
