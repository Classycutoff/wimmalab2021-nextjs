import Link from 'next/link';

export default function NextChapter(props) {
  const { chapterList, chapterId, guideId } = props;
  const chapterPos = chapterList.findIndex((chapter) => chapter === chapterId);

  console.log('chapterPos? ->', chapterPos);

  if (chapterPos !== 0 && chapterPos !== chapterList.length - 1) {
    return (
      <div id="Switching_Chapters">
        <Link href={'../' + guideId + '/' + chapterList[chapterPos - 1]}>
          Link to the previous chapter
        </Link>
        <Link href={'../' + guideId}>Link to the introduction</Link>
        <Link href={'../' + guideId + '/' + chapterList[chapterPos + 1]}>
          Link to the Next chapter
        </Link>
      </div>
    );
  } else if (chapterPos === chapterList.length - 1) {
    return (
      <div id="Switching_Chapters">
        <Link href={'../' + guideId + '/' + chapterList[chapterPos - 1]}>
          Link to the previous chapter
        </Link>
        <Link href={'../' + guideId}>Link to the introduction</Link>
      </div>
    );
  } else {
    return (
      <div id="Switching_Chapters">
        <Link href={'../' + guideId}>Link to the introduction</Link>
        <Link href={'../' + guideId + '/' + chapterList[chapterPos + 1]}>
          Link to the Next chapter
        </Link>
      </div>
    );
  }
}
