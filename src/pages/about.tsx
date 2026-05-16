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
  'سامانه‌های داده‌ای و توزیع‌شده',
  'دریاچه‌ی داده، پردازش توزیع‌شده و انبار تحلیلی',
  'معماری، کارایی، مشاهده‌پذیری و عملیات تولید',
  'بازبینی کد و کاربرد مدل‌های زبانی در مهندسی نرم‌افزار',
];

const resumeItems = [
  {
    meta: 'نوبیتکس | از ۲۰۲۵ تا اکنون',
    title: 'مهندس نرم‌افزار',
    description:
      'در نوبیتکس روی سامانه‌های بک‌اند و داده‌ای در حوزه‌ی مالی و رمزارز کار می‌کنم؛ جایی که دقت، پایداری، مشاهده‌پذیری و تصمیم‌های مهندسی قابل اتکا اهمیت مستقیم دارند.',
  },
  {
    meta: 'یکتانت | ۲۰۲۴ تا ۲۰۲۶',
    title: 'Technical Lead Manager / Senior Software Engineer',
    description:
      'در یکتانت روی زیرساخت داده و سامانه‌های تحلیلی کار کردم؛ از پلتفرم دریافت رویداد در مقیاس بالا تا مهاجرت به Apache Iceberg، پایدارسازی Spark روی Kubernetes و ساخت مسیرهای تحلیلی با ClickHouse.',
  },
  {
    meta: 'مهیمن | ۲۰۱۹ تا ۲۰۲۴',
    title: 'Technical Team Lead / Software Engineer',
    description:
      'در مهیمن روی سامانه‌های سازمانی و داده‌محور کار کردم؛ از توسعه‌ی بک‌اند و مدل‌های داده تا مدیریت فرایندها، گزارش‌گیری، پایش، عیب‌یابی تولید و هدایت فنی تیم در پروژه‌های بزرگ سازمانی.',
  },
  {
    meta: 'اک تک تکنولوژی کیش | ۲۰۱۸ تا ۲۰۱۹',
    title: 'Software Development Engineer',
    description:
      'مسیر حرفه‌ای من با توسعه‌ی سرویس‌های بک‌اند ASP.NET Core و مدل‌های SQL Server برای محصولات نرم‌افزاری کسب‌وکار شروع شد؛ تجربه‌ای که پایه‌ی خوبی برای کارهای بعدی در بک‌اند و داده ساخت.',
  },
];

const educationItems = [
  {
    title: 'کارشناسی ارشد مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه شهید بهشتی | از ۲۰۲۵ تا اکنون',
    description:
      'مسیر فعلی تحصیلی من است و تمرکزم در آن روی مهندسی نرم‌افزار، معماری نرم‌افزار، پایگاه داده‌های پیشرفته و کاربرد مدل‌های زبانی در فرایندهای توسعه‌ی نرم‌افزار است.',
  },
  {
    title: 'کارشناسی ارشد مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه اصفهان | ۲۰۲۰ تا ۲۰۲۲، انصراف',
    description:
      'این مسیر را شروع کردم، اما ادامه ندادم. بخشی از تجربه‌ی دانشگاهی و شکل‌گیری علاقه‌ی من به مهندسی نرم‌افزار و طراحی سامانه از همین دوره شروع شد.',
  },
  {
    title: 'کارشناسی مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه اصفهان | ۲۰۱۶ تا ۲۰۲۰',
    description:
      'پایه‌ی اصلی مسیر فنی من در برنامه‌نویسی، پایگاه داده، طراحی نرم‌افزار و حل مسئله از این دوره شکل گرفت.',
  },
];

const selectedProjects = [
  {
    title: 'پلتفرم دریافت رویداد پرترافیک',
    description:
      'طراحی و توسعه‌ی مسیری برای دریافت، اعتبارسنجی و تحویل جریان‌های بزرگ رویداد با کنترل‌های قابلیت اطمینان، مشاهده‌پذیری و راهنمای عملیات تولید.',
  },
  {
    title: 'دریاچه‌ی داده‌ی Apache Iceberg',
    description:
      'نوسازی بخشی از مسیرهای داده و ETL حول جدول‌های Iceberg، تکامل schema، مدیریت metadata و دسترسی تحلیلی پایین‌دستی.',
  },
  {
    title: 'انبار تحلیلی ClickHouse',
    description:
      'ساخت داده‌ست‌ها و مسیرهای تجمیع آماده‌ی داشبورد برای تحلیل داخلی، گزارش‌گیری KPI و آزمایش‌های محصولی.',
  },
  {
    title: 'پژوهش بازبینی کد با کمک هوش مصنوعی',
    description:
      'بررسی این‌که کیفیت زمینه، توضیح تغییر، پیام کامیت و خود diff چطور روی خروجی مدل‌های زبانی در بازبینی کد اثر می‌گذارند.',
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
              مهندس نرم‌افزار در نوبیتکس، با بیش از هفت سال تجربه در ساخت
              سامانه‌های بک‌اند، داده‌ای و توزیع‌شده.
            </p>
            <p className={styles.description}>
              من مهدی مالوردی هستم؛ همسر، ایرانی، مسلمان و متولد اصفهان. در سال‌های
              اخیر روی سامانه‌های پرترافیک، دریاچه‌ی داده، پردازش توزیع‌شده، انبار
              تحلیلی، مشاهده‌پذیری و عملیات تولید کار کرده‌ام. برای من سامانه‌ی خوب
              فقط سامانه‌ای نیست که اجرا شود؛ باید بتوان آن را توضیح داد، تغییر داد
              و با خیال راحت نگه داشت.
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
            <p className={styles.sectionEyebrow}>تجربه‌ی کاری</p>
            <Heading as="h2" className={styles.sectionTitle}>
              شرکت‌ها، سال‌ها و نقش‌هایی که مسیر من را ساخته‌اند
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

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>پروژه‌های منتخب</p>
            <Heading as="h2" className={styles.sectionTitle}>
              چند کاری که مسیر فنی من را بهتر نشان می‌دهد
            </Heading>
          </div>
          <div className={styles.cards}>
            {selectedProjects.map((project) => (
              <article key={project.title} className={styles.card}>
                <Heading as="h3" className={styles.cardTitle}>
                  {project.title}
                </Heading>
                <p>{project.description}</p>
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
