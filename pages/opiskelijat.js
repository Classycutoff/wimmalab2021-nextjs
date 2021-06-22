import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Opiskelijoille – {siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="./yritykset">
            <a>to yritykset</a>
          </Link>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1 className={styles.title}>Opiskelijoille</h1>

          <p className={styles.description}>Tällä sivulla on tietoa opiskelijoille.</p>
        </main>
      </div>
    </Layout>
  );
}
