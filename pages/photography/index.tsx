import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import CenterImage from '../../components/Hero/centerImage';
import NavBarPhotography from '../../components/Layout/navbarPhotography';
import ColorBackground from '../../components/Hero/colorBackground';
import InlineForm from '../../components/Forms/inline';

const Photography: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Photography Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarPhotography />
      <ColorBackground />
      <div className="mx-auto container -mt-11 bg-white">
        <InlineForm />
      </div>
    </div>
  );
};

export default Photography;
