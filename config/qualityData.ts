/**
 * Quality facts that come from the owner's own site content (the yarn, fabric and dyeing notes).
 * Nothing here is invented. Anything the owner has not confirmed lives in config/ownerFacts.ts.
 */

/** Yarn is bought in, and these tests are run on it before any fabric is produced. */
export const YARN_TESTS = [
  "Count",
  "Linear density",
  "Strength (lea strength)",
  "CSP (count strength product)",
  "Twist (TPI)",
  "Appearance",
  "Hairiness",
  "Classimat faults",
  "Evenness",
  "Moisture",
];

/** The in-house fabric lab test list. */
export const FABRIC_LAB_TESTS = [
  "Fabric weight",
  "Count",
  "Construction",
  "Colour fastness to washing",
  "Colour fastness to rubbing",
  "Colour fastness to perspiration",
  "Colour fastness to water",
  "Colour fastness to saliva",
  "Dimensional stability",
  "Spirality",
  "Appearance after wash",
];

export interface CertificateEntry {
  id: string;
  name: string;
  /** What it covers, in plain words. */
  scope: string;
  /** The reference number as printed on the certificate, when we have it. */
  reference?: string;
  issuer?: string;
  /** Logo file. Leave out when we do not have the certifier's own logo; the page shows a text label instead. */
  image?: string;
  /** Short label for the text fallback. */
  short: string;
  /** True when the reference number comes from the owner's site content. False means logo only. */
  numbered: boolean;
}

export const CERTIFICATES: CertificateEntry[] = [
  {
    id: "oeko-tex",
    name: "OEKO-TEX Standard 100, Class 1",
    scope: "Tested for harmful substances. Class 1 is the class for baby articles.",
    reference: "Test no. 09.HIN.70527",
    issuer: "Hohenstein Institute",
    image: "/images/certifications/cert-1-clean.png",
    short: "OEKO-TEX",
    numbered: true,
  },
  {
    id: "gots",
    name: "GOTS, Global Organic Textile Standard",
    scope: "Organic knitting and dyeing.",
    reference: "Annex to certificate CU828190GOTS-01.2013",
    issuer: "Control Union",
    image: "/images/certifications/cert-4-clean.png",
    short: "GOTS",
    numbered: true,
  },
  {
    id: "ocs",
    name: "OCS, Organic Content Standard",
    scope: "Tracks organic cotton content through production.",
    reference: "OCS-CB-CUI-828190",
    short: "OCS",
    numbered: true,
  },
  {
    id: "bci",
    name: "BCI, Better Cotton Initiative",
    scope: "Sustainably farmed cotton fibre sourcing.",
    issuer: "Better Cotton",
    image: "/images/certifications/cert-2-clean.png",
    short: "BCI",
    numbered: false,
  },
  {
    id: "grs",
    name: "GRS, Global Recycled Standard",
    scope: "Recycled polyester and blended fibre traceability.",
    issuer: "Textile Exchange",
    image: "/images/certifications/cert-3-clean.png",
    short: "GRS",
    numbered: false,
  },
];
