import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import Logo from '../svgs/logo_round.svg';

const Students = () => {
  const { t } = useTranslation('students');

  // Questions & answers
  let faq = [];
  for (let i = 1; i <= 6; i++) {
    faq.push(
      <dl key={i}>
        <dt>+ {t(`p-faq-q${i}`)}</dt>
        <dd>{t(`p-faq-a${i}`)}</dd>
      </dl>
    );
  }

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section">
        <div className="hero__container">
          <Logo width="156" height="156" />
          <h1>{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
          <a href="/">Apply to WIMMA Lab</a>
        </div>
      </section>

      {/* Information for students */}
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

      {/* Interested in more responsibility? */}
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

      {/* WIMMA Lab timeline */}
      <section className="content__section">
        <div>
          <h2>{t('h2-timeline')}</h2>
          <div>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </section>

      {/* Questions & answers */}
      <section className="content__section">
        <div>
          <h2>{t('h2-faq')}</h2>
          <div className="simple-grid">
            <div></div>
            <div>{faq}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'students']))
  }
});

export default Students;
