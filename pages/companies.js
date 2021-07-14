import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

const Companies = () => {
  const { t } = useTranslation('companies');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* information for companies */}
      <section className="content__section .hero--companies">
        <div className="hero__container">
          <p> {t('p-info')} </p>
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* what is wimmalab */}
      <section className="content__section">
        <div className="conten_section">
          <h2>{t('h2-companies')}</h2>
          <p> {t('p-what-is-wimma-lab')} </p>
        </div>
      </section>

      {/* how to participate */}
      <section className="content__section">
        <div className="conten_section">
          <div>
            <h2>{t('h2-how-to-participate')}</h2>
            <p>{t('p-how-to-participate')}</p>
          </div>
          <div className="simple-grid">
            <div>
              <h3>{t('h3-assignment')}</h3>
              <p>{t('p-assignment')}</p>
            </div>
            <div>
              <h3>{t('h3-even-sponsorship')}</h3>
              <p>{t('p-even-sponsorship')}</p>
            </div>
            <div>
              <h3>{t('h3-guest-lectures')}</h3>
              <p>{t('p-guest-lectures')}</p>
            </div>
            <div>
              <h3>{t('h3-mentoring')}</h3>
              <p>{t('p-mentoring')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* events */}
      <section className="content__section">
        <div>
          <h2>{t('h2-events')}</h2>
          <p>{t('p-events')}</p>
        </div>
        <div className="simple-grid">
          <div>
            <h2>{t('h3-events-kettuketer')}</h2>
            <p>{t('p-events-kettuketer')}</p>
          </div>
          <div>
            <h2>{t('h3-events-kaunailta')}</h2>
            <p>{t('p-events-kaunailta')}</p>
          </div>
        </div>
      </section>

      {/* experiences */}
      <section className="content__section">
        <div>
          <h2>{t('h2-experiences')}</h2>
        </div>
        <div className="simple-grid">
          <div>
            <p>{t('p-experience-1')}</p>
            <p>{t('p-experience-1-who')}</p>
            <p>{t('p-experience-1-company')}</p>
          </div>
          <div>
            <p>{t('p-experience-2')}</p>
            <h5>{t('p-experience-2-who')}</h5>
            <p>{t('p-experience-2-company')}</p>
          </div>
          <div>
            <p>{t('p-experience-3')}</p>
            <p>{t('p-experience-3-who')}</p>
            <p>{t('p-experience-3-company')}</p>
          </div>
        </div>
      </section>

      {/* contact us */}
      <section className="content__section">
        <div>
          <div>
            <h2> {t('h2-contact-us')}</h2>
          </div>
          <div>
            <p>{t('p-contact-first-row')}</p>
            <p>{t('p-contact-second-row')}</p>
            <p>{t('p-contact-third-row')}</p>
          </div>
        </div>
      </section>

      {/* sosocial media */}
      <h2>{t('h2-social-media')}</h2>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'companies']))
  }
});

export default Companies;
