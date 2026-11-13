export interface RangeItem {
  id: string;
  type: "Fabric" | "Garment" | "Yarn";
  name: string;
  specLine: string;
  tags: string[];
  moq: string;
  detail: string;
  mainImage: string;
  galleryImages: string[];
  description: string;
}

export const rangeItems: RangeItem[] = [
  {
    id: "cotton-single-jersey",
    type: "Fabric",
    name: "Cotton Single Jersey Knit Fabric",
    specLine: "Single Jersey • 100% Combed Cotton • Custom GSM & Width",
    tags: ["Swatch", "Custom Dye", "Buyer Spec"],
    moq: "Confirm with us",
    detail: "100% Cotton [confirm exact composition]",
    mainImage: "/images/products/cotton-single-jersey.webp",
    galleryImages: [
      "/images/products/cotton-single-jersey.webp",
      "/images/fabrics/swatch-zoom.webp",
      "/images/fabrics/swatch-fold.webp"
    ],
    description: "Cotton Single Jersey Knit Fabric is a versatile knitted fabric for everyday apparel. Share your required GSM, colour, width and quantity for custom development."
  },
  {
    id: "cotton-modal-blend",
    type: "Fabric",
    name: "Cotton Modal Blend Knit Fabric",
    specLine: "Cotton & Modal Blend • Soft Hand Feel • Lightweight Apparel",
    tags: ["Soft Hand", "Custom Blend", "Sample"],
    moq: "Confirm with us",
    detail: "Cotton and modal [confirm exact ratio]",
    mainImage: "/images/products/cotton-modal-blend.webp",
    galleryImages: [
      "/images/products/cotton-modal-blend.webp",
      "/images/fabrics/swatch-zoom.webp",
      "/images/fabrics/swatch-fold.webp"
    ],
    description: "Combines premium cotton and modal fibres in a soft-hand knit developed for lightweight apparel. Blend ratio, GSM, colour and finish tailored to buyer specifications."
  },
  {
    id: "yarn-dyed-knit",
    type: "Fabric",
    name: "Yarn-Dyed Knit Fabric",
    specLine: "Engineered Stripes & Pattern • Multi-colour Feeders • Yarn-Dyed",
    tags: ["Yarn-Dyed", "Stripes", "Custom Pattern"],
    moq: "Confirm with us",
    detail: "Yarn-dyed knitted fabric for engineered stripes & patterns",
    mainImage: "/images/products/yarn-dyed-knit.webp",
    galleryImages: [
      "/images/products/yarn-dyed-knit.webp",
      "/images/fabrics/yarn-dyed-melange.webp",
      "/images/fabrics/swatch-fold.webp"
    ],
    description: "Uses coloured yarns to create engineered stripe or pattern effects. Colour combinations, construction, GSM and order quantity confirmed to match collection requirements."
  },
  {
    id: "neppy-blend-knit",
    type: "Fabric",
    name: "Neppy Blend Knit Fabric",
    specLine: "Visible Fibre Flecks • Textured Knitted Fabric • Natural Tone",
    tags: ["Textured", "Neppy Flecks", "Custom Color"],
    moq: "Confirm with us",
    detail: "Textured blend knit with organic fleck appearance",
    mainImage: "/images/products/neppy-blend-knit.webp",
    galleryImages: [
      "/images/products/neppy-blend-knit.webp",
      "/images/fabrics/swatch-zoom.webp"
    ],
    description: "Features visible organic fibre flecks that add depth and character to the fabric surface. Fibre blend, colour, GSM and construction confirmed for your garment program."
  },
  {
    id: "cotton-yarn-cone",
    type: "Yarn",
    name: "Cotton Yarn Cone",
    specLine: "Supplied on Cone • Knitwear & Weaving • Premium Grade",
    tags: ["Yarn Cone", "Knitwear", "Specification Check"],
    moq: "Confirm with us",
    detail: "Cotton [confirm grade and exact specification]",
    mainImage: "/images/products/cotton-yarn-cone.webp",
    galleryImages: [
      "/images/products/cotton-yarn-cone.webp",
      "/images/products/polyester-yarn-cone.webp"
    ],
    description: "High-grade cotton yarn supplied on cone for knitwear and fabric production. Yarn count, grade, colour and quantity confirmed against order specifications."
  },
  {
    id: "kids-color-block-sweatshirt",
    type: "Garment",
    name: "Colour-Block Kids’ Sweatshirt",
    specLine: "Crewneck & Long Sleeve • Cotton Fleece • Three-Tone Blocking",
    tags: ["Sample", "Private Label", "Kids Wear"],
    moq: "Confirm with us",
    detail: "Cotton fleece or cotton-blend fleece [confirm exact composition]",
    mainImage: "/images/products/kids-color-block-sweatshirt.webp",
    galleryImages: [
      "/images/products/kids-color-block-sweatshirt.webp",
      "/images/garments/kids-wear.jpg"
    ],
    description: "Three-tone children’s sweatshirt with warm ivory upper panel, muted periwinkle middle panel, and deep navy lower panel with ribbed cuffs and hem."
  },
  {
    id: "olive-black-tshirt",
    type: "Garment",
    name: "Olive & Black Colour-Block T-Shirt",
    specLine: "Crewneck & Short Sleeve • Fine Knit Texture • Casual Apparel",
    tags: ["Private Label", "Custom Cut", "Export Quality"],
    moq: "Confirm with us",
    detail: "Cotton knit or cotton-blend knit [confirm exact composition]",
    mainImage: "/images/products/olive-black-tshirt.webp",
    galleryImages: [
      "/images/products/olive-black-tshirt.webp",
      "/images/garments/tshirts.jpg"
    ],
    description: "Short-sleeve knit T-shirt with olive upper/lower body and bold black chest and sleeve panels. Tailored for private label knitwear programs."
  },
  {
    id: "white-blue-pinstriped-shirt",
    type: "Garment",
    name: "White Blue Pinstriped Shirt",
    specLine: "Open Spread Collar • Button Placket & Sleeve Tabs • Woven Fabric",
    tags: ["Woven", "Pinstripe", "Full Package"],
    moq: "Confirm with us",
    detail: "Cotton or cotton-blend woven fabric [confirm exact composition]",
    mainImage: "/images/products/white-blue-pinstriped-shirt.webp",
    galleryImages: [
      "/images/products/white-blue-pinstriped-shirt.webp"
    ],
    description: "Clean long-sleeve shirt with pale-blue vertical pinstripes, open spread collar, front button placket, and sleeve tab details with a relaxed fit."
  }
];
