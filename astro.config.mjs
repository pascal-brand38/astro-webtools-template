// Copyright (c) Pascal Brand
// MIT License
// part of AWT (astro-webtools-template)

// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import buildTimeConstants from 'astro-build-time-constants'
import icon from 'astro-icon'

import configUntyped from '@src/config/config.json' with { type: 'json' }
const config = configUntyped

// add your site specific import and variables

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never', // generates route /index-en.html, but not /index-en.html
  outDir: import.meta.env.PROD ? './www' : './www-localhost', // output directory for the build command
  site: import.meta.env.PROD ? config.site : 'http://localhost',
  base: config.base ? `${config.base}` : undefined,
  vite: {
    build: {
      // cf. https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
      // which is the max size, in bytes, of a file to be inlined as base64 in the code. The default is 4096 (4kb)
      rollupOptions: {
        external: ['fsevents', '@astrojs/compiler-rs'],
      },
    },
  },

  // generate .html routes
  // cf. https://stackoverflow.com/questions/79770159/migrating-from-vanilla-html-to-astro-keep-route-name-legacy
  build: {
    format: 'file',
  },

  // add your site specific configuration

  integrations: [
    mdx(),
    icon({ iconDir: 'src' }),
    buildTimeConstants({}),

    // add your site specific integrations
  ],
})
