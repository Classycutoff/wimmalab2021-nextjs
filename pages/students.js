import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Accordion from '/components/Accordion';
import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import heroBg from '/public/assets/students-hero-bg.png';
import Img1 from '/public/assets/students-img1.png';

import SvgUnderline from '../svgs/underline.svg';

const Students = () => {
  const { t } = useTranslation('students');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--students margin-b">
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
          <Button icon>{t('apply-button')}</Button>
        </div>
      </section>

      {/* Information for students */}
      <section className="content__section">
        <div>
          <div className="simple-grid margin-b">
            <div>
              <h2>{t('h2-students')}</h2>
              <p>{t('p-wimma-lab-offers-1')}</p>
              <p>{t('p-wimma-lab-offers-2')}</p>
            </div>
            <div className="teams__logo-grid">
              <div className="teams__iotitude">
                <span>IoTitude</span>
              </div>
              <div className="teams__mysticons">
                <span>Mysticons</span>
              </div>
              <div className="teams__overflow">
                <span>Overflow</span>
              </div>
              <div className="teams__pengwin">
                <span>Pengwin Media</span>
              </div>
            </div>
          </div>
          <div className="simple-grid">
            <div>
              <ImageWrapper src={Img1} className="students-img1" />
            </div>
            <div>
              <h3 className="students__apply-h3">{t('h3-apply-to-wimma-lab')}</h3>
              <p>{t('p-apply-to-wimma-lab-1')}</p>
              <p>{t('p-apply-to-wimma-lab-2')}</p>
              <Button type="secondary" className="margin-t" icon>
                {t('apply-button')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Roles in WIMMA Lab */}
      <section className="content__section">
        <div>
          <h2>Roles in WIMMA Lab</h2>
          <p>
            Roolit vaihtelevat joka wimma-toteutuksessa toimeksiantojen mukaan. Rooleja voi olla
            yksi tai useita. Roolit voivat olla myös jotain muuta kun mitä tällä listalla on.
          </p>
          <div className="roles__wrapper">
            <div className="roles__box">Front-end Development Back-end Development</div>
            <div className="roles__box">UI/UX Design Graphic Design</div>
            <div className="roles__box">Photography Social Media</div>
            <div className="roles__box">DevOps CI/CD Test Automation</div>
          </div>
        </div>
      </section>

      {/* Interested in more responsibility? */}
      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-responsibility')}</h2>
            <p className="p-narrow">{t('p-responsibility')}</p>
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
        <div className="simple-grid">
          <div>
            <h2>{t('h2-faq')}</h2>
            <p className="p-narrow">{t('p-faq-more-info')}</p>
            <Button type="secondary" icon>
              {t('button-faq-guides')}
            </Button>
          </div>
          <div>
            <Accordion title={t('p-faq-q1')}>{t('p-faq-a1')}</Accordion>
            <Accordion title={t('p-faq-q2')}>{t('p-faq-a2')}</Accordion>
            <Accordion title={t('p-faq-q3')}>{t('p-faq-a3')}</Accordion>
            <Accordion title={t('p-faq-q4')}>{t('p-faq-a4')}</Accordion>
            <Accordion title={t('p-faq-q5')}>{t('p-faq-a5')}</Accordion>
            <Accordion title={t('p-faq-q6')}>{t('p-faq-a6')}</Accordion>
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
