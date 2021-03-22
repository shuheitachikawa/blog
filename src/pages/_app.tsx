import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab); //あらかじめ使用するアイコンを追加しておく

function MyApp(props: AppProps) {
  return (
    <>
      <Head>
        <title>Bubekiti Blog</title>
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
}

export default MyApp;
