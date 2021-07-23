import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HistoryCard from '/components/HistoryCard';
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
          <HistorySection year="2021">
            <HistoryCard
              url="/iotitude"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2021-1')}
              desc={t('p-history-2021-1')}
            />
            <HistoryCard
              url="/overflow"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2021-2')}
              desc={t('p-history-2021-2')}
            />
            <HistoryCard
              url="/mysticons"
              imgUrl="/assets/history/mysticons-logo.png"
              title={t('h4-history-2021-3')}
              desc={t('p-history-2021-3')}
            />
            <HistoryCard
              url="/pengwin"
              imgUrl="/assets/history/pengwin-logo.png"
              title={t('h4-history-2021-4')}
              desc={t('p-history-2021-4')}
            />
          </HistorySection>

          <HistorySection year="2020" intro={t('p-history-2020')} />

          <HistorySection year="2019">
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/iotitude/site/"
              imgUrl="/assets/history/iotitude-logo.png"
              title={t('h4-history-2019-1')}
              desc={t('p-history-2019-1')}
            />
            <HistoryCard
              url="https://wimma-lab-2019.pages.labranet.jamk.fi/overflow/site/"
              imgUrl="/assets/history/overflow-logo.png"
              title={t('h4-history-2019-2')}
              desc={t('p-history-2019-2')}
            />
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/mysticons/site/"
              imgUrl="/assets/history/mysticons-logo.png"
              title={t('h4-history-2019-3')}
              desc={t('p-history-2019-3')}
            />
            <HistoryCard
              url="http://wimma-lab-2019.pages.labranet.jamk.fi/pengwin/site/"
              imgUrl="/assets/history/pengwin-logo.png"
              title={t('h4-history-2019-4')}
              desc={t('p-history-2019-4')}
            />
          </HistorySection>
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
