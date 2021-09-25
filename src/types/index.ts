export type Post = {
  id: string;
  image: Image;
  title: string;
  description: string;
  category: string;
  content: string;
  publishedAt: string;
};

export type Category = {
  name: string;
  href: string;
  text: string;
  color: string;
  bg: string;
};

type Image = {
  url: string;
  height: number;
  width: number;
}
