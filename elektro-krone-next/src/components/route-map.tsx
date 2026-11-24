import { site } from "@/content/site";
import { Icon } from "./icon";

// google maps api-key als platzhalter. in .env.local eintragen:
// NEXT_PUBLIC_GOOGLE_MAPS_KEY=dein-key
const KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY ?? "";
const address = `${site.street}, ${site.zip} ${site.city}`;

// link ohne api-key, öffnet die route in google maps
export const routeUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export function RouteMap() {
  if (!KEY) {
    return (
      <div className="media media-empty route-map" role="img" aria-label="karte folgt">
        <Icon name="pin" />
        <span>Karte folgt. Google Maps API-Key fehlt (NEXT_PUBLIC_GOOGLE_MAPS_KEY).</span>
      </div>
    );
  }

  const src = `https://www.google.com/maps/embed/v1/directions?key=${KEY}&destination=${encodeURIComponent(address)}&mode=driving`;

  return (
    <iframe
      className="route-map"
      src={src}
      title={`anfahrt zu ${site.name}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
