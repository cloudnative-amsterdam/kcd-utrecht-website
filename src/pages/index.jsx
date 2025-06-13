/* eslint-disable react/prop-types */
import React from 'react';

import Hero from 'components/pages/home/hero';
import Layout from 'components/shared/layout';

const HomePage = () => (
  <Layout homepage>
    <Hero />
  </Layout>
);

export default HomePage;

export const Head = ({ location: { pathname } }) => (
  <title>Thank you for attending</title>
);
