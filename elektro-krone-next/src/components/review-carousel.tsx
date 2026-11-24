"use client";

import { useRef, useState } from "react";
import type { Review } from "@/content/reviews";
import { Icon } from "./icon";

// wischbares karussell. die pfeile scrollen eine karte weiter.
export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const track = useRef<HTMLDivElement>(null);

  const step = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="review-carousel">
      <div className="review-track" ref={track} role="region" aria-label="kundenbewertungen" tabIndex={0}>
        {reviews.map((review) => (
          <ReviewSlide key={review.name} review={review} />
        ))}
      </div>

      <div className="review-nav">
        <button type="button" className="nav-btn" aria-label="vorherige bewertung" onClick={() => step(-1)}>
          <Icon name="chev-left" />
        </button>
        <button type="button" className="nav-btn" aria-label="nächste bewertung" onClick={() => step(1)}>
          <Icon name="chev-right" />
        </button>
      </div>
    </div>
  );
}

// lange texte sind zuerst gekürzt, "mehr lesen" zeigt den ganzen text
function ReviewSlide({ review }: { review: Review }) {
  const [open, setOpen] = useState(false);
  const long = review.text.length > 170;

  return (
    <figure className="card review">
      <span className="stars" aria-label={`${review.stars} von 5 Sternen`}>
        ★★★★★
      </span>
      <blockquote className={long && !open ? "is-clamped" : undefined}>{review.text}</blockquote>
      {long && (
        <button type="button" className="read-more" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Weniger anzeigen" : "Mehr lesen"}
        </button>
      )}
      <figcaption>{review.name}</figcaption>
    </figure>
  );
}
