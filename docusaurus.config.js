// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/my/documentation",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "abs-lme", // Usually your GitHub org/user name.
  projectName: "mwe-docusaurus-papersaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-papersaurus",
      /** @type {Partial<(import('docusaurus-plugin-papersaurus/src/types').PapersaurusPluginOptions)>} */ ({
        sidebarNames: ["tutorialSidebar"],
        // rootDocIds: [{ version: "default", rootDocId: "tutorial-basics" }],
        // rootDocIds: [{ version: "default", rootDocId: "start_overview" }],
        // addDownloadButton: true,
        // autoBuildPdfs: true,
        // downloadButtonText: "Download as PDF",
        // stylesheets: [],
        // scripts: [],
        // author: "Author name",
        // footerParser: /© Your company\d{4}-\d{2}-\d{2}Page \d* \/ \d*/g,
        // this does not work as 'intro' will also be loaded form tutorial-basics
        // subfolders: ["tutorial-basics"],
        // this does not help either
        // subfolders: ["", "tutorial-basics"],
      }),
    ],
  ],
};

module.exports = config;
