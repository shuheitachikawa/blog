import React from "react";
import { Icon } from "components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  {
    name: "twitter",
    href: "https://twitter.com/bubekiti",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/bubekiti",
  },
  {
    name: "github",
    href: "https://github.com/shuheitachikawa",
  },
];

export const AboutMe: React.FC = () => {
  return (
    <div className="bg-sub text-white shadow-lg rounded-md p-6 mb-5">
      <div className="flex items-center mb-4">
        <Icon size={70} href="/cat.jpg" />
        <h2 className="text-xl ml-3 font-bold">Bubekiti</h2>
      </div>
      <p className="text-sm leading-5 mb-6">
        都内のWebエンジニアです。
        <br />
        Saas企業のフロントエンドエンジニアをしつつ、スタートアップのお手伝いや、個人開発をしたりしています。
        <br />
        食べることが好きです。
      </p>
      <div className="flex justify-center">
        {links.map((link) => {
          return (
            <div key={link.name} className="mr-6 last:mr-0">
              <a href={link.href} target="_blank" aria-label={`${link.name}へ`} rel="noopener">
                <FontAwesomeIcon icon={["fab", link.name as any]} width={26} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
