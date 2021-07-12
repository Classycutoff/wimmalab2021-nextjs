import Link from 'next/link';
import { useRouter } from 'next/router';

import IconFacebook from '../svgs/socials-facebook.svg';
import IconInstagram from '../svgs/socials-instagram.svg';
import IconLinkedIn from '../svgs/socials-linkedin.svg';
import IconTwitter from '../svgs/socials-twitter.svg';
import IconYouTube from '../svgs/socials-youtube.svg';
import ActiveLink from './ActiveLink';

export default function NavMenu({ t, active, handleClick }) {
  const router = useRouter();

  function changeLanguage(e) {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  }

  return (
    <nav role="navigation">
      <div className="desktop-menu">
        <ul className="desktop-menu__links">
          <li>
            <ActiveLink activeClassName="active" href="/students">
              <a>{t('students')}</a>
            </ActiveLink>
          </li>
          <li>
            <ActiveLink activeClassName="active" href="/companies">
              <a>{t('companies')}</a>
            </ActiveLink>
          </li>
        </ul>
        <ul className="desktop-menu__locale">
          <li>
            <select onChange={changeLanguage} defaultValue={router.locale}>
              <option value="fi">FI</option>
              <option value="en">EN</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <div className={`mobile-menu__container ${active ? 'open' : ''}`}>
          <div className="mobile-menu__container-links">
            <ul className="mobile-menu__main-links">
              <li>
                <Link href="/">
                  <a>{t('home')}</a>
                </Link>
              </li>
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
            </ul>
            <ul className="mobile-menu__team-links">
              <li>
                <Link href="/iotitude">
                  <a>IoTitude</a>
                </Link>
              </li>
              <li>
                <Link href="/mysticons">
                  <a>Mysticons</a>
                </Link>
              </li>
              <li>
                <Link href="/overflow">
                  <a>Overflow</a>
                </Link>
              </li>
              <li>
                <Link href="/pengwin">
                  <a>Pengwin Media</a>
                </Link>
              </li>
            </ul>
            <ul className="mobile-menu__locale-links">
              <li>
                <Link href={router.route} locale={router.locale === 'fi' ? 'en' : 'fi'}>
                  <a>{t('change-locale')}</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mobile-menu__container-socials">
            <ul className="mobile-menu__social-links">
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
        </div>
        <button aria-label="Menu" onClick={handleClick} className="mobile-menu__button">
          <div className="hamburger__wrapper">
            <div className={`hamburger ${active ? 'animate' : ''}`}></div>
          </div>
        </button>
      </div>
    </nav>
  );
}
