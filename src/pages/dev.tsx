import { NextPage } from "next";
import Link from "next/link";
// import type { VFC } from "react";
import { axiosInstance } from "src/lib/api";
import { Post } from "src/types";
import { Layout } from "src/components/layout";
import { Categories } from "src/components/categories";
import dayjs from "dayjs";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div className="text-white max-w-main">
        <Categories />
        <div>
          <ul>
            {posts.map((blog) => (
              <li key={blog.id}>
                <Link href={`/${blog.id}`}>
                  <div className="flex items-start py-5 border-t border-sub hover:bg-sub transition cursor-pointer">
                    <div className="bg-sub rounded-md flex items-center justify-center w-20 h-20 mr-5">
                      <p className="text-5xl">😏aa</p>
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold mb-1">{blog.title}</h3>
                      <time className="text-sm text-lightBlue mb-1">
                        {dayjs(blog.publishedAt).format("YYYY.MM.DD")}
                      </time>
                      <div className="">
                        <span className="text-xs py-1 px-2 bg-red rounded-md">DEV</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const { data } = await axiosInstance.get(`https://bubekiti.microcms.io/api/v1/blog`);
  const posts: Post[] = await data.contents;
  return {
    props: {
      posts,
    },
  };
};

export default Home;
