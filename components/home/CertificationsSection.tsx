"use client";

import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

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
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        {/* Header Block */}
        <div className="max-w-3xl">
          <Eyebrow>CERTIFICATIONS &amp; COMPLIANCE</Eyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2">
            Certified, and verified for every shipment.
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed mt-3">
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
