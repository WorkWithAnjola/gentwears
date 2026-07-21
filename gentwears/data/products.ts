import { Product, Review } from "@/types";
import { img } from "@/lib/utils";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "obsidian-tailored-blazer",
    name: "Obsidian Tailored Blazer",
    price: 128000,
    category: "Clothing",
    collection: "Signature",
    images: [img("photo-1520975954732-35dd22299614"), img("photo-1594938298603-c8148c4dae35")],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Cut from a heavyweight wool blend, the Obsidian Blazer is built for the man who commands a room without raising his voice. Structured shoulders, a nipped waist, and a single gold-lined interior pocket.",
    tag: "Best Seller",
  },
  {
    id: 2,
    slug: "ivory-crepe-shirt",
    name: "Ivory Crepe Shirt",
    price: 42000,
    category: "Clothing",
    collection: "New Arrivals",
    images: [img("photo-1596755094514-f87e34085b2c"), img("photo-1596755094514-f87e34085b2c")],
    sizes: ["S", "M", "L", "XL"],
    description:
      "A crepe-weave shirt with a soft drape and a mother-of-pearl button placket. Pairs as easily with denim as it does under the Obsidian Blazer.",
    tag: "New",
  },
  {
    id: 3,
    slug: "sable-wide-leg-trouser",
    name: "Sable Wide-Leg Trouser",
    price: 68000,
    category: "Clothing",
    collection: "Signature",
    images: [img("photo-1517445312882-bc9910d016b7"), img("photo-1517445312882-bc9910d016b7")],
    sizes: ["30", "32", "34", "36"],
    description:
      "High-rise, wide-leg tailoring in brushed sable twill. Deep pockets, a clean break at the ankle, and a fit that moves with you.",
    tag: "Best Seller",
  },
  {
    id: 4,
    slug: "camel-overcoat",
    name: "Camel Overcoat",
    price: 165000,
    category: "Clothing",
    collection: "Signature",
    images: [img("photo-1544022613-e87ca75a784a"), img("photo-1544022613-e87ca75a784a")],
    sizes: ["M", "L", "XL"],
    description:
      "An heirloom-weight overcoat in camel wool, lined in gold-flecked silk. The kind of piece you hand down, not replace.",
    tag: "",
  },
  {
    id: 5,
    slug: "gentwears-ivory-sneaker",
    name: "Gentwears Ivory Sneaker",
    price: 58000,
    category: "Shoes",
    collection: "New Arrivals",
    images: [img("photo-1549298916-b41d501d3772"), img("photo-1595950653106-6c9ebd614d3a")],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "A minimal court silhouette in full-grain ivory leather with gold-tipped laces. Unisex last, street-ready, boardroom-clean.",
    tag: "New",
  },
  {
    id: 6,
    slug: "onyx-chelsea-boot",
    name: "Onyx Chelsea Boot",
    price: 96000,
    category: "Shoes",
    collection: "Signature",
    images: [img("photo-1520639888713-7851133b1ed0"), img("photo-1520639888713-7851133b1ed0")],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "Hand-burnished calfskin, elastic side gussets, a stacked leather heel. Built to be worn until it's broken in, never broken down.",
    tag: "Best Seller",
  },
  {
    id: 7,
    slug: "sand-low-top",
    name: "Sand Low-Top",
    price: 52000,
    category: "Shoes",
    collection: "New Arrivals",
    images: [img("photo-1552346154-21d32810aba3"), img("photo-1552346154-21d32810aba3")],
    sizes: ["40", "41", "42", "43", "44", "45"],
    description:
      "A quiet-luxury low-top in sand suede with a natural gum sole. Unisex fit, made to age gracefully.",
    tag: "",
  },
  {
    id: 8,
    slug: "charcoal-knit-polo",
    name: "Charcoal Knit Polo",
    price: 38000,
    category: "Clothing",
    collection: "New Arrivals",
    images: [img("photo-1618354691373-d851c5c3a990"), img("photo-1618354691373-d851c5c3a990")],
    sizes: ["S", "M", "L", "XL"],
    description:
      "Fine-gauge merino knit with a ribbed placket and horn buttons. Elevated basics, done properly.",
    tag: "",
  },
];

export const REVIEWS: Review[] = [
  { name: "Damilola A.", rating: 5, text: "The Obsidian Blazer fits like it was made for me. Fabric feels genuinely premium, not fast-fashion premium." },
  { name: "Chidi O.", rating: 5, text: "Ordered the Chelsea boots — arrived fast, packaging alone felt like a luxury unboxing. Wearing them weekly." },
  { name: "Tobi K.", rating: 4, text: "Great quality, sizing runs slightly large so go one down. Customer service on WhatsApp was quick and helpful." },
];
