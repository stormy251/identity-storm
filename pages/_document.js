import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <style>{`
            html {
              font-size: 16px;
            }
            
            body {
              margin: 0;
            }
            
            .page {
              height: 100vh;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
