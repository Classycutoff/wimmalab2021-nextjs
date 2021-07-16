import { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={`accordion-wrapper ${isOpen ? 'open' : ''}`}>
      <button
        className={`accordion-title ${isOpen ? 'open' : ''}`}
        onClick={() => setOpen(!isOpen)}>
        <p>{title}</p>
      </button>
      <div className={`accordion-item ${!isOpen ? 'collapsed' : ''}`}>
        <div className="accordion-content">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
