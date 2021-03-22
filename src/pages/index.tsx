import { NextPage } from "next";
import { axiosInstance } from "src/lib/api";
import { Post } from "src/types";
import { Layout } from "src/components/layout";
import { Categories } from "src/components/categories";
import { Posts } from "src/components/posts";
import Head from "src/components/head";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <Head
        title={"Bubekiti Blog"}
        description={"Bubekitiのブログ。フロントエンドメインのエンジニア。PiTARI(ピタリ)を開発中。"}
        keyword={"Bubekiti PiTARI"}
        image={"/cat.jpg"}
        url={"https://bubekiti.com"}
      />
      <Layout>
        <div className="text-white max-w-main">
          <Categories />
          <div className="mx-4">
            <Posts posts={posts} />
          </div>
        </div>
      </Layout>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const { data } = await axiosInstance.get(`${process.env.MICROCMS_BASE_URL}/blog`);
  const posts: Post[] = await data.contents;
  return {
    props: {
      posts,
    },
  };
};
// ?filters=category[contains]LIFE

export default Home;
