import { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`accordion-wrapper ${isOpen ? 'open' : ''}`}>
      <button
        aria-expanded={isOpen ? 'true' : false}
        aria-controls={title}
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}>
        <p>{title}</p>
      </button>
      <div
        id={title}
        role="region"
        aria-labelledby={title}
        className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
