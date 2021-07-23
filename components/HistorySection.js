import Accordion from '/components/Accordion';

const HistorySection = ({ year, intro, children }) => {
  return (
    <div className="history__section">
      <Accordion title={year}>
        {intro && <p>{intro}</p>}
        <div className="history__card-wrapper">{children}</div>
      </Accordion>
    </div>
  );
};

export default HistorySection;
