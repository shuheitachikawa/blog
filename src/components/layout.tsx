import React from "react";
import { useRouter } from "next/router";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Aside } from "src/components/Aside";
import { Categories } from "src/components/Categories";

export const Layout: React.FC = ({ children }) => {
  const router = useRouter();
  const isPostPage = router.pathname === "/[id]";
  return (
    <div className="min-h-screen flex flex-col max-width font-main bg-main sm:mx-4">
      <Header />
      <div className="container sm:flex items-start max-w-layout mx-auto sm:pt-8 pt-0 pb-10">
        <div className="flex-1">
          {!isPostPage && <Categories />}
          <main className="">{children}</main>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
};
