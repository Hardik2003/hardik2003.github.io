# ScionTech website

Static marketing site for [sciontech.co](https://sciontech.co) — DevSecOps, cloud security and secure CI/CD services.

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Ships as pure HTML, CSS and images with **zero JavaScript bundles**, which is what keeps Core Web Vitals high and helps search ranking.

## Quick start

Requires Node 22.12 or newer (see `.nvmrc`).

```bash
nvm use          # or install Node 22 some other way
npm install
npm run dev      # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run preview` | Serve the built site locally |

## Editing content

All content lives in Markdown under `src/content/`. Edit a file, commit, and the site rebuilds. There is no database and no admin login.

```
src/content/
├── services/     9 service pages
├── work/         5 case studies
├── blog/         4 articles
└── pages/        privacy policy, terms
```

Each file starts with a frontmatter block that controls how it appears. To add a new blog post, copy an existing file and change the frontmatter:

```markdown
---
title: "Your post title"
description: Shown in search results and link previews. Aim for 140–160 characters.
pubDate: 2026-01-15
category: Technology
author: Hardik Kamdar
image: ../../assets/blog/your-image.png
imageAlt: A plain description of the image, for screen readers and SEO
readingTime: 6
---

Your content here, in Markdown.
```

Images go in `src/assets/` (not `public/`) so Astro can optimise them — it generates WebP and AVIF at multiple sizes automatically. The schemas in `src/content.config.ts` validate every file at build time, so a typo in frontmatter fails the build rather than shipping broken.

Site-wide values — phone number, address, navigation, headline stats — live in `src/consts.ts`.

## The contact form

Static hosting has no backend, so enquiries are delivered by [Web3Forms](https://web3forms.com). This is already configured and working — no setup needed.

Submissions arrive at the address the access key is registered to. The email subject is built from the selected service and the enquirer's name, and `replyto` is set to their address so hitting Reply in your inbox goes straight back to them.

The access key lives in `src/consts.ts`. **It is public by design** — Web3Forms expects it in page HTML, and it can only deliver to its registered address. It cannot be used to read past submissions or redirect them elsewhere. To point an environment at a different inbox, set `PUBLIC_WEB3FORMS_KEY`.

The form also works with JavaScript disabled: the `<form action>` posts directly to Web3Forms. With JS on, the submission is intercepted so the visitor stays on the page and sees inline success or error text.

Spam is filtered by a hidden `botcheck` honeypot. If you start getting spam anyway, enable hCaptcha in the Web3Forms dashboard and add their captcha field to the form.

## Deploying

The build output in `dist/` is plain static files, so any host works.

**Cloudflare Pages or Netlify** (recommended — both free, both read `public/_redirects` automatically):

1. Push this repo to GitHub
2. Connect the repo in the host's dashboard
3. Build command `npm run build`, output directory `dist`
4. Add `PUBLIC_FORM_ENDPOINT` as an environment variable
5. Point the `sciontech.co` DNS at the host

**GitHub Pages** works too, but ignores `public/_redirects` — you would lose the 301s from the old URLs, which costs search ranking. Prefer one of the above.

## SEO

Already handled, no plugin needed:

- Per-page `<title>`, meta description, and canonical URL
- Open Graph and Twitter card tags, with a generated share image at `public/og-default.png`
- JSON-LD structured data: `Organization`, `WebSite`, `Service`, `BlogPosting`, `BreadcrumbList`, `FAQPage`
- `sitemap-index.xml` and `robots.txt` generated at build
- RSS feed at `/rss.xml`
- 301 redirects from every old Laravel URL (`public/_redirects`)
- Responsive images in modern formats, lazy-loaded below the fold
- Semantic headings, one `<h1>` per page, skip-to-content link

After the first deploy, submit `https://sciontech.co/sitemap-index.xml` in [Google Search Console](https://search.google.com/search-console) and watch the coverage report for the redirected URLs.

## Project layout

```
src/
├── assets/          images, optimised at build time
├── components/      reusable UI pieces
├── content/         all editable content (Markdown)
├── data/            testimonials and client logos
├── layouts/         page shell, SEO head, schema
├── pages/           routes — file path maps to URL
├── styles/          design tokens and global CSS
└── consts.ts        site config, nav, contact details
public/              files served as-is, including _redirects
```

## Design tokens

Colours, type scale and spacing are defined once in `src/styles/global.css` under `@theme`. Change `--color-accent-600` there and the accent updates everywhere. The palette is a light base with dark navy (`ink-950`) accent bands.
