import React from "react";
import { useRouter } from "next/router";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Aside } from "components/Aside";
import { Categories } from "components/Categories";

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
