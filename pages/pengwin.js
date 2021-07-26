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
import member1 from '/public/assets/pengwin/annukka.png';
import member3 from '/public/assets/pengwin/eliel.png';
import member6 from '/public/assets/pengwin/janna.png';
import heroBg from '/public/assets/pengwin/pengwin-header.png';
import pengwinLogo from '/public/assets/pengwin/pengwin-logo.png';
import member2 from '/public/assets/pengwin/roope.png';
import member4 from '/public/assets/pengwin/sari.png';
import member5 from '/public/assets/pengwin/tatu.png';
import team from '/public/assets/pengwin/tiimi.jpg';

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
          <p className="hero__p">{t('h1-subheading')}</p>
        </div>
      </section>
      {/* team  in nutshell*/}
      <section className="content__section">
        <div>
          <Image src={team} />
        </div>
        <div>
          <h1>{t('h1-team')}</h1>
          <p>{t('p-team')}</p>
        </div>
      </section>
      {/* assignment */}
      <section className="content__section ">
        <h2>{t('h2-assignment')}</h2>
        <p>{t('p-assignment')}</p>
      </section>

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h1>{t('h2-introduction')}</h1>
        </div>
        {/* member1 */}
        <div>
          <div className="pengwin-card">
            <div>
              <div>
                <Image src={member1} className="miniImage" />
              </div>
              <div>
                <h2>{t('h2-member1')}</h2>
                <h3>{t('h3-member1')}</h3>
                <p>{t('p-member1')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* member2 */}
          <div>
            <div className="pengwin-card">
              <div>
                <Image src={member2} />
              </div>
              <div>
                <h2>{t('h2-member2')}</h2>
                <h3>{t('h3-member2')}</h3>
                <p>{t('p-member2')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* member3 */}
          <div>
            <div>
              <div>
                <Image src={member3} />
              </div>
              <div>
                <h2>{t('h2-member3')}</h2>
                <h3>{t('h3-member3')}</h3>
                <p>{t('p-member3')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* member4 */}
          <div>
            <div>
              <div>
                <Image src={member4} />
              </div>
              <div>
                <h2>{t('h2-member4')}</h2>
                <h3>{t('h3-member4')}</h3>
                <p>{t('p-member4')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* member5 */}
          <div>
            <div>
              <div>
                <Image src={member5} />
              </div>
              <div>
                <h2>{t('h2-member5')}</h2>
                <h3>{t('h3-member5')}</h3>
                <p>{t('p-member5')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>

          {/* member6 */}
          <div>
            <div>
              <div>
                <Image src={member6} />
              </div>
              <div>
                <h2>{t('h2-member6')}</h2>
                <h3>{t('h3-member6')}</h3>
                <p>{t('p-member6')}</p>
                <a>LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* social media  */}
      <div className="simple-grid">
        {/* {' '}
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="wimmalab"
          options={{ height: 400 }}
        /> */}
        <TwitterTweetEmbed tweetId={'1418511303061262339'} />
        <TwitterTweetEmbed tweetId={'1418511303061262339'} />
        <TwitterTweetEmbed tweetId={'1418511303061262339'} />
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'pengwin']))
  }
});

export default Pengwin;
