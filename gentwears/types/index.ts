export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  category: "Clothing" | "Shoes";
  collection: "Signature" | "New Arrivals";
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
