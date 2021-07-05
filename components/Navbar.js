import Image from 'next/image';
import Link from 'next/link';

import logoPicture from '../public/assets/wi-logo-light.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <Link href="/">
        <a>
          <Image src={logoPicture} alt="WIMMA Lab" width="46" height="24" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>FI | EN</a>
          </Link>
        </li>
        <li>
          <Link href="/opiskelijat">
            <a>Opiskelijat</a>
          </Link>
        </li>
        <li>
          <Link href="/yritykset">
            <a>Yritykset</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
