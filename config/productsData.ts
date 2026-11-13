export type ProductCategory = "Fabric" | "Yarn" | "Garments";

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  productType: string;
  composition: string;
  construction?: string;
  yarnCount?: string;
  garmentType?: string;
  weightGsm: string;
  moq: string;
  coverImage: string;
  remoteImageUrl: string;
  shortDescription: string;
  cardDescription: string;
  description: string;
  features: string[];
  altText: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  // ==========================================
  // FABRIC PRODUCTS (6 items)
  // ==========================================
  {
    id: "cotton-single-jersey",
    name: "Cotton Single Jersey Knit Fabric",
    category: "Fabric",
    productType: "Knitted Fabric",
    composition: "100% Cotton [confirm exact composition]",
    construction: "Single Jersey [confirm]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/cotton-single-jersey.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Folded%20ivory%20cotton%20jersey%20swatch.webp",
    shortDescription: "Cotton single jersey knit fabric for everyday apparel, developed to the buyer’s required specifications.",
    cardDescription: "Cotton single jersey knit fabric for everyday apparel, made to buyer requirements.",
    description: "Cotton Single Jersey Knit Fabric is a versatile knitted fabric for apparel production. Share your required GSM, colour, width and quantity, and our team can discuss development options for your order.",
    features: [
      "Cotton knit",
      "Single jersey construction [confirm]",
      "Custom colour options",
      "Buyer-specification development"
    ],
    altText: "Neutral cotton single jersey knit fabric swatch showing its knitted surface texture"
  },
  {
    id: "cotton-modal-blend",
    name: "Cotton Modal Blend Knit Fabric",
    category: "Fabric",
    productType: "Knitted Fabric",
    composition: "Cotton and modal [confirm exact ratio]",
    construction: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/cotton-modal-blend.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Soft%20ivory%20cotton%20modal%20knit.webp",
    shortDescription: "Soft-hand cotton modal blend knit fabric for lightweight apparel.",
    cardDescription: "Soft-hand cotton modal blend knit fabric for lightweight apparel.",
    description: "Cotton Modal Blend Knit Fabric combines cotton and modal fibres in a soft-hand knit developed for lightweight apparel. The exact blend ratio, GSM, colour and finish can be confirmed to suit your product requirements.",
    features: [
      "Cotton-modal blend",
      "Soft hand feel",
      "Lightweight apparel use",
      "Buyer-specification development"
    ],
    altText: "Folded ivory cotton modal blend knit fabric with a close view of its smooth surface"
  },
  {
    id: "cotton-polyester-knit",
    name: "Cotton-Polyester Knit Fabric",
    category: "Fabric",
    productType: "Knitted Fabric",
    composition: "Cotton and polyester [confirm exact ratio]",
    construction: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/cotton-polyester-knit.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Folded%20charcoal%20knit%20fabric%20swatches.webp",
    shortDescription: "Cotton-polyester knit fabric developed to a buyer’s specification.",
    cardDescription: "Cotton-polyester knit fabric developed to a buyer’s specification.",
    description: "Cotton-Polyester Knit Fabric is a blended knit option for apparel manufacturing. Specify your target GSM, colour, width and order quantity so the blend and fabric requirements can be reviewed for your project.",
    features: [
      "Cotton-polyester blend",
      "Knitted fabric",
      "Custom development",
      "Buyer-specification options"
    ],
    altText: "Folded charcoal cotton-polyester knit fabric with the surface texture in focus"
  },
  {
    id: "cotton-viscose-knit",
    name: "Cotton-Viscose Knit Fabric",
    category: "Fabric",
    productType: "Knitted Fabric",
    composition: "Cotton and viscose [confirm exact ratio]",
    construction: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/cotton-viscose-knit.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Sage%20green%20knit%20fabric%20drape.webp",
    shortDescription: "Cotton-viscose blend knit fabric with a smooth drape.",
    cardDescription: "Cotton-viscose knit fabric with a smooth drape.",
    description: "Cotton-Viscose Knit Fabric offers a smooth drape for apparel applications. Share your preferred colour, GSM, width and quantity to discuss a fabric specification suited to your collection.",
    features: [
      "Cotton-viscose blend",
      "Smooth drape",
      "Knitted surface",
      "Custom development"
    ],
    altText: "Muted-tone cotton-viscose knit fabric draped to show its surface and texture"
  },
  {
    id: "yarn-dyed-knit",
    name: "Yarn-Dyed Knit Fabric",
    category: "Fabric",
    productType: "Yarn-Dyed Knitted Fabric",
    composition: "Confirm with us",
    construction: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/yarn-dyed-knit.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Yarn-dyed%20striped%20knit%20swatch.webp",
    shortDescription: "Knitted fabric with coloured yarns for stripe and pattern effects.",
    cardDescription: "Coloured yarns create stripe and pattern effects in this knitted fabric.",
    description: "Yarn-Dyed Knit Fabric uses coloured yarns to create stripe or pattern effects in the fabric. Colour combinations, construction, GSM and order quantity can be discussed against your design and production requirements.",
    features: [
      "Yarn-dyed colour effects",
      "Knitted fabric",
      "Stripe or pattern options",
      "Colour development"
    ],
    altText: "Restrained striped yarn-dyed knit fabric swatch with visible knitted texture"
  },
  {
    id: "neppy-blend-knit",
    name: "Neppy Blend Knit Fabric",
    category: "Fabric",
    productType: "Textured Knitted Fabric",
    composition: "Blend composition to be confirmed",
    construction: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/neppy-blend-knit.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Oatmeal%20neppy%20knit%20texture.webp",
    shortDescription: "Blend knit fabric with visible fibre flecks for a textured appearance.",
    cardDescription: "Blend knit fabric with visible fibre flecks and a textured appearance.",
    description: "Neppy Blend Knit Fabric features visible fibre flecks that add texture to the fabric surface. The fibre blend, colour, GSM and construction can be confirmed for your intended garment or collection.",
    features: [
      "Visible neppy texture",
      "Blended fibres",
      "Knitted fabric",
      "Custom colour options"
    ],
    altText: "Close-up of natural-toned neppy blend knit fabric showing its fibre flecks"
  },

  // ==========================================
  // YARN PRODUCTS (4 items)
  // ==========================================
  {
    id: "cotton-yarn-cone",
    name: "Cotton Yarn Cone",
    category: "Yarn",
    productType: "Cotton Yarn",
    composition: "Cotton [confirm grade and exact specification]",
    yarnCount: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/cotton-yarn-cone.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Off-White%20Cotton%20Yarn%20Cone.webp",
    shortDescription: "Cotton yarn supplied for knitwear and fabric production.",
    cardDescription: "Cotton yarn supplied for knitwear and fabric production.",
    description: "Cotton Yarn is supplied for knitwear and fabric production. Yarn count, grade, colour and quantity should be confirmed against the requirements of your knitting or sourcing order.",
    features: [
      "Cotton yarn",
      "Supplied on cone",
      "For knitwear production",
      "Specification confirmation available"
    ],
    altText: "Single off-white cotton yarn cone on a clean neutral background"
  },
  {
    id: "polyester-yarn-cone",
    name: "Polyester Yarn Cone",
    category: "Yarn",
    productType: "Polyester Yarn",
    composition: "Polyester [confirm grade and exact specification]",
    yarnCount: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/polyester-yarn-cone.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Pale%20grey%20polyester%20yarn%20cone.webp",
    shortDescription: "Polyester yarn for knitted fabric development and production.",
    cardDescription: "Polyester yarn for knitted fabric development and production.",
    description: "Polyester Yarn is a man-made fibre yarn option for knitted fabric development and production. Confirm the yarn count, grade, colour and quantity required for your project.",
    features: [
      "Polyester yarn",
      "Supplied on cone",
      "For knitted fabric development",
      "Specification confirmation available"
    ],
    altText: "Pale-grey polyester yarn cone photographed against a minimal neutral background"
  },
  {
    id: "lycra-blend-yarn",
    name: "Lycra Blend Yarn",
    category: "Yarn",
    productType: "Stretch Blend Yarn",
    composition: "Lycra blend [confirm partner fibre and exact ratio]",
    yarnCount: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/lycra-blend-yarn.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Ivory%20stretch%20yarn%20cone%20and%20knit%20swatch.webp",
    shortDescription: "Stretch yarn option for blended knitted fabrics.",
    cardDescription: "Stretch yarn option for blended knitted fabrics.",
    description: "Lycra Blend Yarn is a stretch-yarn option for blended knitted fabrics. The fibre combination, yarn count and intended application should be confirmed to match your fabric requirements.",
    features: [
      "Stretch blend yarn",
      "For knitted fabric applications",
      "Supplied on cone",
      "Specification confirmation available"
    ],
    altText: "Lycra blend yarn cone beside a small stretch-knit fabric swatch"
  },
  {
    id: "viscose-blend-yarn",
    name: "Viscose Blend Yarn",
    category: "Yarn",
    productType: "Viscose Blend Yarn",
    composition: "Viscose blend [confirm partner fibre and exact ratio]",
    yarnCount: "Confirm with us",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/viscose-blend-yarn.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Natural%20white%20viscose%20blend%20yarn%20cone.webp",
    shortDescription: "Soft-hand man-made fibre yarn for blended fabric production.",
    cardDescription: "Soft-hand viscose blend yarn for blended fabric production.",
    description: "Viscose Blend Yarn is a soft-hand yarn option for blended fabric production. Confirm the fibre blend, yarn count, colour and quantity needed for your development or production order.",
    features: [
      "Viscose blend",
      "Soft hand feel",
      "For blended fabrics",
      "Specification confirmation available"
    ],
    altText: "Natural-white viscose blend yarn cone with visible yarn winding"
  },

  // ==========================================
  // GARMENT PRODUCTS (6 items)
  // ==========================================
  {
    id: "kids-color-block-sweatshirt",
    name: "Colour-Block Kids’ Sweatshirt",
    category: "Garments",
    productType: "Long-Sleeve Crewneck Sweatshirt",
    garmentType: "Long-Sleeve Crewneck Sweatshirt",
    composition: "Cotton fleece or cotton-blend fleece [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/kids-color-block-sweatshirt.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Winter%20Club%20Color-Blocked%20Kids'%20Sweatshirt.webp",
    shortDescription: "Three-tone colour-block sweatshirt for children’s everyday wear.",
    cardDescription: "Three-tone children’s sweatshirt with ivory, periwinkle and navy colour blocks.",
    description: "Colour-Block Kids’ Sweatshirt featuring a warm ivory upper panel, muted periwinkle-blue middle panel and deep navy lower panel. The long-sleeve crewneck construction is suitable for children’s casual and seasonal apparel programs.",
    features: [
      "Long sleeves",
      "Crewneck",
      "Three-tone colour blocking",
      "Ribbed neckline",
      "Ribbed cuffs and hem",
      "Children’s apparel"
    ],
    altText: "Ivory, periwinkle and navy colour-block children’s crewneck sweatshirt laid flat"
  },
  {
    id: "olive-vneck-sleeveless-top",
    name: "Olive V-Neck Sleeveless Top",
    category: "Garments",
    productType: "Sleeveless Jersey Top",
    garmentType: "Sleeveless Jersey Top",
    composition: "Cotton or cotton-blend jersey [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/olive-vneck-sleeveless-top.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Olive%20green%20V-neck%20sleeveless%20top.webp",
    shortDescription: "Olive sleeveless jersey top with tonal decorative trim.",
    cardDescription: "Olive sleeveless jersey top with tonal decorative trim.",
    description: "Olive V-Neck Sleeveless Top with a deep V-neck, straight relaxed silhouette and tonal loop trim around the neckline and shoulder edges. It can be developed in the buyer’s preferred colour, fabric specification and quantity.",
    features: [
      "Sleeveless cut",
      "Deep V-neck",
      "Tonal loop trim",
      "Straight silhouette",
      "Lightweight jersey",
      "Custom colour development"
    ],
    altText: "Olive green sleeveless V-neck top with tonal decorative trim laid flat"
  },
  {
    id: "olive-black-tshirt",
    name: "Olive and Black Colour-Block Knit T-Shirt",
    category: "Garments",
    productType: "Short-Sleeve Crewneck T-Shirt",
    garmentType: "Short-Sleeve Crewneck T-Shirt",
    composition: "Cotton knit or cotton-blend knit [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/olive-black-tshirt.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Olive%20and%20black%20color-block%20knit%20T-shirt.webp",
    shortDescription: "Short-sleeve knit T-shirt with olive and black horizontal colour blocks.",
    cardDescription: "Short-sleeve knit T-shirt with olive and black colour blocks.",
    description: "Olive and Black Colour-Block Knit T-Shirt with a muted olive upper and lower body, a wide black chest band, black sleeve panels and olive sleeve bands. The crewneck style is suited to casual knitwear programs and can be reviewed against a buyer’s required specifications.",
    features: [
      "Short sleeves",
      "Crewneck",
      "Horizontal colour blocking",
      "Olive and black panels",
      "Fine knit texture",
      "Casual apparel"
    ],
    altText: "Olive and black colour-block short-sleeve knit T-shirt laid flat"
  },
  {
    id: "iridescent-party-dress",
    name: "Iridescent Winter Party Dress",
    category: "Garments",
    productType: "Girls’ Short-Sleeve Fit-and-Flare Dress",
    garmentType: "Girls’ Short-Sleeve Fit-and-Flare Dress",
    composition: "Cotton-blend bodice with sequin and tulle skirt [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/iridescent-party-dress.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Iridescent%20Winter%20Fairy%20Party%20Dress.webp",
    shortDescription: "Pastel iridescent sequin party dress with a full gathered skirt.",
    cardDescription: "Pastel sequin party dress with a full gathered skirt and tulle hem.",
    description: "Iridescent Winter Party Dress with a white bodice, short sequin-covered sleeves, sparkling waistline and full skirt finished with a soft white tulle edge. The pastel lavender, turquoise, blue and silver surface details create a festive occasion-wear look.",
    features: [
      "Short sleeves",
      "Round neckline",
      "Fit-and-flare silhouette",
      "Iridescent sequin detailing",
      "Sparkling waistband",
      "Gathered skirt",
      "Tulle hem"
    ],
    altText: "White children’s party dress with pastel iridescent sequin sleeves and full skirt"
  },
  {
    id: "white-blue-pinstriped-shirt",
    name: "White Blue Pinstriped Long-Sleeve Shirt",
    category: "Garments",
    productType: "Long-Sleeve Woven Shirt",
    garmentType: "Long-Sleeve Woven Shirt",
    composition: "Cotton or cotton-blend woven fabric [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/white-blue-pinstriped-shirt.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/White%20Pinstriped%20Shirt%20Flat%20Lay.webp",
    shortDescription: "White woven shirt with fine pale-blue vertical pinstripes.",
    cardDescription: "White woven shirt with fine pale-blue pinstripes and an open collar.",
    description: "White Blue Pinstriped Long-Sleeve Shirt with an open spread collar, central button placket, sleeve tab details, striped cuffs and a straight relaxed fit. The fine pale-blue stripe pattern gives the shirt a clean everyday appearance.",
    features: [
      "Long sleeves",
      "Open collar",
      "Front buttons",
      "Sleeve tabs",
      "Striped cuffs",
      "Straight hem",
      "Woven fabric"
    ],
    altText: "White long-sleeve shirt with fine pale-blue vertical pinstripes and open collar"
  },
  {
    id: "powder-blue-dotted-top",
    name: "Powder Blue Dotted Long-Sleeve Top",
    category: "Garments",
    productType: "Long-Sleeve Printed Top",
    garmentType: "Long-Sleeve Printed Top",
    composition: "Lightweight cotton or cotton-blend woven fabric [confirm exact composition]",
    weightGsm: "Confirm with us",
    moq: "Confirm with us",
    coverImage: "/images/products/powder-blue-dotted-top.webp",
    remoteImageUrl: "https://ik.imagekit.io/wpxassets/value%20textiles/products/Powder%20blue%20dotted%20long-sleeve%20top.webp",
    shortDescription: "Powder-blue long-sleeve top with an all-over white dot print and front button placket.",
    cardDescription: "Powder-blue printed top with a relaxed fit and front button placket.",
    description: "Powder Blue Dotted Long-Sleeve Top featuring a pale-blue base, dense white dot print, rounded neckline, short front placket with buttons and softly gathered shoulder construction. The relaxed silhouette is suitable for casual women’s apparel.",
    features: [
      "Long sleeves",
      "All-over dot print",
      "Rounded neckline",
      "Front button placket",
      "Gathered shoulder detail",
      "Relaxed silhouette"
    ],
    altText: "Powder-blue women’s long-sleeve top with dense white dot print and front buttons"
  },
];

