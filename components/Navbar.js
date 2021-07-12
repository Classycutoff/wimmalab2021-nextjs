import Link from 'next/link';
import { useEffect, useState } from 'react';

import Logo from '../svgs/logo-sm.svg';
import NavMenu from './NavMenu';

export function Navbar({ t }) {
  const [active, setActive] = useState(false);

  const handleClick = () => setActive(!active);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [active]);

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link href="/">
          <a className="navbar__logo" aria-label={t('home')}>
            <Logo width="40" height="20" />
          </a>
        </Link>

        <NavMenu t={t} active={active} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Navbar;
