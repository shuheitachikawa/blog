import type { ReactNode, VFC } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout: VFC<{ children: ReactNode }> = (props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-red-300">{props.children}</main>
      <Footer />
    </div>
  );
};
