export type RetailBrand = "Gentwears" | "Nike" | "Adidas" | "New Balance" | "Rick Owens" | "ASICS";

export interface Product {
  id: string | number;
  slug: string;
  name: string;
  brand?: string;
  model?: string;
  retailBrand?: RetailBrand | string;
  price: number;
  category: string;
  collection?: string;
  shoeCollection?: string;
  images: string[] | [string, string];
  sizes?: string[];
  description?: string;
  tag?: string;
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
