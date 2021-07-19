import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import ImageWrapper from '../components/ImageWrapper';
// import companyBg from '../public/assets/company.jpg';
import Img2 from '../public/assets/company2.png';

const Companies = () => {
  const { t } = useTranslation('companies');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Information for companies */}
      <section className="content__section hero--companies">
        <div className="hero__container">
          <p> {t('p-info')} </p>
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* What is WIMMA Lab */}
      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-companies')}</h2>
            <p>{t('p-what-is-wimma-lab')}</p>
            <ul>
              <li>{t('li-reasons-1')}</li>
              <li>{t('li-reasons-2')}</li>
              <li>{t('li-reasons-3')}</li>
              <li>{t('li-reasons-4')}</li>
            </ul>
          </div>
          <div>
            <ImageWrapper src={Img2} className="company2" />
          </div>
        </div>
      </section>

      {/* How to participate */}
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

      {/* Events */}
      <section className="content__section">
        <div>
          <h2>{t('h2-events')}</h2>
        </div>
        <div className="simple-grid">
          <div>
            <h3>{t('h3-events-kettuketer')}</h3>
            <p>{t('p-events-kettuketer')}</p>
          </div>
          <div>
            <h3>{t('h3-events-kaunailta')}</h3>
            <p>{t('p-events-kaunailta')}</p>
          </div>
        </div>
      </section>

      {/* Experiences */}
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
            <p>{t('p-experience-2-who')}</p>
            <p>{t('p-experience-2-company')}</p>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="content__section">
        <div>
          <div>
            <h2> {t('h2-contact-us')}</h2>
          </div>
          <div>
            <p>Marko Rintamäki</p>
            <p>LinkedIn</p>
            <p>marko.rintamaki@jamk.fi</p>
          </div>
        </div>
      </section>

      {/* Social media */}
      <section className="content__section">
        <h2>{t('h2-social-media')}</h2>
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
