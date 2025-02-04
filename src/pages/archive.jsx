/* eslint-disable react/prop-types */
import React from 'react';

import Archive from 'components/pages/archive/archive';
import Gallery from 'components/pages/archive/gallery';
import Hero from 'components/pages/archive/hero';
import Podcast from 'components/pages/archive/podcast';
import Layout from 'components/shared/layout';
import SEO from 'components/shared/seo';
import Sponsors from 'components/shared/sponsors';
import SEO_DATA from 'constants/seo-data';

const ArchivePage = () => (
  <Layout>
    <Hero />
    <Podcast />
    <Archive />
    <Sponsors />
    <Gallery />
  </Layout>
);

export default ArchivePage;

export const Head = ({ location: { pathname } }) => (
  <SEO {...SEO_DATA.archive} pathname={pathname} />
);
