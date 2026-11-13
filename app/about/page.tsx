import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Value Textiles",
  description: "Learn about Value Textiles, our vertically integrated manufacturing facility in Tirupur, India, and our commitment to international brands.",
};

export default function AboutPage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow>ABOUT VALUE TEXTILES</Eyebrow>
          <h1 className="font-heading text-[42px] sm:text-[52px] font-extrabold text-[#1F1F1F] leading-[1.0] tracking-[-0.04em] mb-6">
            Two decades of knitwear excellence in Tirupur.
          </h1>
          <div className="w-12 h-[2px] bg-[#F29B52] mb-8" />
          <p className="font-body text-[17px] text-[#5F5B55] leading-relaxed mb-6">
            Value Textiles is a vertically integrated knitwear manufacturer and exporter based in Tirupur, India. From yarn sourcing and circular knitting to dyeing, finishing, and garment assembly, we maintain end-to-end control under one roof.
          </p>
          <p className="font-sans text-[15px] font-mono text-[#5F5B55]/70 bg-[#FAF8F5] p-4 border border-[#E6E2DB] rounded-[2px] mb-8">
            [ABOUT SECTION: Detailed heritage, management team, facility area, and global buyer relationships to be provided.]
          </p>
          <div className="flex gap-4">
            <Button href="/contact" variant="primary">
              Get a Quote
            </Button>
            <Button href="/capabilities" variant="secondary">
              Explore Capabilities
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

