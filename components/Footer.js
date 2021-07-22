import Image from 'next/image';
import Link from 'next/link';

import Logo from '../svgs/logo-light_no-bg.svg';
import IconFacebook from '../svgs/socials-facebook.svg';
import IconInstagram from '../svgs/socials-instagram.svg';
import IconLinkedIn from '../svgs/socials-linkedin.svg';
import IconTwitter from '../svgs/socials-twitter.svg';
import IconYouTube from '../svgs/socials-youtube.svg';

const Footer = ({ t }) => {
  return (
    <footer className="footer content__section">
      <div className="footer__container">
        <div>
          <Link href="/">
            <a className="footer__logo">
              <Logo />
            </a>
          </Link>

          <p className="footer__p">{t('footer-title')}</p>

          <ul className="footer__social-media-container">
            <li>
              <a href="https://www.facebook.com/wimmalab">
                <IconFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/wimmalab">
                <IconInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/wimmalab">
                <IconLinkedIn />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCe0Ssog7DURm_aTiPO2hUFw">
                <IconYouTube />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wimmalab">
                <IconTwitter />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__right-container">
          <div>
            <h4 className="footer__title">{t('footer-title1')}</h4>
            <ul className="footer__links">
              <li>
                <Link href="/students">
                  <a>{t('students')}</a>
                </Link>
              </li>
              <li>
                <Link href="/companies">
                  <a>{t('companies')}</a>
                </Link>
              </li>
              <li>
                <Link href="/guides">
                  <a>{t('guides')}</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>{t('open-doors')}</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer__title">{t('footer-title2')}</h4>
            <ul className="footer__links">
              <li>
                <Link href="/iotitude">
                  <a>IoTitude</a>
                </Link>
              </li>
              <li>
                <Link href="/overflow">
                  <a>Overflow</a>
                </Link>
              </li>
              <li>
                <Link href="/mysticons">
                  <a>Mysticons</a>
                </Link>
              </li>
              <li>
                <Link href="/pengwin">
                  <a>Pengwin Media</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact-container">
            <h4 className="footer__title">{t('footer-title3')}</h4>
            <dl className="footer__contact">
              <dt>Marko Rintamäki</dt>
              <dd>
                <a href="mailto:marko.rintamaki@jamk.fi">marko.rintamaki@jamk.fi</a>
              </dd>
              <dt>Kari Pitkäniemi</dt>
              <dd>
                <a href="mailto:kari.pitkaniemi@jamk.fi">kari.pitkaniemi@jamk.fi</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      <div className="footer__jamk">
        <a href="https://www.jamk.fi/" target="_blank" rel="noreferrer noopener">
          <Image
            src="/assets/jamk.png"
            alt="JAMK Jyväskylän ammattikorkeakoulu -logo"
            height={64}
            width={264}
          />
        </a>
      </div>

      <div className="footer__copyright">
        <small>© 2021 — WIMMA Lab.</small>
      </div>
    </footer>
  );
};

export default Footer;
