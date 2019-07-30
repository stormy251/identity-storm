import Head from 'next/head';
import {TopNavHeight} from '../components/TopNav';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import {FADE_DOWN_PAGE_TRANSITION} from '../lib/PageTransition';
import {GLOBAL_STYLES} from '../lib/GlobalStyles';
import MaterialTopNav from "../components/MaterialTopNav";
import {Paper} from "@material-ui/core";

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

const Card = styled(Paper)`
    background-color: ${({theme}) => theme.colors.white};
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 24rem;
`;

export const TopBarCenteredLayout = ({children, title = 'ToDo-Storm'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {GLOBAL_STYLES}
      {FADE_DOWN_PAGE_TRANSITION}
    </Head>
    <MainContainer>
      <MaterialTopNav />
      <ContentContainer>
        <Card elevation={2}>
          {children}
        </Card>
      </ContentContainer>
    </MainContainer>
  </div>
);

TopBarCenteredLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default TopBarCenteredLayout;
