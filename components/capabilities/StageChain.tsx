import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StageIcon, type StageIconName } from "../ui/StageIcon";
import { DIVISION_CHAIN, type DivisionKey } from "./DivisionNext";

const ICON_BY_STAGE: Record<DivisionKey, StageIconName> = {
  yarn: "yarn",
  knitting: "knitting",
  dyeing: "dyeing",
  fabric: "lab",
  garment: "garments",
};

/**
 * The production chain as a row of pills, with the current stage filled and marked "You are here".
 * The same strip sits under the hero of every capability page, so a visitor always knows where they are.
 */
export function StageChain({ current, className = "" }: { current: DivisionKey; className?: string }) {
  return (
    <ol aria-label="The production chain" className={`flex flex-wrap items-center gap-2 ${className}`}>
      {DIVISION_CHAIN.map((s, i) => {
        const here = s.key === current;
        return (
          <React.Fragment key={s.key}>
            <li>
              {here ? (
                <span
                  aria-current="page"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-[14px] font-bold text-[var(--on-accent)]"
                >
                  <StageIcon name={ICON_BY_STAGE[s.key]} className="w-4 h-4" />
                  {s.title}
                  <span className="text-[10.5px] font-semibold uppercase tracking-[0.12em] opacity-90">
                    You are here
                  </span>
                </span>
              ) : (
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[var(--black)] px-4 py-2 text-[14px] font-semibold text-[var(--black)] hover:bg-[var(--black)] hover:text-[var(--white)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--black)]"
                >
                  <StageIcon name={ICON_BY_STAGE[s.key]} className="w-4 h-4" />
                  {s.title}
                </Link>
              )}
            </li>
            {i < DIVISION_CHAIN.length - 1 && (
              <li aria-hidden="true">
                <ArrowRight className="w-4 h-4 text-[var(--text-muted)]" strokeWidth={2.2} />
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ol>
  );
}
