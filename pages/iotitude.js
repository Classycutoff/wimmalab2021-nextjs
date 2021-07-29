import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member4 from '/public/assets/iotitude/Eetu.png';
import member2 from '/public/assets/iotitude/Ella.png';
import member1 from '/public/assets/iotitude/Elmer.png';
import member6 from '/public/assets/iotitude/Ildiko.png';
import member3 from '/public/assets/iotitude/Markku.png';
import member5 from '/public/assets/iotitude/Mirva.png';
import member7 from '/public/assets/iotitude/Olli.png';
import team from '/public/assets/iotitude/tiimi.jpg';

// import Img4 from '../public/assets/software.png';
import IotitudeLogo from '../svgs/logo-iotitude.svg';

const Iotitude = () => {
  const { t } = useTranslation('iotitude');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--iotitude margin-b">
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
          <IotitudeLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Tiimi</h4>
              <ul>
                <li>Elmer Tuukkanen</li>
                <li>Mirva Kallioinen</li>
                <li>Ildikó Makra</li>
                <li>Ella Vilen</li>
                <li>Olli Saari</li>
                <li>Markku Puura</li>
                <li>Eetu Karjalainen</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>React Native</li>
                <li>NodeJS</li>
                <li>PostgreSQL</li>
                <li>WebSocket</li>
                <li>Robot Framework</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-iotitude" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
          </div>
        </div>
      </section>

      {/* technologies */}
      {/* <section className="content__section technologies">
        <div className="simple-grid">
          <div className="virtual-card virtual-card--iotitude">
            <h2>{t('h2-technologies')}</h2>
            <p>{t('p-technologies')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section> */}

      {/* challenges */}
      {/* <section className="content__section challenges">
        <div className="simple-grid">
          <div className="virtual-card virtual-card--cyan-light">
            <h2>{t('h2-challenges')}</h2>
            <p>{t('p-challenges')}</p>
          </div>
          <div className="virtual-card virtual-card--cyan-light">
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
        </div>
      </section> */}

      {/* mockups */}

      {/* team introduction */}
      <section className="content__section introduction">
        <div>
          <h2 className="h2-centered">{t('h2-introduction')}</h2>
        </div>

        {/* team members */}

        <div className="team-member__wrapper">
          {/* member1 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/elmer-tuukkanen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/ella-vilen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/markkupuura/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/eetu-karjalainen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/mirva-kallioinen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--iotitude">
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
                href="https://www.linkedin.com/in/ildiko-makra/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member7 */}
          <div className="virtual-card virtual-card--iotitude">
            <div className="profile-image">
              <Image src={member7} />
            </div>
            <div>
              <h3>{t('h3-member7')}</h3>
              <h4>{t('h4-member7')}</h4>
              <p>{t('p-member7')}</p>
              <p>Harrastuksia vapaa-ajalla:</p>
              <ul>
                <li>Erilaiset urheiluharrastukset (sali, pyöräily, lenkkeily)</li>
                <li>Ruoanlaitto ja leivonta. Saa toimia keksijänä ja pienenä kemistinä.</li>
                <li>Pelaaminen. Mitä haastavampaa, sen mukavempaa.</li>
                <li>Kehittelen sekä ideoin omaa IoT-projektia.</li>
              </ul>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/ollisaari/">
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
            <Tweet tweetId="1413432922523242496" />
          </div>
          <div>
            <Tweet tweetId="1400763566383419397" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'iotitude']))
  }
});

export default Iotitude;
