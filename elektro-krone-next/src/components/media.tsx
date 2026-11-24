import Image from "next/image";
import { Icon } from "./icon";

type Props = {
  src: string | null;
  alt: string;
  label?: string;
  sizes?: string;
  className?: string;
};

// zeigt das bild, oder einen platzhalter solange src null ist
export function Media({ src, alt, label, sizes = "(max-width: 768px) 100vw, 50vw", className = "" }: Props) {
  if (!src) {
    return (
      <div className={`media media-empty ${className}`} role="img" aria-label={alt}>
        <Icon name="image" />
        <span>{label ?? alt}</span>
      </div>
    );
  }

  return (
    <div className={`media ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} />
    </div>
  );
}
