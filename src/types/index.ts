export type Post = {
  id: string;
  title: string;
  intro: string;
  category: string;
  eyecatch: {
    url: string;
  };
  content: string;
  publishedAt: string;
};
