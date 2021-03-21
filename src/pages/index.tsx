import { NextPage } from "next";
import Link from "next/link";
// import type { VFC } from "react";
import { axiosInstance } from "src/lib/api";
import { Post } from "src/types";
import { Layout } from "src/components/layout";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <Layout>
      <div>
        <ul>
          {posts.map((blog) => (
            <li key={blog.id}>
              <Link href={`blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
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
