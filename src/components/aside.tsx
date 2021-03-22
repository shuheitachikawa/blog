import Link from "next/link";
import type { VFC } from "react";
import { Icon } from "src/components/icon";

export const Aside: VFC = () => {
  return (
    <aside className="bg-sub text-white shadow-lg rounded-md p-6 sm:max-w-aside sticky top-8 mt-10 sm:mt-0 mx-4">
      <div className="flex items-center mb-4">
        <Icon size={70} href="/cat.jpg" />
        <h2 className="text-xl ml-3 font-bold">Bubekiti</h2>
      </div>
      <p className="text-sm leading-5">
        フロントエンド中心のエンジニアです。エンジニア1年目です。スタートアップで働きつつ、自分でもサービスを作ったりしています。作ることが好きです。
      </p>
      <div className="flex"></div>
    </aside>
  );
};
