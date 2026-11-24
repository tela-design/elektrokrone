import { ReviewCarousel } from "./review-carousel";
import { reviews, reviewStats } from "@/content/reviews";
import { site } from "@/content/site";
import { Icon } from "./icon";
import { Reveal } from "./reveal";

// sterne als text, damit screenreader und suchmaschinen sie lesen
function Stars() {
  return (
    <span className="stars" aria-label={`${reviewStats.rating} von 5 Sternen`}>
      ★★★★★
    </span>
  );
}

export function Reviews() {
  return (
    <section className="section reviews" id="bewertungen" aria-labelledby="reviews-title">
      <div className="wrap">
        <div className="section-head">
          <Reveal>
            <span className="kicker">Bewertungen</span>
            <h2 id="reviews-title">Was unsere Kunden sagen</h2>
            <p className="rating-summary">
              <Stars /> {reviewStats.rating.toFixed(1).replace(".", ",")} von 5 · {reviewStats.count} Bewertungen
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ReviewCarousel reviews={reviews} />
        </Reveal>

        {site.googleProfileUrl && (
          <div className="reviews-more">
            <a className="btn btn-outline" href={site.googleProfileUrl} target="_blank" rel="noopener">
              Alle Bewertungen auf Google <Icon name="arrow" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
