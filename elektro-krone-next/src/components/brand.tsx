import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { Icon } from "./icon";

// nur das logo, ohne zusatztext. ohne logo-datei gibt es ein symbol.
export function Brand({ logo }: { logo: string | null }) {
  return (
    <Link href="/" className="brand" aria-label={`${site.brand} startseite`}>
      {logo ? (
        <Image src={logo} alt={site.brand} width={180} height={56} priority className="brand-logo" />
      ) : (
        <span className="brand-mark">
          <Icon name="bolt" />
        </span>
      )}
    </Link>
  );
}
