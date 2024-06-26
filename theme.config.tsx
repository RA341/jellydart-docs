import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>JellyDart</span>,
  darkMode: true,
  project: {
    link: 'https://github.com/ra341/jellydart',
  },
  // chat: {
  //   link: 'https://discord.com',
  // },
  docsRepositoryBase: 'https://github.com/ra341/jellydart-docs/tree/main',
  footer: {
    text: 'JellyDart project',
  },
  useNextSeoProps() {
    return {
      title: 'JellyDart'
    }
  }
}

export default config
