import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NextChapter(props) {
  const { chapterList, chapterId, guideId } = props;
  const [chapterPos, setChapterPos] = useState(null);

  useEffect(() => {
    setChapterPos(chapterList.findIndex((chapter) => chapter === chapterId));
    console.log(chapterList);
  }, [chapterId, chapterList]);

  return chapterPos !== null ? (
    <div className="switch-chapter__bg-wrapper">
      <div className="switch-chapter">
        {chapterPos !== 0 ? (
          <Link href={'../' + guideId + '/' + chapterList[chapterPos - 1]}>
            <a>Previous chapter</a>
          </Link>
        ) : (
          <Link href={'../' + guideId}>
            <a>Introduction</a>
          </Link>
        )}
        {chapterPos !== chapterList.length - 1 && (
          <Link href={'../' + guideId + '/' + chapterList[chapterPos + 1]}>
            <a>Next chapter</a>
          </Link>
        )}
      </div>
    </div>
  ) : null;
}
