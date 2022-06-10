import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta
            name="description"
            content="Dev AT E-commerce website with Next.js"
          />
          <link rel="stylesheet" href="/css/bootstrap.min.css" />
          <script src="/js/jquery.slim.min.js"></script>
          <script src="/js/bootstrap.bundle.min.js"></script>
          <script src="/js/font.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
