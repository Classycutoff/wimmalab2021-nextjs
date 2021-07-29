import Link from 'next/link';

import Logo from '../svgs/logo-sm.svg';

export default function GuideNavBar() {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link href="/">
          <a className="navbar__logo" aria-label="home">
            <Logo width="40" height="20" />
          </a>
        </Link>
        <nav role="navigation">
          <div className="desktop-menu">
            <ul className="desktop-menu__links">
              <li>
                <Link href="/guides">
                  <a>Guides</a>
                </Link>
              </li>
              <li>
                <Link href="/guides/Black-Book-en">
                  <a>Black Book 1.2</a>
                </Link>
              </li>
              <li>
                <Link href="/guides/Green-Book">
                  <a>Green Book 2.0</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
