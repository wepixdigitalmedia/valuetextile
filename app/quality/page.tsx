import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/siteContent";
import { CertificateBox } from "@/components/home/CertificateBox";

export const metadata: Metadata = {
  title: "Quality Assurance & Compliance | Value Textiles",
  description: "In-house testing laboratory, 4-point inspection system, and global international certifications.",
};

const qualityChecks = [
  {
    title: "In-House Physical & Chemical Testing",
    desc: "Dimensional stability (shrinkage/spirality), colour fastness to washing, perspiration, rubbing, and light, pilling resistance, and tensile strength.",
  },
  {
    title: "4-Point Fabric Inspection System",
    desc: "100% greige and finished fabric inspected on illuminated rolling machines following international ASTM 4-point standards.",
  },
  {
    title: "In-Line & Final AQL Garment Audits",
    desc: "Rigorous inline checks during sewing and final statistical inspection to AQL 1.5/2.5 according to buyer manual specifications.",
  },
  {
    title: "Needle Detection & Metal Screening",
    desc: "Calibrated 9-point conveyor needle detection for 100% of finished cartons before container loading.",
  },
];

export default function QualityPage() {
  const { certifications } = siteConfig;

  return (
    <section className="py-16 lg:py-24 bg-[var(--white)]">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>QUALITY ASSURANCE</Eyebrow>
          <h1 className="text-[42px] sm:text-[52px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-2 mb-6">
            Zero compromise on testing and compliance.
          </h1>
          <div className="w-12 h-[3px] bg-[var(--accent)] mb-8" />
          <p className="text-[17px] text-[var(--text-muted)] leading-relaxed">
            Our dedicated in-house lab and certified inspection personnel test fabric and garments at every milestone, ensuring total peace of mind for our international retail clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[var(--line)] mb-16">
          {qualityChecks.map((check, idx) => (
            <div
              key={check.title}
              className="p-8 border-b border-r border-[var(--line)]"
            >
              <span className="text-xs font-bold text-[var(--accent)] tracking-[0.14em] uppercase mb-2 block">
                STAGE 0{idx + 1}
              </span>
              <h2 className="text-[21px] sm:text-[22px] font-bold text-[var(--black)] mb-2.5 tracking-[-0.02em]">
                {check.title}
              </h2>
              <p className="text-base text-[var(--text-muted)] leading-relaxed">
                {check.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications preview */}
        <div className="mb-16">
          <h2 className="text-[26px] sm:text-[28px] font-bold text-[var(--black)] mb-6 tracking-[-0.02em]">
            Certifications &amp; Compliance Audits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.items.map((item, idx) => (
              <CertificateBox key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href="/contact" variant="primary">
            Request Audit Reports
          </Button>
          <Button href="/capabilities" variant="secondary">
            View Capabilities
          </Button>
        </div>
      </Container>
    </section>
  );
}

