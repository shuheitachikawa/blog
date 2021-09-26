import Link from "next/link";
import React from "react";

export const Header: React.VFC = () => {
  return (
    <header className="sm:h-14 h-14 shadow">
      <div className="max-w-layout mx-auto h-full flex items-center sm:justify-start justify-center">
        <Link href="/">
          <h2 className="text-lightBlue sm:text-3xl text-2xl cursor-pointer select-none font-bold">bubekiti blog</h2>
        </Link>
      </div>
    </header>
  );
};
