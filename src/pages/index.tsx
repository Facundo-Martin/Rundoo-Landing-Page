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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
