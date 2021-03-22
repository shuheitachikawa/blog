import "src/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import usePageView from 'src/hooks/usePageView'

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab); //あらかじめ使用するアイコンを追加しておく

import Router from 'next/router'
import * as gtag from '../lib/gtag'



function MyApp(props: AppProps) {
  Router.events.on('routeChangeComplete', url => gtag.pageview(url))
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
