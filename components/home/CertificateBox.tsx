import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CertificateData } from "@/config/siteContent";

interface CertificateBoxProps {
  item: CertificateData;
}

export function CertificateBox({ item }: CertificateBoxProps) {
  return (
    <div className="group bg-[var(--white)] border border-[var(--line)] rounded-[12px] p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-colors duration-200 hover:border-[var(--black)]">
      {item.image ? (
        <div className="w-full h-14 sm:h-16 flex items-center justify-center mb-3">
          <Image
            src={item.image}
            alt={item.name || "Certification"}
            width={200}
            height={65}
            className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="w-10 h-10 rounded-[12px] bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center text-[var(--accent)] mb-3">
          <BadgeCheck className="w-5 h-5" strokeWidth={1.8} />
        </div>
      )}

      <div className="space-y-1 w-full">
        <h3 className="font-bold text-sm sm:text-base text-[var(--black)]">
          {item.name || item.placeholder}
        </h3>
        {item.issuer && (
          <p className="text-xs text-[var(--text-muted)]">{item.issuer}</p>
        )}
        {item.scope && (
          <p className="text-xs text-[var(--accent)] font-semibold">{item.scope}</p>
        )}
      </div>
    </div>
  );
}
