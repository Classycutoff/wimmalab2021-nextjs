import Image from 'next/image';

// Adds extra decoration to Next.js Image component
export function ImageWrapper({ className = '', ...props }) {
  return (
    <div className="image__wrapper">
      <Image {...props} className={`image__content ${className}`} />
      <div className="image__bg"></div>
    </div>
  );
}

export default ImageWrapper;
