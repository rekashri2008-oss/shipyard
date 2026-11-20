
import Link from "next/link";
import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({
  product,
  eager,
}: {
  product: Product;
  eager: boolean;
}) {
  return (
    <Link href={`/products/${product.id}`} className="card">
      <div
        className="card-art"
        style={{ background: product.accent }}
      >
        <Image
          src={product.image}
          alt={`${product.name} product`}
          width={400}
          height={300}
          loading={eager ? "eager" : "lazy"}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          className="card-image"
        />
      </div>

      <div className="card-body">
        <span className="card-category">{product.category}</span>

        <h2 className="card-name">{product.name}</h2>

        <p className="card-tagline">{product.tagline}</p>

        <span className="card-price">${product.price}</span>
      </div>
    </Link>
  );
}
