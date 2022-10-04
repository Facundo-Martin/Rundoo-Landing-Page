import type { NextPage } from 'next';
import Head from 'next/head';
import ClientOnly from '../components/ClientOnly';
import RenderContact from '../components/Contact/RenderContact';
import RenderCTA from '../components/CTA/RenderCTA';
import RenderFAQs from '../components/FAQs/RenderFAQs';
import RenderFeatures from '../components/Features/RenderFeatures';
import RenderHero from '../components/Hero/RenderHero';
import Layout from '../components/Layout/Layout';
import ScrollTopButton from '../components/ScrollTopButton';
import RenderTeam from '../components/Team/RenderTeam';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rundoo</title>
        <meta name="description" content="Rundoo is a mobile app where you can order your contruction supplies" />
      </Head>
      <Layout>
        <ClientOnly>
          <RenderHero />
          <RenderFeatures />
          <RenderTeam />
          <RenderCTA />
          <RenderFAQs />
          <RenderContact />
          <ScrollTopButton />
        </ClientOnly>
      </Layout>
    </>
  );
};

export default Home;
