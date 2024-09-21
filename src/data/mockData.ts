import { Product } from "../types";

const mockData: Product[] = [
  {
    id: 1,
    name: "Ürün 1",
    category: "Elektronik",
    price: 499.99,
    description: "Bu, Ürün 1 için detaylı bir açıklamadır.",
    image: "https://via.placeholder.com/300.png/09f/fff",
    colors: ["#3498db", "#2ecc71", "#e74c3c"],
    sizes: ["S", "M", "L", "XL"],
    ratings: 4.5,
    reviews: [
      { user: "Ali", comment: "Harika bir ürün!", rating: 5 },
      { user: "Ayşe", comment: "İyi kalite ancak biraz pahalı.", rating: 4 },
    ],
  },
  {
    id: 2,
    name: "Ürün 2",
    category: "Moda",
    price: 149.99,
    description: "Bu, Ürün 2 için detaylı bir açıklamadır.",
    image: "https://via.placeholder.com/300.png/09f/fff",
    colors: ["#e74c3c", "#f1c40f"],
    sizes: ["M", "L"],
    ratings: 4.0,
    reviews: [
      { user: "Mehmet", comment: "Beklentilerimi karşıladı.", rating: 4 },
    ],
  },
  // Diğer ürünler...
];

export default mockData;
