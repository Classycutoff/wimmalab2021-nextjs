import Head from 'next/head';
import Image from 'next/image';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <main>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1>
            Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
          </h1>

          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
        </main>
      </div>
    </Layout>
  );
}
