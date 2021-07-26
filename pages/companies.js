import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import ImageWrapper from '../components/ImageWrapper';
import companyBg from '../public/assets/companyBg.jpg';
import Img4 from '../public/assets/software.png';
import Img5 from '../public/assets/what.jpg';

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
      <section className="content__section hero hero--students margin-b">
        <div className="hero__container">
          <Image
            src={companyBg}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
            quality={96}
            className="hero__bg"
            priority={true}
          />
          <div className="hero__container">
            <p> {t('p-info')} </p>
            <h1 className="hero__h1">{t('h1')}</h1>
            <p className="hero__p">{t('h1-subheading')}</p>
          </div>
        </div>
      </section>

      {/* What is WIMMA Lab */}
      <section className="content__section what">
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
            <ImageWrapper src={Img5} className="company2" />
          </div>
        </div>
      </section>

      {/* How to participate */}
      <section className="content__section participate">
        <div className="conten_section">
          <div>
            <h2>{t('h2-how-to-participate')}</h2>
            <p className="p-intro">{t('p-how-to-participate')}</p>
          </div>
          <div className="simple-grid">
            <div className="company-card company-card--cyan-light">
              <div>
                <h4>{t('h3-assignment')}</h4>
                <p>{t('p-assignment')}</p>
              </div>
            </div>
            <div className="company-card company-card--cyan-light">
              <h4>{t('h3-even-sponsorship')}</h4>
              <p>{t('p-even-sponsorship')}</p>
            </div>
            <div className="company-card company-card--cyan-light">
              <h4>{t('h3-guest-lectures')}</h4>
              <p>{t('p-guest-lectures')}</p>
            </div>
            <div className="company-card company-card--cyan-light">
              <h4>{t('h3-mentoring')}</h4>
              <p>{t('p-mentoring')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* events */}
      <section className="content__section">
        <div>
          <h3>{t('h2-events')}</h3>
        </div>
        <div className="simple-grid">
          <div>
            <ImageWrapper src={Img5} className="company2" />
          </div>
          <div>
            <div className="company-card company-card--purple">
              <h4>{t('h3-events-kettuketer')}</h4>
              <p>{t('p-events-kettuketer')}</p>
            </div>
            <div className="company-card company-card--purple">
              <h4>{t('h3-events-kaunailta')}</h4>
              <p>{t('p-events-kaunailta')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* experiences */}
      <section className="content__section simple-grid experience">
        <div>
          <h2>{t('h2-experiences')}</h2>
        </div>
        <div className="simple-grid experience-card">
          <div className="company-card company-card--blue">
            <div>
              <Image src={Img4} className="experience-image" />
            </div>
            <div>
              <p>{t('p-experience-1')}</p>
              <p>{t('p-experience-1-who')}</p>
              <p>{t('p-experience-1-company')}</p>
            </div>
          </div>
          <div className="company-card company-card--blue">
            <div>
              <Image src={Img4} className="experience-image" />
            </div>
            <div>
              <p>{t('p-experience-2')}</p>
              <h5>{t('p-experience-2-who')}</h5>
              <p>{t('p-experience-2-company')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact us */}
      <section className="content__section">
        <div className=" company-card ">
          <div>
            <h2> {t('h2-contact-us')}</h2>
          </div>
          <div className="simple-grid">
            <div className=" company-card company-card--cyan-light contactInfo">
              <p>Marko Rintamäki</p>
              <a href="https://www.linkedin.com/in/narsuman/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <p>marko.rintamaki@jamk.fi</p>
            </div>
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
