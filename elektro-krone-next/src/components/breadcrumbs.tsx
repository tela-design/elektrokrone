import Link from "next/link";
import { Icon } from "./icon";

export type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, i) => (
          <li key={item.path}>
            {i < items.length - 1 ? (
              <>
                <Link href={item.path}>{item.name}</Link>
                <Icon name="chev-right" />
              </>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
