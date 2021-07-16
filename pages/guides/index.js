import Link from 'next/link';

const GuidesIndex = () => {
  return (
    <h1>
      <Link href="/guides/01-Johdanto">
        <a>Linke to the first chapter</a>
      </Link>
    </h1>
  );
};

export default GuidesIndex;
