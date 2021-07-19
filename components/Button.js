import ArrowIcon from '../svgs/arrow-right.svg';

// Actually a link styled as a button
export default function Button({ href = '/', type = 'primary', icon, className = '', children }) {
  const btnClasses = `btn btn--${type} ${className}`;

  return (
    <a className={btnClasses} href={href}>
      <span className="btn__text">{children}</span>
      {icon && <ArrowIcon className="icon-arrow" />}
    </a>
  );
}
