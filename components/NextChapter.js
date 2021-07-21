import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NextChapter(props) {
  const { chapterList, chapterId, guideId } = props;
  const [chapterPos, setChapterPos] = useState(null);

  useEffect(() => {
    setChapterPos(chapterList.findIndex((chapter) => chapter === chapterId));
  }, [chapterId, chapterList]);

  return chapterPos ? (
    <div className="switch_chapter">
      {chapterPos !== 0 ? (
        <Link href={'../' + guideId + '/' + chapterList[chapterPos - 1]}>
          Link to Previous chapter
        </Link>
      ) : (
        <Link href={'../' + guideId}>
          <a>Link to Introduction</a>
        </Link>
      )}
      {chapterPos !== chapterList.length - 1 && (
        <Link href={'../' + guideId + '/' + chapterList[chapterPos + 1]}>
          <a>Link to Next chapter</a>
        </Link>
      )}
    </div>
  ) : null;
}
