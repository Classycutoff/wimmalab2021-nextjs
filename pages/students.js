import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import Button from '../components/Button';
import ImageWrapper from '../components/ImageWrapper';
import heroBg from '../public/assets/students-hero-bg.png';
import Img1 from '../public/assets/students-img1.png';
import SvgUnderline from '../svgs/underline.svg';

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
          quality={96}
          className="hero__bg"
          priority={true}
        />
        <div className="hero__container">
          <p className="hero__for">
            {t('h1-for1')}{' '}
            <span>
              {t('h1-for2')}
              <SvgUnderline />
            </span>
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
          <div className="simple-grid margin-b">
            <div>
              <p>{t('p-wimma-lab-offers-1')}</p>
              <p>{t('p-wimma-lab-offers-2')}</p>
            </div>
            <div></div>
          </div>
          <div className="simple-grid">
            <div>
              <ImageWrapper src={Img1} className="students-img1" />
            </div>
            <div>
              <h3>{t('h3-apply-to-wimma-lab')}</h3>
              <p>{t('p-apply-to-wimma-lab-1')}</p>
              <small className="students__apply-dates">{t('p-apply-to-wimma-lab-2')}</small>
              <Button name={t('apply-button')} icon type="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* Interested in more responsibility? */}
      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-responsibility')}</h2>
            <p className="p-responsibility">{t('p-responsibility')}</p>
          </div>
          <div>
            <div className="leader-card leader-card--orange">
              <h3>{t('h3-team-leader')}</h3>
              <p>{t('p-team-leader')}</p>
            </div>
            <div className="leader-card leader-card--purple">
              <h3>{t('h3-student-coach')}</h3>
              <p>{t('p-student-coach')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* WIMMA Lab timeline */}
      <section className="content__section">
        <div>
          <h2 className="h2-timeline">{t('h2-timeline')}</h2>
          <div className="timeline">
            <p className="month first">{t('month-orientation-week')}</p>
            <div className="timeline__box first">
              <h3 className="timeline__h3">{t('h3-orientation-week')}</h3>
              <p className="timeline__p">{t('p-orientation-week')}</p>
            </div>
            <p className="month second">{t('month-open-doors')}</p>
            <div className="timeline__box second">
              <h3 className="timeline__h3">{t('h3-open-doors')}</h3>
              <p className="timeline__p">{t('p-open-doors')}</p>
            </div>
            <p className="month third">{t('month-kettuketer')}</p>
            <div className="timeline__box third">
              <h3 className="timeline__h3">{t('h3-kettuketer')}</h3>
              <p className="timeline__p">{t('p-kettuketer')}</p>
            </div>
            <p className="month fourth">{t('month-kaunailta')}</p>
            <div className="timeline__box fourth">
              <h3 className="timeline__h3">{t('h3-kaunailta')}</h3>
              <p className="timeline__p">{t('p-kaunailta')}</p>
            </div>
            <p className="month fifth">{t('month-retro-day')}</p>
            <div className="timeline__box fifth">
              <h3 className="timeline__h3">{t('h3-retro-day')}</h3>
              <p className="timeline__p">{t('p-retro-day')}</p>
            </div>
            <div className="timeline__line"></div>
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
