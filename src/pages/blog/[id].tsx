import { NextPage } from "next";
import styles from "../../styles/Home.module.scss";
import { Post } from "../../types";
import { axiosInstance } from "../../lib/api";

type Props = {
  posts: Post;
};

const BlogId: NextPage<Props> = ({ blog }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
        className={styles.post}
      />
    </main>
  );
};

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const key = {
    headers: { "X-API-KEY": "b99a477f-fdaa-43e0-8a72-de34af047371" },
  };

  const data = await fetch("https://bubekiti.microcms.io/api/v1/blog", key)
    .then((res) => res.json())
    .catch(() => null);

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;

  // const key = {
  //   headers: { "X-API-KEY": "b99a477f-fdaa-43e0-8a72-de34af047371" },
  // };

  // const data = await fetch("https://bubekiti.microcms.io/api/v1/blog/" + id, key)
  //   .then((res) => res.json())
  //   .catch(() => null);

  const { data } = await axiosInstance.get(`https://bubekiti.microcms.io/api/v1/blog/${id}`);
  console.log(data.contents);
  const posts: Post[] = await data.contents;

  return {
    props: {
      blog: data,
    },
  };
};

export default BlogId;
