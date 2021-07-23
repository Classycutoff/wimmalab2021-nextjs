import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <Layout t={t}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="content__section hero--home">
        <div className="hero__container">
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>
      <section className="content__section">
        <div className="history">
          <h2 className="text-center">{t('h2-history')}</h2>
          <p className="p-intro">{t('p-big-history')}</p>

          <div className="history">
            <div className="history__section">
              <h3>{t('h3-history-2021')}</h3>
              <div className="history__card-wrapper">
                <div className="history-card">
                  <h4>{t('h4-history-2021-1')}</h4>
                  <p>{t('p-history-2021-1')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2021-2')}</h4>
                  <p>{t('p-history-2021-2')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2021-3')}</h4>
                  <p>{t('p-history-2021-3')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2021-4')}</h4>
                  <p>{t('p-history-2021-4')}</p>
                </div>
              </div>
            </div>

            <div className="history__section">
              <h3>{t('h3-history-2020')}</h3>
              <p>{t('p-history-2020')}</p>
            </div>

            <div className="history__section">
              <h3>{t('h3-history-2019')}</h3>
              <div className="history__card-wrapper">
                <div className="history-card">
                  <h4>{t('h4-history-2019-1')}</h4>
                  <p>{t('p-history-2019-1')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2019-2')}</h4>
                  <p>{t('p-history-2019-2')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2019-3')}</h4>
                  <p>{t('p-history-2019-3')}</p>
                </div>
                <div className="history-card">
                  <h4>{t('h4-history-2019-4')}</h4>
                  <p>{t('p-history-2019-4')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home']))
  }
});

export default Home;
