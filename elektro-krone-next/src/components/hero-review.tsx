import { randomReview } from "@/content/reviews";
import { Icon } from "./icon";

// zeigt bei jedem seitenaufruf eine zufällige 5-sterne-bewertung
export function HeroReview() {
  const review = randomReview();

  return (
    <figure className="hero-review" aria-label="google bewertung">
      <div className="hero-review-head">
        <span className="stars" aria-label={`${review.stars} von 5 Sternen`}>
          ★★★★★
        </span>
        <span className="hero-review-source">
          <Icon name="check" /> Google
        </span>
      </div>
      <blockquote>{review.text}</blockquote>
      <figcaption>{review.name}</figcaption>
    </figure>
  );
}
