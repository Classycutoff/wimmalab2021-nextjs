import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout, { siteTitle } from '/components/Layout';

import logo from '../public/assets/logo_wimma.png';

const Home = () => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <main>
          <Link href="/" locale={router.locale === 'fi' ? 'en' : 'fi'}>
            <button>{t('change-locale')}</button>
          </Link>

          <p>Navigation:</p>
          <Link href="./students">
            <a>{t('students')}</a>
          </Link>
          <Link href="./companies">
            <a>{t('companies')}</a>
          </Link>

          <Image src={logo} alt="WIMMA Lab -logo" quality="90" priority />

          <h1>
            Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
          </h1>
          <p>
            Get started by editing <code>pages/index.js</code>
          </p>
          <p>Current locale: {locale}</p>
          <p>Default locale: {defaultLocale}</p>
          <p>Configured locales: {JSON.stringify(locales)}</p>
        </main>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Home;
