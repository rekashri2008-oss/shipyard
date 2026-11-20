"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Reviews = dynamic(() => import("./Reviews"), {
  loading: () => (
    <div className="reviews-loading" aria-live="polite">
      Loading reviews…
    </div>
  ),
});

export default function LazyReviews({ productName }: { productName: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      const frame = requestAnimationFrame(() => setShouldLoad(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="reviews-shell">
      {shouldLoad ? (
        <Reviews productName={productName} />
      ) : (
        <div className="reviews-loading" aria-live="polite">
          Reviews load as you scroll
        </div>
      )}
    </section>
  );
}
