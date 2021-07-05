import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoPicture from '../public/assets/wi-logo-light.png';

export function Navbar({ t }) {
  const router = useRouter();

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link href="/">
          <a>
            <Image src={logoPicture} alt="WIMMA Lab" width="40" height="20" />
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
