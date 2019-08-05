import React from 'react';
import Link from 'next/link';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';

const AboutPage = function () {
  return (
    <Card outlined>
      <CardTitle>About Page</CardTitle>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </Card>
  );
};

export default AboutPage;
