import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import type {ArchiveBlogPost, Props} from '@theme/BlogArchivePage';
import Heading from '@theme/Heading';

import {
  formatJalaliMonthDay,
  formatJalaliYear,
} from '../../utils/jalaliDate';

type YearProp = {
  id: string;
  label: string;
  posts: ArchiveBlogPost[];
};

function Year({id, label, posts}: YearProp) {
  return (
    <>
      <Heading as="h3" id={id}>
        {label}
      </Heading>
      <ul>
        {posts.map((post) => (
          <li key={post.metadata.date}>
            <Link to={post.metadata.permalink}>
              {formatJalaliMonthDay(post.metadata.date)} - {post.metadata.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function YearsSection({years}: {years: YearProp[]}) {
  return (
    <section className="margin-vert--lg">
      <div className="container">
        <div className="row">
          {years.map((_props, idx) => (
            <div key={idx} className="col col--4 margin-vert--lg">
              <Year {..._props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function listPostsByYears(blogPosts: readonly ArchiveBlogPost[]): YearProp[] {
  const postsByYear = blogPosts.reduce((posts, post) => {
    const yearKey = formatJalaliYear(post.metadata.date);
    const yearPosts = posts.get(yearKey) ?? [];
    return posts.set(yearKey, [post, ...yearPosts]);
  }, new Map<string, ArchiveBlogPost[]>());

  return Array.from(postsByYear, ([label, posts]) => ({
    id: `year-${label}`,
    label,
    posts,
  }));
}

export default function BlogArchive({archive}: Props): ReactNode {
  const title = translate({
    id: 'theme.blog.archive.title',
    message: 'Archive',
    description: 'The page & hero title of the blog archive page',
  });
  const description = translate({
    id: 'theme.blog.archive.description',
    message: 'Archive',
    description: 'The page & hero description of the blog archive page',
  });
  const years = listPostsByYears(archive.blogPosts);
  return (
    <>
      <Layout>
        <header className="hero hero--primary">
          <div className="container">
            <Heading as="h1" className="hero__title">
              {title}
            </Heading>
            <p className="hero__subtitle">{description}</p>
          </div>
        </header>
        <main>{years.length > 0 && <YearsSection years={years} />}</main>
      </Layout>
    </>
  );
}
