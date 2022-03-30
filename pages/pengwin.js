import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member1 from '/public/assets/pengwin/Annukka.png';
import member3 from '/public/assets/pengwin/Eliel.png';
import member6 from '/public/assets/pengwin/Janna.png';
import member2 from '/public/assets/pengwin/Roope.png';
import member4 from '/public/assets/pengwin/Sari.png';
import member5 from '/public/assets/pengwin/Tatu.png';
import team from '/public/assets/pengwin/tiimi.jpg';

import PengwinLogo from '../svgs/logo-pengwin.svg';

const Pengwin = () => {
  const { t } = useTranslation('pengwin');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--pengwin margin-b">
        <div className="hero__container">
          <PengwinLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Tiimi</h4>
              <ul>
                <li>Annukka Rajala</li>
                <li>Roope Huttunen</li>
                <li>Eliel Taskinen</li>
                <li>Sari Kumpulainen</li>
                <li>Tatu Seppänen</li>
                <li>Janna Niemi</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>Next.js</li>
                <li>SCSS</li>
                <li>Figma</li>
                <li>Illustrator</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-pengwin" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
          </div>
        </div>
      </section>

      {/* <section className="content__section technologies">
        <div className="simple-grid">
          <div className="">
            <h2>{t('h2-technologies')}</h2>
            <p>{t('p-technologies1')}</p>
            <p>{t('p-technologies2')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      <section className="content__section challenges">
        <div className="simple-grid">
          <div>
            <Image src={Img4} />
          </div>
          <div>
            <h2>{t('h2-challenges')}</h2>
            <p>{t('p-challenges1')}</p>
            <p>{t('p-challenges2')}</p>
          </div>
        </div>
      </section>

      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
          <div></div>
        </div>
      </section> */}

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2 className="h2-centered">{t('h2-introduction')}</h2>
        </div>

        {/* team members */}
        <div className="team-member__wrapper">
          {/* member1 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member1} />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/annukkarajala/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/roope-huttunen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member3} />
            </div>
            <div>
              <h3>{t('h3-member3')}</h3>
              <h4>{t('h4-member3')}</h4>
              <p>{t('p-member3')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/eliel-taskinen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member4} />
            </div>
            <div>
              <h3>{t('h3-member4')}</h3>
              <h4>{t('h4-member4')}</h4>
              <p>{t('p-member4')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/kumpulainensari/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member5} />
            </div>
            <div>
              <h3>{t('h3-member5')}</h3>
              <h4>{t('h4-member5')}</h4>
              <p>{t('p-member5')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/tatu-seppanen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--pengwin">
            <div className="profile-image">
              <Image src={member6} />
            </div>
            <div>
              <h3>{t('h3-member6')}</h3>
              <h4>{t('h4-member6')}</h4>
              <p>{t('p-member6')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/niemijanna/">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      <section>
        <h2 className="h2-centered tweet-h2">{t('h2-twitter')}</h2>
        <div className="twitter-grid">
          <div>
            <Tweet tweetId="1419971852970205211" />
          </div>
          <div>
            <Tweet tweetId="1400398116080308227" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'pengwin']))
  }
});

export default Pengwin;
