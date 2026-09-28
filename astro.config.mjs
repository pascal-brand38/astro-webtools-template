// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown'; // used for google analytics. Cf https://ricostacruz.com/posts/google-analytics-in-astro
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never', // generates route /index-en.html, but not /index-en.html
  outDir: 'www', // output directory for the build command
  site: 'https://pascal-brand38.github.io',
  base: 'astro-webtools-template',
  vite: {
    build: {
      // cf. https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
      // which is the max size, in bytes, of a file to be inlined as base64 in the code. The default is 4096 (4kb)
      rollupOptions: {
        external: [ 'fsevents', '@astrojs/compiler-rs' ],
      }
    },
  },

  // generate .html routes
  // cf. https://stackoverflow.com/questions/79770159/migrating-from-vanilla-html-to-astro-keep-route-name-legacy
  build: {
    format: 'file'
  },

  integrations: [
    mdx(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
    icon(),

		// add your site specific integrations
  ],
});
