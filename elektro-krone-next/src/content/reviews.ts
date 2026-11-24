// google-bewertungen liegen in reviews.json. nur 5-sterne-bewertungen, nur vollständige texte.
// neue bewertung: einfach einen eintrag in reviews.json ergänzen.
import data from "./reviews.json";

export type Review = {
  name: string;
  text: string;
  stars: number;
};

export const reviewStats = data.stats;

// nur 5-sterne-bewertungen anzeigen
export const reviews: Review[] = data.reviews.filter((r) => r.stars === 5);

// zufällige bewertung, bei jedem seitenaufruf neu (startseite ist dynamisch)
export function randomReview(): Review {
  return reviews[Math.floor(Math.random() * reviews.length)];
}
