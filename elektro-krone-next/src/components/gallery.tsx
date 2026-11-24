"use client";

import { useEffect, useState } from "react";
import { Icon } from "./icon";
import { Media } from "./media";
export type GalleryItem = { src: string | null; caption: string };

export function Gallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const count = items.length;

  useEffect(() => {
    if (index === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % count);
      if (e.key === "ArrowLeft") setIndex((i) => ((i ?? 0) - 1 + count) % count);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, count]);

  const current = index === null ? null : items[index];

  return (
    <>
      <div className="gallery">
        {items.map((item, i) => (
          <button
            key={i}
            type="button"
            className="gallery-item"
            onClick={() => setIndex(i)}
            aria-label={`${item.caption} vergrößern`}
          >
            <Media src={item.src} alt={item.caption} label={`Foto ${i + 1}`} sizes="(max-width: 640px) 50vw, 25vw" />
            <span className="zoom">
              <Icon name="zoom" />
            </span>
          </button>
        ))}
      </div>

      {current && index !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.caption} onClick={() => setIndex(null)}>
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <Media src={current.src} alt={current.caption} label={current.caption} sizes="90vw" className="lightbox-media" />
            <p className="lightbox-caption">{current.caption}</p>
          </div>
          <button className="lb-btn lb-close" type="button" aria-label="schließen" onClick={() => setIndex(null)}>
            <Icon name="close" />
          </button>
          <button
            className="lb-btn lb-prev"
            type="button"
            aria-label="vorheriges bild"
            onClick={(e) => { e.stopPropagation(); setIndex((index - 1 + count) % count); }}
          >
            <Icon name="chev-left" />
          </button>
          <button
            className="lb-btn lb-next"
            type="button"
            aria-label="nächstes bild"
            onClick={(e) => { e.stopPropagation(); setIndex((index + 1) % count); }}
          >
            <Icon name="chev-right" />
          </button>
        </div>
      )}
    </>
  );
}
