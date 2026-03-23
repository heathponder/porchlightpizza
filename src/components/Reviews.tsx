import ScrollReveal from "./ScrollReveal";

const reviews = [
  {
    name: "Marcus T.",
    stars: 5,
    text: "Best pizza in south Arkansas, hands down. The Porch Light Special with that hot honey drizzle is unreal. My wife and I come every Friday night.",
    time: "2 weeks ago",
  },
  {
    name: "Sarah B.",
    stars: 5,
    text: "We stumbled in at midnight after a road trip and it was the best decision we've ever made. Fresh, fast, and the staff was so friendly even at that hour. The Firefly is incredible.",
    time: "1 month ago",
  },
  {
    name: "James & Colleen R.",
    stars: 5,
    text: "Took our kids here for the first time and now they won't stop asking to go back. The garlic knots alone are worth the drive. Real family spot.",
    time: "3 weeks ago",
  },
  {
    name: "DeAndre W.",
    stars: 5,
    text: "The Moth is no joke — perfect level of heat with that hot honey to balance it. And the crust from that wood-fired oven? Nothing else compares around here.",
    time: "1 week ago",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="star text-sm">&#9733;</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-surface-alt scroll-mt-20 section-glow">
      <div className="max-w-6xl mx-auto px-5">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="inline-block border-l-2 border-accent pl-3 text-accent font-semibold text-sm tracking-wide mb-3">
              Reviews
            </p>
            <h2 className="font-heading text-3xl md:text-[2.75rem] font-bold text-text-primary mb-4 leading-tight">
              Don&apos;t take our word for it.
            </h2>
            <div className="flex items-center justify-center gap-2 text-text-secondary">
              <Stars count={5} />
              <span className="text-sm">4.9 stars on Google &middot; 200+ reviews</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <div className="bg-surface border border-border rounded-xl p-6 h-full flex flex-col hover:border-accent/30 transition-colors duration-300">
                <Stars count={review.stars} />
                <div className="review-quote mt-3 mb-4 flex-1">
                  <p className="text-text-primary text-sm leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center text-accent text-sm font-bold">
                      {review.name[0]}
                    </div>
                    <span className="text-text-primary text-sm font-medium">{review.name}</span>
                  </div>
                  <span className="text-text-secondary text-xs">{review.time}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}