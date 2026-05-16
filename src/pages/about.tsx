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
    meta: 'Nobitex | Dec 2025 تا اکنون',
    title: 'Software Engineer',
    description:
      'ساخت و نگهداری قابلیت‌های بک‌اند و سامانه‌های داده‌ای برای یک پلتفرم تبادل رمزارز، با تمرکز بر قابلیت اطمینان، مشاهده‌پذیری، پردازش داده و مهندسی تولید در سامانه‌های مالی.',
  },
  {
    meta: 'Yektanet | Jul 2024 تا Jan 2026',
    title: 'Technical Lead Manager',
    description:
      'رهبری طراحی و توسعه‌ی پلتفرم دریافت رویداد با Go و Kafka در مقیاس ۲۰ تا ۸۰ هزار درخواست بر ثانیه، مهاجرت به دریاچه‌ی داده‌ی مبتنی بر Apache Iceberg، پایدارسازی Spark روی Kubernetes، و ساخت مسیرهای ETL و انبار تحلیلی ClickHouse.',
  },
  {
    meta: 'Yektanet | Jan 2024 تا Jul 2024',
    title: 'Senior Software Engineer',
    description:
      'مشارکت در توسعه‌ی سامانه‌های داده‌ای، تحلیلی و مقیاس‌پذیر پیش از ورود به نقش رهبری فنی؛ با تمرکز بر زیرساخت داده، پردازش رویداد، ETL و آماده‌سازی داده برای تحلیل و گزارش‌گیری.',
  },
  {
    meta: 'Mohaymen ICT Company | Jul 2019 تا Mar 2024',
    title: 'Technical Team Lead / Software Engineer',
    description:
      'رهبری و توسعه‌ی بک‌اند برای سامانه‌های بزرگ داده‌ی مالیاتی، شامل دریافت و اعتبارسنجی داده، مدیریت فرایندها، گزارش‌گیری، پایش، عیب‌یابی تولید، بازبینی کد و بازآرایی تدریجی سرویس‌های سازمانی.',
  },
  {
    meta: 'Acctech Technology Kish | 2018 تا 2019',
    title: 'Software Development Engineer',
    description:
      'توسعه‌ی سرویس‌های بک‌اند ASP.NET Core و مدل‌های داده‌ی SQL Server برای محصولات نرم‌افزاری کسب‌وکار، همراه با بهبود کارایی، خودکارسازی فرایندهای تکراری و نگهداری قابلیت‌های تولیدی.',
  },
];

const educationItems = [
  {
    title: 'کارشناسی ارشد مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه شهید بهشتی | Oct 2025 تا Oct 2027',
    description:
      'تمرکز فعلی من در این مقطع روی مهندسی نرم‌افزار، معماری نرم‌افزار، پایگاه داده‌های پیشرفته و کاربرد مدل‌های زبانی در فرایندهای توسعه‌ی نرم‌افزار است.',
  },
  {
    title: 'کارشناسی ارشد مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه اصفهان | 2020 تا 2022',
    description:
      'ادامه‌ی مسیر دانشگاهی در مهندسی نرم‌افزار، با تمرکز بر مبانی طراحی، پیاده‌سازی و تحلیل سامانه‌های نرم‌افزاری.',
  },
  {
    title: 'کارشناسی مهندسی کامپیوتر، گرایش نرم‌افزار',
    place: 'دانشگاه اصفهان | 2016 تا 2020',
    description:
      'پایه‌ی اصلی مسیر فنی من در برنامه‌نویسی، پایگاه داده، طراحی نرم‌افزار و حل مسئله از این دوره شکل گرفت.',
  },
];

const toolboxItems = [
  'Go',
  'Python',
  'Java',
  'JavaScript',
  'SQL',
  'Kafka',
  'Kafka Connect',
  'Apache Iceberg',
  'Spark',
  'Airflow',
  'ClickHouse',
  'Trino',
  'Redis',
  'Hadoop/HDFS',
  'Kubernetes',
  'Docker',
  'Prometheus',
  'Grafana',
  'Bazel',
  'Git',
  'Gerrit',
];

const selectedProjects = [
  {
    title: 'پلتفرم دریافت رویداد پرترافیک',
    description:
      'مسیر تولیدی برای اعتبارسنجی، بافر کردن و تحویل جریان‌های بزرگ رویداد با کنترل‌های قابلیت اطمینان و متریک‌های عملیاتی؛ ساخته‌شده با Go، Kafka و ابزارهای مشاهده‌پذیری.',
  },
  {
    title: 'دریاچه‌ی داده‌ی Apache Iceberg',
    description:
      'نوسازی ذخیره‌سازی دریاچه‌ی داده و جریان‌های ETL حول جدول‌های Iceberg، تکامل schema، مدیریت metadata و دسترسی تحلیلی پایین‌دستی با Spark، Airflow و Trino.',
  },
  {
    title: 'انبار تحلیلی ClickHouse',
    description:
      'ساخت داده‌ست‌ها و مسیرهای تجمیع آماده‌ی داشبورد برای تحلیل داخلی، گزارش‌گیری KPI و آزمایش‌های محصولی با ClickHouse، Airflow و SQL.',
  },
  {
    title: 'پژوهش بازبینی کد با کمک هوش مصنوعی',
    description:
      'بررسی رویکردهای ترکیبی برای فهم نیت پیاده‌سازی، درستی تست‌ها و ارزیابی کیفیت بازبینی خودکار کد با کمک مدل‌های زبانی و تحلیل ایستا.',
  },
];

const timelineItems = [
  {
    period: 'Dec 2025 تا اکنون',
    title: 'Nobitex؛ مهندسی نرم‌افزار در سامانه‌های مالی و داده‌محور',
    description:
      'کار روی قابلیت‌های بک‌اند و داده‌ای در محیطی که قابلیت اطمینان، دقت، مشاهده‌پذیری و عملیات تولید اهمیت مستقیم دارند.',
  },
  {
    period: 'Jan 2024 تا Jan 2026',
    title: 'Yektanet؛ از Senior Software Engineer تا Technical Lead Manager',
    description:
      'کار روی دریافت رویداد پرترافیک، Apache Iceberg، Spark روی Kubernetes، Airflow، ClickHouse، Yektanama، Alefba و مسیرهای داده‌ی سازمانی.',
  },
  {
    period: 'Jul 2019 تا Mar 2024',
    title: 'Mohaymen ICT Company؛ سامانه‌های سازمانی و داده‌ی مالیاتی',
    description:
      'رهبری و توسعه‌ی بک‌اند برای سامانه‌های بزرگ سازمانی، شامل دریافت داده، اعتبارسنجی، فرایندهای کاری، گزارش‌گیری، پایش و عیب‌یابی تولید.',
  },
  {
    period: '2018 تا 2019',
    title: 'Acctech Technology Kish؛ شروع مسیر حرفه‌ای توسعه‌ی نرم‌افزار',
    description:
      'توسعه‌ی سرویس‌های ASP.NET Core و مدل‌های SQL Server برای محصولات نرم‌افزاری کسب‌وکار و بهبود کارایی و نگهداری قابلیت‌های تولیدی.',
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
