
import type { Metadata } from "next";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";

export const metadata: Metadata = {
  title: "ShipYard | Gear for people who build, run, and explore",
  description:
    "Discover sneakers, audio, wearables, and gadgets made for people who build, run, and explore.",
};

export default function HomePage() {
  return (
    <main className="container">
      <header className="hero">
        <h1 className="hero-title">ShipYard</h1>
        <p className="hero-sub">
          Gear for people who build, run, and explore.
        </p>
      </header>

      <section>
        <div className="section-head">
          <h2 className="section-title">All Products</h2>
          <span className="section-count">
            {products.length} items
          </span>
        </div>

        <div className="grid">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              eager={index < 4}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
