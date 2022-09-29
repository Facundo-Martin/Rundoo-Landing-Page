import type { NextPage } from 'next';
import Head from 'next/head';
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
        </>
      </Layout>
    </>
  );
};

export default Home;
