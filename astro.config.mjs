// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// If you ever move the site to a project page (e.g. https://<user>.github.io/sssk-web),
// set `base: '/sssk-web'` here as well. With the custom domain in public/CNAME, no base is needed.
export default defineConfig({
  site: 'https://srisathyasaikuteer.org',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Photographs are large; cap the work sharp has to do at build time.
    responsiveStyles: true,
  },
});
