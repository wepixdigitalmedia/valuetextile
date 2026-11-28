/**
 * Facts only the owner can supply.
 *
 * Every value starts as `null`. While a value is `null`:
 *  - nothing false or invented is published on the live site,
 *  - pages use the safe fallback wording (or hide that item),
 *  - in development, a small "TO CONFIRM" marker shows where the fact will go.
 *
 * When the owner confirms a fact, replace `null` with the text, e.g. moq: "500 pcs per style per colour".
 * Nothing else needs to change. The checklist to take to the owner is docs/owner-requirements.md.
 */

export interface OwnerFact {
  /** What this fact is, in plain words. */
  label: string;
  /** The confirmed text to publish. `null` until the owner confirms. */
  value: string | null;
  /** Wording shown to visitors while the value is still null. */
  fallback: string;
  /** Example of a good answer, to guide the owner. */
  example: string;
}

export const ownerFacts = {
  moq: {
    label: "Minimum order quantity",
    value: null,
    fallback: "Set per style and colour. Tell us your quantity and we confirm.",
    example: "500 pcs per style per colour",
  },
  sampleLeadTime: {
    label: "Sample lead time",
    value: null,
    fallback: "Shared with your quote.",
    example: "7 to 10 working days after tech pack approval",
  },
  bulkLeadTime: {
    label: "Bulk lead time",
    value: null,
    fallback: "Confirmed with your quote.",
    example: "45 to 60 days after sample approval",
  },
  paymentTerms: {
    label: "Payment terms",
    value: null,
    fallback: "Agreed per order.",
    example: "30% advance, 70% against shipping documents",
  },
  ports: {
    label: "Ports of despatch",
    value: null,
    fallback: "Shipped from South India ports.",
    example: "Tuticorin, Chennai, Cochin",
  },
  labTests: {
    label: "In-house lab test list",
    value: null,
    fallback: "Tested in our own fabric lab before cutting.",
    example: "Shrinkage, colour fastness (wash, rub, perspiration), GSM, pilling, bursting strength",
  },
  aqlLevel: {
    label: "AQL level for final inspection",
    value: null,
    fallback: "Final garment inspection before packing.",
    example: "AQL 2.5 (or as agreed with the buyer)",
  },
  traceability: {
    label: "Traceability by lot",
    value: null,
    fallback: "Lot records are kept from fabric to carton.",
    example: "Every carton can be traced to its fabric lot and dye batch",
  },
  sizeRanges: {
    label: "Size ranges per garment category",
    value: null,
    fallback: "Cut to your size chart and grading.",
    example: "Tees: XS to 3XL. Kids: 0M to 14Y. Knitwear: XS to XXL",
  },
  garmentUnitDetails: {
    label: "Garment unit: sewing lines, machines and operators",
    value: null,
    fallback: "",
    example: "6 sewing lines, 180 machines, 220 operators",
  },
  needleDetection: {
    label: "Needle and metal detection on garments",
    value: null,
    fallback: "",
    example: "100% of garments pass through a needle detector before packing",
  },
  certificateValidity: {
    label: "Certificate valid-until dates, scope and PDF copies",
    value: null,
    fallback: "Valid-until dates and copies are available on request.",
    example: "OEKO-TEX valid to 31 Mar 2027, GOTS valid to 30 Jun 2027, PDF copies in /downloads",
  },
  companyStory: {
    label: "Company story: year founded, how it started, who founded it",
    value: null,
    fallback: "",
    example: "Founded in 2004 by A. Kumar as a small knitting unit in Tiruppur, now three units",
  },
  leadership: {
    label: "Leadership: names and roles of owner, directors, key managers",
    value: null,
    fallback: "",
    example: "A. Kumar, Managing Director. R. Devi, Head of Merchandising",
  },
  // Any confirmed value here switches on every "Zero Liquid Discharge" / "ZLD" claim on the site.
  yarnTestStandards: {
    label: "Yarn testing: own lab or third party, and which methods",
    value: null,
    fallback: "",
    example: "Tested in our own lab to ISO methods",
  },
  yarnTestReports: {
    label: "Yarn test reports shared with buyers on request",
    value: null,
    fallback: "",
    example: "Yes, a test report for your yarn is shared with your quote",
  },
  zldStatus: {
    label: "Zero Liquid Discharge status",
    value: null,
    fallback: "Effluent is treated in our own plant.",
    example: "ZLD plant at the Perundurai dye house, commissioned in 20XX",
  },
  woven: {
    label: "Woven garments",
    value: null,
    fallback: "Knitwear is our focus.",
    example: "Yes, woven shirts on request  /  No, knitwear only",
  },
  legalName: {
    label: "Legal company name",
    value: null,
    fallback: "Value Textiles",
    example: "Value Textiles Private Limited",
  },
  registration: {
    label: "Registration details (CIN or GST, IEC)",
    value: null,
    fallback: "",
    example: "CIN U17XXXTZ20XXPTCXXXXXX, GSTIN 33XXXXXXXXXXXXX, IEC XXXXXXXXXX",
  },
  companyProfilePdf: {
    label: "Company profile PDF (path in /public)",
    value: null,
    fallback: "",
    example: "/downloads/value-textiles-company-profile.pdf",
  },
  buyerLogosApproved: {
    label: "Buyer logos approved for public use",
    value: null,
    fallback: "",
    example: "Desigual, OVS, Pepco (list only the ones with written permission)",
  },
} satisfies Record<string, OwnerFact>;

export type OwnerFactKey = keyof typeof ownerFacts;

/** The confirmed value, or `null` while it is still pending. */
export function factValue(key: OwnerFactKey): string | null {
  return ownerFacts[key].value;
}

/** The confirmed value, or the safe fallback wording for visitors. */
export function factText(key: OwnerFactKey): string {
  return ownerFacts[key].value ?? ownerFacts[key].fallback;
}

export function isConfirmed(key: OwnerFactKey): boolean {
  return ownerFacts[key].value !== null;
}

/** Every fact still waiting for the owner, for the checklist and for dev checks. */
export function pendingFacts(): { key: OwnerFactKey; label: string }[] {
  return (Object.keys(ownerFacts) as OwnerFactKey[])
    .filter((k) => ownerFacts[k].value === null)
    .map((k) => ({ key: k, label: ownerFacts[k].label }));
}
