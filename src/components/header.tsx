import Link from "next/link";
import type { CSSProperties, VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const h1Style :CSSProperties = {
  fontFamily: "'Secular One', sans-serif;"
};

export const Header: VFC = () => {
  return (
    <header className="h-20">
      <div className="max-w-screen-lg mx-auto h-full flex items-center">
        <Link href="/">
          <h1 className="text-lightBlue text-4xl font-semibold cursor-pointer" style={h1Style}>
            Bubekiti Blog
          </h1>
        </Link>
        {/* <nav>
        {items.map(({ href, label }) => {
          return (
            <Link key={href} href={href}>
              <a className="inline-block p-4">{label}</a>
            </Link>
          );
        })}
      </nav> */}
      </div>
    </header>
  );
};
