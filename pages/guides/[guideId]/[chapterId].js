import { MDXRemote } from 'next-mdx-remote';

import { getAllStaticIds, getFileBySlug } from '/components/lib/mdx';

const Guide = ({ frontMatter, mdxSource }) => {
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}this is a test</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllStaticIds();

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { guideId, chapterId } = params;
  const source = await getFileBySlug(guideId, chapterId);
  return { props: source };
};

export default Guide;
