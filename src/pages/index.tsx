import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const highlights = [
  {
    title: 'نوشته‌های فنی',
    description:
      'یادداشت‌هایی دربارهٔ سامانه‌های داده‌ای، مقیاس‌پذیری، و چیزهایی که در کار برایم گره و پرسش بوده‌اند.',
  },
  {
    title: 'پروژه‌ها و تجربه‌ها',
    description:
      'پروژه‌ها، تجربه‌ها و مسیرهایی که ساخته‌ام یا هنوز برایم ارزش درنگ و اندیشیدن دارند.',
  },
  {
    title: 'اکنون',
    description:
      'صفحهٔ اکنون چکیده‌ای از کارها، نوشته‌ها و موضوع‌هایی است که این روزها در کانون توجه من‌اند.',
  },
];

function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.copy}>
          <p className={styles.kicker}>وب‌نوشت شخصی</p>
          <Heading as="h1" className={styles.title}>
            جایی برای نوشتنِ روشن، ساختنِ سنجیده، و نگه‌داشتنِ چیزهای مهم
          </Heading>
          <p className={styles.lead}>
            من مهدی مالوردی هستم؛ مهندس نرم‌افزار، همسر، ایرانی، مسلمان و متولد
            اصفهان. اینجا از تجربه‌های فنی، سامانه‌های داده‌ای، تصمیم‌های دشوار،
            و اندیشه‌هایی می‌نویسم که نمی‌خواهم در شتاب روزمره گم شوند.
          </p>
          <div className={styles.actions}>
            <Link className="button button--primary button--lg" to="/blog">
              رفتن به نوشته‌ها
            </Link>
            <Link className={styles.secondaryAction} to="/about">
              درباره من
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights(): ReactNode {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>در این وب‌نوشت</p>
          <Heading as="h2" className={styles.sectionTitle}>
            چه می‌خوانی
          </Heading>
        </div>
        <div className={styles.grid}>
          {highlights.map((item) => (
            <article key={item.title} className={styles.card}>
              <Heading as="h3" className={styles.cardTitle}>
                {item.title}
              </Heading>
              <p className={styles.cardText}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="خانه"
      description="وب‌نوشت شخصی فارسی مهدی مالوردی برای نوشته‌ها، تجربه‌های فنی و معرفی مسیر کاری">
      <Hero />
      <main>
        <Highlights />
      </main>
    </Layout>
  );
}
