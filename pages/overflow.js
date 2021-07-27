import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  // TwitterDMButton,
  // TwitterFollowButton,
  // TwitterHashtagButton,
  // TwitterMentionButton,
  // TwitterMomentShare,
  // TwitterOnAirButton,
  // TwitterShareButton,
  // TwitterTimelineEmbed,
  TwitterTweetEmbed
  // TwitterVideoEmbed
} from 'react-twitter-embed';

// import Accordion from '/components/Accordion';
// import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member5 from '/public/assets/overflow/jesse.png';
import member2 from '/public/assets/overflow/joel.png';
import member6 from '/public/assets/overflow/lassi.png';
import member4 from '/public/assets/overflow/mikko.png';
// other images
import heroBg from '/public/assets/overflow/overflow-header.png';
import pengwinLogo from '/public/assets/overflow/overflow-logo.png';
import member1 from '/public/assets/overflow/reetta.png';
import member3 from '/public/assets/overflow/samu.png';
import team from '/public/assets/overflow/tiimi.jpg';

import Img4 from '../public/assets/software.png';

const Pengwin = () => {
  const { t } = useTranslation('overflow');

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
          <Image src={pengwinLogo} />
          <h1 className="hero__h1">{t('h1')}</h1>
          <h3>{t('h1-subheading')}</h3>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <Image src={team} />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
            <p>{t('p2-team')}</p>
            <p>{t('p3-team')}</p>
          </div>
        </div>
      </section>

      {/* assignment */}
      <section className="content__section assignment">
        <div className="simple-grid">
          <div className="pengwin-card pengwin-card--blue">
            <h1>{t('h2-assignment')}</h1>
            <p>{t('p-assignment')}</p>
            <p>{t('p2-assignment')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2>{t('h2-introduction')}</h2>
        </div>

        {/* team members */}
        <div>
          {/* member1 */}

          <div className="simple-grid company-card company-card--cyan-light">
            <div>
              <Image src={member1} className="miniImage" />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <p>{t('p2-member1')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member2 */}
          <div className="simple-grid company-card company-card--cyan-light">
            <div>
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <p>{t('p2-member2')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member3 */}
          <div className="simple-grid company-card company-card--cyan-light">
            <div>
              <Image src={member3} />
            </div>
            <div>
              <h3>{t('h3-member3')}</h3>
              <h4>{t('h4-member3')}</h4>
              <p>{t('p-member3')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member4 */}
          <div className="simple-grid company-card company-card--cyan-light">
            <div>
              <Image src={member4} />
            </div>
            <div>
              <h3>{t('h3-member4')}</h3>
              <h4>{t('h4-member4')}</h4>
              <p>{t('p-member4')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member5 */}
          <div className="simple-grid company-card company-card--cyan-light">
            <div>
              <Image src={member5} />
            </div>
            <div>
              <h3>{t('h3-member5')}</h3>
              <h4>{t('h4-member5')}</h4>
              <p>{t('p-member5')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member6 */}
          <div className="simple-grid virtua-card">
            <div>
              <Image src={member6} />
            </div>
            <div>
              <h3>{t('h3-member6')}</h3>
              <h4>{t('h4-member6')}</h4>
              <p>{t('p-member6')}</p>
              <a>LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      <div className="twitter-container">
        <h2>{t('h2-twitter')}</h2>
        <div>
          <TwitterTweetEmbed tweetId={'1418511303061262339'} />
        </div>
        <div>
          <TwitterTweetEmbed tweetId={'1418511303061262339'} />
        </div>
        <div>
          <TwitterTweetEmbed tweetId={'1418511303061262339'} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'overflow']))
  }
});

export default Pengwin;
