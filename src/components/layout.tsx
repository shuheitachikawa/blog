import type { ReactNode, VFC } from "react";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import { Aside } from "src/components/aside";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="min-h-screen flex flex-col max-width bg-main font-main">
      <Header />
      <div className="container flex items-start max-w-layout mx-auto pt-8 pb-10">
        <main className="flex-1">{props.children}</main>
        <Aside />
      </div>
      <Footer />
    </div>
  );
};
