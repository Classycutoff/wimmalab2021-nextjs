import Link from 'next/link';

const GuidesIndex = () => {
  return (
    <h1>
      <Link href="/guides/01-Johdanto">
        <a>Link to the first chapter</a>
      </Link>
    </h1>
  );
};

export default GuidesIndex;
