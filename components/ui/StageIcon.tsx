import React from "react";

/**
 * A small set of line icons drawn for Value Textiles, one style throughout:
 * 24px grid, 1.75 stroke, round caps and joins, single colour (currentColor).
 * Used next to the stage and step numbers, so a step says what happens as well as where it sits.
 */
export type StageIconName =
  | "yarn"
  | "knitting"
  | "dyeing"
  | "lab"
  | "garments"
  | "specify"
  | "source"
  | "release"
  | "match"
  | "dispense"
  | "fabric"
  | "water"
  | "cut"
  | "pack"
  | "seal"
  | "flask"
  | "truck"
  | "cost"
  | "phone"
  | "mail"
  | "clock"
  | "tag"
  | "heart"
  | "bolt"
  | "store"
  | "globe";

const SHAPES: Record<StageIconName, React.ReactNode> = {
  // A spool of thread: two flanges and thread wound between them.
  yarn: (
    <>
      <rect x="5.5" y="3" width="13" height="3" rx="1" />
      <rect x="5.5" y="18" width="13" height="3" rx="1" />
      <path d="M7.5 6v12M16.5 6v12" />
      <path d="M7.5 9.4l9-1.4M7.5 13l9-1.4M7.5 16.6l9-1.4" />
    </>
  ),
  // Rows of V stitches, the way a knitted fabric looks.
  knitting: (
    <>
      <path d="M3 4l2.5 4.5L8 4M9.5 4l2.5 4.5L14.5 4M16 4l2.5 4.5L21 4" />
      <path d="M3 10.5l2.5 4.5 2.5-4.5M9.5 10.5l2.5 4.5 2.5-4.5M16 10.5l2.5 4.5 2.5-4.5" />
      <path d="M3 17l2.5 4.5L8 17M9.5 17l2.5 4.5 2.5-4.5M16 17l2.5 4.5 2.5-4.5" />
    </>
  ),
  // A dye drop with a highlight.
  dyeing: (
    <>
      <path d="M12 3.5C12 3.5 5.5 10.6 5.5 15a6.5 6.5 0 0 0 13 0C18.5 10.6 12 3.5 12 3.5z" />
      <path d="M9 15.2a3 3 0 0 0 3 3" />
    </>
  ),
  // A loupe with a check inside: inspected and passed.
  lab: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.4 15.4L21 21" />
      <path d="M7.7 10.7l2.1 2.1 3.6-4" />
    </>
  ),
  // A t-shirt.
  garments: (
    <path d="M8.6 3.5L3 6.6l2.1 4 2.9-1.4V20.5h8V9.2l2.9 1.4 2.1-4-5.6-3.1a3.4 3.4 0 0 1-6.8 0z" />
  ),
  // A clipboard: agreeing the specification, approving a sample.
  specify: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <rect x="9" y="2.5" width="6" height="4" rx="1" />
      <path d="M9 11.5h6M9 15.5h6" />
    </>
  ),
  // A map pin: where the material comes from.
  source: (
    <>
      <path d="M12 21.5S5 15 5 9.6a7 7 0 0 1 14 0C19 15 12 21.5 12 21.5z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </>
  ),
  // A check in a circle: passed, released.
  release: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.8 2.8 5.2-5.6" />
    </>
  ),
  // A two-tone swatch: matching a colour.
  match: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17z" fill="currentColor" />
    </>
  ),
  // A funnel: dosing dyes and chemicals.
  dispense: <path d="M4.5 5h15L14 12.2V19l-4-1.8v-5z" />,
  // A roll of fabric.
  fabric: (
    <>
      <path d="M7 6h11.5v12H7" />
      <ellipse cx="7" cy="12" rx="3" ry="6" />
      <ellipse cx="7" cy="12" rx="1" ry="2" />
    </>
  ),
  // Waves: water treatment.
  water: (
    <>
      <path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
      <path d="M3 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    </>
  ),
  // Scissors: cutting and stitching.
  cut: (
    <>
      <circle cx="6" cy="6.5" r="2.5" />
      <circle cx="6" cy="17.5" r="2.5" />
      <path d="M8 8l12 9M8 16l12-9" />
    </>
  ),
  // A carton: packing.
  pack: (
    <>
      <path d="M3 7.5l9-4.8 9 4.8v9l-9 4.8-9-4.8z" />
      <path d="M3 7.5l9 4.8 9-4.8M12 12.3v9" />
    </>
  ),
  // A certificate seal.
  seal: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9 13.6l-1.5 7.4 4.5-2.4 4.5 2.4-1.5-7.4" />
    </>
  ),
  // A conical flask: lab testing.
  flask: (
    <>
      <path d="M9.5 3h5M10.5 3v6.2L5 19a1.6 1.6 0 0 0 1.4 2.4h11.2A1.6 1.6 0 0 0 19 19l-5.5-9.8V3" />
      <path d="M7.8 15h8.4" />
    </>
  ),
  // A delivery truck: despatch and shipping.
  truck: (
    <>
      <path d="M2.5 6.5h11v9.5h-11z" />
      <path d="M13.5 9.5h4l3 3.2V16h-7z" />
      <circle cx="6.5" cy="17.6" r="1.8" />
      <circle cx="17" cy="17.6" r="1.8" />
    </>
  ),
  // A receipt: costing.
  cost: (
    <>
      <path d="M6 3h12v18l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5L6 21z" />
      <path d="M9 8h6M9 12h6M9 16h3" />
    </>
  ),
  // A phone handset.
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  // An envelope.
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7.2l8.5 6 8.5-6" />
    </>
  ),
  // A clock: opening hours, reply time.
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  // A price tag: brands and labels.
  tag: (
    <>
      <path d="M3.5 3.5h8.2L21 12.8a1.4 1.4 0 0 1 0 2L14.8 21a1.4 1.4 0 0 1-2 0L3.5 11.7z" />
      <circle cx="7.6" cy="7.6" r="1.3" />
    </>
  ),
  // A heart: care, kids and baby wear.
  heart: (
    <path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.6a4.7 4.7 0 0 1 8.5 2.6C20.5 15 12 20.5 12 20.5z" />
  ),
  // A bolt: energy, activewear.
  bolt: <path d="M13 2.5L5 13.5h6l-1 8 8-11h-6z" />,
  // A shopfront: retailers.
  store: (
    <>
      <path d="M4 9.5l1.4-5h13.2L20 9.5" />
      <path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0" />
      <path d="M5 12v8.5h14V12M10 20.5v-5h4v5" />
    </>
  ),
  // A globe: online sellers.
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3 3 15 0 18-3-3-3-15 0-18z" />
    </>
  ),
};

interface StageIconProps {
  name: StageIconName;
  className?: string;
}

/** Decorative: the label next to the icon carries the meaning, so the icon is hidden from screen readers. */
export function StageIcon({ name, className = "w-6 h-6" }: StageIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {SHAPES[name]}
    </svg>
  );
}

export const STAGE_ICON_NAMES = Object.keys(SHAPES) as StageIconName[];
