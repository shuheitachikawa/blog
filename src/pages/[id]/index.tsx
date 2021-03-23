import { NextPage } from "next";
import styles from "src/styles/Home.module.scss";
import { Post } from "src/types";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import dayjs from "dayjs";
import Head from "src/components/head";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  post: Post;
};

const BlogId: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Head
        title={post.title}
        description={post.description}
        keyword={`Bubekiti PiTARI ${post.title} ${post.description}`}
        image={"https://bubekiti.com/cat.jpg"}
        url={`https://bubekiti.com/${post.id}`}
      />
      <Layout>
        <div className="max-w-main bg-white text-black sm:rounded-md overflow-hidden">
          <div className="sm:h-60 h-40">
            <div className={styles.postBg}>
              <p className="sm:text-8xl text-7xl">{post.icon}</p>
            </div>
          </div>
          <div className="sm:py-7 sm:px-10 py-8 px-5">
            <time className="text-sm text-sub">{dayjs(post.publishedAt).format("YYYY.MM.DD")}</time>
            <h1 className="sm:text-3xl text-2xl font-bold mt-2 sm:mb-3 mb-2">{post.title}</h1>
            <div className="mb-6 text-white">
              {post.category[0] === "DEV" && (
                <span className="text-xs py-1 px-2 bg-dev rounded-md">{post.category}</span>
              )}
              {post.category[0] === "LIFE" && (
                <span className="text-xs py-1 px-2 bg-life rounded-md">{post.category}</span>
              )}
            </div>
            <div
              className={styles.post}
              dangerouslySetInnerHTML={{
                __html: `${post.content}`,
              }}
            />
          </div>
          <div className="my-10">
            <p className="text-center font-bold mb-2">SHARE</p>
            <div className="flex justify-center">
              <div className="w-10 mr-6">
                <a
                  href={`https://twitter.com/intent/tweet?url=https://bubekiti.com/${post.id}`}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
              </div>
              <div className="w-10">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://bubekiti.com/${post.id}`}
                  target="_blank"
                  rel="noopener"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const { data } = await axiosInstance.get(`${process.env.MICROCMS_BASE_URL}/blog`);
  const paths = data.contents.map((content: Post) => `/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const { data } = await axiosInstance.get(`${process.env.MICROCMS_BASE_URL}/blog/${id}`);
  const post: Post = await data;
  return {
    props: {
      post,
    },
  };
};

export default BlogId;
