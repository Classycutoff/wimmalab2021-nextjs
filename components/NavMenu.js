import Link from 'next/link';
import { useRouter } from 'next/router';

import ActiveLink from './ActiveLink';

export default function NavMenu({ t, active, handleClick }) {
  const router = useRouter();

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
            <Link href={router.route} locale="fi">
              <a>FI</a>
            </Link>
            <Link href={router.route} locale="en">
              <a>EN</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="mobile-menu">
        <div className={`mobile-menu__container ${!active && 'closed'}`}>
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
          <ul>
            <li>
              <a href="/">Link One</a>
            </li>
            <li>
              <a href="/">Link Two</a>
            </li>
          </ul>
        </div>
        <button
          aria-expanded="false"
          onClick={handleClick}
          className={`mobile-menu__icon ${active && 'active'}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
