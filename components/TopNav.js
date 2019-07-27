import styled from 'styled-components';
import React from 'react';

/*
    Exported style params
*/
export const TopNavHeight = '3rem';
export const TopNavLogoDimension = '1.5rem';

const NavContainer = styled.header`
    background-color: ${({ theme }) => theme.colors.black};
    display: flex;
    height: ${TopNavHeight};
    justify-content: center;
    width: 100vw;
    color: ${({ theme }) => theme.colors.primary};
`;

const ContentContainer = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    width: 80vw;
`;

const LogoLink = styled.img`
    height: ${TopNavLogoDimension};
    width: ${TopNavLogoDimension};
`;

export default class TopNav extends React.Component {

  render () {
    return (
      <NavContainer>
        <ContentContainer>
          <LogoLink src="/static/images/storm_brand.jpg" alt="Brand Logo" />
        </ContentContainer>
      </NavContainer>
    );
  }
}
