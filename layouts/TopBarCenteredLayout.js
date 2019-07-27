import Head from 'next/head';
import TopNav, { TopNavHeight } from '../components/TopNav';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { ROUTE_TRANSITION_DURATION } from '../pages/_app';

const MainContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const ContentContainer = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: calc(100vh - ${TopNavHeight});
    justify-content: center;
    width: 100vw;
`;

const Card = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    box-sizing: border-box;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 24rem;
`;

export const TopBarCenteredLayout = ({ children, title = 'ToDo-Storm' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <MainContainer>
      <TopNav />
      <ContentContainer className="content-container">
        <Card className="main-layout-card">
          {children}
        </Card>
      </ContentContainer>
    </MainContainer>
    <style jsx global>{`
      .page-transition-enter {
        opacity: 0;
        transform: translate3d(0, 20px, 0);
      }
      .page-transition-enter-active {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        transition: opacity ${ROUTE_TRANSITION_DURATION}ms, transform ${ROUTE_TRANSITION_DURATION}ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity ${ROUTE_TRANSITION_DURATION}ms;
      }
      .loading-indicator-appear,
      .loading-indicator-enter {
        opacity: 0;
      }
      .loading-indicator-appear-active,
      .loading-indicator-enter-active {
        opacity: 1;
        transition: opacity ${ROUTE_TRANSITION_DURATION}ms;
      }
    `}</style>
  </div>
);

TopBarCenteredLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default TopBarCenteredLayout;
