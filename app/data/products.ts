
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Sneakers" | "Audio" | "Wearables" | "Gadgets";
  emoji: string;
  image: string;
  accent: string;
  description: string;
  specs: string[];
}

export const products: Product[] = [
  {
    id: "wave-runner",
    name: "Wave Runner",
    tagline: "Everyday running sneakers built for long miles.",
    price: 129,
    category: "Sneakers",
    emoji: "👟",
    image: "/products/wave-runner.jpg",
    accent: "#6c8cff",
    description: "Lightweight running shoes with a breathable design.",
    specs: ["Knit upper", "Foam midsole", "320g per shoe", "Unisex sizing"],
  },
  {
    id: "pulse-buds",
    name: "Pulse Buds",
    tagline: "Wireless earbuds with deep, clean bass.",
    price: 89,
    category: "Audio",
    emoji: "🎧",
    accent: "#a06cff",
    image: "/products/pulse-buds.jpg",
    description: "Compact earbuds with noise cancellation.",
    specs: ["Noise cancellation", "8h battery", "USB-C case", "IPX4"],
  },
  {
    id: "smart-watch",
    name: "Smart Watch",
    tagline: "Track your day and stay connected.",
    price: 199,
    category: "Wearables",
    emoji: "⌚",
    image: "/products/smart-watch.jpg",
    accent: "#ff8c69",
    description: "A stylish smartwatch for everyday fitness tracking.",
    specs: ["Heart rate monitor", "GPS", "Water resistant", "Touchscreen"],
  },
  {
    id: "mini-drone",
    name: "Mini Drone",
    tagline: "Explore the skies with ease.",
    price: 249,
    category: "Gadgets",
    emoji: "🚁",
    image: "/products/mini-drone.jpg",
    accent: "#57c9a5",
    description: "A compact drone for creative aerial photography.",
    specs: ["HD camera", "Foldable design", "Remote control", "20min flight"],
  },
  {
    id: "street-sneakers",
    name: "Street Sneakers",
    tagline: "Comfort meets everyday street style.",
    price: 109,
    category: "Sneakers",
    emoji: "👟",
    image: "/products/street-sneakers.jpg",
    accent: "#e9a23b",
    description: "Comfortable sneakers designed for daily wear.",
    specs: ["Soft lining", "Rubber sole", "Lightweight", "Unisex sizing"],
  },
  {
    id: "studio-headphones",
    name: "Studio Headphones",
    tagline: "Enjoy every detail of your music.",
    price: 159,
    category: "Audio",
    emoji: "🎵",
    image: "/products/studio-headphone.jpg",
    accent: "#bd83d8",
    description: "Over-ear headphones with immersive sound.",
    specs: ["Wireless", "Noise isolation", "30h battery", "USB-C charging"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
