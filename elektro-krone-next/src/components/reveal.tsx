"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

// blendet den inhalt beim ersten sichtbar werden ein
export function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const style = { "--d": `${delay}ms` } as CSSProperties;

  return (
    <div ref={ref} className={`reveal ${shown ? "is-in" : ""}`} style={style}>
      {children}
    </div>
  );
}
