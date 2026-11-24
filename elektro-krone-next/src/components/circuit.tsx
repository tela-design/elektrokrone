// dekorative leiterbahnen im hintergrund, werden per css gezeichnet.
// "fixed" liegt über die ganze seite und bleibt beim scrollen stehen.
export function Circuit({ variant = "hero" }: { variant?: "hero" | "page" | "fixed" }) {
  return (
    <svg
      className={`circuit circuit-${variant}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path d="M-20 170H360L460 270H820L900 190H1460" />
      <path d="M-20 430H250L330 510H760L840 430H1460" />
      <path d="M1110 -20V150L1210 250V520L1130 600H900" />
      <path d="M-20 720H520L600 640H1010" />
      <circle cx="360" cy="170" r="6" />
      <circle cx="820" cy="270" r="6" />
      <circle cx="330" cy="510" r="6" />
      <circle cx="1130" cy="600" r="6" />
    </svg>
  );
}
