import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

// nur in server components nutzen (liest den dateisystem-stand beim build)
const PUBLIC_DIR = path.join(process.cwd(), "public");
const EXTENSIONS = [".webp", ".avif", ".jpg", ".jpeg", ".png", ".svg"];

// erstes bild mit diesem namen, z.b. findImage("images/brand", "logo") -> "/images/brand/logo.svg"
export function findImage(dir: string, name: string): string | null {
  for (const ext of EXTENSIONS) {
    if (existsSync(path.join(PUBLIC_DIR, dir, name + ext))) {
      return `/${dir}/${name}${ext}`;
    }
  }
  return null;
}

// alle bilder eines ordners, sortiert nach dateiname
export function listImages(dir: string): string[] {
  const abs = path.join(PUBLIC_DIR, dir);
  if (!existsSync(abs)) return [];

  return readdirSync(abs)
    .filter((file) => EXTENSIONS.includes(path.extname(file).toLowerCase()))
    .sort()
    .map((file) => `/${dir}/${file}`);
}

// "01-led-deckenbeleuchtung.webp" -> "Led deckenbeleuchtung"
export function captionFromFile(src: string): string {
  const base = path.basename(src, path.extname(src)).replace(/^\d+-/, "").replace(/-/g, " ");
  return base.charAt(0).toUpperCase() + base.slice(1);
}
