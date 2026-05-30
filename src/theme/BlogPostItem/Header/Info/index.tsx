import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Info';

import styles from './styles.module.css';

function ReadingTime({readingTime}: {readingTime: number}) {
  return <>{`${Math.ceil(readingTime)} min read`}</>;
}

function DateTime({date}: {date: string}) {
  const formattedDate = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(date));

  return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
  return <>{' · '}</>;
}

function getReadingTime({
  frontMatter,
  readingTime,
}: {
  frontMatter: Record<string, unknown>;
  readingTime: number | undefined;
}): number | undefined {
  const customReadingTime = frontMatter.customReadingTime;

  if (typeof customReadingTime === 'number') {
    return customReadingTime;
  }

  if (typeof customReadingTime === 'string') {
    const parsedReadingTime = Number(customReadingTime);

    if (Number.isFinite(parsedReadingTime)) {
      return parsedReadingTime;
    }
  }

  return readingTime;
}

export default function BlogPostItemHeaderInfo({className}: Props): ReactNode {
  const {metadata, frontMatter} = useBlogPost();
  const {date, readingTime} = metadata;
  const displayedReadingTime = getReadingTime({frontMatter, readingTime});

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <DateTime date={date} />
      {typeof displayedReadingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={displayedReadingTime} />
        </>
      )}
    </div>
  );
}
