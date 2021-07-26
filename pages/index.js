import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import ProfileCard from '../components/ProfileCard';
import ProjectCard from '../components/ProjectCard';
import logo from '../public/assets/logo_wimma.png';
import heroBg from '../public/assets/students-hero-bg.png';
import IconAgile from '../svgs/icon-agile.svg';
import IconNetwork from '../svgs/icon-network.svg';
import IconTeam from '../svgs/icon-team.svg';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <Layout t={t}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* Hero section */}
      <section className="content__section hero hero--home">
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
          <Image src={logo} />
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* WIMMA Lab in a nutshell section */}
      <section className="content__section">
        <h2 className="h2-nutshell h2-section">{t('h2-nutshell')}</h2>
        <div className="simple-grid">
          <div>
            <IconNetwork className="svg-icon" />
            <h3 className="h3-nutshell-1">{t('h3-nutshell-1')}</h3>
            <p> {t('p-nutshell-1')} </p>
          </div>
          <div>
            <IconTeam className="svg-icon" />
            <h3 className="h3-nutshell-2">{t('h3-nutshell-2')}</h3>
            <p> {t('p-nutshell-2')} </p>
          </div>
          <div>
            <IconAgile className="svg-icon" />
            <h3 className="h3-nutshell-3">{t('h3-nutshell-3')}</h3>
            <p> {t('p-nutshell-3')} </p>
          </div>
          <div>
            <IconNetwork className="svg-icon" />
            <h3 className="h3-nutshell-4">{t('h3-nutshell-4')}</h3>
            <p> {t('p-nutshell-4')} </p>
          </div>
        </div>
      </section>

      {/* Virtual companies section */}
      <section className="content__section">
        <div>
          <h2 className="h2-companies h2-section">{t('h2-companies')}</h2>
          <div className="logo-grid companies-logos">
            <div>
              <svg width="274" height="274" viewBox="0 0 274 274">
                <rect width="274" height="274" fill="#CCC" />
              </svg>
            </div>
            <div>
              <svg width="274" height="274" viewBox="0 0 274 274">
                <rect width="274" height="274" fill="#CCC" />
              </svg>
            </div>
            <div>
              <svg width="274" height="274" viewBox="0 0 274 274">
                <rect width="274" height="274" fill="#CCC" />
              </svg>
            </div>
            <div>
              <svg width="274" height="274" viewBox="0 0 274 274">
                <rect width="274" height="274" fill="#CCC" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Assignments section */}
      <section className="content__section">
        <div>
          <h2 className="h2-assignments h2-section">{t('h2-assignments')}</h2>
          <div className="simple-grid"></div>
          <ProjectCard />
        </div>
      </section>

      {/* Instructors section */}
      <section className="content__section">
        <div>
          <h2 className="h2-instructors h2-section">{t('h2-instructors')}</h2>
          <div className="profile-grid">
            <ProfileCard />
          </div>
        </div>
      </section>

      {/* History section */}
      <section className="content__section">
        <div>
          <h2 className="h2-history h2-section">{t('h2-history')}</h2>
          <div className="profile-grid"></div>
        </div>
      </section>

      {/* Footer section  */}
      <section className="content__section">
        <div>
          <h2 className="h2-section">Footer</h2>
          <div className="profile-grid"></div>
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
