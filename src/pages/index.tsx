import { NextPage } from "next";
import { axiosInstance } from "lib/api";
import { Post } from "types";
import { Layout } from "components/Layout";
import { Posts } from "components/Posts";
import { HeadComponent } from "components/HeadComponent";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <HeadComponent
        title={"Bubekiti Blog"}
        description={"Bubekitiのブログ。フロントエンドメインのエンジニア。PiTARI(ピタリ)を開発中。"}
        imageUrl={"/cat.jpg"}
        urlPath={"https://bubekiti.com"}
      />
      <Layout>
        <div className="text-white max-w-main">
          <div className="mx-4">
            <h2 className="text-lightBlue text-2xl font-bold mb-4">New Posts</h2>
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
