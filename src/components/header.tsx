import Link from "next/link";
import type { CSSProperties, VFC } from "react";

const h1Style: CSSProperties = {
  fontFamily: "'Secular One', sans-serif;",
};

export const Header: VFC = () => {
  return (
    <header className="h-20 shadow">
      <div className="max-w-layout mx-auto h-full flex items-center">
        <Link href="/">
          <h1 className="text-lightBlue text-4xl font-semibold cursor-pointer select-none" style={h1Style}>
            Bubekiti Blog
          </h1>
        </Link>
      </div>
    </header>
  );
};
