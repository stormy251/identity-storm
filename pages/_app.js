import React from 'react';
import App, {Container} from 'next/app';
import {PageTransition} from 'next-page-transitions';
import {ThemeProvider} from 'styled-components';
import Loader from '../components/Loader';
import {ROUTE_TRANSITION_DURATION} from "../lib/PageTransition";
import THEME from "../lib/theme";
import TopBarCenteredLayout from '../layouts/TopBarCenteredLayout';

class IdentityStormApp extends App {
  static async getInitialProps ({Component, ctx}) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // This will be used as the key for each page such that the page-transition knows when the page has changed.
    pageProps.keyRoutePath = ctx.asPath;

    return {pageProps};
  }

  render () {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <ThemeProvider theme={THEME}>
          <TopBarCenteredLayout>
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
              <Component {...pageProps} key={pageProps.keyRoutePath}/>
            </PageTransition>
          </TopBarCenteredLayout>
        </ThemeProvider>
      </Container>
    );
  }
}

export default IdentityStormApp;
