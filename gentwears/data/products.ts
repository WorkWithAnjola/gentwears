import { Product, Review } from "@/types";

export const PRODUCTS: Product[] = [
  // ===================== GENTWEARS — CLOTHING =====================
  {
    id: 1, slug: "obsidian-tailored-blazer", name: "Obsidian Tailored Blazer",
    retailBrand: "Gentwears", price: 128000, category: "Clothing", collection: "Signature",
    images: ["/products/obsidian-tailored-blazer-1.jpg", "/products/obsidian-tailored-blazer-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    description: "Cut from a heavyweight wool blend, the Obsidian Blazer is built for the man who commands a room without raising his voice. Structured shoulders, a nipped waist, and a single gold-lined interior pocket.",
    tag: "Best Seller",
  },
  {
    id: 2, slug: "ivory-crepe-shirt", name: "Ivory Crepe Shirt",
    retailBrand: "Gentwears", price: 42000, category: "Clothing", collection: "New Arrivals",
    images: ["/products/ivory-crepe-shirt-1.jpg", "/products/ivory-crepe-shirt-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    description: "A crepe-weave shirt with a soft drape and a mother-of-pearl button placket. Pairs as easily with denim as it does under the Obsidian Blazer.",
    tag: "New",
  },
  {
    id: 3, slug: "sable-wide-leg-trouser", name: "Sable Wide-Leg Trouser",
    retailBrand: "Gentwears", price: 68000, category: "Clothing", collection: "Signature",
    images: ["/products/sable-wide-leg-trouser-1.jpg", "/products/sable-wide-leg-trouser-2.jpg"],
    sizes: ["30", "32", "34", "36"],
    description: "High-rise, wide-leg tailoring in brushed sable twill. Deep pockets, a clean break at the ankle, and a fit that moves with you.",
    tag: "Best Seller",
  },
  {
    id: 4, slug: "camel-overcoat", name: "Camel Overcoat",
    retailBrand: "Gentwears", price: 165000, category: "Clothing", collection: "Signature",
    images: ["/products/camel-overcoat-1.jpg", "/products/camel-overcoat-2.jpg"],
    sizes: ["M", "L", "XL"],
    description: "An heirloom-weight overcoat in camel wool, lined in gold-flecked silk. The kind of piece you hand down, not replace.",
    tag: "",
  },
  {
    id: 8, slug: "charcoal-knit-polo", name: "Charcoal Knit Polo",
    retailBrand: "Gentwears", price: 38000, category: "Clothing", collection: "New Arrivals",
    images: ["/products/charcoal-knit-polo-1.jpg", "/products/charcoal-knit-polo-2.jpg"],
    sizes: ["S", "M", "L", "XL"],
    description: "Fine-gauge merino knit with a ribbed placket and horn buttons. Elevated basics, done properly.",
    tag: "",
  },

  // ===================== GENTWEARS HOUSE SHOES =====================
  {
    id: 5, slug: "gentwears-ivory-sneaker", name: "Gentwears Ivory Sneaker",
    brand: "Gentwears", model: "Signature Court GS-01", retailBrand: "Gentwears",
    price: 58000, category: "Shoes", shoeCollection: "Signature Collection", collection: "New Arrivals",
    images: ["/products/gentwears-ivory-sneaker-1.jpg", "/products/gentwears-ivory-sneaker-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A minimal court silhouette in full-grain ivory leather with gold-tipped laces. Unisex last, street-ready, boardroom-clean. The flagship shoe of the Gentwears house line.",
    tag: "New",
  },
  {
    id: 6, slug: "onyx-chelsea-boot", name: "Onyx Chelsea Boot",
    brand: "Gentwears", model: "Signature Chelsea GS-02", retailBrand: "Gentwears",
    price: 96000, category: "Shoes", shoeCollection: "Signature Collection", collection: "Signature",
    images: ["/products/onyx-chelsea-boot-1.jpg", "/products/onyx-chelsea-boot-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Hand-burnished calfskin, elastic side gussets, a stacked leather heel. Built to be worn until it's broken in, never broken down.",
    tag: "Best Seller",
  },
  {
    id: 9, slug: "aurelio-leather-low", name: "Aurelio Leather Low",
    brand: "Gentwears", model: "Aurelio LX-01", retailBrand: "Gentwears",
    price: 145000, category: "Shoes", shoeCollection: "Luxury Sneakers", collection: "Signature",
    images: ["/products/aurelio-leather-low-1.jpg", "/products/aurelio-leather-low-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Nappa leather upper hand-finished with a burnished toe cap, gold-plated eyelets, and a hand-stitched welt. Made in small batches.",
    tag: "Best Seller",
  },
  {
    id: 11, slug: "vandal-hi-top", name: "Vandal Hi-Top",
    brand: "Gentwears", model: "Vandal ST-01", retailBrand: "Gentwears",
    price: 72000, category: "Shoes", shoeCollection: "Streetwear Sneakers", collection: "New Arrivals",
    images: ["/products/vandal-hi-top-1.jpg", "/products/vandal-hi-top-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Chunky rubber outsole, panelled canvas-and-suede upper, oversized eyelets. Built for a heavier stance and a bolder silhouette.",
    tag: "New",
  },
  {
    id: 7, slug: "sand-low-top", name: "Sand Low-Top",
    brand: "Gentwears", model: "Sand EV-01", retailBrand: "Gentwears",
    price: 52000, category: "Shoes", shoeCollection: "Everyday Sneakers", collection: "New Arrivals",
    images: ["/products/sand-low-top-1.jpg", "/products/sand-low-top-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A quiet-luxury low-top in sand suede with a natural gum sole. Unisex fit, made to age gracefully.",
    tag: "",
  },
  {
    id: 15, slug: "waxed-derby-boot", name: "Waxed Derby Boot",
    brand: "Gentwears", model: "Derby BT-01", retailBrand: "Gentwears",
    price: 112000, category: "Shoes", shoeCollection: "Boots", collection: "Signature",
    images: ["/products/waxed-derby-boot-1.jpg", "/products/waxed-derby-boot-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "Waxed full-grain leather, a Goodyear-welted sole, and brass eyelets. Built for weather, finished for the boardroom.",
    tag: "",
  },

  // ===================== NIKE =====================
  {
    id: 20, slug: "nike-court-runner", name: "Nike Court Runner",
    retailBrand: "Nike", price: 84000, category: "Shoes", shoeCollection: "Everyday Sneakers", collection: "New Arrivals",
    images: ["/products/nike-court-runner-1.jpg", "/products/nike-court-runner-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "An authentic Nike low-top runner in a clean leather-and-mesh build, with signature Nike cushioning underfoot. Everyday comfort with court-shoe styling.",
    tag: "New",
  },
  {
    id: 21, slug: "nike-training-trainer", name: "Nike Training Trainer",
    retailBrand: "Nike", price: 92000, category: "Shoes", shoeCollection: "Streetwear Sneakers", collection: "New Arrivals",
    images: ["/products/nike-training-trainer-1.jpg", "/products/nike-training-trainer-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A versatile Nike training shoe built for the gym and the street alike, with breathable knit paneling and a responsive foam midsole.",
    tag: "",
  },

  // ===================== ADIDAS =====================
  {
    id: 22, slug: "adidas-street-low", name: "Adidas Street Low",
    retailBrand: "Adidas", price: 79000, category: "Shoes", shoeCollection: "Streetwear Sneakers", collection: "New Arrivals",
    images: ["/products/adidas-street-low-1.jpg", "/products/adidas-street-low-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "An authentic Adidas low-top with the brand's signature three-stripe detailing, a suede-and-mesh upper, and a durable rubber cupsole.",
    tag: "New",
  },
  {
    id: 23, slug: "adidas-primeknit-runner", name: "Adidas Primeknit Runner",
    retailBrand: "Adidas", price: 98000, category: "Shoes", shoeCollection: "Everyday Sneakers", collection: "New Arrivals",
    images: ["/products/adidas-primeknit-runner-1.jpg", "/products/adidas-primeknit-runner-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A sock-fit knit upper paired with Adidas's signature responsive foam sole. Lightweight, breathable, and built for all-day wear.",
    tag: "Best Seller",
  },

  // ===================== NEW BALANCE =====================
  {
    id: 24, slug: "new-balance-heritage-runner", name: "New Balance Heritage Runner",
    retailBrand: "New Balance", price: 89000, category: "Shoes", shoeCollection: "Everyday Sneakers", collection: "Signature",
    images: ["/products/new-balance-heritage-runner-1.jpg", "/products/new-balance-heritage-runner-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "An authentic New Balance suede-and-mesh runner with the brand's classic silhouette and cushioned ride — a dad-shoe icon done right.",
    tag: "Best Seller",
  },
  {
    id: 25, slug: "new-balance-trail-low", name: "New Balance Trail Low",
    retailBrand: "New Balance", price: 94000, category: "Shoes", shoeCollection: "Streetwear Sneakers", collection: "New Arrivals",
    images: ["/products/new-balance-trail-low-1.jpg", "/products/new-balance-trail-low-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A rugged low-top with an aggressive lug outsole and reinforced toe cap, built for trail and city wear alike.",
    tag: "",
  },

  // ===================== RICK OWENS =====================
  {
    id: 26, slug: "rick-owens-geobasket", name: "Rick Owens Geobasket-Style High-Top",
    retailBrand: "Rick Owens", price: 385000, category: "Shoes", shoeCollection: "Luxury Sneakers", collection: "Signature",
    images: ["/products/rick-owens-geobasket-1.jpg", "/products/rick-owens-geobasket-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "An authentic Rick Owens high-top in matte leather with the label's signature elevated rubber sole and avant-garde silhouette. A statement piece for the luxury sneaker collector.",
    tag: "Best Seller",
  },
  {
    id: 27, slug: "rick-owens-oversized-low", name: "Rick Owens Oversized Low-Top",
    retailBrand: "Rick Owens", price: 340000, category: "Shoes", shoeCollection: "Luxury Sneakers", collection: "New Arrivals",
    images: ["/products/rick-owens-oversized-low-1.jpg", "/products/rick-owens-oversized-low-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A sculptural low-top with an exaggerated sole unit, in Rick Owens's signature muted tonal leather. Genuine designer stock, sized true.",
    tag: "New",
  },

  // ===================== ASICS =====================
  {
    id: 28, slug: "asics-gel-runner", name: "ASICS Gel Runner",
    retailBrand: "ASICS", price: 76000, category: "Shoes", shoeCollection: "Everyday Sneakers", collection: "New Arrivals",
    images: ["/products/asics-gel-runner-1.jpg", "/products/asics-gel-runner-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "An authentic ASICS running shoe with the brand's signature Gel cushioning system, a breathable mesh upper, and a durable rubber outsole.",
    tag: "New",
  },
  {
    id: 29, slug: "asics-retro-trainer", name: "ASICS Retro Trainer",
    retailBrand: "ASICS", price: 81000, category: "Shoes", shoeCollection: "Streetwear Sneakers", collection: "Signature",
    images: ["/products/asics-retro-trainer-1.jpg", "/products/asics-retro-trainer-2.jpg"],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description: "A retro-inspired ASICS trainer in a nubuck-and-mesh build, with the brand's classic split-tongue construction and gum sole.",
    tag: "Best Seller",
  },
];

export const SHOE_COLLECTIONS = [
  "Signature Collection",
  "Luxury Sneakers",
  "Streetwear Sneakers",
  "Everyday Sneakers",
  "Boots",
] as const;

export const RETAIL_BRANDS = ["Gentwears", "Nike", "Adidas", "New Balance", "Rick Owens", "ASICS"] as const;

export const REVIEWS: Review[] = [
  { name: "Damilola A.", rating: 5, text: "The Obsidian Blazer fits like it was made for me. Fabric feels genuinely premium, not fast-fashion premium." },
  { name: "Chidi O.", rating: 5, text: "Ordered the Chelsea boots — arrived fast, packaging alone felt like a luxury unboxing. Wearing them weekly." },
  { name: "Tobi K.", rating: 4, text: "Great quality, sizing runs slightly large so go one down. Customer service on WhatsApp was quick and helpful." },
  { name: "Ngozi E.", rating: 5, text: "The Aurelio Leather Low is worth every naira — genuinely feels like a luxury sneaker, not a marked-up basic." },
];
