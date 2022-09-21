import Head from 'next/head';
import React from 'react';
import Layout from '../components/Layout/Layout';

export default function GetStartedPage() {
  return (
    <>
      <Head>
        <title>Get Started || Rundoo</title>
        <meta name="description" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sint!" />
      </Head>
      <Layout>
        <div className="wrapper section">Get Started</div>
      </Layout>
    </>
  );
}
