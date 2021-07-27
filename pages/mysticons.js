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
import member2 from '/public/assets/mysticons/heikki.png';
import member3 from '/public/assets/mysticons/matti.png';
// other images
import heroBg from '/public/assets/mysticons/mysticons-header.png';
import pengwinLogo from '/public/assets/mysticons/mysticons-logo.png';
import member5 from '/public/assets/mysticons/samuli.png';
// img: team members
import member1 from '/public/assets/mysticons/sini.png';
import team from '/public/assets/mysticons/tiimi.jpg';
import member4 from '/public/assets/mysticons/timo.png';

import Img4 from '../public/assets/software.png';

const Pengwin = () => {
  const { t } = useTranslation('mysticons');

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
          </div>
        </div>
      </section>

      {/* assignment */}
      <section className="content__section assignment">
        <div className="simple-grid">
          <div className="pengwin-card pengwin-card--blue">
            <h1>{t('h2-assignment')}</h1>
            <p>{t('p-assignment')}</p>
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

          <div className="simple-grid company-card company-card--purple">
            <div>
              <Image src={member1} className="miniImage" />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member2 */}
          <div className="simple-grid company-card company-card--purple">
            <div>
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member3 */}
          <div className="simple-grid company-card company-card--purple">
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
          <div className="simple-grid company-card company-card--purple">
            <div>
              <Image src={member4} />
            </div>
            <div>
              <h3>{t('h3-member4')}</h3>
              <h4>{t('h4-member4')}</h4>
              <ul>
                <li>Kotoisin: Säynätsalosta (Jyväskylä)</li>
                <li>Kiinnostavat aiheet työelämässä tällä hetkellä: automaatio, ethical hacking</li>
                <li>
                  Kokemusta: Linux, Linux servers, Windows, Docker, Python, tietoturva, ethical
                  hacking
                </li>
                <li>Harrastuneisuus: Tietokonepelit, vaellus, sudokut</li>
              </ul>
              <a>LinkedIn</a>
            </div>
          </div>

          {/* member5 */}
          <div className="simple-grid company-card company-card--purple">
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
        </div>
      </section>

      {/* social media  */}
      <div className="twitter-container">
        <h2>{t('h2-twitter')}</h2>
        <div>
          <TwitterTweetEmbed tweetId={'1400051275966857216'} />
        </div>
        <div>
          <TwitterTweetEmbed tweetId={'1418511305607106560'} />
        </div>
        <div>
          <TwitterTweetEmbed tweetId={'1414549859206582273'} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'mysticons']))
  }
});

export default Pengwin;
