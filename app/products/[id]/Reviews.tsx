const reviews = [
  {
    author: "Alex M.",
    rating: 5,
    text: "Thoughtful details and a comfortable fit make this an easy pick for everyday use.",
  },
  {
    author: "Jordan K.",
    rating: 5,
    text: "The quality feels solid, and it has quickly become part of my daily routine.",
  },
  {
    author: "Sam R.",
    rating: 4,
    text: "A dependable choice with a clean design. Very happy with how it performs.",
  },
];

export default function Reviews({ productName }: { productName: string }) {
  return (
    <div className="reviews">
      <div className="reviews-heading">
        <h2>Sample reviews for {productName}</h2>
        <p>Example customer feedback</p>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <article className="review" key={review.author}>
            <p className="review-rating" aria-label={`${review.rating} out of 5 stars`}>
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </p>
            <p className="review-copy">{review.text}</p>
            <p className="review-author">{review.author}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
