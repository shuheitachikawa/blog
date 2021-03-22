import Link from "next/link";
import type { CSSProperties, VFC } from "react";

const h1Style: CSSProperties = {
  fontFamily: "'Secular One', sans-serif;",
};

export const Header: VFC = () => {
  return (
    <header className="h-20 shadow">
      <div className="max-w-layout mx-auto h-full flex items-center sm:justify-start justify-center px-4">
        <Link href="/">
          <h1 className="text-lightBlue sm:text-4xl text-3xl font-semibold cursor-pointer select-none" style={h1Style}>
            Bubekiti Blog
          </h1>
        </Link>
      </div>
    </header>
  );
};
