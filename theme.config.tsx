import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Parsertime Docs</span>,
  project: {
    link: "https://github.com/lucasdoell/parsertime",
  },
  chat: {
    link: "https://discord.gg/svz3qhVDXM",
  },
  docsRepositoryBase: "https://github.com/lucasdoell/parsertime-docs",
  footer: {
    text: "Parsertime Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Parsertime Docs",
    };
  },
};

export default config;
