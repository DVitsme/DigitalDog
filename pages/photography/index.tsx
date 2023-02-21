import Head from 'next/head';

import { CallToAction } from '../../components/CallToAction';
import { Faqs } from '../../components/Faqs';
import { Footer } from '../../components/Layout/Footer';
import { Header } from '../../components/Layout/Header';
import { Hero } from '../../components/Hero';
import { Pricing } from '../../components/Pricing';
import { PrimaryFeatures } from '../../components/PrimaryFeatures';
import { SecondaryFeatures } from '../../components/SecondaryFeatures';
import { Testimonials } from '../../components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>
          DigitalDog Photos - Photography made simple for Real Estate Agents
        </title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
