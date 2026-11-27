export interface GarmentCategoryDetail {
  slug: string;
  /** Must match a product-line option in the quote form. */
  title: string;
  eyebrow: string;
  /** One line that says what the buyer gets. */
  headline: string;
  description: string;
  heroImage: string;
  showcaseImages: string[];
  fabrics: string[];
  styles: string[];
  /** Only certificates listed in the site's certificate set (OEKO-TEX, GOTS, BCI, GRS). */
  certificates: string[];
  /** One short line for the hub card. */
  specsSummary: string;
}

/**
 * Garment category content. Rules for this file:
 *  - only fabrics that our knitting machine list and yarn notes support (single jersey, rib, interlock,
 *    striper, mini jacquard, Lycra jersey; cotton and the man-made fibres we buy in),
 *  - only certificates we hold,
 *  - anything the owner has not confirmed (sizes, lab tests, AQL, metal detection) comes from config/ownerFacts.ts.
 */
export const GARMENT_CATEGORY_DETAILS: GarmentCategoryDetail[] = [
  {
    slug: "t-shirts-and-polos",
    title: "T-Shirts & Polos",
    eyebrow: "T-SHIRTS AND POLOS",
    headline: "T-shirts and polos from our own jersey.",
    description:
      "Crew-neck and V-neck tees, long sleeves, polos and striped styles, knitted, dyed and stitched in our own units. The shade and GSM you approve in the sample are the ones we make in bulk.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Warm%20Minimalist%20Waffle-Knit%20Fashion%20Portrait.webp",
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/3.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/2.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/10.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/13.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/1.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/6.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/7.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/12.webp",
    ],
    fabrics: [
      "Single jersey in cotton and organic cotton",
      "Rib and interlock",
      "Auto-striper and mini jacquard",
      "Cotton-modal and Tencel blends",
    ],
    styles: [
      "Crew-neck and V-neck tees",
      "Polos",
      "Long-sleeve and henley styles",
      "Striped and jacquard tops",
    ],
    certificates: ["OEKO-TEX Standard 100", "GOTS organic", "BCI cotton"],
    specsSummary: "Single jersey, rib, interlock, striper",
  },
  {
    slug: "kids-and-baby-wear",
    title: "Kids & Baby Wear",
    eyebrow: "KIDS AND BABY WEAR",
    headline: "Soft, tested knitwear for babies and children.",
    description:
      "Rompers, bodysuits, tees and sweatshirts for newborns to older children, made from cotton and organic cotton jersey, rib and interlock. Our OEKO-TEX Standard 100 certificate is Class 1, the class for baby articles.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Minimal%20Studio%20Portrait%20of%20a%20Young%20Boy.webp",
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/11.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/14.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/3.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/4.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/9.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/8.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/10.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/13.png",
    ],
    fabrics: [
      "Cotton and organic cotton interlock",
      "Single jersey and rib",
      "Cotton-modal and bamboo-cotton blends",
    ],
    styles: [
      "Infant bodysuits, rompers and sleepsuits",
      "Toddler tees and co-ord sets",
      "Kids sweatshirts and joggers",
      "Printed everyday knitwear",
    ],
    certificates: ["OEKO-TEX Standard 100, Class 1 (baby articles)", "GOTS organic"],
    specsSummary: "OEKO-TEX Class 1, organic cotton available",
  },
  {
    slug: "mens-and-womens-knitwear",
    title: "Men's & Women's Knitwear",
    eyebrow: "MEN'S AND WOMEN'S KNITWEAR",
    headline: "Everyday knitwear for men and women, cut to your size chart.",
    description:
      "Tops, tunics, knit dresses, pullovers and layering pieces in modal, Tencel, viscose and cotton jersey, with rib, interlock and jacquard structures for texture. We work from your tech pack or a reference sample.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Coordinated%20Houndstooth%20Streetwear%20Duo.webp",
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/1.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/2.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/3.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/4.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/11.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/4.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/14.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/5.webp",
    ],
    fabrics: [
      "Cotton-modal, viscose and Tencel jersey",
      "Rib and interlock structures",
      "Auto-striper and mini jacquard",
    ],
    styles: [
      "Women's tops, tunics and knit dresses",
      "Men's pullovers and layering tees",
      "Henleys and long-sleeve tops",
      "Matched sets",
    ],
    certificates: ["OEKO-TEX Standard 100", "BCI cotton", "GRS recycled content"],
    specsSummary: "Modal, Tencel, viscose, jacquard",
  },
  {
    slug: "activewear-and-loungewear",
    title: "Activewear & Loungewear",
    eyebrow: "ACTIVEWEAR AND LOUNGEWEAR",
    headline: "Stretch and lounge knits made on our own Lycra jersey.",
    description:
      "Training tees, tanks, joggers, lounge sets and sleepwear in cotton-Lycra, poly-cotton and modal blends. Our Lycra jersey machines knit the stretch fabric in-house, so recovery and shade are checked before it reaches the cutting table.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Urban%20Athlete%20on%20Modern%20Ledge.webp",
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/8.png?updatedAt=1794640088021",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/4.png?updatedAt=1794640087972",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/13.png?updatedAt=1794640087999",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/2.png?updatedAt=1794640088029",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/12.png?updatedAt=1794640087996",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/7.png?updatedAt=1794640088010",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/9.png?updatedAt=1794640087916",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/5.png?updatedAt=1794640087918",
    ],
    fabrics: [
      "Cotton-Lycra stretch jersey",
      "Poly-cotton knits",
      "Modal and Tencel loungewear blends",
    ],
    styles: [
      "Training tees, tanks and racerbacks",
      "Joggers, track pants and shorts",
      "Lounge sets and sleepwear",
      "Zip-up and pullover sweatshirts",
    ],
    certificates: ["GRS recycled content", "OEKO-TEX Standard 100"],
    specsSummary: "Cotton-Lycra, poly-cotton, modal",
  },
];

export function getGarmentCategoryBySlug(slug: string) {
  return GARMENT_CATEGORY_DETAILS.find((item) => item.slug === slug);
}
