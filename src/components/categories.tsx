import Link from "next/link";
import type { CSSProperties, VFC } from "react";
import { useRouter } from "next/router";
import { Category } from "src/types";
import { Icon } from "src/components/icon";

const categories: Category[] = [
  { href: "/", name: "/new.png" },
  { href: "/dev", name: "/dev.png" },
  { href: "/life", name: "/life.png" },
  // { name: "3", href: "/" },
];

export const Categories: VFC = () => {
  const router = useRouter();
  const routeName = router.pathname;
  return (
    <>
      <div className="flex sm:mb-8 sm:mt-0 mb-4 mt-4 px-4">
        {categories.map((category) => (
          <div
            key={category.href}
            className={`mr-5 cursor-pointer ${routeName !== category.href && "opacity-60"} duration-300`}
          >
            <Link href={category.href}>
              <div className="">
                <Icon size={70} href={category.name} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
