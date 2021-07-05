import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';

const Companies = () => {
  const { t } = useTranslation('companies');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>
      <section className="content__section">
        <div>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1>{t('h1')}</h1>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'companies']))
  }
});

export default Companies;
