import type { ReactNode, VFC } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="min-h-screen flex flex-col max-width bg-main">
      <Header />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
};
