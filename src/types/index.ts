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

export type Category = {
  name: string;
  href: string;
};
