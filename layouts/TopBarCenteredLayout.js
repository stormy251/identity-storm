import TopNav, {TopNavHeight} from '../components/TopNav';
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

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
  <MainContainer>
    <TopNav />
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainContainer>
);

TopBarCenteredLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default TopBarCenteredLayout;
