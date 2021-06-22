import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';
import styles from '../styles/Home.module.scss';

const Home = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href="/" locale={router.locale === 'fi' ? 'en' : 'fi'}>
            <button>{t('change-locale')}</button>
          </Link>

          <Link href="./opiskelijat">
            <a>{t('opiskelijat')}</a>
          </Link>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
          </h1>
          <p className={styles.description}>
            Get started by editing <code className={styles.code}>pages/index.js</code>
          </p>
          <p>Current locale: {locale}</p>
          <p>Default locale: {defaultLocale}</p>
          <p>Configured locales: {JSON.stringify(locales)}</p>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'footer']))
  }
});

export default Home;
