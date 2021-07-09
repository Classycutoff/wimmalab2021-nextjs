import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import Button from '../components/Button';
import heroBg from '../public/assets/students-hero-bg.png';

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
      <section className="content__section hero hero--students">
        <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          priority
          quality={100}
          className="hero__bg"
        />
        <div className="hero__container">
          <p className="hero__for">
            {t('h1-for1')} <span>{t('h1-for2')}</span>
          </p>
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
          <Button name={t('apply-button')} icon />
        </div>
      </section>

      {/* Information for students */}
      <section className="content__section">
        <div>
          <h2>{t('h2-students')}</h2>
          <div className="simple-grid">
            <div>
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
