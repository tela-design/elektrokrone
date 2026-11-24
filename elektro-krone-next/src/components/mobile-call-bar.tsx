import { site } from "@/content/site";
import { Icon } from "./icon";

// nur auf dem handy: anrufen und mailen mit einem tipp
export function MobileCallBar() {
  return (
    <div className="mobile-call">
      <a className="btn btn-primary" href={`tel:${site.phone.replace(/\s/g, "")}`}>
        <Icon name="phone" /> Anrufen
      </a>
      <a className="btn btn-ghost-dark" href={`mailto:${site.email}`}>
        <Icon name="mail" /> E-Mail
      </a>
    </div>
  );
}
