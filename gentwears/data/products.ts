export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  images: string[];
  slug: string;
  tag?: string;
  sizes: string[];
  description: string;
}

export interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export const RETAIL_BRANDS = [
  "Nike",
  "Adidas",
  "New Balance",
  "Rick Owens",
  "ASICS"
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Tunde O.",
    text: "Absolute top-tier quality. The packaging and delivery were seamless. Will definitely order again!",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus A.",
    text: "The selection of brands and product presentation are unmatched. Exceptional customer experience.",
    rating: 5
  }
];

export const PRODUCTS: Product[] = [
  // --- 1. NIKE ---
  {
    id: "nike-1",
    name: "Nike Air Force 1 Low",
    brand: "Nike",
    price: 130,
    category: "Footwear",
    images: ["/images/nike-air-force-1-low-1.webp", "/images/nike-air-force-1-low-2.webp"],
    slug: "nike-air-force-1-low",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The legendary classic featuring crisp leather, bold details, and the perfect everyday silhouette."
  },
  {
    id: "nike-2",
    name: 'Nike Dunk Low "Panda"',
    brand: "Nike",
    price: 150,
    category: "Footwear",
    images: ["/images/nike-dunk-low-panda-1.webp", "/images/nike-dunk-low-panda-2.webp"],
    slug: "nike-dunk-low-panda",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The iconic black-and-white colorway that defined modern streetwear culture."
  },
  {
    id: "nike-3",
    name: "Nike Air Jordan 1 Low",
    brand: "Nike",
    price: 140,
    category: "Footwear",
    images: ["/images/nike-air-jordan-1-low-1.webp", "/images/nike-air-jordan-1-low-2.webp"],
    slug: "nike-air-jordan-1-low",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Timeless court heritage paired with low-top versatility and premium comfort."
  },
  {
    id: "nike-4",
    name: "Nike Air Max 90",
    brand: "Nike",
    price: 145,
    category: "Footwear",
    images: ["/images/nike-air-max-90-1.webp", "/images/nike-air-max-90-2.webp"],
    slug: "nike-air-max-90",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Waffle outsole, stitched overlays, and classic Air cushioning for undeniable comfort."
  },
  {
    id: "nike-5",
    name: "Nike Shox TL",
    brand: "Nike",
    price: 170,
    category: "Footwear",
    images: ["/images/nike-shox-tl-1.webp", "/images/nike-shox-tl-2.webp"],
    slug: "nike-shox-tl",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Mechanical cushioning takes center stage with full-length Shox technology and bold styling."
  },
  {
    id: "nike-6",
    name: "Nike Vomero 5",
    brand: "Nike",
    price: 160,
    category: "Footwear",
    images: ["/images/nike-vomero-5-1.webp", "/images/nike-vomero-5-2.webp"],
    slug: "nike-vomero-5",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Complexity and depth combine with breathable textiles and plastic plating for ultimate running tech."
  },
  {
    id: "nike-7",
    name: "Nike Air Max Plus (TN)",
    brand: "Nike",
    price: 175,
    category: "Footwear",
    images: ["/images/nike-air-max-plus-1.webp", "/images/nike-air-max-plus-2.webp"],
    slug: "nike-air-max-plus",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Tuned Air experience offering premium stability and striking beach-sunset inspired lines."
  },
  {
    id: "nike-8",
    name: "Nike Air Jordan 4 Retro",
    brand: "Nike",
    price: 210,
    category: "Footwear",
    images: ["/images/nike-air-jordan-4-retro-1.webp", "/images/nike-air-jordan-4-retro-2.webp"],
    slug: "nike-air-jordan-4-retro",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Legendary heritage style featuring iconic support wings, mesh netting, and visible Air."
  },
  {
    id: "nike-9",
    name: "Nike SB Dunk Low",
    brand: "Nike",
    price: 155,
    category: "Footwear",
    images: ["/images/nike-sb-dunk-low-1.webp", "/images/nike-sb-dunk-low-2.webp"],
    slug: "nike-sb-dunk-low",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Skateboarding staple engineered for boardfeel, impact absorption, and iconic colorblocking."
  },
  {
    id: "nike-10",
    name: "Nike Air Max 97",
    brand: "Nike",
    price: 180,
    category: "Footwear",
    images: ["/images/nike-air-max-97-1.webp", "/images/nike-air-max-97-2.webp"],
    slug: "nike-air-max-97",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Inspired by Japanese bullet trains with full-length Max Air cushioning and sleek reflective piping."
  },

  // --- 2. ADIDAS ---
  {
    id: "adidas-1",
    name: "Adidas Samba OG",
    brand: "Adidas",
    price: 120,
    category: "Footwear",
    images: ["/images/adidas-samba-og-1.webp", "/images/adidas-samba-og-2.webp"],
    slug: "adidas-samba-og",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The timeless indoor football shoe turned global streetwear icon."
  },
  {
    id: "adidas-2",
    name: "Adidas Gazelle Indoor",
    brand: "Adidas",
    price: 125,
    category: "Footwear",
    images: ["/images/adidas-gazelle-indoor-1.webp", "/images/adidas-gazelle-indoor-2.webp"],
    slug: "adidas-gazelle-indoor",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Rich suede upper sitting atop a translucent gum rubber outsole."
  },
  {
    id: "adidas-3",
    name: "Adidas Campus 00s",
    brand: "Adidas",
    price: 130,
    category: "Footwear",
    images: ["/images/adidas-campus-00s-1.webp", "/images/adidas-campus-00s-2.webp"],
    slug: "adidas-campus-00s",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Chunky skate aesthetic inspired by the early 2000s heritage."
  },
  {
    id: "adidas-4",
    name: "Adidas Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 230,
    category: "Footwear",
    images: ["/images/adidas-yeezy-boost-350-v2-1.webp", "/images/adidas-yeezy-boost-350-v2-2.webp"],
    slug: "adidas-yeezy-boost-350-v2",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Primeknit upper combined with responsive Boost cushioning for peerless comfort."
  },
  {
    id: "adidas-5",
    name: "Adidas Stan Smith",
    brand: "Adidas",
    price: 110,
    category: "Footwear",
    images: ["/images/adidas-stan-smith-1.webp", "/images/adidas-stan-smith-2.webp"],
    slug: "adidas-stan-smith",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The quintessential clean tennis shoe with minimalist perforated 3-Stripes."
  },
  {
    id: "adidas-6",
    name: "Adidas Superstar",
    brand: "Adidas",
    price: 115,
    category: "Footwear",
    images: ["/images/adidas-superstar-1.webp", "/images/adidas-superstar-2.webp"],
    slug: "adidas-superstar",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Recognizable worldwide by its iconic rubber shell toe design."
  },
  {
    id: "adidas-7",
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 135,
    category: "Footwear",
    images: ["/images/adidas-forum-low-1.webp", "/images/adidas-forum-low-2.webp"],
    slug: "adidas-forum-low",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "B-ball legacy with an adjustable ankle strap and premium leather build."
  },
  {
    id: "adidas-8",
    name: "Adidas Spezial (Handball Spezial)",
    brand: "Adidas",
    price: 120,
    category: "Footwear",
    images: ["/images/adidas-spezial-1.webp", "/images/adidas-spezial-2.webp"],
    slug: "adidas-spezial",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Classic terrace footwear built with soft suede and vintage T-toe overlays."
  },
  {
    id: "adidas-9",
    name: "Adidas NMD_R1",
    brand: "Adidas",
    price: 140,
    category: "Footwear",
    images: ["/images/adidas-nmd-r1-1.webp", "/images/adidas-nmd-r1-2.webp"],
    slug: "adidas-nmd-r1",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Urban runner equipped with signature midsole plugs and energy-returning Boost."
  },
  {
    id: "adidas-10",
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    price: 190,
    category: "Footwear",
    images: ["/images/adidas-ultraboost-light-1.webp", "/images/adidas-ultraboost-light-2.webp"],
    slug: "adidas-ultraboost-light",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Our lightest Ultraboost ever featuring maximum cushioning and responsiveness."
  },

  // --- 3. NEW BALANCE ---
  {
    id: "nb-1",
    name: "New Balance 550",
    brand: "New Balance",
    price: 130,
    category: "Footwear",
    images: ["/images/new-balance-550-1.webp", "/images/new-balance-550-2.webp"],
    slug: "new-balance-550",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Retro basketball silhouette revived from the late 80s archives."
  },
  {
    id: "nb-2",
    name: "New Balance 9060",
    brand: "New Balance",
    price: 160,
    category: "Footwear",
    images: ["/images/new-balance-9060-1.webp", "/images/new-balance-9060-2.webp"],
    slug: "new-balance-9060",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Futuristic chunky runner drawing inspiration from classic 99x models."
  },
  {
    id: "nb-3",
    name: "New Balance 2002R",
    brand: "New Balance",
    price: 150,
    category: "Footwear",
    images: ["/images/new-balance-2002r-1.webp", "/images/new-balance-2002r-2.webp"],
    slug: "new-balance-2002r",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "2010s running favorite re-engineered with premium suede and ABZORB cushioning."
  },
  {
    id: "nb-4",
    name: "New Balance 327",
    brand: "New Balance",
    price: 110,
    category: "Footwear",
    images: ["/images/new-balance-327-1.webp", "/images/new-balance-327-2.webp"],
    slug: "new-balance-327",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Bold wedge silhouette with an oversized 'N' logo and studded trail outsole."
  },
  {
    id: "nb-5",
    name: "New Balance 990v6",
    brand: "New Balance",
    price: 220,
    category: "Footwear",
    images: ["/images/new-balance-990v6-1.webp", "/images/new-balance-990v6-2.webp"],
    slug: "new-balance-990v6",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The pinnacle of craftsmanship and cushioning in the legendary 990 line."
  },
  {
    id: "nb-6",
    name: "New Balance 574",
    brand: "New Balance",
    price: 100,
    category: "Footwear",
    images: ["/images/new-balance-574-1.webp", "/images/new-balance-574-2.webp"],
    slug: "new-balance-574",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The quintessential go-anywhere shoe combining comfort and simplicity."
  },
  {
    id: "nb-7",
    name: "New Balance 1906R",
    brand: "New Balance",
    price: 155,
    category: "Footwear",
    images: ["/images/new-balance-1906r-1.webp", "/images/new-balance-1906r-2.webp"],
    slug: "new-balance-1906r",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Technical runner featuring an open mesh upper and stability web technology."
  },
  {
    id: "nb-8",
    name: "New Balance 993",
    brand: "New Balance",
    price: 210,
    category: "Footwear",
    images: ["/images/new-balance-993-1.webp", "/images/new-balance-993-2.webp"],
    slug: "new-balance-993",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Made in USA classic offering unmatched comfort and timeless grey styling."
  },
  {
    id: "nb-9",
    name: "New Balance 650",
    brand: "New Balance",
    price: 140,
    category: "Footwear",
    images: ["/images/new-balance-650-1.webp", "/images/new-balance-650-2.webp"],
    slug: "new-balance-650",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "High-top counterpart to the 550, offering vintage padded collar detailing."
  },
  {
    id: "nb-10",
    name: "New Balance Fresh Foam X More Trail",
    brand: "New Balance",
    price: 175,
    category: "Footwear",
    images: ["/images/new-balance-fresh-foam-x-more-trail-1.webp", "/images/new-balance-fresh-foam-x-more-trail-2.webp"],
    slug: "new-balance-fresh-foam-x-more-trail",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Maximum cushioning built for rugged trails and outdoor adventures."
  },

  // --- 4. RICK OWENS ---
  {
    id: "ro-1",
    name: "Rick Owens Geobasket High-Top",
    brand: "Rick Owens",
    price: 850,
    category: "Footwear",
    images: ["/images/rick-owens-geobasket-high-top-1.webp", "/images/rick-owens-geobasket-high-top-2.webp"],
    slug: "rick-owens-geobasket-high-top",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Avant-garde calfskin high-tops with an exaggerated padded tongue and shark-tooth sole."
  },
  {
    id: "ro-2",
    name: "Rick Owens DRKSHDW Ramones Canvas Low",
    brand: "Rick Owens",
    price: 540,
    category: "Footwear",
    images: ["/images/rick-owens-drkshdw-ramones-canvas-low-1.webp", "/images/rick-owens-drkshdw-ramones-canvas-low-2.webp"],
    slug: "rick-owens-drkshdw-ramones-canvas-low",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Heavyweight organic cotton canvas low-tops with structured toe caps."
  },
  {
    id: "ro-3",
    name: "Rick Owens DRKSHDW Ramones High-Top",
    brand: "Rick Owens",
    price: 590,
    category: "Footwear",
    images: ["/images/rick-owens-drkshdw-ramones-high-top-1.webp", "/images/rick-owens-drkshdw-ramones-high-top-2.webp"],
    slug: "rick-owens-drkshdw-ramones-high-top",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "The iconic rebellious high-top staple featuring side zip closures and heavy canvas."
  },
  {
    id: "ro-4",
    name: "Rick Owens Turbodark Chuck 70",
    brand: "Rick Owens",
    price: 220,
    category: "Footwear",
    images: ["/images/rick-owens-turbodark-chuck-70-1.webp", "/images/rick-owens-turbodark-chuck-70-2.webp"],
    slug: "rick-owens-turbodark-chuck-70",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Subversive Converse collaboration featuring an elongated square toe and custom branding."
  },
  {
    id: "ro-5",
    name: "Rick Owens Megalace Bozo Tractor",
    brand: "Rick Owens",
    price: 980,
    category: "Footwear",
    images: ["/images/rick-owens-megalace-bozo-tractor-1.webp", "/images/rick-owens-megalace-bozo-tractor-2.webp"],
    slug: "rick-owens-megalace-bozo-tractor",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Striking sculptural footwear with exaggerated treaded rubber soles and chunky lacing."
  },
  {
    id: "ro-6",
    name: "Rick Owens Suede Abstract Runner",
    brand: "Rick Owens",
    price: 790,
    category: "Footwear",
    images: ["/images/rick-owens-suede-abstract-runner-1.webp", "/images/rick-owens-suede-abstract-runner-2.webp"],
    slug: "rick-owens-suede-abstract-runner",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Curved geometric platform sole paired with luxurious textured suede uppers."
  },
  {
    id: "ro-7",
    name: "Rick Owens Vintage Sneaks",
    brand: "Rick Owens",
    price: 760,
    category: "Footwear",
    images: ["/images/rick-owens-vintage-sneaks-1.webp", "/images/rick-owens-vintage-sneaks-2.webp"],
    slug: "rick-owens-vintage-sneaks",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Retro athletic inspired luxury sneaker crafted from premium treated calf leather."
  },
  {
    id: "ro-8",
    name: "Rick Owens Geth Runner",
    brand: "Rick Owens",
    price: 810,
    category: "Footwear",
    images: ["/images/rick-owens-geth-runner-1.webp", "/images/rick-owens-geth-runner-2.webp"],
    slug: "rick-owens-geth-runner",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Aggressive flared sole construction with oversized padded collar architecture."
  },
  {
    id: "ro-9",
    name: "Rick Owens Bumper Sneaker",
    brand: "Rick Owens",
    price: 730,
    category: "Footwear",
    images: ["/images/rick-owens-bumper-sneaker-1.webp", "/images/rick-owens-bumper-sneaker-2.webp"],
    slug: "rick-owens-bumper-sneaker",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Minimalist low-top silhouette anchored by a pronounced wrap-around rubber bumper."
  },
  {
    id: "ro-10",
    name: "Rick Owens Low Sneaks",
    brand: "Rick Owens",
    price: 690,
    category: "Footwear",
    images: ["/images/rick-owens-low-sneaks-1.webp", "/images/rick-owens-low-sneaks-2.webp"],
    slug: "rick-owens-low-sneaks",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Sleek low-profile luxury leather sneaker with clean lines and serrated outsoles."
  },

  // --- 5. ASICS ---
  {
    id: "asics-1",
    name: "ASICS Gel-Kayano 14",
    brand: "ASICS",
    price: 150,
    category: "Footwear",
    images: ["/images/asics-gel-kayano-14-1.webp", "/images/asics-gel-kayano-14-2.webp"],
    slug: "asics-gel-kayano-14",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Late 2000s running icon reimagined with metallic overlays and GEL technology."
  },
  {
    id: "asics-2",
    name: "ASICS Gel-Nimbus 9",
    brand: "ASICS",
    price: 160,
    category: "Footwear",
    images: ["/images/asics-gel-nimbus-9-1.webp", "/images/asics-gel-nimbus-9-2.webp"],
    slug: "asics-gel-nimbus-9",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Originally a marathon runner, now styled for industrial techwear aesthetics."
  },
  {
    id: "asics-3",
    name: "ASICS GT-2160",
    brand: "ASICS",
    price: 130,
    category: "Footwear",
    images: ["/images/asics-gt-2160-1.webp", "/images/asics-gt-2160-2.webp"],
    slug: "asics-gt-2160",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Honors the design language of the classic GT-2000 series with segmented midsole tooling."
  },
  {
    id: "asics-4",
    name: "ASICS Gel-NYC",
    brand: "ASICS",
    price: 145,
    category: "Footwear",
    images: ["/images/asics-gel-nyc-1.webp", "/images/asics-gel-nyc-2.webp"],
    slug: "asics-gel-nyc",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Urban heritage styling blending influences from retro and modern performance running."
  },
  {
    id: "asics-5",
    name: "ASICS Gel-Sonoma 15-50",
    brand: "ASICS",
    price: 120,
    category: "Footwear",
    images: ["/images/asics-gel-sonoma-15-50-1.webp", "/images/asics-gel-sonoma-15-50-2.webp"],
    slug: "asics-gel-sonoma-15-50",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Cross-country spike upper combined with trail-ready outsole traction."
  },
  {
    id: "asics-6",
    name: "ASICS Gel-Quantum 360",
    brand: "ASICS",
    price: 190,
    category: "Footwear",
    images: ["/images/asics-gel-quantum-360-1.webp", "/images/asics-gel-quantum-360-2.webp"],
    slug: "asics-gel-quantum-360",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Continuous 360-degree GEL cushioning units for maximum shock absorption."
  },
  {
    id: "asics-7",
    name: "ASICS Gel-Lyte III",
    brand: "ASICS",
    price: 130,
    category: "Footwear",
    images: ["/images/asics-gel-lyte-iii-1.webp", "/images/asics-gel-lyte-iii-2.webp"],
    slug: "asics-gel-lyte-iii",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Famous split-tongue design providing a secure, glove-like lockdown fit."
  },
  {
    id: "asics-8",
    name: "ASICS Japan S",
    brand: "ASICS",
    price: 90,
    category: "Footwear",
    images: ["/images/asics-japan-s-1.webp", "/images/asics-japan-s-2.webp"],
    slug: "asics-japan-s",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Court-inspired retro throwback with clean leather overlays and lightweight cupsole."
  },
  {
    id: "asics-9",
    name: "ASICS EX89",
    brand: "ASICS",
    price: 120,
    category: "Footwear",
    images: ["/images/asics-ex89-1.webp", "/images/asics-ex89-2.webp"],
    slug: "asics-ex89",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Basketball heritage model updated with FF BLAST cushioning technology."
  },
  {
    id: "asics-10",
    name: "ASICS Trabuco Max",
    brand: "ASICS",
    price: 160,
    category: "Footwear",
    images: ["/images/asics-trabuco-max-1.webp", "/images/asics-trabuco-max-2.webp"],
    slug: "asics-trabuco-max",
    sizes: ["US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11"],
    description: "Advanced trail running shoe designed to save energy over long-distance terrain."
  }
];