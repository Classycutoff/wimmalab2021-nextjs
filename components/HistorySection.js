const HistorySection = ({ year, intro, children }) => {
  return (
    <div className="history__section">
      <h3>{year}</h3>
      {intro && <p>{intro}</p>}
      <div className="history__card-wrapper">{children}</div>
    </div>
  );
};

export default HistorySection;
