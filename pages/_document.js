import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {GLOBAL_STYLES} from "../lib/GlobalStyles";
import {PAGE_TRANSITION} from "../lib/PageTransition";

class IdentityStormDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          {GLOBAL_STYLES}
          {PAGE_TRANSITION}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default IdentityStormDocument;
