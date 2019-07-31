import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
import Card from '../components/Card';

const Title = styled.h1`
    color: ${({theme}) => theme.colors.secondary};
    margin-bottom: 2rem;
    text-align: center;
`;

const AboutPage = () => (
  <Card>
    <Title>About Page</Title>
    <Link href='/'>
      <a className='btn btn-light'>Back Home</a>
    </Link>
  </Card>
);

export default AboutPage;
