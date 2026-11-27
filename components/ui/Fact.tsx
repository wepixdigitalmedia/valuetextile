import React from "react";
import { ownerFacts, type OwnerFactKey } from "@/config/ownerFacts";

interface FactProps {
  k: OwnerFactKey;
}

/**
 * Prints an owner-supplied fact. While the owner has not confirmed it, visitors see the safe
 * fallback wording. In development only, a small "TO CONFIRM" tag marks the spot.
 */
export function Fact({ k }: FactProps) {
  const fact = ownerFacts[k];
  if (fact.value !== null) return <>{fact.value}</>;
  return (
    <>
      {fact.fallback}
      {process.env.NODE_ENV === "development" && (
        <span
          title={`Owner to confirm: ${fact.label}. Example: ${fact.example}`}
          className="ml-1.5 inline-block rounded-[4px] bg-[var(--accent)]/10 px-1.5 py-px align-middle text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--accent)]"
        >
          To confirm
        </span>
      )}
    </>
  );
}
