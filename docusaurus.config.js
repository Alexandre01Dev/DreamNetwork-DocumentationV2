// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DreamNetwork Documentation',
  tagline: '',
  url: 'https://blog.dreamnetwork.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Alexandre01Dev', // Usually your GitHub org/user name.
  projectName: 'DreamNetwork-DocumentationV2', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'DreamNetwork',
        logo: {
          alt: 'Dreamy logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://discord.dreamnetwork.cloud/',
            label: 'Discord',
            position: 'right',
          },
          {
            type: "localeDropdown",
            position: "right"
          }
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'DreamNetwork logo',
          src: 'img/logo.png',
          href: 'https://dreamnetwork.cloud/',
          width: 30,
          height: 30,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/dreamnetworkcloud',
              },
              {
                label: 'Discord',
                href: 'https://discord.dreamnetwork.cloud/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/DreamNetworkCloud',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} DreamNetwork, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['java'],
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
