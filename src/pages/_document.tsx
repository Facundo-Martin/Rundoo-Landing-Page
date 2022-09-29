import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="flex h-full flex-col global-style">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default Document;
