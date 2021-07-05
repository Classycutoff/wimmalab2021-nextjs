import ArrowIcon from '../svgs/arrow-up-right.svg';

// Actually a link styled as a button
export default function Button({ href, name, type = 'primary', icon }) {
  return (
    <a className={`btn btn--${type}`} href={href}>
      {name}
      {icon && <ArrowIcon className="icon-arrow" />}
    </a>
  );
}
