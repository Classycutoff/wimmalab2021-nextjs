import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import HeroBg from '../public/assets/home-hero.png';

const Contact = () => {
  const { t } = useTranslation('contact');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('title')} – {siteTitle}
        </title>
      </Head>
      {/* Hero section */}
      <section className="content__section hero hero--contact">
        <Image
          src={HeroBg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          quality={96}
          className="hero__bg"
          priority={true}
        />
        <div className="hero__container">
          <h1 className="hero__h1">{t('h1')}</h1>
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>

      {/* Contact */}
      <section className="content__section">
        <h2 className="h2-nutshell h2-section">Map</h2>
        <p>Hello world</p>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'contact']))
  }
});

export default Contact;
