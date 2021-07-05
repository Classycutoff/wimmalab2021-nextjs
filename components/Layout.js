import { withTranslation } from 'next-i18next';

import Meta from '/components/Meta';

import Navbar from './Navbar';
export const siteTitle = 'WIMMA Lab';

export function Layout({ t, children }) {
  return (
    <>
      <Meta />
      <Navbar t={t} />
      <div className="content">{children}</div>
    </>
  );
}

export default withTranslation()(Layout);
