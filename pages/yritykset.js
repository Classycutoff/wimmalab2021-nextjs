import Head from 'next/head';
import Image from 'next/image';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Yrityksille – {siteTitle}</title>
      </Head>
      <div>
        <main>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1>Yrityksille</h1>

          <p>Tällä sivulla on tietoa yrityksille.</p>
        </main>
      </div>
    </Layout>
  );
}
