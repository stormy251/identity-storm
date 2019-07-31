import Head from 'next/head';
import TopNav, {TopNavHeight} from '../components/TopNav';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {FADE_DOWN_PAGE_TRANSITION} from '../lib/PageTransition';
import {GLOBAL_STYLES} from '../lib/GlobalStyles';

const MainContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`;

const ContentContainer = styled.div`
    align-items: center;
    background-color: ${({theme}) => theme.colors.accentLight};
    box-sizing: border-box;
    display: flex;
    height: calc(100vh - ${TopNavHeight});
    justify-content: center;
    width: 100vw;
`;



export const TopBarCenteredLayout = ({children}) => (
  <div>
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {GLOBAL_STYLES}
      {FADE_DOWN_PAGE_TRANSITION}
    </Head>
    <MainContainer>
      <TopNav />
      <ContentContainer>
        {children}
      </ContentContainer>
    </MainContainer>
  </div>
);

TopBarCenteredLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default TopBarCenteredLayout;
