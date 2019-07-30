import React, {useState} from 'react';
import Link from 'next/link';
import TopBarCentered from "../layouts/TopBarCenteredLayout";
import styled from "styled-components";
import posed from 'react-pose';
import CardTitle from '../components/CardTitle';
import Button from '@material-ui/core/Button';

const Box = posed.div({
  init: {scale: 1},
  hidden: {scale: 0.2},
  visible: {scale: 1}
});

const RedSquare = styled.div`
  background-color: red;
  height: 10rem;
  margin-bottom: 2rem;
  width: 10rem;
`;

const ToggleButton = styled(Button)`
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
`;

const HomePage = function () {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <TopBarCentered title="Home">
      <CardTitle>Home Page</CardTitle>
      <Box
        pose={isVisible ? 'visible' : 'hidden'}
      >
        <RedSquare />
      </Box>
      <ToggleButton onClick={() => setIsVisible(!isVisible)}>Toggle</ToggleButton>
      <Link href='/about'>
        <a>About us</a>
      </Link>
    </TopBarCentered>
  );
};

export default HomePage;
