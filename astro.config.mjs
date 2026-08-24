// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Litesoc Sdn Bhd corporate site.
// Served from the apex of a custom domain, so `base` stays at the default "/".
export default defineConfig({
  site: 'https://litesoc.app',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Emit the mobile-menu script as a real file rather than inlining it,
      // so no inline <script> needs to be allowed by a content policy.
      assetsInlineLimit: 0,
    },
  },
});
