import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from '../svgs/logo-sm.svg';

export function Navbar({ t }) {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link href="/">
          <a>
            <Logo width="40" height="20" />
          </a>
        </Link>
        <ul>
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
            <Link href={router.route} locale="fi">
              <a>FI</a>
            </Link>
            <Link href={router.route} locale="en">
              <a>EN</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
