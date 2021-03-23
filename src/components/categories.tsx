import Link from "next/link";
import type { VFC } from "react";
import { useRouter } from "next/router";
import { Category } from "src/types";

const categories: Category[] = [
  { href: "/", name: "/new.png", text: "NEW", color: "text-main", bg: "bg-mainl" },
  { href: "/dev", name: "/dev.png", text: "DEV", color: "text-dev", bg: "bg-devl" },
  { href: "/life", name: "/life.png", text: "LIFE", color: "text-life", bg: "bg-lifel" },
];

export const Categories: VFC = () => {
  const router = useRouter();
  const routeName = router.pathname;
  return (
    <>
      <div className="flex sm:mb-8 sm:mt-0 mb-4 mt-4 px-4">
        {categories.map((category) => (
          <Link href={category.href} key={category.href}>
            <div
              className={`sm:w-20 sm:h-20 w-16 h-16 rounded-full overflow-hidden flex justify-center sm:mr-5 mr-3 cursor-pointer ${
                routeName !== category.href && "opacity-60 shadow-lg"
              } duration-300 items-center ${category.bg}`}
            >
              <span className={`font-bold sm:text-xl text-lg ${category.color}`}>{category.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
