import { NextPage } from "next";
import styles from "src/styles/Home.module.scss";
import { Post } from "src/types";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";
import dayjs from "dayjs";

type Props = {
  post: Post;
};

const BlogId: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <div className="max-w-main bg-white text-black">
        <div className={styles.postBg}>
          <p className="text-8xl">😏</p>
        </div>
        <div className="py-7 px-10">
          <time className="text-sm text-sub">{dayjs(post.publishedAt).format("YYYY.MM.DD")}</time>
          <h1 className="text-3xl font-bold mt-2 mb-3">{post.title}</h1>
          <div className="mb-6">
            <span className="text-white text-xs py-1 px-2 bg-red rounded-md">DEV</span>
          </div>
          <div
            className={styles.post}
            dangerouslySetInnerHTML={{
              __html: `${post.content}`,
            }}
          />
        </div>
      </div>
    </Layout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const { data } = await axiosInstance.get(`https://bubekiti.microcms.io/api/v1/blog`);
  const paths = data.contents.map((content: Post) => `/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const { data } = await axiosInstance.get(`https://bubekiti.microcms.io/api/v1/blog/${id}`);
  const post: Post = await data;
  return {
    props: {
      post,
    },
  };
};

export default BlogId;
