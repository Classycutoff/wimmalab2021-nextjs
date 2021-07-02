import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';
import styles from '../styles/Home.module.scss';

const Students = () => {
  const { t } = useTranslation('students');

  return (
    <Layout>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1 className={styles.title}>{t('h1')}</h1>
          <p className={styles.description}>{t('h1-subheading')}</p>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['students']))
  }
});

export default Students;
