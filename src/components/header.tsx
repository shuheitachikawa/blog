import Link from "next/link";
import type { CSSProperties, VFC } from "react";

export const Header: VFC = () => {
  return (
    <header className="sm:h-16 h-14 shadow">
      <div className="max-w-layout mx-auto h-full flex items-center sm:justify-start justify-center">
        <Link href="/">
          <h1 className="text-lightBlue text-3xl cursor-pointer select-none">bubekiti blog</h1>
        </Link>
      </div>
    </header>
  );
};
