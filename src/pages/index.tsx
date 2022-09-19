import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRef } from 'react';
import RenderAdditionalInfo from '../components/AdditionalInfo/RenderAdditionalInfo';
import RenderContact from '../components/Contact/RenderContact';
import RenderCTA from '../components/CTA/RenderCTA';
import RenderFAQs from '../components/FAQs/RenderFAQs';
import RenderFeatures from '../components/Features/RenderFeatures';
import RenderHero from '../components/Hero/RenderHero';
import Layout from '../components/Layout/Layout';
import RenderTeam from '../components/Team/RenderTeam';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rundoo</title>
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint!" />
      </Head>
      <Layout>
        <>
          <RenderHero />
          <RenderFeatures />
          <RenderTeam />
          <RenderCTA />
          <RenderFAQs />
          <RenderContact />
          <RenderAdditionalInfo />
        </>
      </Layout>
    </>
  );
};

export default Home;
