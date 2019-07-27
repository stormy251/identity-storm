import React from 'react';
import Link from 'next/link';
import TopBarCentered from "../layouts/TopBarCenteredLayout";
import styled from "styled-components";

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 2rem;
    text-align: center;
`;

const HomePage = () => (
  <TopBarCentered title="Home">
    <Title>Home Page</Title>
    <Link href='/about'>
      <a className='btn btn-light'>About us</a>
    </Link>
  </TopBarCentered>
);

export default HomePage;
