import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Tweet } from 'react-twitter-widgets';

import Button from '/components/Button';
import ImageWrapper from '/components/ImageWrapper';
import Layout, { siteTitle } from '/components/Layout';
import member5 from '/public/assets/overflow/jesse.png';
import member2 from '/public/assets/overflow/joel.png';
import member6 from '/public/assets/overflow/lassi.png';
import member4 from '/public/assets/overflow/mikko.png';
import member1 from '/public/assets/overflow/reetta.png';
import member3 from '/public/assets/overflow/samu.png';
import team from '/public/assets/overflow/tiimi.jpg';

import OverflowLogo from '../svgs/logo-overflow.svg';

const Overflow = () => {
  const { t } = useTranslation('overflow');

  return (
    <Layout t={t}>
      <Head>
        <title>
          {t('page-title')} – {siteTitle}
        </title>
      </Head>

      {/* Hero section */}
      <section className="content__section hero hero--virtual-company hero--overflow margin-b">
        <div className="hero__container">
          <OverflowLogo />
          <h1 className="hero__h1">{t('hero-h1')}</h1>
          <p className="p-bigger">{t('hero-p')}</p>
          <div className="project-info">
            <div>
              <h4>Tiimi</h4>
              <ul>
                <li>Reetta Laitinen</li>
                <li>Joel Aalto</li>
                <li>Samu Vesiluoma</li>
                <li>Mikko Fredrikson</li>
                <li>Jesse Rissanen</li>
                <li>Lassi Viitakoski</li>
              </ul>
            </div>
            <div>
              <h4>Stack</h4>
              <ul>
                <li>React</li>
                <li>ASP.NET Core</li>
                <li>PostgreSQL</li>
                <li>Cypress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/*who we are*/}
      <section className="content__section who-we-are">
        <div className="simple-grid">
          <div>
            <ImageWrapper src={team} className="img-overflow" />
          </div>
          <div>
            <h2>{t('h1-team')}</h2>
            <p>{t('p-team')}</p>
            <p>{t('p2-team')}</p>
          </div>
        </div>
      </section>

      {/* <section className="content__section assignment">
        <div className="simple-grid">
          <div>
            <h2>{t('h2-assignment')}</h2>
            <p>{t('p-assignment')}</p>
            <p>{t('p2-assignment')}</p>
            <p>{t('p3-assignment')}</p>
          </div>
          <div>
            <Image src={Img4} />
          </div>
        </div>
      </section>

      <section className="content__section assignment">
        <div className="simple-grid">
          <div>
            <Image src={Img4} />
          </div>
          <div>
            <h2>{t('h2-technologies')}</h2>
            <ul>
              <li>
                <b>React</b> – React oli useammalle tiimin jäsenestä tuttu, joten siksi päätimme
                käyttää sitä frontendissä.
              </li>
              <li>
                <b>ASP.NET Core</b> – ASP.NET Core oli myös useammalle tiimin jäsenestä tuttu, joten
                käytimme sitä kielenä backendissä.
              </li>
              <li>
                <b>PostgreSQL</b> – tietokantaan valitsimme PostgreSQL, koska se on nopea laittaa
                pystyyn ja helppo käyttää.
              </li>
              <li>
                <b>Microsoft Power Automate</b> – ajatuksena oli, että Power Automaten käyttö
                muutamissa kohdissa olisi kiva lisäys.
              </li>
              <li>
                <b>Kubernetes & GitLab CI/CD</b> – palvelu on tarkoitus laittaa pyörimään
                Kubernetesin päälle, samalla hyödyntäen gitlabin CI/CD pipelinejä. Mysticons toimi
                tässä asiantuntijana ja ohjeisti meitä.
              </li>
              <li>
                <b>Cypress</b> – aluksi suunnitteilla oli tehdä Robot Frameworkia käyttäen testejä,
                mutta vaihdoimmekin Cypressiin, koska sillä on muun muassa helppoa tehdä testejä.
              </li>
            </ul>
            <p>
              Admin-frontendissä käytetyt teknologiat: Node.js, React, Formik, Axios, Material UI,
              Yup
            </p>
          </div>
        </div>
      </section>

      <section className="content__section challenges">
        <div>
          <h2>{t('h2-challenges')}</h2>
          <h4>{t('h4-challenge1')}</h4>
          <p>{t('p-challenge1')}</p>
          <h4>{t('h4-challenge2')}</h4>
          <p>{t('p-challenge2')}</p>
          <h4>{t('h4-challenge3')}</h4>
          <p>{t('p-challenge3')}</p>
        </div>
      </section>

      <section className="content__section">
        <div className="simple-grid">
          <div></div>
          <div>
            <h2>{t('h2-learned')}</h2>
            <p>{t('p-learned')}</p>
          </div>
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
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member1} />
            </div>
            <div>
              <h3>{t('h3-member1')}</h3>
              <h4>{t('h4-member1')}</h4>
              <p>{t('p-member1')}</p>
              <p>{t('p2-member1')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/reetta-laitinen/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member2 */}
          <div className="virtual-card virtual-card--blue">
            <div className="profile-image">
              <Image src={member2} />
            </div>
            <div>
              <h3>{t('h3-member2')}</h3>
              <h4>{t('h4-member2')}</h4>
              <p>{t('p-member2')}</p>
              <p>{t('p2-member2')}</p>
              <Button
                type="secondary"
                className="margin-t"
                icon
                href="https://www.linkedin.com/in/joelaalto/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member3 */}
          <div className="virtual-card virtual-card--blue">
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
                href="https://www.linkedin.com/in/samu-vesiluoma/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member4 */}
          <div className="virtual-card virtual-card--blue">
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
                href="https://www.linkedin.com/in/mikko-fredrikson/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member5 */}
          <div className="virtual-card virtual-card--blue">
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
                href="https://www.linkedin.com/in/rissanenjesse/">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* member6 */}
          <div className="virtual-card virtual-card--blue">
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
                href="https://www.linkedin.com/in/lassiviitakoski/">
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
            <Tweet tweetId="1415594923861159940" />
          </div>
          <div>
            <Tweet tweetId="1399681977712795652" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'overflow']))
  }
});

export default Overflow;
