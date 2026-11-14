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
    mainImage: "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/3.webp",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/3.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/2.webp",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/10.webp"
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
    mainImage: "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/11.png",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/11.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/14.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/kidswear/3.png"
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
    mainImage: "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/1.png",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/1.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/womens%20wear/2.png",
      "https://ik.imagekit.io/wpxassets/value%20textiles/menswear/11.webp"
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
    mainImage: "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/8.png?updatedAt=1794640088021",
    galleryImages: [
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/8.png?updatedAt=1794640088021",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/4.png?updatedAt=1794640087972",
      "https://ik.imagekit.io/wpxassets/value%20textiles/activewear%20and%20lougewear/13.png?updatedAt=1794640087999"
    ],
    description: "Sports, gym and comfortable home wear developed in flexible stretch knits, french terry, and performance cotton blends with moisture-wicking and soft-touch finishing."
  }
];
