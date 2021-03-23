import Document, { Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "src/lib/gtag";

export default class extends Document {
  render() {
    return (
      <html lang="ja">
        <Head
          title={"Bubekiti Blog"}
          description={"Bubekitiのブログ。フロントエンドメインのエンジニア。PiTARI(ピタリ)を開発中。"}
          keyword={"Bubekiti PiTARI"}
          image={"/cat.jpg"}
          url={"https://bubekiti.com"}
        >
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="bg-main">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
