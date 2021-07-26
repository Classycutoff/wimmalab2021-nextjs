import Accordion from '/components/Accordion';

const HistorySection = ({ year, intro, children }) => {
  return (
    <div className="history__section-wrapper">
      <div className="history__section">
        <Accordion title={year}>
          {intro && <p className="p-intro">{intro}</p>}
          {children && <div className="history__card-wrapper">{children}</div>}
        </Accordion>
      </div>
    </div>
  );
};

export default HistorySection;
