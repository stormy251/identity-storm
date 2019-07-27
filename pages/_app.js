import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';
import { ThemeProvider } from 'styled-components';
import Loader from '../components/Loader';

export const THEME = {
  colors: {
    primary: '#647B8B',
    secondary: '#69B3E2',
    black: '#000000',
    white: '#ffffff'
  }
};

export const ROUTE_TRANSITION_DURATION = 300;

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={THEME}>
          <PageTransition
            timeout={ROUTE_TRANSITION_DURATION}
            classNames='page-transition'
            loadingComponent={<Loader />}
            loadingDelay={500}
            loadingTimeout={{
              enter: ROUTE_TRANSITION_DURATION,
              exit: 0
            }}
            loadingClassNames='loading-indicator'
          >
            <Component {...pageProps} />
          </PageTransition>
        </ThemeProvider>
      </Container>
    );
  }
}
