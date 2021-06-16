import Image from 'next/image';

import Meta from '/components/Meta';

import logo from '../public/assets/logo_wimma.png';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  );
}
