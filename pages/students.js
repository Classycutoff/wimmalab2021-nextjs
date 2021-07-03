import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';

const Students = () => {
  const { t } = useTranslation('students');

  return (
    <Layout>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>
      <section className="content__section">
        <div>
          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />
          <h1>{t('h1')}</h1>
          <p>{t('h1-subheading')}</p>
        </div>
      </section>
      <section className="content__section">
        <div>
          <h2>{t('h2-students')}</h2>
          <div className="simple-grid">
            <div>
              <h3>{t('h3-wimma-lab-offers')}</h3>
              <p>{t('p-wimma-lab-offers-1')}</p>
              <p>{t('p-wimma-lab-offers-2')}</p>
            </div>
            <div></div>
            <div></div>
            <div>
              <h3>{t('h3-apply-to-wimma-lab')}</h3>
              <p>{t('p-apply-to-wimma-lab-1')}</p>
              <p>{t('p-apply-to-wimma-lab-2')}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="content__section">
        <div>
          <h2>{t('h2-responsibility')}</h2>
          <div className="simple-grid">
            <div>
              <h3>{t('h3-team-leader')}</h3>
              <p>{t('p-team-leader')}</p>
            </div>
            <div>
              <h3>{t('h3-student-coach')}</h3>
              <p>{t('p-student-coach')}</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['students']))
  }
});

export default Students;
