// import "styles/globals.css";
import 'tailwindcss/tailwind.css'
import type { AppProps } from "next/app";
import Head from "next/head";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Router from "next/router";
import * as gtag from "../lib/gtag";

library.add(fab); //あらかじめ使用するアイコンを追加しておく

function MyApp(props: AppProps) {
  Router.events.on("routeChangeComplete", (url) => gtag.pageview(url));
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
      </Head>
      <props.Component {...props.pageProps} />
    </>
  );
}

export default MyApp;
