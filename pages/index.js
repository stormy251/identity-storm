import React, {useState} from 'react';
import Link from 'next/link';
import TopBarCentered from "../layouts/TopBarCenteredLayout";
import styled from "styled-components";
import posed from 'react-pose';

const Box = posed.div({
  hidden: {opacity: 0},
  visible: {opacity: 1}
});

const RedSquare = styled.div`
  background-color: red;
  height: 10rem;
  margin-bottom: 2rem;
  width: 10rem;
`;

const Title = styled.h1`
  color: ${({theme}) => theme.colors.secondary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ToggleButton = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const HomePage = function () {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <TopBarCentered title="Home">
      <Title>Home Page</Title>
      <Box
        pose={isVisible ? 'visible' : 'hidden'}
      >
        <RedSquare />
      </Box>
      <ToggleButton onClick={() => setIsVisible(!isVisible)}>Toggle</ToggleButton>
      <Link href='/about'>
        <a className='btn btn-light'>About us</a>
      </Link>
    </TopBarCentered>
  );
};

export default HomePage;
