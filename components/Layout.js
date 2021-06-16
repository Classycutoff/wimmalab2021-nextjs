import Meta from '/components/Meta';
export const siteTitle = 'WIMMA Lab';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div>{children}</div>
    </>
  );
}
