import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HistorySection from '/components/HistorySection';
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

          <HistorySection year="2019">
            <div className="history-card">
              <div className="history-card__image">
                <Image
                  src="/assets/history/iotitude-logo.png"
                  alt="IoTitude 2019"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h4>{t('h4-history-2019-1')}</h4>
                <p>{t('p-history-2019-1')}</p>
              </div>
            </div>
            <div className="history-card">
              <div className="history-card__image">
                <Image
                  src="/assets/history/overflow-logo.png"
                  alt="Overflow 2019"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h4>{t('h4-history-2019-2')}</h4>
                <p>{t('p-history-2019-2')}</p>
              </div>
            </div>
            <div className="history-card">
              <div className="history-card__image">
                <Image
                  src="/assets/history/mysticons-logo.png"
                  alt="Mysticons 2019"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h4>{t('h4-history-2019-3')}</h4>
                <p>{t('p-history-2019-3')}</p>
              </div>
            </div>
            <div className="history-card">
              <div className="history-card__image">
                <Image
                  src="/assets/history/pengwin-logo.png"
                  alt="Pengwin Media 2019"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <h4>{t('h4-history-2019-4')}</h4>
                <p>{t('p-history-2019-4')}</p>
              </div>
            </div>
          </HistorySection>

          <div className="history__section">
            <h3>{t('h3-history-2019')}</h3>
            <div className="history__card-wrapper">
              <div className="history-card">
                <div className="history-card__image">
                  <Image
                    src="/assets/history/iotitude-logo.png"
                    alt="IoTitude 2019"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h4>{t('h4-history-2019-1')}</h4>
                  <p>{t('p-history-2019-1')}</p>
                </div>
              </div>
              <div className="history-card">
                <div className="history-card__image">
                  <Image
                    src="/assets/history/overflow-logo.png"
                    alt="Overflow 2019"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h4>{t('h4-history-2019-2')}</h4>
                  <p>{t('p-history-2019-2')}</p>
                </div>
              </div>
              <div className="history-card">
                <div className="history-card__image">
                  <Image
                    src="/assets/history/mysticons-logo.png"
                    alt="Mysticons 2019"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h4>{t('h4-history-2019-3')}</h4>
                  <p>{t('p-history-2019-3')}</p>
                </div>
              </div>
              <div className="history-card">
                <div className="history-card__image">
                  <Image
                    src="/assets/history/pengwin-logo.png"
                    alt="Pengwin Media 2019"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
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
