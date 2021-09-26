import Link from "next/link";
import type { VFC } from "react";
import { useRouter } from "next/router";
import { Category } from "types";
import styled, { keyframes } from "styled-components";
import media from "styled-media-query";

const rotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const mediaMobile = (media as any).lessThan("420px");

const Circle = styled.div`
  position: absolute;
  height: 69px;
  width: 69px;
  ${mediaMobile`
  height: 62px;
  width: 62px;
  `}
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  background: linear-gradient(-45deg, rgb(255, 166, 73), rgb(247, 100, 91), rgb(128, 94, 212));
  animation: 2s infinite linear ${rotate};
`;

const categories: Category[] = [
  { href: "/", name: "/new.png", text: "NEW", color: "text-main", bg: "bg-mainl" },
  { href: "/dev", name: "/dev.png", text: "DEV", color: "text-dev", bg: "bg-devl" },
  { href: "/life", name: "/life.png", text: "LIFE", color: "text-life", bg: "bg-lifel" },
];

export const Categories: VFC = () => {
  const router = useRouter();
  const routeName = router.pathname;
  return (
    <>
      <div className="flex sm:mb-8 sm:mt-0 mb-4 mt-4 px-4">
        {categories.map((category) => (
          <Link href={category.href} key={category.href}>
            <div className="relative z-10 sm:mr-4 mr-3">
              {routeName === category.href && <Circle className="" />}
              <div
                className={`sm:w-16 sm:h-16 w-14 h-14 rounded-full select-none flex justify-center cursor-pointer duration-300 items-center ${
                  category.bg
                } ${routeName !== category.href && "opacity-60 shadow-lg"}`}
              >
                <span className={`font-bold sm:text-xl text-lg ${category.color}`}>{category.text}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
