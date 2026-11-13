import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CertificateData } from "@/config/siteContent";

interface CertificateBoxProps {
  item: CertificateData;
}

export function CertificateBox({ item }: CertificateBoxProps) {
  return (
    <div className="group bg-white border border-[#E6E2DB] rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all duration-200 hover:border-[#C8741F]/60 hover:shadow-xs">
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
        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E2D9] flex items-center justify-center text-[#C8741F] mb-3">
          <BadgeCheck className="w-5 h-5" strokeWidth={1.8} />
        </div>
      )}

      <div className="space-y-1 w-full">
        <h3 className="font-heading font-bold text-sm sm:text-base text-[#1F1F1F]">
          {item.name || item.placeholder}
        </h3>
        {item.issuer && (
          <p className="font-mono text-[11px] text-[#78716C]">{item.issuer}</p>
        )}
        {item.scope && (
          <p className="font-mono text-[11px] text-[#C8741F] font-semibold">{item.scope}</p>
        )}
      </div>
    </div>
  );
}
