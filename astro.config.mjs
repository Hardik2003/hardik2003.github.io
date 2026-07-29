// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sciontech.co',
  trailingSlash: 'ignore',
  // Old Laravel routes kept alive so existing search rankings and inbound
  // links survive the move. Host-level 301s also live in public/_redirects.
  redirects: {
    '/policy': '/privacy-policy',
    '/termsconditions': '/terms-and-conditions',
    '/blogs': '/blog',
    '/projects': '/work',
    '/send-mail-form': '/contact',
    '/inquery': '/contact',
  },
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: 'weekly',
      lastmod: new Date(),
    }),
  ],
  image: {
    responsiveStyles: true,
    layout: 'constrained',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
