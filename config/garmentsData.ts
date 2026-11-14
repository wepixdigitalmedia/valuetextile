export interface GarmentCategoryDetail {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  heroImage: string;
  galleryImages: string[];
  showcaseImages?: string[];
  fabrics: string[];
  styles: string[];
  sizeRange: string;
  finishes: string[];
  qualityHighlights: string[];
  specsSummary: string;
}

export const GARMENT_CATEGORY_DETAILS: GarmentCategoryDetail[] = [
  {
    slug: "t-shirts-and-polos",
    title: "T-Shirts & Polos",
    eyebrow: "CORE KNITWEAR PROGRAM",
    tagline:
      "Vertically integrated OEM & private-label manufacturing for crew necks, V-necks, structured polos, and yarn-dyed basics.",
    description:
      "Engineered in our Tiruppur facilities from in-house single jersey, pique, interlock, and auto-striper fabrics. Every production run is controlled for GSM uniformity, collar recovery, shrinkage tolerance, and international AQL export compliance.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Warm%20Minimalist%20Waffle-Knit%20Fashion%20Portrait.webp",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/3.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/2.webp",
    ],
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
      "100% Combed & Organic Cotton Single Jersey",
      "Cotton & Poly-Cotton Pique",
      "Cotton-Modal & Tencel Blends",
      "Interlock & Auto-Striper Yarn-Dyed Knits",
    ],
    styles: [
      "Classic Crew Neck & V-Neck Tees",
      "Flat-Knit Collar & Tipped Polos",
      "Oversized, Boxy & Drop-Shoulder Fits",
      "Long-Sleeve, Henley & Pocket Styles",
    ],
    sizeRange: "XS – 3XL (Custom brand grading supported)",
    finishes: [
      "Bio-polish & enzyme soft wash",
      "Silicone & peach finish",
      "Reactive & vat dyeing with lab-dip approval",
      "Screen print, water-based print & embroidery",
    ],
    qualityHighlights: [
      "4-point fabric inspection before cutting",
      "Shrinkage & spirality control tested in-house",
      "Rib collar recovery & seam-strength checks",
      "AQL final inspection & export carton packing",
    ],
    specsSummary: "Single Jersey · Pique · Interlock · Auto-Striper",
  },
  {
    slug: "kids-and-baby-wear",
    title: "Kids & Baby Wear",
    eyebrow: "INFANT & CHILDREN'S KNITS",
    tagline:
      "Certified skin-safe infant and children's knitwear produced on dedicated needle-checked and chemically compliant lines.",
    description:
      "From newborn rompers and bodysuits to toddler tees and co-ord sets, our children's programs combine bio-washed organic and combed cotton knits with OEKO-TEX Standard 100 dyes, nickel-free fasteners, and 100% metal detection.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Minimal%20Studio%20Portrait%20of%20a%20Young%20Boy.webp",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/11.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/14.png",
    ],
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/11.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/14.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/3.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/4.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/9.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/8.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/10.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/13.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/15.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/7.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/12.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/6.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/2.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/1.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/5.png",
    ],
    fabrics: [
      "Organic & Combed Cotton Interlock",
      "Ultra-Soft Single Jersey & Rib",
      "Cotton-Modal & Bamboo-Cotton Blends",
      "Brushed & Unbrushed Baby Fleece",
    ],
    styles: [
      "Infant Bodysuits, Rompers & Sleepsuits",
      "Toddler Tees, Polos & Co-Ord Sets",
      "Kids Sweatshirts, Hoodies & Joggers",
      "Printed & Applique Everyday Knitwear",
    ],
    sizeRange: "0M – 14Y (EU, UK & US children's sizing)",
    finishes: [
      "OEKO-TEX Standard 100 safe dye chemistries",
      "Extra-soft baby wash & hypoallergenic finish",
      "Nickel-free snap fasteners & flatlock seams",
      "Tear-away or heat-transfer neck labels",
    ],
    qualityHighlights: [
      "100% metal & broken-needle detection",
      "Pull-test verification on snaps & trims",
      "Phthalate-free & AZO-free print compliance",
      "Strict buyer safety & labelling audits",
    ],
    specsSummary: "OEKO-TEX Standard 100 · Soft Finish · Needle Checked",
  },
  {
    slug: "mens-and-womens-knitwear",
    title: "Men's & Women's Knitwear",
    eyebrow: "CASUAL & SEASONAL APPAREL",
    tagline:
      "Contemporary casualwear, knit dresses, sweatshirts, and seasonal layering collections tailored to international brand specifications.",
    description:
      "We partner with global fashion labels and retail groups to deliver men's and women's knitwear across weights and gauges—from lightweight modal and Tencel jerseys to heavyweight brushed fleece and French terry silhouettes.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Coordinated%20Houndstooth%20Streetwear%20Duo.webp",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/1.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/11.webp",
    ],
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/1.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/2.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/3.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/4.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/5.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/6.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/7.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/11.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/4.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/14.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/5.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/8.webp",
    ],
    fabrics: [
      "French Terry & Brushed Fleece (240–420 GSM)",
      "Cotton-Modal, Viscose & Tencel Jersey",
      "1x1, 2x2 & Ottoman Rib Structures",
      "Yarn-Dyed Stripes & Textured Jacquards",
    ],
    styles: [
      "Women's Tops, Tunics & Knit Dresses",
      "Men's Pullovers, Hoodies & Sweatshirts",
      "Cardigans, Layering Tees & Henley Tops",
      "Matched Sets & Seasonal Capsule Collections",
    ],
    sizeRange: "XS – XXL (International & tailored fits)",
    finishes: [
      "Garment wash, acid wash & vintage soften",
      "Anti-pilling & dimensional stability treatment",
      "Custom woven labels, hangtags & trims",
      "High-density, puff & discharge prints",
    ],
    qualityHighlights: [
      "Consistent shade matching across dye lots",
      "In-line seam & measurement verification",
      "Rubbing, wash & perspiration fastness testing",
      "Retail-ready pressing, folding & polybagging",
    ],
    specsSummary: "Fleece · French Terry · Cotton-Modal · Rib",
  },
  {
    slug: "activewear-and-loungewear",
    title: "Activewear & Loungewear",
    eyebrow: "STRETCH & PERFORMANCE KNITS",
    tagline:
      "High-recovery stretch activewear and breathable loungewear engineered for durability, moisture management, and repeat wear.",
    description:
      "Built on in-house cotton-elastane, poly-cotton, and modal-spandex knits, our active and loungewear programs undergo strict bursting-strength, dimensional stability, and wet-rubbing colourfastness testing prior to shipment.",
    heroImage: "https://ik.imagekit.io/wpxassets/value%20textiles/Urban%20Athlete%20on%20Modern%20Ledge.webp",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/8.png?updatedAt=1794640088021",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/4.png?updatedAt=1794640087972",
    ],
    showcaseImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/8.png?updatedAt=1794640088021",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/4.png?updatedAt=1794640087972",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/13.png?updatedAt=1794640087999",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/2.png?updatedAt=1794640088029",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/12.png?updatedAt=1794640087996",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/7.png?updatedAt=1794640088010",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/9.png?updatedAt=1794640087916",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/5.png?updatedAt=1794640087918",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/3.png?updatedAt=1794640087909",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/1.png?updatedAt=1794640087890",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/11.png?updatedAt=1794640087791",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/14.png?updatedAt=1794640087809",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/10.png?updatedAt=1794640087716",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/6.png?updatedAt=1794640087759",
    ],
    fabrics: [
      "Cotton-Lycra / Elastane Stretch Jersey",
      "Poly-Cotton & Moisture-Wicking Knits",
      "Tencel & Modal Loungewear Blends",
      "Lightweight Loopback French Terry",
    ],
    styles: [
      "Training Tees, Tank Tops & Racerbacks",
      "Athleisure Hoodies, Track Pants & Joggers",
      "Lounge Sets, Sleepwear & Home-Wear Tops",
      "Zip-Up Sweatshirts & Gym Shorts",
    ],
    sizeRange: "XS – 3XL (Athletic & relaxed fits)",
    finishes: [
      "Moisture-wicking & quick-dry treatments",
      "4-way stretch & recovery heat-setting",
      "Flatlock chafe-free seam construction",
      "Reflective & heat-transfer branding",
    ],
    qualityHighlights: [
      "Elastane recovery & bursting-strength testing",
      "Perspiration & wet-rubbing colourfastness",
      "Reinforced stress-point stitching",
      "Consistent fit grading across size runs",
    ],
    specsSummary: "Cotton-Lycra · Poly-Cotton · Tencel Blends",
  },
];

export function getGarmentCategoryBySlug(slug: string) {
  return GARMENT_CATEGORY_DETAILS.find((item) => item.slug === slug);
}

