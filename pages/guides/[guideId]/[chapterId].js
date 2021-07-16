import { MDXRemote } from 'next-mdx-remote';

import { getAllGuideIds, getAllStaticIds, getFileBySlug } from '/components/lib/mdx';
import NextChapter from '/components/NextChapter';

//If you have any frontMatter, add frontMatter to props jusst beside mdxSource and use that
const Guide = (props) => {
  const { source, chapterList, chapterId, guideId } = props;
  const { mdxSource } = source;
  return (
    <div className="wrapper">
      <NextChapter chapterList={chapterList} chapterId={chapterId} guideId={guideId} />
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
  const chapterList = getAllGuideIds(guideId).sort();

  return {
    props: {
      chapterList,
      chapterId,
      guideId,
      source
    }
  };
};

export default Guide;
