import type { ReactNode, VFC } from "react";
import { useRouter } from "next/router";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import { Aside } from "src/components/aside";
import { Categories } from "src/components/categories";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  const router = useRouter();
  const isPostPage = router.pathname === "/[id]";
  return (
    <div className="min-h-screen flex flex-col max-width bg-main font-main">
      <Header />
      <div className="container sm:flex items-start max-w-layout mx-auto sm:pt-8 pt-0 pb-10">
        <div className="flex-1">
          {!isPostPage && <Categories />}
          <main className="">{props.children}</main>
        </div>
        <Aside />
      </div>
      <Footer />
    </div>
  );
};
