import { useEffect, useState } from 'react';

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide Accordion content from DOM after animation finishes
  useEffect(() => {
    if (open) {
      setHidden(false);
    } else {
      setTimeout(() => {
        setHidden(true);
      }, 250);
    }
  }, [open]);

  return (
    <div className={`accordion-wrapper ${open ? 'open' : ''}`}>
      <button
        id={`header-${title}`}
        aria-expanded={open}
        aria-controls={`section-${title}`}
        className={`accordion-title ${open ? 'open' : ''}`}
        onClick={() => setOpen(!open)}>
        <p>{title}</p>
      </button>
      <div
        id={`section-${title}`}
        role="region"
        aria-labelledby={`header-${title}`}
        className={`accordion-item ${!open ? 'collapsed' : ''} ${hidden ? 'hidden' : ''}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
