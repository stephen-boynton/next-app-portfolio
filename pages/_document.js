import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Roboto&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            rel="stylesheet"
          />
          <meta name="description" content="My Software Developer Portfolio" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>
            {`
              body {
                box-sizing: border-box;
                margin: 0;
              }
            `}
          </style>
        </body>
      </html>
    );
  }
}
