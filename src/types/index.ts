export interface Review {
  user: string;
  comment: string;
  rating: number;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  colors: string[];
  sizes: string[];
  ratings: number;
  reviews: Review[];
}

export interface User {
  id: number;
  name: string;
  email: string;
  favorites: number[]; // Favori ürün ID'leri
}
