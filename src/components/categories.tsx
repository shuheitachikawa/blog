import Link from "next/link";
import type { CSSProperties, VFC } from "react";
import { Category } from "src/types";
import { Icon } from "src/components/icon";

const categories: Category[] = [
  { name: "1", href: "/" },
  { name: "2", href: "/" },
  { name: "3", href: "/" },
  { name: "4", href: "/test" },
];

export const Categories: VFC = () => {
  return (
    <>
      <div className="flex mb-8">
        {categories.map((category) => (
          <div key={category.name} className="mr-5">
            <Link href={category.href}>
              <Icon size={70} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
