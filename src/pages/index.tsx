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
      <HeadComponent />
      <Layout>
        <div className="text-white max-w-main">
          <div className="mx-4">
            <h1 className="text-lightBlue text-2xl font-bold mb-4">New Posts</h1>
            <Posts posts={posts} />
          </div>
        </div>
      </Layout>
    </>
  );
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const { data } = await axiosInstance.get(`${process.env.micro_cms_base_url}/blog`);
  const posts: Post[] = await data.contents;
  return {
    props: {
      posts,
    },
  };
};
// ?filters=category[contains]LIFE

export default Home;
