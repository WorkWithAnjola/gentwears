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

const EU_SIZES = ["EU 39", "EU 40", "EU 41", "EU 42", "EU 43", "EU 44", "EU 45", "EU 46", "EU 47"];

export const PRODUCTS: Product[] = [
  // --- 1. NIKE ---
  {
    id: "nike-1",
    name: "Nike Air Force 1 Low",
    brand: "Nike",
    price: 58500,
    category: "Footwear",
    images: ["/products/nike-air-force-1-low-1.webp", "/products/nike-air-force-1-low-2.webp"],
    slug: "nike-air-force-1-low",
    sizes: EU_SIZES,
    description: "The legendary classic featuring crisp leather, bold details, and the perfect everyday silhouette."
  },
  {
    id: "nike-2",
    name: 'Nike Dunk Low "Panda"',
    brand: "Nike",
    price: 65500,
    category: "Footwear",
    images: ["/products/nike-dunk-low-panda-1.webp", "/products/nike-dunk-low-panda-2.webp"],
    slug: "nike-dunk-low-panda",
    sizes: EU_SIZES,
    description: "The iconic black-and-white colorway that defined modern streetwear culture."
  },
  {
    id: "nike-3",
    name: "Nike Air Jordan 1 Low",
    brand: "Nike",
    price: 80000,
    category: "Footwear",
    images: ["/products/nike-air-jordan-1-low-1.webp", "/products/nike-air-jordan-1-low-2.webp"],
    slug: "nike-air-jordan-1-low",
    sizes: EU_SIZES,
    description: "Timeless court heritage paired with low-top versatility and premium comfort."
  },
  {
    id: "nike-4",
    name: "Nike Air Max 90",
    brand: "Nike",
    price: 68000,
    category: "Footwear",
    images: ["/products/nike-air-max-90-1.webp", "/products/nike-air-max-90-2.webp"],
    slug: "nike-air-max-90",
    sizes: EU_SIZES,
    description: "Waffle outsole, stitched overlays, and classic Air cushioning for undeniable comfort."
  },
  {
    id: "nike-5",
    name: "Nike Shox TL",
    brand: "Nike",
    price: 85000,
    category: "Footwear",
    images: ["/products/nike-shox-tl-1.webp", "/products/nike-shox-tl-2.webp"],
    slug: "nike-shox-tl",
    sizes: EU_SIZES,
    description: "Mechanical cushioning takes center stage with full-length Shox technology and bold styling."
  },
  {
    id: "nike-6",
    name: "Nike Vomero 5",
    brand: "Nike",
    price: 110000,
    category: "Footwear",
    images: ["/products/nike-vomero-5-1.webp", "/products/nike-vomero-5-2.webp"],
    slug: "nike-vomero-5",
    sizes: EU_SIZES,
    description: "Complexity and depth combine with breathable textiles and plastic plating for ultimate running tech."
  },
  {
    id: "nike-7",
    name: "Nike Air Max Plus (TN)",
    brand: "Nike",
    price: 85000,
    category: "Footwear",
    images: ["/products/nike-air-max-plus-1.webp", "/products/nike-air-max-plus-2.webp"],
    slug: "nike-air-max-plus",
    sizes: EU_SIZES,
    description: "Tuned Air experience offering premium stability and striking beach-sunset inspired lines."
  },
  {
    id: "nike-8",
    name: "Nike Air Jordan 4 Retro",
    brand: "Nike",
    price: 88000,
    category: "Footwear",
    images: ["/products/nike-air-jordan-4-retro-1.webp", "/products/nike-air-jordan-4-retro-2.webp"],
    slug: "nike-air-jordan-4-retro",
    sizes: EU_SIZES,
    description: "Legendary heritage style featuring iconic support wings, mesh netting, and visible Air."
  },
  {
    id: "nike-9",
    name: "Nike SB Dunk Low",
    brand: "Nike",
    price: 75000,
    category: "Footwear",
    images: ["/products/nike-sb-dunk-low-1.webp", "/products/nike-sb-dunk-low-2.webp"],
    slug: "nike-sb-dunk-low",
    sizes: EU_SIZES,
    description: "Skateboarding staple engineered for boardfeel, impact absorption, and iconic colorblocking."
  },
  {
    id: "nike-10",
    name: "Nike Air Max 97",
    brand: "Nike",
    price: 78000,
    category: "Footwear",
    images: ["/products/nike-air-max-97-1.webp", "/products/nike-air-max-97-2.webp"],
    slug: "nike-air-max-97",
    sizes: EU_SIZES,
    description: "Inspired by Japanese bullet trains with full-length Max Air cushioning and sleek reflective piping."
  },

  // --- 2. ADIDAS ---
  {
    id: "adidas-1",
    name: "Adidas Samba OG",
    brand: "Adidas",
    price: 70000,
    category: "Footwear",
    images: ["/products/adidas-samba-og-1.JPG", "/products/adidas-samba-og-2.JPG"],
    slug: "adidas-samba-og",
    sizes: EU_SIZES,
    description: "The timeless indoor football shoe turned global streetwear icon."
  },
  {
    id: "adidas-2",
    name: "Adidas Gazelle Indoor",
    brand: "Adidas",
    price: 70000,
    category: "Footwear",
    images: ["/products/adidas-gazelle-indoor-1.JPG", "/products/adidas-gazelle-indoor-2.JPG"],
    slug: "adidas-gazelle-indoor",
    sizes: EU_SIZES,
    description: "Rich suede upper sitting atop a translucent gum rubber outsole."
  },
  {
    id: "adidas-3",
    name: "Adidas Campus 00s",
    brand: "Adidas",
    price: 68000,
    category: "Footwear",
    images: ["/products/adidas-campus-00s-1.webp", "/products/adidas-campus-00s-2.webp"],
    slug: "adidas-campus-00s",
    sizes: EU_SIZES,
    description: "Chunky skate aesthetic inspired by the early 2000s heritage."
  },
  {
    id: "adidas-4",
    name: "Adidas Yeezy Boost 350 V2",
    brand: "Adidas",
    price: 72000,
    category: "Footwear",
    images: ["/products/adidas-yeezy-boost-350-v2-1.JPG", "/products/adidas-yeezy-boost-350-v2-2.JPG"],
    slug: "adidas-yeezy-boost-350-v2",
    sizes: EU_SIZES,
    description: "Primeknit upper combined with responsive Boost cushioning for peerless comfort."
  },
  {
    id: "adidas-5",
    name: "Adidas Stan Smith",
    brand: "Adidas",
    price: 88000,
    category: "Footwear",
    images: ["/products/adidas-stan-smith-1.JPG", "/products/adidas-stan-smith-2.JPG"],
    slug: "adidas-stan-smith",
    sizes: EU_SIZES,
    description: "The quintessential clean tennis shoe with minimalist perforated 3-Stripes."
  },
  {
    id: "adidas-6",
    name: "Adidas Superstar",
    brand: "Adidas",
    price: 90000,
    category: "Footwear",
    images: ["/products/adidas-superstar-1.JPG", "/products/adidas-superstar-2.JPG"],
    slug: "adidas-superstar",
    sizes: EU_SIZES,
    description: "Recognizable worldwide by its iconic rubber shell toe design."
  },
  {
    id: "adidas-7",
    name: "Adidas Forum Low",
    brand: "Adidas",
    price: 70000,
    category: "Footwear",
    images: ["/products/adidas-forum-low-1.webp", "/products/adidas-forum-low-2.JPG"],
    slug: "adidas-forum-low",
    sizes: EU_SIZES,
    description: "B-ball legacy with an adjustable ankle strap and premium leather build."
  },
  {
    id: "adidas-8",
    name: "Adidas Spezial (Handball Spezial)",
    brand: "Adidas",
    price: 70000,
    category: "Footwear",
    images: ["/products/adidas-spezial-1.JPG", "/products/adidas-spezial-2.JPG"],
    slug: "adidas-spezial",
    sizes: EU_SIZES,
    description: "Classic terrace footwear built with soft suede and vintage T-toe overlays."
  },
  {
    id: "adidas-9",
    name: "Adidas NMD_R1",
    brand: "Adidas",
    price: 68000,
    category: "Footwear",
    images: ["/products/adidas-nmd-r1-1.JPG", "/products/adidas-nmd-r1-2.JPG"],
    slug: "adidas-nmd-r1",
    sizes: EU_SIZES,
    description: "Urban runner equipped with signature midsole plugs and energy-returning Boost."
  },
  {
    id: "adidas-10",
    name: "Adidas Ultraboost Light",
    brand: "Adidas",
    price: 80000,
    category: "Footwear",
    images: ["/products/adidas-ultraboost-light-1.JPG", "/products/adidas-ultraboost-light-2.JPG"],
    slug: "adidas-ultraboost-light",
    sizes: EU_SIZES,
    description: "Our lightest Ultraboost ever featuring maximum cushioning and responsiveness."
  },

  // --- 3. NEW BALANCE ---
  {
    id: "nb-1",
    name: "New Balance 550",
    brand: "New Balance",
    price: 85000,
    category: "Footwear",
    images: ["/products/new-balance-550-1.webp", "/products/new-balance-550-2.webp"],
    slug: "new-balance-550",
    sizes: EU_SIZES,
    description: "Retro basketball silhouette revived from the late 80s archives."
  },
  {
    id: "nb-2",
    name: "New Balance 9060",
    brand: "New Balance",
    price: 69999,
    category: "Footwear",
    images: ["/products/new-balance-9060-1.webp", "/products/new-balance-9060-2.webp"],
    slug: "new-balance-9060",
    sizes: EU_SIZES,
    description: "Futuristic chunky runner drawing inspiration from classic 99x models."
  },
  {
    id: "nb-3",
    name: "New Balance 2002R",
    brand: "New Balance",
    price: 75000,
    category: "Footwear",
    images: ["/products/new-balance-2002r-1.webp", "/products/new-balance-2002r-2.webp"],
    slug: "new-balance-2002r",
    sizes: EU_SIZES,
    description: "2010s running favorite re-engineered with premium suede and ABZORB cushioning."
  },
  {
    id: "nb-4",
    name: "New Balance 327",
    brand: "New Balance",
    price: 88000,
    category: "Footwear",
    images: ["/products/new-balance-327-1.webp", "/products/new-balance-327-2.webp"],
    slug: "new-balance-327",
    sizes: EU_SIZES,
    description: "Bold wedge silhouette with an oversized 'N' logo and studded trail outsole."
  },
  {
    id: "nb-5",
    name: "New Balance 990v6",
    brand: "New Balance",
    price: 78000,
    category: "Footwear",
    images: ["/products/new-balance-990v6-1.webp", "/products/new-balance-990v6-2.webp"],
    slug: "new-balance-990v6",
    sizes: EU_SIZES,
    description: "The pinnacle of craftsmanship and cushioning in the legendary 990 line."
  },
  {
    id: "nb-6",
    name: "New Balance 574",
    brand: "New Balance",
    price: 82000,
    category: "Footwear",
    images: ["/products/new-balance-574-1.webp", "/products/new-balance-574-2.webp"],
    slug: "new-balance-574",
    sizes: EU_SIZES,
    description: "The quintessential go-anywhere shoe combining comfort and simplicity."
  },
  {
    id: "nb-7",
    name: "New Balance 1906R",
    brand: "New Balance",
    price: 78000,
    category: "Footwear",
    images: ["/products/new-balance-1906r-1.webp", "/products/new-balance-1906r-2.webp"],
    slug: "new-balance-1906r",
    sizes: EU_SIZES,
    description: "Technical runner featuring an open mesh upper and stability web technology."
  },
  {
    id: "nb-8",
    name: "New Balance 993",
    brand: "New Balance",
    price: 68000,
    category: "Footwear",
    images: ["/products/new-balance-993-1.webp", "/products/new-balance-993-2.webp"],
    slug: "new-balance-993",
    sizes: EU_SIZES,
    description: "Made in USA classic offering unmatched comfort and timeless grey styling."
  },
  {
    id: "nb-9",
    name: "New Balance 650",
    brand: "New Balance",
    price: 90000,
    category: "Footwear",
    images: ["/products/new-balance-650-1.webp", "/products/new-balance-650-2.webp"],
    slug: "new-balance-650",
    sizes: EU_SIZES,
    description: "High-top counterpart to the 550, offering vintage padded collar detailing."
  },
  {
    id: "nb-10",
    name: "New Balance Fresh Foam X More Trail",
    brand: "New Balance",
    price: 90000,
    category: "Footwear",
    images: ["/products/new-balance-fresh-foam-x-more-trail-1.webp", "/products/new-balance-fresh-foam-x-more-trail-2.webp"],
    slug: "new-balance-fresh-foam-x-more-trail",
    sizes: EU_SIZES,
    description: "Maximum cushioning built for rugged trails and outdoor adventures."
  },

  // --- 4. RICK OWENS ---
  {
    id: "ro-1",
    name: "Rick Owens Geobasket High-Top",
    brand: "Rick Owens",
    price: 210000,
    category: "Footwear",
    images: ["/products/rick-owens-geobasket-high-top-1.webp.JPG", "/products/rick-owens-geobasket-high-top-2.webp.JPG"],
    slug: "rick-owens-geobasket-high-top",
    sizes: EU_SIZES,
    description: "Avant-garde calfskin high-tops with an exaggerated padded tongue and shark-tooth sole."
  },
  {
    id: "ro-2",
    name: "Rick Owens DRKSHDW Ramones Canvas Low",
    brand: "Rick Owens",
    price: 150000,
    category: "Footwear",
    images: ["/products/rick-owens-drkshdw-ramones-canvas-low-1.webp.JPG", "/products/rick-owens-drkshdw-ramones-canvas-low-2.webp.JPG"],
    slug: "rick-owens-drkshdw-ramones-canvas-low",
    sizes: EU_SIZES,
    description: "Heavyweight organic cotton canvas low-tops with structured toe caps."
  },
  {
    id: "ro-3",
    name: "Rick Owens DRKSHDW Ramones High-Top",
    brand: "Rick Owens",
    price: 215000,
    category: "Footwear",
    images: ["/products/rick-owens-drkshdw-ramones-high-top-1.webp.JPG", "/products/rick-owens-drkshdw-ramones-high-top-2.webp.JPG"],
    slug: "rick-owens-drkshdw-ramones-high-top",
    sizes: EU_SIZES,
    description: "The iconic rebellious high-top staple featuring side zip closures and heavy canvas."
  },
  {
    id: "ro-4",
    name: "Rick Owens Turbodark Chuck 70",
    brand: "Rick Owens",
    price: 270000,
    category: "Footwear",
    images: ["/products/rick-owens-turbodark-chuck-70-1.webp.JPG", "/products/rick-owens-turbodark-chuck-70-2.webp.JPG"],
    slug: "rick-owens-turbodark-chuck-70",
    sizes: EU_SIZES,
    description: "Subversive Converse collaboration featuring an elongated square toe and custom branding."
  },
  {
    id: "ro-5",
    name: "Rick Owens Megalace Bozo Tractor",
    brand: "Rick Owens",
    price: 350000,
    category: "Footwear",
    images: ["/products/rick-owens-megalace-bozo-tractor-1.webp.JPG", "/products/rick-owens-megalace-bozo-tractor-2.webp.JPG"],
    slug: "rick-owens-megalace-bozo-tractor",
    sizes: EU_SIZES,
    description: "Striking sculptural footwear with exaggerated treaded rubber soles and chunky lacing."
  },
  {
    id: "ro-6",
    name: "Rick Owens Suede Abstract Runner",
    brand: "Rick Owens",
    price: 170000,
    category: "Footwear",
    images: ["/products/rick-owens-suede-abstract-runner-1.webp.JPG", "/products/rick-owens-suede-abstract-runner-2.webp.JPG"],
    slug: "rick-owens-suede-abstract-runner",
    sizes: EU_SIZES,
    description: "Curved geometric platform sole paired with luxurious textured suede uppers."
  },
  {
    id: "ro-7",
    name: "Rick Owens Vintage Sneaks",
    brand: "Rick Owens",
    price: 150000,
    category: "Footwear",
    images: ["/products/rick-owens-vintage-sneaks-1.webp.JPG", "/products/rick-owens-vintage-sneaks-2.webp.JPG"],
    slug: "rick-owens-vintage-sneaks",
    sizes: EU_SIZES,
    description: "Retro athletic inspired luxury sneaker crafted from premium treated calf leather."
  },
  {
    id: "ro-8",
    name: "Rick Owens Geth Runner",
    brand: "Rick Owens",
    price: 175000,
    category: "Footwear",
    images: ["/products/rick-owens-geth-runner-1.webp.JPG", "/products/rick-owens-geth-runner-2.webp.JPG"],
    slug: "rick-owens-geth-runner",
    sizes: EU_SIZES,
    description: "Aggressive flared sole construction with oversized padded collar architecture."
  },
  {
    id: "ro-9",
    name: "Rick Owens Bumper Sneaker",
    brand: "Rick Owens",
    price: 275000,
    category: "Footwear",
    images: ["/products/rick-owens-bumper-sneaker-1.webp.JPG", "/products/rick-owens-bumper-sneaker-2.webp.JPG"],
    slug: "rick-owens-bumper-sneaker",
    sizes: EU_SIZES,
    description: "Minimalist low-top silhouette anchored by a pronounced wrap-around rubber bumper."
  },
  {
    id: "ro-10",
    name: "Rick Owens Low Sneaks",
    brand: "Rick Owens",
    price: 145000,
    category: "Footwear",
    images: ["/products/rick-owens-low-sneaks-1.webp.JPG", "/products/rick-owens-low-sneaks-2.webp.JPG"],
    slug: "rick-owens-low-sneaks",
    sizes: EU_SIZES,
    description: "Sleek low-profile luxury leather sneaker with clean lines and serrated outsoles."
  },

  // --- 5. ASICS ---
  {
    id: "asics-1",
    name: "ASICS Gel-Kayano 14",
    brand: "ASICS",
    price: 85000,
    category: "Footwear",
    images: ["/products/asics-gel-kayano-14-1.webp.JPG", "/products/asics-gel-kayano-14-2.webp.JPG"],
    slug: "asics-gel-kayano-14",
    sizes: EU_SIZES,
    description: "Late 2000s running icon reimagined with metallic overlays and GEL technology."
  },
  {
    id: "asics-2",
    name: "ASICS Gel-Nimbus 9",
    brand: "ASICS",
    price: 88000,
    category: "Footwear",
    images: ["/products/asics-gel-nimbus-9-1.webp.JPG", "/products/asics-gel-nimbus-9-2.webp.JPG"],
    slug: "asics-gel-nimbus-9",
    sizes: EU_SIZES,
    description: "Originally a marathon runner, now styled for industrial techwear aesthetics."
  },
  {
    id: "asics-3",
    name: "ASICS GT-2160",
    brand: "ASICS",
    price: 80000,
    category: "Footwear",
    images: ["/products/asics-gt-2160-1.webp.JPG", "/products/asics-gt-2160-2.webp.JPG"],
    slug: "asics-gt-2160",
    sizes: EU_SIZES,
    description: "Honors the design language of the classic GT-2000 series with segmented midsole tooling."
  },
  {
    id: "asics-4",
    name: "ASICS Gel-NYC",
    brand: "ASICS",
    price: 90000,
    category: "Footwear",
    images: ["/products/asics-gel-nyc-1.webp.JPG", "/products/asics-gel-nyc-2.webp.JPG"],
    slug: "asics-gel-nyc",
    sizes: EU_SIZES,
    description: "Urban heritage styling blending influences from retro and modern performance running."
  },
  {
    id: "asics-5",
    name: "ASICS Gel-Sonoma 15-50",
    brand: "ASICS",
    price: 95000,
    category: "Footwear",
    images: ["/products/asics-gel-sonoma-15-50-1.webp.JPG", "/products/asics-gel-sonoma-15-50-2.webp.JPG"],
    slug: "asics-gel-sonoma-15-50",
    sizes: EU_SIZES,
    description: "Cross-country spike upper combined with trail-ready outsole traction."
  },
  {
    id: "asics-6",
    name: "ASICS Gel-Quantum 360",
    brand: "ASICS",
    price: 140000,
    category: "Footwear",
    images: ["/products/asics-gel-quantum-360-1.webp.JPG", "/products/asics-gel-quantum-360-2.webp.JPG"],
    slug: "asics-gel-quantum-360",
    sizes: EU_SIZES,
    description: "Continuous 360-degree GEL cushioning units for maximum shock absorption."
  },
  {
    id: "asics-7",
    name: "ASICS Gel-Lyte III",
    brand: "ASICS",
    price: 95000,
    category: "Footwear",
    images: ["/products/asics-gel-lyte-iii-1.webp.JPG", "/products/asics-gel-lyte-iii-2.webp.JPG"],
    slug: "asics-gel-lyte-iii",
    sizes: EU_SIZES,
    description: "Famous split-tongue design providing a secure, glove-like lockdown fit."
  },
  {
    id: "asics-8",
    name: "ASICS Japan S",
    brand: "ASICS",
    price: 150000,
    category: "Footwear",
    images: ["/products/asics-japan-s-1.webp.JPG", "/products/asics-japan-s-2.webp.JPG"],
    slug: "asics-japan-s",
    sizes: EU_SIZES,
    description: "Court-inspired retro throwback with clean leather overlays and lightweight cupsole."
  },
  {
    id: "asics-9",
    name: "ASICS EX89",
    brand: "ASICS",
    price: 120000,
    category: "Footwear",
    images: ["/products/asics-ex89-1.webp.JPG", "/products/asics-ex89-2.webp.JPG"],
    slug: "asics-ex89",
    sizes: EU_SIZES,
    description: "Basketball heritage model updated with FF BLAST cushioning technology."
  },
  {
    id: "asics-10",
    name: "ASICS Trabuco Max",
    brand: "ASICS",
    price: 160000,
    category: "Footwear",
    images: ["/products/asics-trabuco-max-1.webp.JPG", "/products/asics-trabuco-max-2.webp.JPG"],
    slug: "asics-trabuco-max",
    sizes: EU_SIZES,
    description: "Advanced trail running shoe designed to save energy over long-distance terrain."
  }
];
