import Link from 'next/link';

// Render Link differently based on if it's internal/external
const CustomLink = (props) => {
  const href = props.href;
  const className = props.className ? props.className : '';
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={`internal-link ${className}`}>{props.children}</a>
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`external-link ${className}`}>
      {props.children}
    </a>
  );
};

export default CustomLink;
