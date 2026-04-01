import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/BlogPostItem/Header/Info';

import styles from './styles.module.css';
import {formatJalaliDate} from '../../../../utils/jalaliDate';
import {useBlogPost} from '../../../../../node_modules/.pnpm/node_modules/@docusaurus/plugin-content-blog/lib/client/index.js';

function ReadingTime({readingTime}: {readingTime: number}) {
  return <>{`${Math.ceil(readingTime)} دقیقه`}</>;
}

function DateTime({date}: {date: string}) {
  return <time dateTime={date}>{formatJalaliDate(date)}</time>;
}

function Spacer() {
  return <>{' · '}</>;
}

export default function BlogPostItemHeaderInfo({className}: Props): ReactNode {
  const {metadata} = useBlogPost();
  const {date, readingTime} = metadata;

  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      <DateTime date={date} />
      {typeof readingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
    </div>
  );
}
