import type { VFC } from "react";
import { Post } from "src/types";
import Link from "next/link";
import dayjs from "dayjs";

type Props = {
  posts: Post[];
};

export const Posts: VFC<Props> = (props) => {
  return (
    <ul>
      {props.posts.map((blog) => (
        <li key={blog.id}>
          <Link href={`/${blog.id}`}>
            <div className="flex items-start sm:py-5 py-3 border-t border-sub hover:bg-sub transition cursor-pointer">
              <div className="bg-sub rounded-md flex items-center justify-center sm:w-20 sm:h-20 h-16 w-16 min-w-max sm:mr-5 mr-3">
                <p className="sm:text-5xl text-4xl">{blog.icon}</p>
              </div>
              <div className="flex flex-col">
                <h3 className="sm:text-2xl text-md font-bold mb-1">{blog.title}</h3>
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
