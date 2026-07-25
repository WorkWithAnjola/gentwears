export type RetailBrand = "Gentwears" | "Nike" | "Adidas" | "New Balance" | "Rick Owens" | "ASICS";

export interface Product {
  id: number;
  slug: string;
  name: string;
  brand?: string;
  model?: string;
  retailBrand: RetailBrand;
  price: number;
  category: "Clothing" | "Shoes";
  collection: "Signature" | "New Arrivals";
  shoeCollection?: "Signature Collection" | "Luxury Sneakers" | "Streetwear Sneakers" | "Everyday Sneakers" | "Boots";
  images: [string, string];
  sizes: string[];
  description: string;
  tag?: "New" | "Best Seller" | "";
}

export interface CartItem extends Product {
  size: string;
  qty: number;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
}
