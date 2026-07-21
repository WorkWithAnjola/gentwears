export const formatNaira = (n: number): string => `₦${n.toLocaleString()}`;

export const img = (id: string): string =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;
