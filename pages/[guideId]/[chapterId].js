import { MDXRemote } from '../../../mdx_test/node_modules/next-mdx-remote';
import { getAllGuideIds, getFileBySlug } from '../../components/lib/mdx';

const Guide = ({ frontMatter, mdxSource }) => {
  return (
    <div className="wrapper">
      <h1>{frontMatter.title}this is a test</h1>
      <MDXRemote {...mdxSource} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = getAllGuideIds('Black-Book-fi');

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const source = await getFileBySlug('Black-Book-fi', params.chapterId);
  return { props: source };
};

export default Guide;
