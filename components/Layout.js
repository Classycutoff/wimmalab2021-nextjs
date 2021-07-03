import Meta from '/components/Meta';
export const siteTitle = 'WIMMA Lab';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="content">{children}</div>
    </>
  );
}
