import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import CenterImage from '../../components/Hero/centerImage';
import NavBarPhotography from '../../components/Layout/navbarPhotography';
import LeftTextHero from '../../components/Hero/leftTextHero';
import InlineForm from '../../components/Forms/inline';
import TieredImages from '../../components/featured/tieredImages';
import TitleThreCol from '../../components/Grid/titleThreeCol';
import TitleThreColTwo from '../../components/Grid/titleThreeColTwo';
import RightImageHero from '../../components/Hero/rightImageHero';
import FullWidthHero from '../../components/Hero/fullWidthHero';

const Photography: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Photography Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarPhotography />
      <FullWidthHero />
      <InlineForm />
      <TieredImages />
      <TitleThreCol />
    </div>
  );
};

export default Photography;
