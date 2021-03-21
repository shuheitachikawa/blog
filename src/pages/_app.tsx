import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Bubekiti Blog</title>
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

// import "src/styles/globals.css";

// import type { AppProps } from "next/app";
// import Head from "next/head";

// const App = (props: AppProps) => {
//   return (
//     <>
//       <Head>
//         <title>nexst</title>
//       </Head>
//       <props.Component {...props.pageProps} />
//     </>
//   );
// };

// export default App;
