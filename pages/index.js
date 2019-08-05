import React, {useState} from 'react';
import Link from 'next/link';
import styled from "styled-components";
import posed from 'react-pose';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';

const Box = posed.div({
  init: {opacity: 1},
  hidden: {opacity: 0},
  visible: {opacity: 1}
});

const RedSquare = styled.div`
  background-color: red;
  height: 10rem;
  margin-bottom: 2rem;
  width: 10rem;
`;

const ToggleButton = styled.button`
  background-color: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.white};
`;

const HomePage = function () {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Card>
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
    </Card>
  );
};

export default HomePage;
