import React from "react";
import { AboutMe } from "components/AboutMe";

export const Aside: React.FC = () => {
  return (
    <aside className="sm:max-w-aside sticky top-8 mt-10 sm:mt-0 mx-4">
      <AboutMe />
      <a href="https://pitari.me" target="_blank" aria-label="PiTARI" rel="noopener">
        <img src="/pitari.jpg" alt="PiTARI.me" title="個人開発品のPiTARIです" className="rounded shadow-lg" />
      </a>
    </aside>
  );
};
