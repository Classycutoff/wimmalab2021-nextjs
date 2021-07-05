import Meta from '/components/Meta';

import Navbar from './Navbar';
export const siteTitle = 'WIMMA Lab';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Navbar />
      <div>{children}</div>
    </>
  );
}
