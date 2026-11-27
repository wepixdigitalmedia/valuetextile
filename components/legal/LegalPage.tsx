import React from "react";
import { Container } from "../ui/Container";

export interface LegalSection {
  heading: string;
  body: React.ReactNode;
}

interface LegalPageProps {
  title: string;
  updated: string;
  intro: React.ReactNode;
  sections: LegalSection[];
}

export function LegalPage({ title, updated, intro, sections }: LegalPageProps) {
  return (
    <main className="w-full bg-[var(--white)]">
      <section className="w-full pt-12 sm:pt-16 pb-16 lg:pb-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[var(--black)]">
              {title}
            </h1>
            <p className="mt-2 text-[13px] font-semibold text-[var(--text-muted)]">Last updated {updated}</p>
            <div className="mt-6 text-[16px] leading-[1.7] text-[var(--text-muted)]">{intro}</div>

            <div className="mt-10 space-y-9">
              {sections.map((s, i) => (
                <section key={s.heading}>
                  <h2 className="text-[20px] font-bold tracking-[-0.01em] text-[var(--black)]">
                    <span className="mr-2 text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</span>
                    {s.heading}
                  </h2>
                  <div className="mt-2 space-y-3 text-[15.5px] leading-[1.7] text-[var(--text-muted)]">{s.body}</div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
