import type { SlotSize } from "@/components/ui/ImageSlot";

/**
 * The image plan for every Capabilities page, in one place so labels and sizes cannot drift apart.
 *
 * Rules:
 *  - One master photo per stage. The hub card, the stage page and any share image are all crops of that
 *    one photo, so each stage needs one great photo, not three different ones.
 *  - Every capability photo is shown at 16:10 (1600x1000 on desktop, 900x560 on mobile). The files in
 *    /public/images/capabilities are 2752x1536 (16:9) and are cropped slightly at the sides to fit.
 *    Keep the subject in the middle third so the crop never cuts it.
 *  - Labels follow one pattern: "Capabilities · Stage".
 *  - To replace a photo, overwrite the file in /public/images/capabilities/ with the same name.
 *    To show a placeholder again, remove the `src` from that stage.
 *  - File names are case-sensitive on the live server: "Lab.webp" must be written with a capital L.
 */

export interface CapabilityImage {
  label: string;
  /** Shown only while there is no photo. Short on purpose: it has to fit inside a small card. */
  hint: string;
  desktop: SlotSize;
  mobile: SlotSize;
  alt: string;
}

const DESKTOP = { w: 1600, h: 1000 } as const;
const MOBILE = { w: 900, h: 560 } as const;
const BASE = "/images/capabilities";

export const CAPABILITY_IMAGES = {
  garments: {
    label: "Capabilities · Garments",
    hint: "Stitching line from a raised angle, operators at work.",
    desktop: { ...DESKTOP, src: `${BASE}/garments.webp` },
    mobile: { ...MOBILE, src: `${BASE}/garments.webp` },
    alt: "Operators at sewing machines along a garment stitching line, with trolleys of cut knit fabric",
  },
  yarn: {
    label: "Capabilities · Yarn",
    hint: "Cones of yarn on a rack, or a yarn test in progress.",
    desktop: { ...DESKTOP, src: `${BASE}/yarn.webp` },
    mobile: { ...MOBILE, src: `${BASE}/yarn.webp` },
    alt: "Racks and pallets of cotton yarn cones in a yarn store",
  },
  knitting: {
    label: "Capabilities · Knitting",
    hint: "Fabric coming off a circular knitting machine.",
    desktop: { ...DESKTOP, src: `${BASE}/knitting.webp` },
    mobile: { ...MOBILE, src: `${BASE}/knitting.webp` },
    alt: "A circular knitting machine with a roll of knitted fabric coming off it",
  },
  dyeing: {
    label: "Capabilities · Dyeing",
    hint: "Soft-flow machines, or a coloured batch being unloaded.",
    desktop: { ...DESKTOP, src: `${BASE}/dyeing.webp` },
    mobile: { ...MOBILE, src: `${BASE}/dyeing.webp` },
    alt: "A row of stainless steel soft-flow dyeing machines with a trolley of red dyed fabric",
  },
  lab: {
    label: "Capabilities · Lab",
    hint: "A roll on the inspection machine, or a lab test running.",
    desktop: { ...DESKTOP, src: `${BASE}/Lab.webp` },
    mobile: { ...MOBILE, src: `${BASE}/Lab.webp` },
    alt: "A fabric inspection machine with a backlit table and rolls of grey fabric",
  },
} satisfies Record<string, CapabilityImage>;

export type CapabilityImageKey = keyof typeof CAPABILITY_IMAGES;
