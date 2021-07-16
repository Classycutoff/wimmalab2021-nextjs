import { MDXRemote } from 'next-mdx-remote';

import { getAllStaticIds, getFileBySlug } from '/components/lib/mdx';

//If you have any frontMatter, add frontMatter to props jusst beside mdxSource and use that
const Guide = ({ mdxSource }) => {
  return (
    <div className="wrapper">
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
