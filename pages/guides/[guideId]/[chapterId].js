// import Meta from '/components/Meta';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';

import GuideLayout from '/components/GuideLayout';
import { getAllGuideIds, getAllStaticIds, getFileBySlug } from '/components/lib/mdx';
import NextChapter from '/components/NextChapter';

//If you have any frontMatter, add frontMatter to props jusst beside mdxSource and use that
const Guide = (props) => {
  console.log('Guide props ->', props);
  const { mdxSource, chapterList, chapterId, guideId } = props;
  return (
    <>
      <GuideLayout guideId={guideId}>
        <Head>
          <title>{chapterId}</title>
        </Head>
        <div className="mdx">
          <MDXRemote {...mdxSource} />
          <NextChapter chapterList={chapterList} chapterId={chapterId} guideId={guideId} />
        </div>
      </GuideLayout>
    </>
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
      ...source
    }
  };
};

export default Guide;
