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
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <Eyebrow>QUALITY ASSURANCE</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            Zero compromise on testing and compliance.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed">
            Our dedicated in-house lab and certified inspection personnel test fabric and garments at every milestone, ensuring total peace of mind for our international retail clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#E6E2DB] mb-16">
          {qualityChecks.map((check, idx) => (
            <div
              key={check.title}
              className="p-8 border-b border-r border-[#E6E2DB]"
            >
              <span className="font-heading text-[11px] font-bold text-[#C8741F] tracking-[0.18em] uppercase mb-2 block">
                STAGE 0{idx + 1}
              </span>
              <h2 className="font-heading text-[21px] sm:text-[22px] font-bold text-[#1F1F1F] mb-2.5 tracking-tight">
                {check.title}
              </h2>
              <p className="font-body text-[15px] text-[#5F5B55] leading-relaxed">
                {check.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications preview */}
        <div className="mb-16">
          <h2 className="font-heading text-[26px] sm:text-[28px] font-bold text-[#1F1F1F] mb-6 tracking-tight">
            Certifications & Compliance Audits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.items.map((item, idx) => (
              <CertificateBox key={idx} item={item} />
            ))}
          </div>
        </div>

        <div className="flex gap-4">
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

