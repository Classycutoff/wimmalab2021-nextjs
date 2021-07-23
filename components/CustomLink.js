import Link from 'next/link';

// Render Link differently based on if it's internal/external
const CustomLink = (props) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className="internal-link">
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <a target="_blank" rel="noopener noreferrer" className="external-link" {...props}>
      {props.children}
    </a>
  );
};

export default CustomLink;
