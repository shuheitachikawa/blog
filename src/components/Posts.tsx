import React from "react";
import { Post } from "types";
import Link from "next/link";
import dayjs from "dayjs";
import Image from "next/image";

type Props = {
  posts: Post[];
};

export const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map((blog) => (
        <li key={blog.id} className="select-none border-t border-sub hover:bg-sub transition cursor-pointer mb-5 sm:mb-0">
          <Link href={`/${blog.id}`}>
            <div className="sm:flex sm:items-center sm:py-5 py-3 px-2 sm:px-0 sm:pl-4 ">
              {/* PC画像 */}
              <div className="hidden sm:flex mr-4 min-w-listImage items-center">
                <Image src={`${blog.image.url}`} alt={blog.title} width={140} height={140 / 1.618} objectFit={"cover"} />
              </div>
              {/* SP画像 */}
              <div className="sm:hidden">
                <Image src={`${blog.image.url}`} alt={blog.title} width={500} height={500 / 1.618} objectFit={"cover"} />
              </div>
              <div className="flex flex-col">
                <h3 className="sm:text-xl text-md font-bold mb-1">{blog.title}</h3>
                <div className="sm:block flex items-center">
                  <time className="sm:text-sm text-xs text-lightBlue sm:mb-1 mr-2">
                    {dayjs(blog.publishedAt).format("YYYY.MM.DD")}
                  </time>
                  <div className="">
                    {blog.category[0] === "DEV" && (
                      <span className="text-xs py-1 px-2 bg-dev rounded-md">{blog.category}</span>
                    )}
                    {blog.category[0] === "LIFE" && (
                      <span className="text-xs py-1 px-2 bg-life rounded-md">{blog.category}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
