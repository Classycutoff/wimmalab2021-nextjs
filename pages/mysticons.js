import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member2 from '/public/assets/mysticons/heikki.png';
import member3 from '/public/assets/mysticons/matti.png';
import member5 from '/public/assets/mysticons/samuli.png';
import member1 from '/public/assets/mysticons/sini.png';
import team from '/public/assets/mysticons/tiimi.jpg';
import member4 from '/public/assets/mysticons/timo.png';

import Img4 from '../public/assets/software.png';
import MysticonsLogo from '../svgs/logo-mysticons.svg';

const Mysticons = () => {
  const { t } = useTranslation('mysticons');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--mysticons margin-b">
        {/* <Image
          src={heroBg}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt=""
          quality={96}
          className="hero__bg"
          priority={true}
        /> */}
        <div className="hero__container">
          <MysticonsLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Tiimi</h4>
              <ul>
                <li>Sini Karvonen</li>
                <li>Heikki Pekkarinen</li>
                <li>Matti Saarelma</li>
                <li>Timo Lehosvuo</li>
                <li>Samuli Ylönen</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>GitLab CI/CD</li>
                <li>Power Automate</li>
                <li>Robot Framework</li>
                <li>Ansible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-mysticons" />
          </div>
          <div>
            <h2>{t('h2-assignment')}</h2>
            <p>{t('p-assignment-1')}</p>
            <p>{t('p-assignment-2')}</p>
          </div>
        </div>
      </section>

      {/* technologies */}
      <section className="content__section technologies">
        <div className="simple-grid">
          <div className="">
            <h2>{t('h2-technologies')}</h2>
            <p>{t('p-technologies')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      {/* challenges */}
      <section className="content__section challenges">
        <div className="simple-grid">
          <div>
            <Image src={Img4} />
          </div>
          <div>
            <h2>{t('h2-challenges')}</h2>
            <p>{t('p-challenges-1')}</p>
            <p>{t('p-challenges-2')}</p>
            <p>{t('p-challenges-3')}</p>
          </div>
        </div>
      </section>

      {/* conclusion */}
      <section className="content__section">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
          <div></div>
        </div>
      </section>

      {/* mockups */}

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2 className="h2-centered">{t('h2-introduction')}</h2>
        </div>

        {/* team members */}
        <div className="team-member__wrapper">
          {/* member1 */}
          <div className="virtual-card virtual-card--purple">
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
                href="https://www.linkedin.com/in/sinikarvonen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--purple">
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
                href="https://www.linkedin.com/in/heikki-pekkarinen-74661014b/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--purple">
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
                href="https://www.linkedin.com/in/calderone001/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--purple">
            <div className="profile-image">
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
                <li>Harrastuneisuus: tietokonepelit, vaellus, sudokut</li>
              </ul>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/lomit/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--purple">
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
                href="https://www.linkedin.com/in/samuliylönen/">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* social media  */}
      <section>
        <h2 className="h2-centered">{t('h2-twitter')}</h2>
        <div className="twitter-grid">
          <div>
            <Tweet tweetId="1400051275966857216" />
          </div>
          <div>
            <Tweet tweetId="1418511305607106560" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'mysticons']))
  }
});

export default Mysticons;
