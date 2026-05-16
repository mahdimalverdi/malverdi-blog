import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';

import styles from '@site/src/pages/about.module.css';

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/mahdimalverdi',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahdi-malverdi-996b1787/',
  },
  {
    label: 'Email',
    href: 'mailto:mahdi.malverdi@gmail.com',
  },
  {
    label: 'Telegram',
    href: 'http://t.me/mahdimlv',
  },
];

const focusAreas = [
  'سامانه‌های داده‌ای مقیاس‌پذیر',
  'پردازش توزیع‌شده و مسیرهای داده',
  'کیفیت کد، تست‌پذیری و بازبینی کد',
  'کاربرد مدل‌های زبانی در مهندسی نرم‌افزار',
];

const resumeItems = [
  {
    meta: 'تمرکز حرفه‌ای',
    title: 'مهندسی نرم‌افزار و زیرساخت داده',
    description:
      'طراحی و پیاده‌سازی سامانه‌هایی که داده را از تولید تا تحلیل قابل اتکا می‌کنند؛ از دریافت رویداد و پردازش توزیع‌شده تا داشبوردها و گزارش‌های تحلیلی.',
  },
  {
    meta: 'تجربه‌ی فنی',
    title: 'کار با سامانه‌های پرترافیک و داده‌محور',
    description:
      'تجربه‌ی عملی در ساخت مسیرهای داده، پردازش دسته‌ای، سامانه‌های تحلیلی و بهینه‌سازی کارایی در محیط‌هایی که پایداری و مقیاس‌پذیری اهمیت جدی دارند.',
  },
  {
    meta: 'حوزه‌های کاری',
    title: 'بک‌اند، داده، مشاهده‌پذیری و کیفیت کد',
    description:
      'کار در نقطه‌ی اتصال طراحی نرم‌افزار، زیرساخت داده، تست‌پذیری، مشاهده‌پذیری و تصمیم‌های فنی که روی نگهداری بلندمدت سامانه اثر می‌گذارند.',
  },
  {
    meta: 'پژوهش و نوشتن',
    title: 'مدل‌های زبانی در مهندسی نرم‌افزار',
    description:
      'علاقه‌مند به این‌که مدل‌های زبانی چطور می‌توانند در بازبینی کد، فهم تغییرات و تصمیم‌گیری‌های مهندسی کمک کنند؛ البته با توجه جدی به کیفیت زمینه و محدودیت‌های این ابزارها.',
  },
];

const educationItems = [
  {
    title: 'کارشناسی ارشد مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه الزهرا، ورودی ۱۴۰۴',
    description:
      'تمرکز تحصیلی من روی مهندسی نرم‌افزار، معماری نرم‌افزار، پایگاه داده‌های پیشرفته و کاربرد مدل‌های زبانی در فرایندهای توسعه‌ی نرم‌افزار است.',
  },
  {
    title: 'مسیر پژوهشی فعلی',
    place: 'بازبینی خودکار کد با کمک مدل‌های زبانی',
    description:
      'در پژوهش فعلی، به نقش کیفیت زمینه، توضیح تغییر، پیام کامیت و خود diff در خروجی مدل‌های زبانی برای بازبینی کد توجه دارم.',
  },
];

const toolboxItems = [
  'Go',
  'Python',
  'SQL',
  'Kafka',
  'Spark',
  'Airflow',
  'Iceberg',
  'ClickHouse',
  'PostgreSQL',
  'Kubernetes',
  'Docker',
  'Prometheus',
];

const timelineItems = [
  {
    period: 'اکنون',
    title: 'ساختن سامانه‌هایی که فقط کار نمی‌کنند، قابل فهم هم می‌مانند',
    description:
      'تمرکز اصلی من روی طراحی و پیاده‌سازی سامانه‌های نرم‌افزاری و داده‌ای است؛ سامانه‌هایی که باید در مقیاس واقعی، زیر بار واقعی، و در کنار تیم‌های واقعی دوام بیاورند.',
  },
  {
    period: 'سال‌های اخیر',
    title: 'کار روی داده، تحلیل و زیرساخت‌های قابل اتکا',
    description:
      'از دریافت داده با حجم بالا تا پردازش دسته‌ای، انبار تحلیلی، دریاچه‌ی داده و داشبوردهای سازمانی، بخش مهمی از تجربه‌ی من در نقطه‌ی اتصال نرم‌افزار و داده شکل گرفته است.',
  },
  {
    period: 'مسیر پژوهشی',
    title: 'فهمیدن جای درست مدل‌های زبانی در کار مهندسی',
    description:
      'در کنار کار حرفه‌ای، روی این پرسش کار می‌کنم که مدل‌های زبانی چطور می‌توانند در بازبینی کد مفید باشند و کیفیت زمینه چه اثری روی خروجی آن‌ها دارد.',
  },
];

const writingTopics = [
  {
    title: 'طراحی سامانه',
    description:
      'درباره‌ی تصمیم‌های معماری، مرزبندی مسئولیت‌ها، قابلیت نگهداری، مشاهده‌پذیری و چیزهایی که بعداً هزینه‌ی خودشان را نشان می‌دهند.',
  },
  {
    title: 'کیفیت پیاده‌سازی',
    description:
      'درباره‌ی تست، بازآرایی، خوانایی، خطاهای رایج در کدنویسی و این‌که چطور می‌شود نرم‌افزاری ساخت که تیم بتواند با آن زندگی کند.',
  },
  {
    title: 'داده و تحلیل',
    description:
      'درباره‌ی مسیرهای داده، پردازش توزیع‌شده، انبار تحلیلی، دریاچه‌ی داده و تجربه‌های عملی از کار با داده در مقیاس بالا.',
  },
];

const principles = [
  'ساده نوشتن، حتی وقتی مسئله ساده نیست.',
  'ترجیح دادن فهم‌پذیری به نمایش پیچیدگی.',
  'دیدن کد به عنوان چیزی که قرار است بارها خوانده و تغییر داده شود.',
];

function ExternalLink({href, label}: {href: string; label: string}): ReactNode {
  return (
    <a href={href} rel="noreferrer" target="_blank">
      {label}
    </a>
  );
}

export default function About(): ReactNode {
  return (
    <Layout
      title="درباره من"
      description="معرفی مهدی مالوردی، مسیر حرفه‌ای، تحصیلات، تمرکزهای فنی و نوشته‌های او">
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>درباره من</p>
            <Heading as="h1" className={styles.title}>
              مهدی مالوردی
            </Heading>
            <p className={styles.lead}>
              مهندس نرم‌افزار و داده؛ علاقه‌مند به سامانه‌های مقیاس‌پذیر، کد قابل
              نگهداری، طراحی روشن، و نوشتن درباره‌ی تجربه‌هایی که از دل کار واقعی
              می‌آیند.
            </p>
            <p className={styles.description}>
              من مهدی مالوردی هستم؛ همسر، ایرانی، مسلمان و متولد اصفهان. بیشتر
              وقت حرفه‌ای من صرف ساخت سامانه‌هایی می‌شود که داده را قابل اتکا،
              قابل فهم و قابل استفاده می‌کنند. برای من سامانه‌ی خوب فقط سامانه‌ای
              نیست که اجرا شود؛ باید بتوان آن را توضیح داد، تغییر داد و با خیال
              راحت نگه داشت.
            </p>
            <div aria-label="لینک‌های مهدی مالوردی" className={styles.profileLinks}>
              {profileLinks.map((link) => (
                <ExternalLink key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </div>

          <aside className={styles.profileCard}>
            <img src="/img/profile/mahdi-malverdi.jpg" alt="مهدی مالوردی" />
            <div className={styles.profileCardText}>
              <span>تمرکز اصلی</span>
              <strong>ساختن، ساده‌کردن و قابل اتکا نگه‌داشتن سامانه‌ها</strong>
            </div>
          </aside>
        </section>

        <section className={styles.focusSection}>
          <div className={styles.focusHeader}>
            <p className={styles.sectionEyebrow}>تمرکزهای فنی</p>
            <Heading as="h2" className={styles.sectionTitle}>
              روی چه چیزهایی بیشتر کار می‌کنم؟
            </Heading>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>رزومه‌ی کوتاه</p>
            <Heading as="h2" className={styles.sectionTitle}>
              تجربه‌ای که می‌خواهم اینجا دیده شود
            </Heading>
          </div>
          <div className={styles.resumeGrid}>
            {resumeItems.map((item) => (
              <article key={item.title} className={styles.resumeCard}>
                <span className={styles.meta}>{item.meta}</span>
                <Heading as="h3" className={styles.cardTitle}>
                  {item.title}
                </Heading>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>تحصیلات</p>
            <Heading as="h2" className={styles.sectionTitle}>
              مسیر دانشگاهی و پژوهشی
            </Heading>
          </div>
          <div className={styles.educationGrid}>
            {educationItems.map((item) => (
              <article key={item.title} className={styles.educationCard}>
                <Heading as="h3" className={styles.cardTitle}>
                  {item.title}
                </Heading>
                <p className={styles.place}>{item.place}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.toolboxSection}>
          <div>
            <p className={styles.sectionEyebrow}>ابزارها و فناوری‌ها</p>
            <Heading as="h2" className={styles.sectionTitle}>
              چیزهایی که زیاد با آن‌ها کار کرده‌ام
            </Heading>
          </div>
          <div className={styles.toolboxGrid}>
            {toolboxItems.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>مسیر من</p>
            <Heading as="h2" className={styles.sectionTitle}>
              از کجا به اینجا رسیده‌ام؟
            </Heading>
          </div>
          <div className={styles.timeline}>
            {timelineItems.map((item) => (
              <article key={item.title} className={styles.timelineItem}>
                <div className={styles.period}>{item.period}</div>
                <div>
                  <Heading as="h3" className={styles.itemTitle}>
                    {item.title}
                  </Heading>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>نوشته‌ها</p>
            <Heading as="h2" className={styles.sectionTitle}>
              اینجا درباره‌ی چه چیزهایی می‌نویسم؟
            </Heading>
          </div>
          <div className={styles.cards}>
            {writingTopics.map((topic) => (
              <article key={topic.title} className={styles.card}>
                <Heading as="h3" className={styles.cardTitle}>
                  {topic.title}
                </Heading>
                <p>{topic.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.noteSection}>
          <div>
            <p className={styles.sectionEyebrow}>نگاه من</p>
            <Heading as="h2" className={styles.sectionTitle}>
              چند اصل ساده که در کار و نوشتن دنبال می‌کنم
            </Heading>
          </div>
          <ul className={styles.principles}>
            {principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </section>

        <section className={styles.contactSection}>
          <div>
            <p className={styles.sectionEyebrow}>ارتباط</p>
            <Heading as="h2" className={styles.sectionTitle}>
              از کجا شروع کنیم؟
            </Heading>
            <p>
              برای خواندن نوشته‌ها می‌توانی از <Link to="/blog">آرشیو وب‌نوشت</Link>{' '}
              شروع کنی. اگر هم می‌خواهی مستقیم پیام بدهی، ایمیل، لینکدین و تلگرام
              در دسترس‌اند.
            </p>
          </div>
          <Link className="button button--primary button--lg" to="/blog">
            رفتن به نوشته‌ها
          </Link>
        </section>
      </main>
    </Layout>
  );
}
