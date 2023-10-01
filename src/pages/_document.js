import { Html, Head, Main, NextScript } from 'next/document';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
