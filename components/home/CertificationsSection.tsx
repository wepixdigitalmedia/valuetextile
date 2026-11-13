"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";

interface CertificateItem {
  id: string;
  name: string;
  image: string;
}

const CERTS: CertificateItem[] = [
  {
    id: "oeko-tex",
    name: "OEKO-TEX® Standard 100",
    image: "/images/certifications/cert-1-clean.png",
  },
  {
    id: "bci",
    name: "Better Cotton Initiative (BCI)",
    image: "/images/certifications/cert-2-clean.png",
  },
  {
    id: "grs",
    name: "Global Recycled Standard (GRS)",
    image: "/images/certifications/cert-3-clean.png",
  },
  {
    id: "gots",
    name: "GOTS (Global Organic Textile Standard)",
    image: "/images/certifications/cert-4-clean.png",
  },
];

export function CertificationsSection() {
  return (
    <section className="w-full bg-[#FAF8F5] py-14 sm:py-18 lg:py-20 border-b border-[#E8E2D9]">
      <Container>
        {/* Header Block */}
        <div className="max-w-3xl">
          <p className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#C8741F]">
            / CERTIFICATIONS & COMPLIANCE
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#1F1F1F] leading-tight mt-2">
            Certified, and verified for every shipment.
          </h2>
          <p className="font-body text-base sm:text-lg text-[#554F47] leading-relaxed mt-3">
            Our units carry independent international certifications covering product safety, recycled content, and organic traceability.
          </p>
        </div>

        {/* Clean Logo Strip (No Cards, No Text Info, Only Logos) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center mt-10 sm:mt-14 pt-4">
          {CERTS.map((c) => (
            <div
              key={c.id}
              className="w-full flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={c.image}
                alt={c.name}
                width={240}
                height={80}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 240px"
                className="max-h-14 sm:max-h-16 lg:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
