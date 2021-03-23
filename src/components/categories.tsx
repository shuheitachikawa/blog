import Link from "next/link";
import type { VFC } from "react";
// import { useRouter } from "next/router";
import { Category } from "src/types";
import { Icon } from "src/components/icon";

const categories: Category[] = [
  { href: "/", name: "/new.png" },
  { href: "/dev", name: "/dev.png" },
  { href: "/life", name: "/life.png" },
  // { name: "3", href: "/" },
];

export const Categories: VFC = () => {
  // const router = useRouter();
  // const routeName = router.pathname;
  return (
    <>
      <div className="flex sm:mb-8 sm:mt-0 mb-4 mt-4 px-4">
        {categories.map((category) => (
          <div key={category.href} className={`sm:mr-5 mr-3 cursor-pointer  duration-300`}>
            <Link href={category.href}>
              <div className="sm:w-20 w-16 rounded-full overflow-hidden">
                <p>a</p>
                {/* <img src={category.name} alt="" /> */}
                {/* <Icon size={70} href={category.name} /> */}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
