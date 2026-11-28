import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { DivisionNext } from "@/components/capabilities/DivisionNext";
import { FullSpec } from "@/components/capabilities/FullSpec";
import { StageHero } from "@/components/capabilities/StageHero";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { StageIcon, type StageIconName } from "@/components/ui/StageIcon";
import { CAPABILITY_IMAGES } from "@/config/capabilityImages";
import { isConfirmed } from "@/config/ownerFacts";

// Zero Liquid Discharge is only claimed once the owner confirms it (ownerFacts.zldStatus).
const ZLD = isConfirmed("zldStatus");

export const metadata: Metadata = {
  title: "Dyeing",
  description: ZLD
    ? "Soft-flow dyeing from 25 kg to 1,500 kg batches, a colour lab, finishing and a Zero Liquid Discharge effluent plant in Perundurai."
    : "Soft-flow dyeing from 25 kg to 1,500 kg batches, a colour lab, finishing and an effluent treatment plant in Perundurai.",
};

/** The five steps fabric goes through in the dye house. */
const STEPS: { title: string; text: string; icon: StageIconName }[] = [
  { icon: "match", title: "Match", text: "A spectrophotometer and a colour matching cabinet check the shade against your reference." },
  { icon: "dispense", title: "Dispense", text: "THIES and Orgatex dispensing dose the dyes and chemicals for the bulk machines." },
  { icon: "dyeing", title: "Dye", text: "Soft-flow machines with SETEX control, from 25 kg to 1,500 kg." },
  { icon: "fabric", title: "Finish", text: "Stenter, relax dryers, compactors, raising and peach finishing." },
  { icon: "water", title: "Treat", text: "Effluent from the dye house is treated in our own plant." },
];

/** Batch sizes, largest first. `kg` drives the bar length. */
const MACHINES = [
  { make: "Brazzoli", label: "1,500 kg", kg: 1500, hthp: true },
  { make: "Dilmenler", label: "900 kg", kg: 900, hthp: false },
  { make: "Dilmenler", label: "600 kg", kg: 600, hthp: false },
  { make: "Dilmenler", label: "450 kg", kg: 450, hthp: true },
  { make: "Dilmenler", label: "300 kg", kg: 300, hthp: false },
  { make: "Pranav Aqua", label: "50 kg", kg: 50, hthp: true },
  { make: "Nuvas", label: "25 kg × 2", kg: 25, hthp: true },
];

const COLOUR_LAB = [
  "Konica Minolta spectrophotometer",
  "Verivide colour matching cabinet",
  "SPI Autolab",
  "Starlet lab dyeing machine",
  "SPI lab dyeing machines",
  "SPI dye and chemical dispenser",
];

const DISPENSING = ["THIES (Germany)", "Orgatex"];

const QUALITY_LAB = [
  "Launderometer",
  "Crockmeter",
  "Perspirometer",
  "Stretch and recovery tester",
  "Bursting strength tester",
  "Washing machine",
  "Tumble dryer",
];

const ETP_STAGES = [
  "1,000 m³ a day of biological pre-treatment, with a 626 m³ a day reverse osmosis plant from SIMEM, Italy.",
  "Colour removal by ozone.",
  "125 m³ a day multi-effect evaporation, with a 50 m³ a day forced circulator.",
  "Agitated thin film drier to dry the final sludge.",
];

const FINISHING = [
  "Bianco tubular double padder",
  "Texsingh 8-chamber stenter dryer",
  "Dilmenler 4-chamber relax drier",
  "Strahm 3-chamber relax drier",
  "Corino (Italy) slit opener",
  "TubeTex tubular compacting",
  "TubeTex open-width compacting, with Mahlo weft straightener",
  "Mario Crosta (Italy) raising",
  "Mario Crosta (Italy) peach finishing",
];

const CERTIFICATES = [
  "OEKO-TEX Standard 100 (Class 1), test no. 09.HIN.70527",
  "GOTS, annex to certificate no. CU828190GOTS-01.2013",
  "OCS-CB-CUI-828190",
  "ZDHC Clear Stream",
];

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="inline-flex items-center rounded-[6px] border border-[var(--line)] bg-[var(--white)] px-3 py-1.5 text-[14px] text-[var(--black)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function DyeingDivisionPage() {
  const image = CAPABILITY_IMAGES.dyeing;

  return (
    <main className="w-full bg-[var(--white)]">
      <StageHero
        eyebrow="Dyeing"
        title="Our own dye house, from a 25 kg sample to a 1,500 kg batch."
        intro="Soft-flow dyeing machines with SETEX controllers and ORGATEX dye-house management dye our knitted fabric and yarn at our SIPCOT unit in Perundurai."
        big={{ value: "1,500", caption: "kg, our largest dyeing batch" }}
        current="dyeing"
      />

      {/* THE FIVE STEPS: a rail of numbered nodes */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
            What happens in the dye house
          </h2>
          <ol className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-x-6">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className={`relative pl-12 md:pl-0 md:pt-12 ${
                  i < STEPS.length - 1
                    ? "md:before:absolute md:before:left-9 md:before:right-[-1.5rem] md:before:top-[15px] md:before:h-px md:before:bg-[var(--black)]/30"
                    : ""
                }`}
              >
                <span
                  className={`absolute left-0 top-0 flex h-[32px] w-[32px] items-center justify-center rounded-full text-[13px] font-bold ${
                    i === 2
                      ? "bg-[var(--accent)] text-[var(--on-accent)]"
                      : "border-[1.5px] border-[var(--black)] text-[var(--black)]"
                  }`}
                >
                  <StageIcon name={s.icon} className="w-[18px] h-[18px]" />
                </span>
                <h3 className="text-[19px] font-extrabold tracking-[-0.02em] text-[var(--black)]">{s.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-[1.6] text-[var(--text-muted)]">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* BATCH SIZES: the machine table as bars, so the range reads at a glance */}
      <section className="w-full bg-[var(--surface)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                From sample to bulk
              </h2>
              <p className="mt-3 text-[15px] leading-[1.6] text-[var(--text-muted)]">
                Eight dyeing machines from four makers, so a small colour trial and a full production batch both run in
                our own dye house. HTHP machines are marked.
              </p>
            </div>

            <ul className="lg:col-span-8 space-y-3">
              {MACHINES.map((m, i) => (
                <li key={`${m.make}-${m.label}-${i}`} className="grid grid-cols-12 items-center gap-3">
                  <span className="col-span-4 sm:col-span-3 text-[14px] font-semibold text-[var(--black)]">{m.make}</span>
                  <span className="col-span-8 sm:col-span-7 flex items-center gap-3">
                    <span
                      className={`h-3 rounded-full ${m.hthp ? "bg-[var(--black)]" : "bg-[var(--black)]/35"}`}
                      style={{ width: `${Math.max((m.kg / 1500) * 100, 3)}%` }}
                      aria-hidden="true"
                    />
                    {m.hthp && (
                      <span className="shrink-0 rounded-[4px] bg-[var(--accent)] px-1.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[var(--on-accent)]">
                        HTHP
                      </span>
                    )}
                  </span>
                  <span className="col-span-12 sm:col-span-2 sm:text-right text-[15px] font-extrabold text-[var(--black)] -mt-1 sm:mt-0">
                    {m.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* COLOUR YOU CAN MATCH: photo plus the lab equipment as chips */}
      <section className="w-full bg-[var(--white)] py-14 lg:py-20 border-b border-[var(--line)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <ImageSlot
                label={image.label}
                hint={image.hint}
                desktop={image.desktop}
                mobile={image.mobile}
                alt={image.alt}
              />
            </div>

            <div className="lg:col-span-7 space-y-8">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[var(--black)]">
                Colour you can match, and prove
              </h2>
              {[
                { title: "Colour lab", items: COLOUR_LAB },
                { title: "Dispensing", items: DISPENSING },
                { title: "Quality lab", items: QUALITY_LAB },
              ].map((g) => (
                <div key={g.title}>
                  <h3 className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {g.title}
                  </h3>
                  <Chips items={g.items} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* DARK BAND: the effluent plant */}
      <section className="w-full bg-[var(--black)] py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-[28px] sm:text-[38px] font-extrabold leading-[1.1] tracking-[-0.025em] text-[var(--white)]">
                Dye house water is treated on site.
              </h2>
              <p className="mt-4 text-[15.5px] leading-[1.65] text-[var(--white)]/75 max-w-md">
                {ZLD
                  ? "Our effluent plant recycles both water and salt, meeting Zero Liquid Discharge norms."
                  : "Effluent from the dye house is treated in our own plant, in four stages."}
              </p>
            </div>
            <ol className="lg:col-span-7 space-y-5">
              {ETP_STAGES.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="text-[13px] font-bold text-[var(--accent)] pt-1">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[16px] leading-[1.55] text-[var(--white)]/85">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* FULL SPECIFICATION */}
      <FullSpec title="Full equipment list" hint="finishing line and certificates">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">Finishing line</h3>
            <ul className="mt-3 divide-y divide-[var(--line)]">
              {FINISHING.map((f) => (
                <li key={f} className="py-2 text-[14.5px] text-[var(--black)]">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.12em] text-[var(--text-muted)]">
              Certificates for the dye house
            </h3>
            <ul className="mt-3 divide-y divide-[var(--line)]">
              {CERTIFICATES.map((c) => (
                <li key={c} className="py-2 text-[14.5px] text-[var(--black)]">
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[13.5px] text-[var(--text-muted)]">
              Every certificate, with its issuing body, is on the{" "}
              <Link href="/quality" className="font-semibold text-[var(--black)] underline underline-offset-4 hover:text-[var(--accent)]">
                Quality page
              </Link>
              .
            </p>
          </div>
        </div>
      </FullSpec>

      <DivisionNext
        current="dyeing"
        quoteHeading="Need certified dyeing for your garments?"
        quoteText="Share your Pantone codes, fabric GSM and tech pack. We knit, dye, finish, test and stitch in our own units."
      />
    </main>
  );
}
