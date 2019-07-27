import Head from 'next/head';
import TopNav, { TopNavHeight } from '../components/TopNav';
import styled from 'styled-components';
import React from 'react';

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
    background-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    border-radius: 0.5rem;
    padding: 1.5rem;
    width: 30rem;
`;

export default class TopBarCentered extends React.Component {

  render ({ children, title = 'ToDo-Storm' }) {
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <MainContainer>
          <TopNav />
          <ContentContainer>
            <Card>
              {children}
            </Card>
          </ContentContainer>
        </MainContainer>
      </div>
    );
  }
}
