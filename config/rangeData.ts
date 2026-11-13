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
    id: "t-shirts-and-polos",
    type: "Garment",
    name: "T-Shirts and Polos",
    specLine: "Crew & V-Neck • 100% Cotton & Blends • XS–3XL • Custom Colours",
    tags: ["Private Label", "Custom Design", "Sample First"],
    moq: "Confirm with us",
    detail: "Crew neck, V-neck, polo and long-sleeve styles in cotton and blends. Plain, printed and yarn-dyed looks.",
    mainImage: "/images/products/olive-black-tshirt.webp",
    galleryImages: [
      "/images/products/olive-black-tshirt.webp",
      "/images/garments/polos.jpg",
      "/images/garments/tshirts.jpg"
    ],
    description: "Crew neck, V-neck, polo and long-sleeve styles made with our own knitted fabric in 100% combed cotton and blends. Engineered for international brands with private labelling, fit sampling, and in-house reactive dyeing."
  },
  {
    id: "kids-and-baby-wear",
    type: "Garment",
    name: "Kids and Baby Wear",
    specLine: "Rompers, Tees & Sweatshirts • Soft Bio-Washed Knits • 0M–14Y • Safe Dyes",
    tags: ["Soft Knits", "Safety Compliant", "Sample First"],
    moq: "Confirm with us",
    detail: "Soft knits for infants and children, made to buyer safety and labelling requirements.",
    mainImage: "/images/products/kids-color-block-sweatshirt.webp",
    galleryImages: [
      "/images/products/kids-color-block-sweatshirt.webp",
      "/images/garments/kids-wear.jpg",
      "/images/products/iridescent-party-dress.webp"
    ],
    description: "Soft knits for infants and children, produced in our own unit with strict safety protocols, needle detection, and certified skin-friendly dyes. Custom sizing and trims to buyer requirements."
  },
  {
    id: "mens-womens-knitwear",
    type: "Garment",
    name: "Men's and Women's Knitwear",
    specLine: "Casual Tops & Layering • Cotton, Modal & Blends • S–XXL • Yarn-Dyed",
    tags: ["Private Label", "Custom Fit", "Sample First"],
    moq: "Confirm with us",
    detail: "Casual tops, dresses, bottoms and layering pieces in knit fabrics.",
    mainImage: "/images/products/olive-vneck-sleeveless-top.webp",
    galleryImages: [
      "/images/products/olive-vneck-sleeveless-top.webp",
      "/images/products/white-blue-pinstriped-shirt.webp",
      "/images/products/powder-blue-dotted-top.webp"
    ],
    description: "Contemporary casual tops, sleeveless jerseys, dresses and layering essentials cut and stitched from in-house knitted fabrics. Tailored to international brand size charts."
  },
  {
    id: "activewear-and-loungewear",
    type: "Garment",
    name: "Activewear and Loungewear",
    specLine: "Hoodies, Joggers & Gym Wear • Stretch & French Terry • S–3XL • Performance",
    tags: ["Performance Knits", "Stretch Blends", "Sample First"],
    moq: "Confirm with us",
    detail: "Sports, gym and home wear in stretch and performance knits.",
    mainImage: "/images/products/powder-blue-dotted-top.webp",
    galleryImages: [
      "/images/products/powder-blue-dotted-top.webp",
      "/images/products/kids-color-block-sweatshirt.webp",
      "/images/products/olive-black-tshirt.webp"
    ],
    description: "Sports, gym and comfortable home wear developed in flexible stretch knits, french terry, and performance cotton blends with moisture-wicking and soft-touch finishing."
  },
  {
    id: "made-to-your-requirements",
    type: "Garment",
    name: "Made to Your Requirements",
    specLine: "Custom Tech Packs • Specialized Blends • All Sizes • Export Scalable",
    tags: ["Full Package", "Cut & Make", "Custom Brief"],
    moq: "Confirm with us",
    detail: "Another style or category? Send your tech pack or reference sample. We quote and sample it at export quality.",
    mainImage: "/images/products/white-blue-pinstriped-shirt.webp",
    galleryImages: [
      "/images/products/white-blue-pinstriped-shirt.webp",
      "/images/products/olive-black-tshirt.webp",
      "/images/products/kids-color-block-sweatshirt.webp"
    ],
    description: "Have a unique style, custom tech pack, or physical reference garment? Our export desk quotes, develops custom fabric swatches, and produces fit samples for your approval before bulk production."
  }
];
