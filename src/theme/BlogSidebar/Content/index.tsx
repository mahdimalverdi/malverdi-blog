import React, {memo, type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogSidebar/Content';

import {formatJalaliYear} from '../../../utils/jalaliDate';

function BlogSidebarYearGroup({
  year,
  yearGroupHeadingClassName,
  children,
}: {
  year: string;
  yearGroupHeadingClassName?: string;
  children: ReactNode;
}) {
  return (
    <div role="group">
      <Heading as="h3" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function groupItemsByJalaliYear(items: Props['items']) {
  const grouped = items.reduce((acc, item) => {
    const year = formatJalaliYear(String(item.date));
    const yearItems = acc.get(year) ?? [];
    acc.set(year, [...yearItems, item]);
    return acc;
  }, new Map<string, Props['items']>());

  return Array.from(grouped.entries());
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  const itemsByYear = groupItemsByJalaliYear(items);

  return (
    <>
      {itemsByYear.map(([year, yearItems]) => (
        <BlogSidebarYearGroup
          key={year}
          year={year}
          yearGroupHeadingClassName={yearGroupHeadingClassName}>
          <ListComponent items={yearItems} />
        </BlogSidebarYearGroup>
      ))}
    </>
  );
}

export default memo(BlogSidebarContent);
