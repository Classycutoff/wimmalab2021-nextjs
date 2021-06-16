import Document, { Head, Html, Main, NextScript } from 'next/document';

// Documentation:
// https://nextjs.org/docs/advanced-features/custom-document

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
