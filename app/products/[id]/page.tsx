import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import LazyReviews from "./LazyReviews";
import { getProduct, products } from "../../data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product not found",
      description:
        "The requested product could not be found in the ShipYard catalog.",
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense
      fallback={
        <main className="container">
          <Link href="/" className="back-link">
            ← Back to catalog
          </Link>
          <div className="detail-loading" aria-live="polite">
            Loading product…
          </div>
        </main>
      }
    >
      <ProductDetails params={params} />
    </Suspense>
  );
}

async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/" className="back-link">
        ← Back to catalog
      </Link>

      <article className="detail">
        <div
          className="detail-art"
          style={{ background: product.accent }}
        >
          <Image
            src={product.image}
            alt={`${product.name} product`}
            width={720}
            height={540}
            loading="eager"
            sizes="(max-width: 700px) 100vw, 50vw"
            className="detail-image"
          />
        </div>

        <div className="detail-body">
          <span className="card-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-tagline">{product.tagline}</p>
          <span className="detail-price">${product.price}</span>
          <p className="detail-desc">{product.description}</p>

          <h2 className="detail-specs-title">Specifications</h2>
          <ul className="detail-specs">
            {product.specs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
      </article>

      <LazyReviews productName={product.name} />
    </main>
  );
}