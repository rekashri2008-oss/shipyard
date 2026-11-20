import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container">
      <div className="hero">
        <h1 className="hero-title">404</h1>
        <p className="hero-sub">
          Oops! This product could not be found.
        </p>
        <br />
        <Link href="/" style={{ color: "white" }}>
          Back to ShipYard
        </Link>
      </div>
    </main>
  );
}