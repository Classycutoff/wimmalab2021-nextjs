import GuideNavBar from '/components/GuideNavBar';
import Meta from '/components/Meta';

export default function GuideLayout({ guideId, children }) {
  return (
    <div className="guides">
      <Meta />
      <GuideNavBar guideId={guideId} />
      <div className="content">{children}</div>
    </div>
  );
}
