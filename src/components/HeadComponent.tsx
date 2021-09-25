import type { VFC } from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  keyword?: string;
  imageUrl?: string;
  urlPath?: string;
}

export const HeadComponent: VFC<Props> = ({
  title,
  description = "",
  keyword,
  imageUrl,
  urlPath,
}) => {
  const url = `https://bubekiti.com${urlPath}`;
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <title>{title}</title>
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={title} />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content={keyword} />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={url} />
      <link
        rel="icon"
        type="image/png"
        href={"https://bubekiti.com/cat.jpg"}
      />
      <link
        rel="shortcut icon"
        type="image/png"
        href={"https://bubekiti.com/cat.jpg"}
      />
      <link
        rel="apple-touch-icon-precomposed"
        type="image/png"
        href={"https://bubekiti.com/cat.jpg"}
      />
    </Head>
  );
};
