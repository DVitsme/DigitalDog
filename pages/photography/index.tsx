import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import CenterImage from '../../components/Hero/centerImage';
import NavBarPhotography from '../../components/Layout/navbarPhotography';

const Photography: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Photography Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarPhotography />
      <CenterImage />
    </div>
  );
};

export default Photography;
