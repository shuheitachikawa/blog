import { NextPage } from "next";
import styles from "src/styles/Home.module.scss";
import { Post } from "src/types";
import { axiosInstance } from "src/lib/api";
import { Layout } from "src/components/layout";

type Props = {
  post: Post;
};

const BlogId: NextPage<Props> = ({ post }) => {
  return (
    <Layout>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.publishedAt}>{post.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.content}`,
        }}
        className={styles.post}
      />
    </Layout>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const { data } = await axiosInstance.get(`https://bubekiti.microcms.io/api/v1/blog`);
  const paths = data.contents.map((content: Post) => `/blog/${content.id}`);
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
