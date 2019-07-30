import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styled from "styled-components";

const PrimaryToolBar = styled(Toolbar)`
  background-color: ${({theme}) => theme.colors.primary};
`;

const Row = styled.div`
  align-items: center;
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BrandTitle = styled.h6`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin: 0 0 0 1.5rem;
`;

export default function MaterialTopNav () {
  return (
    <AppBar position="static">
      <PrimaryToolBar>
        <ContentContainer>
          <Row>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <BrandTitle>
              Identity Storm
            </BrandTitle>
          </Row>
          <IconButton edge="end" color="inherit" aria-label="account">
            <AccountCircleIcon />
          </IconButton>
        </ContentContainer>
      </PrimaryToolBar>
    </AppBar>
  );
}
