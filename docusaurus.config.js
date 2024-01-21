// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Илья Басистый',
  tagline: 'Пока делаю...',
  // favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ilyabasisty.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ilyabasisty', // Usually your GitHub org/user name.
  projectName: 'ilyabasisty.github.io', // Usually your repo name.
  deploymentBranch: 'dev',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Главная',
        // logo: {
        //   alt: 'Сайт лого',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Проекты',
          },
          {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://github.com/ilyabasisty',
            label: 'ilyabasisty',
            position: 'right',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'docusaurus',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ссылки',
            items: [
              {
                label: 'github',
                href: 'https://github.com/ilyabasisty',
              },
            ],
          },
          {
            title: 'Инфа',
            items: [
              {
                label: 'Блог',
                to: '/blog',
              },
              {
                label: 'Проекты и заметки',
                to: '/docs/intro',
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
