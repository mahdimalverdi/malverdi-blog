import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'مالوردی',
  tagline: 'یادداشت‌ها، پروژه‌ها و چیزهایی که این روزها رویشان کار می‌کنم',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'malverdi',
  projectName: 'malverdi-blog',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fa',
    locales: ['fa'],
    localeConfigs: {
      fa: {
        htmlLang: 'fa-IR',
        direction: 'rtl',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: 'blog',
          blogTitle: 'نوشته‌ها',
          blogDescription: 'پست‌های شخصی، فنی و یادداشت‌های پراکنده',
          showReadingTime: true,
          postsPerPage: 6,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'همه نوشته‌ها',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'مالوردی',
      logo: {
        alt: 'لوگوی مالوردی',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'خانه', position: 'left', className: 'nav-home-flag'},
        {to: '/about', label: 'درباره من', position: 'left'},
        {to: '/now', label: 'اکنون', position: 'left'},
        {to: '/blog', label: 'نوشته‌ها', position: 'left'},
        {to: '/contact', label: 'ارتباط با من', position: 'left'},
        {
          href: 'https://github.com/mahdimalverdi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'بخش‌ها',
          items: [
            {
              label: 'خانه',
              to: '/',
            },
            {
              label: 'نوشته‌ها',
              to: '/blog',
            },
          ],
        },
        {
          title: 'صفحه‌ها',
          items: [
            {
              label: 'خانه',
              to: '/',
            },
            {
              label: 'درباره من',
              to: '/about',
            },
            {
              label: 'اکنون',
              to: '/now',
            },
            {
              label: 'نوشته‌ها',
              to: '/blog',
            },
            {
              label: 'ارتباط با من',
              to: '/contact',
            },
          ],
        },
        {
          title: 'بیرون از سایت',
          items: [
            {
              label: 'آرشیو نوشته‌ها',
              to: '/blog/archive',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mahdimalverdi',
            },
            {
              label: 'لینکدین',
              href: 'https://www.linkedin.com/in/mahdimalverdi-996b1787',
            },
            {
              label: 'ایمیل',
              href: 'mailto:mahdi.malverdi@gmail.com',
            },
            {
              label: 'تلگرام',
              href: 'http://t.me/mahdimlv',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} مالوردی. ساخته‌شده با Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
