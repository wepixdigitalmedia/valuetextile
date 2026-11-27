/**
 * Blog articles. They live in the repo so every page is rendered on the server and search engines can read it.
 *
 * To add an article, add an object to BLOG_POSTS. Rules for new articles:
 *  - write from the factory's own facts (config/qualityData.ts, config/ownerFacts.ts, the capability pages),
 *  - no claim the owner has not confirmed,
 *  - plain words, short paragraphs, no filler.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  /** ISO date, for example 2026-11-27. */
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  blocks: BlogBlock[];
  /** The page this article should lead the reader to next. */
  cta: { heading: string; text: string; href: string; label: string };
}

const IK = "https://ik.imagekit.io/wpxassets/value%20textiles/infrastructure";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-a-4-point-fabric-inspection-checks",
    title: "What a 4-point fabric inspection checks, and how we use it",
    excerpt:
      "How defects are scored, what passes and what is rejected, and why every roll gets a colour tag before it reaches the cutting table.",
    category: "Quality",
    author: "Value Textiles Quality Team",
    readTime: "4 min read",
    publishedAt: "2026-11-27",
    coverImage: `${IK}/12.webp`,
    coverAlt: "Operator at a fabric inspection machine",
    blocks: [
      {
        type: "p",
        text: "A fabric defect found on the inspection table costs almost nothing. The same defect found after the garment is stitched costs the fabric, the stitching and often the ship date. That is why we grade every fabric roll before it is cut.",
      },
      { type: "h2", text: "How the 4-point system scores a defect" },
      {
        type: "p",
        text: "Inspectors run the roll over an illuminated table and mark each defect. In the standard 4-point method a defect scores from one to four points, depending on its length: the longer the defect, the more points. The roll's total is then compared with an acceptance limit.",
      },
      { type: "h2", text: "What passes, and what does not" },
      {
        type: "table",
        head: ["Points on the roll", "Decision"],
        rows: [
          ["Up to 30", "Pass"],
          ["31 to 40", "Needs approval from the head of department"],
          ["41 and above", "Rejected"],
        ],
      },
      { type: "p", text: "We also work to the 10-point system." },
      { type: "h2", text: "How many rolls we check" },
      {
        type: "p",
        text: "Large lots are sampled and small lots are checked in full. How many rolls we inspect depends on the size of the lot.",
      },
      {
        type: "table",
        head: ["Rolls in the lot", "Rolls we check"],
        rows: [
          ["100 and above", "As per the square root system"],
          ["50 to 99", "At least 10"],
          ["25 to 49", "At least 7"],
          ["11 to 24", "At least 5"],
          ["1 to 10", "All rolls"],
        ],
      },
      { type: "h2", text: "The colour tag sets the cutting order" },
      { type: "p", text: "After grading, every roll gets a coloured tag:" },
      {
        type: "ul",
        items: [
          "Red: not OK.",
          "Orange: conditionally approved. Cut these rolls first.",
          "Yellow: accepted. Cut these after the orange rolls.",
          "Green: passed. Cut these after the yellow rolls.",
        ],
      },
      {
        type: "p",
        text: "The tag means the cutting room never has to guess. A roll with a known issue is used early, under watch, instead of being discovered late.",
      },
      { type: "h2", text: "Why this matters to a buyer" },
      {
        type: "p",
        text: "Inspecting before cutting protects your shade continuity, your yield and your ship date. It is one of four checkpoints between yarn and carton.",
      },
    ],
    cta: {
      heading: "See all four quality checkpoints",
      text: "From yarn tests to certificates, with the numbers you can check.",
      href: "/quality",
      label: "Quality and certificates",
    },
  },
  {
    slug: "the-11-tests-in-our-fabric-lab",
    title: "The 11 tests in our fabric lab, in plain words",
    excerpt: "What each test measures, and what it protects you from.",
    category: "Quality",
    author: "Value Textiles Quality Team",
    readTime: "4 min read",
    publishedAt: "2026-11-27",
    coverImage: `${IK}/10.webp`,
    coverAlt: "Operator at a fabric processing station under inspection light",
    blocks: [
      {
        type: "p",
        text: "A test report is only useful if you know what each line means. This is our fabric lab's list of eleven tests, grouped by the question each one answers.",
      },
      { type: "h2", text: "What the fabric is" },
      {
        type: "ul",
        items: [
          "Fabric weight: grams per square metre, usually called GSM. It decides how the fabric feels and drapes, and whether it matches your specification.",
          "Count: the thickness of the yarn used in the fabric.",
          "Construction: how the loops are built, for example single jersey, rib or interlock.",
        ],
      },
      { type: "h2", text: "Does the colour stay" },
      {
        type: "ul",
        items: [
          "Colour fastness to washing: does the colour fade or bleed in a wash.",
          "Colour fastness to rubbing: does colour transfer onto another surface when rubbed.",
          "Colour fastness to perspiration: how the colour behaves against sweat.",
          "Colour fastness to water: how the colour behaves when the fabric is wet.",
          "Colour fastness to saliva: matters most for baby wear, where fabric is often chewed.",
        ],
      },
      { type: "h2", text: "Does the shape stay" },
      {
        type: "ul",
        items: [
          "Dimensional stability: how much the fabric shrinks or stretches, in length and width, after washing.",
          "Spirality: whether the knit twists after washing, so that the side seams swing round the body.",
          "Appearance after wash: the overall look after laundering, such as creasing and any change to the surface or colour.",
        ],
      },
      { type: "h2", text: "What we do with the results" },
      {
        type: "p",
        text: "Results are compared with your specification before the fabric goes on to inspection and cutting. If you have a buyer test standard of your own, send it with your tech pack and we will say which of these tests cover it.",
      },
    ],
    cta: {
      heading: "See the lab and the inspection floor",
      text: "The full test list, the 4-point and 10-point systems, and fabric despatch.",
      href: "/capabilities/fabric-division",
      label: "Fabric lab and inspection",
    },
  },
  {
    slug: "why-we-test-yarn-before-it-is-knitted",
    title: "Why we test yarn before it is knitted",
    excerpt:
      "We buy yarn in, so we check it ourselves. Ten tests, and the fabric problem each one helps prevent.",
    category: "Fabric and yarn",
    author: "Value Textiles Quality Team",
    readTime: "4 min read",
    publishedAt: "2026-11-27",
    coverImage: `${IK}/3.webp`,
    coverAlt: "Cones of cotton yarn",
    blocks: [
      {
        type: "p",
        text: "We do not spin our own yarn. We buy it from outside mills, so the first quality check is ours: the yarn is tested before any fabric is produced.",
      },
      {
        type: "p",
        text: "Catching a yarn problem before knitting costs a few cones. Catching it in dyed fabric costs a great deal more. These are the ten tests and what each one tells us.",
      },
      {
        type: "table",
        head: ["Test", "What it tells us"],
        rows: [
          ["Count", "The system the yarn is measured in and its stated thickness."],
          ["Linear density", "The thickness we actually measure, checked against the count."],
          ["Strength (lea strength)", "How much pull a skein of yarn takes before it breaks."],
          ["CSP, count strength product", "Strength judged against thickness, a single figure for comparing lots."],
          ["Twist (TPI)", "Turns per inch. It affects handle, strength and how the fabric behaves after washing."],
          ["Appearance", "How even and clean the yarn looks."],
          ["Hairiness", "Loose fibres sticking out of the yarn. High hairiness shows up as fuzzy fabric and pilling."],
          ["Classimat faults", "Thick and thin places in the yarn, graded by size."],
          ["Evenness", "How consistent the yarn is along its length. Uneven yarn shows as streaks in dyed fabric."],
          ["Moisture", "The water content, which affects yarn weight and how it knits."],
        ],
      },
      { type: "h2", text: "Why it matters to a buyer" },
      {
        type: "p",
        text: "Most fabric faults that buyers notice, such as streaks, pilling and shade differences, start in the yarn. Testing at the start means we reject a bad lot of yarn before it becomes a bad lot of fabric.",
      },
    ],
    cta: {
      heading: "See where yarn testing fits in",
      text: "Four checkpoints between yarn and carton, with the certificates behind them.",
      href: "/quality",
      label: "Quality and certificates",
    },
  },
  {
    slug: "full-package-or-cut-and-make",
    title: "Full package or cut and make? How to choose",
    excerpt:
      "Two ways to order garments from us, what each one needs from you, and when each one makes sense.",
    category: "Sourcing",
    author: "Value Textiles Merchandising",
    readTime: "3 min read",
    publishedAt: "2026-11-27",
    coverImage: `${IK}/14.webp`,
    coverAlt: "Operator at a cutting table with fabric and pattern pieces",
    blocks: [
      {
        type: "p",
        text: "Buyers can order garments from us in two ways. The choice mostly comes down to one question: who supplies the fabric?",
      },
      { type: "h2", text: "Full package" },
      {
        type: "p",
        text: "You send a tech pack or a reference sample. We make the garment in our own fabric: sampling, production, inspection and shipping, with one price and one delivery date.",
      },
      {
        type: "p",
        text: "Choose it when you do not have a fabric source, or when you want one team to answer for both the fabric and the garment.",
      },
      { type: "h2", text: "Cut and make" },
      {
        type: "p",
        text: "You supply the fabric and trims. We cut, stitch, finish and pack to your specification.",
      },
      {
        type: "p",
        text: "Choose it when you already have a mill you trust, or a fabric your brand owns.",
      },
      { type: "h2", text: "What both need from you" },
      {
        type: "ul",
        items: [
          "A tech pack or a reference sample.",
          "Quantity per style and colour.",
          "Your target delivery date.",
          "Pantone references for colour.",
          "Your labelling and packing requirements.",
        ],
      },
      { type: "h2", text: "Not sure yet?" },
      {
        type: "p",
        text: "Start with samples. Tell us the style and we will say which route suits it and what it costs.",
      },
    ],
    cta: {
      heading: "See the six steps from first message to shipment",
      text: "What happens at each stage and what we need from you.",
      href: "/how-to-order",
      label: "How to order",
    },
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
