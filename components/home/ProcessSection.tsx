"use client";

import React from "react";
import { Container } from "../ui/Container";
import { ImageSlot } from "../ui/ImageSlot";
import { StageIcon, type StageIconName } from "../ui/StageIcon";

interface ProcessStage {
  icon: StageIconName;
  title: string;
  description: string;
  highlight: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    icon: "yarn",
    title: "Yarn",
    description: "Vetted yarn is sourced from outside mills. We test every lot ourselves before it is allowed into knitting.",
    highlight: "Sourced & tested",
  },
  {
    icon: "knitting",
    title: "Knitting",
    description: "Mayer & Cie circular knitting: single jersey, rib, interlock, striper, mini jacquard and Lycra jersey.",
    highlight: "In-house",
  },
  {
    icon: "dyeing",
    title: "Dyeing",
    description: "Soft-flow dyeing up to 1,500 kg a batch, with ORGATEX dye-house control for repeatable shades.",
    highlight: "In-house",
  },
  {
    icon: "fabric",
    title: "Finishing",
    description: "Stenter and tubular finishing set GSM, width and shrinkage before the fabric reaches the cutting table.",
    highlight: "In-house",
  },
  {
    icon: "flask",
    title: "Lab testing",
    description: "Our own fabric lab verifies shade, shrinkage and fabric performance against your specification.",
    highlight: "In-house",
  },
  {
    icon: "lab",
    title: "Inspection",
    description: "Fabric is graded under the 4-point system, then checked again at garment stage.",
    highlight: "In-house",
  },
  {
    icon: "garments",
    title: "Garmenting",
    description: "Cutting, stitching, trimming and finishing on our own garment lines, with in-line checks.",
    highlight: "In-house",
  },
  {
    icon: "truck",
    title: "Packing & despatch",
    description: "Packed to your labelling and carton instructions. Documents and shipping are handled by us.",
    highlight: "In-house",
  },
];

export function ProcessSection() {
  return (
    <section className="w-full bg-[var(--surface)] py-16 lg:py-24 border-b border-[var(--line)]">
      <Container>
        <div className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-[var(--accent)]"><span>THE CHAIN · EIGHT STAGES</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[var(--black)] leading-[1.1] tracking-[-0.02em] mt-3">
            Seven of eight stages{" "}
            <span className="text-[var(--accent)]">under our own control.</span>
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-muted)] leading-[1.6] mt-4">
            Only yarn is bought in, and we test it before it enters production. Everything after it is run by one team, so there is nobody else to hand a problem to.
          </p>
        </div>

        {/* Photo strip: four real shots from the chain */}
        <div className="mt-10 sm:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <ImageSlot
            label="Knitting"
            hint="Close shot of fabric coming off a circular knitting machine."
            desktop={{ w: 800, h: 600, src: "/images/home/chain-knitting.webp" }}
            mobile={{ w: 600, h: 450, src: "/images/home/chain-knitting.webp" }}
            alt="Knitted fabric coming off a circular knitting machine"
          />
          <ImageSlot
            label="Dyeing"
            hint="Dye house: soft-flow machines or a fabric batch being unloaded."
            desktop={{ w: 800, h: 600, src: "/images/home/chain-dyeing.webp" }}
            mobile={{ w: 600, h: 450, src: "/images/home/chain-dyeing.webp" }}
            alt="Freshly dyed fabric being unloaded from a soft-flow dyeing machine"
          />
          <ImageSlot
            label="Lab and inspection"
            hint="Technician testing a fabric sample, or a 4-point inspection table."
            desktop={{ w: 800, h: 600, src: "/images/home/chain-lab.webp" }}
            mobile={{ w: 600, h: 450, src: "/images/home/chain-lab.webp" }}
            alt="Technician inspecting knitted fabric on an inspection table"
          />
          <ImageSlot
            label="Garmenting"
            hint="Stitching line with operators at work, or finished garments on the packing table."
            desktop={{ w: 800, h: 600, src: "/images/home/chain-garmenting.webp" }}
            mobile={{ w: 600, h: 450, src: "/images/home/chain-garmenting.webp" }}
            alt="Operators at a garment stitching line"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 sm:mt-8">
          {PROCESS_STAGES.map((stage) => (
            <div
              key={stage.title}
              className="p-6 rounded-[12px] bg-[var(--white)] border border-[var(--line)] flex flex-col justify-between space-y-4 hover:border-[var(--black)] transition-colors"
            >
              <div className="flex items-center justify-between gap-2">
                <StageIcon name={stage.icon} className="w-8 h-8 text-[var(--accent)]" />
                <span className="text-[11px] font-semibold text-[var(--text-muted)] px-2.5 py-0.5 rounded-[6px] border border-[var(--line)]">
                  {stage.highlight}
                </span>
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-[var(--black)] leading-[1.2] mb-2">
                  {stage.title}
                </h3>
                <p className="text-[14px] text-[var(--text-muted)] leading-[1.6]">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-medium text-[var(--text-muted)] max-w-2xl mx-auto">
          One partner, full accountability: the same team answers for shade, fit and delivery date.
        </p>
      </Container>
    </section>
  );
}
