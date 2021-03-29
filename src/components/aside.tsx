import type { VFC } from "react";
import { Icon } from "src/components/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Aside: VFC = () => {
  return (
    <aside className="bg-sub text-white shadow-lg rounded-md p-6 sm:max-w-aside sticky top-8 mt-10 sm:mt-0 mx-4">
      <div className="flex items-center mb-4">
        <Icon size={70} href="/cat.jpg" />
        <h2 className="text-xl ml-3 font-bold">Bubekiti</h2>
      </div>
      <p className="text-sm leading-5 mb-4">
        フロントエンド中心のエンジニアです。スタートアップで働きつつ、自分でもサービスを作ったりしています。作ることが好きです。
      </p>
      <div className="flex justify-center">
        <div className="w-10 mr-6">
          <a href="https://twitter.com/bubekiti" target="_blank" aria-label="Twitterへ" rel="noopener">
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </a>
        </div>
        <div className="w-10">
          <a href="https://github.com/shuheitachikawa" target="_blank" aria-label="GitHubへ" rel="noopener">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
        </div>
      </div>
    </aside>
  );
};
