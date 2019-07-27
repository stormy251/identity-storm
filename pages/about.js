import React from 'react';
import Link from 'next/link';
import TopBarCentered from "../layouts/TopBarCenteredLayout";
import styled from "styled-components";

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
    text-align: center;
`;

const AboutPage = () => (
  <TopBarCentered>
    <Title>About Page</Title>
    <Link href='/'>
      <a className='btn btn-light'>Back Home</a>
    </Link>
  </TopBarCentered>
);

export default AboutPage;
