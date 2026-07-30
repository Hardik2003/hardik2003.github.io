// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sciontech.co',
  trailingSlash: 'ignore',
  // Old Laravel routes kept alive so existing search rankings and inbound
  // links survive the move.
  //
  // GitHub Pages cannot do server-side 301s and ignores public/_redirects,
  // so these are built as static redirect pages (meta refresh + canonical).
  // Google follows them and passes most ranking signal, though a real 301
  // is stronger — public/_redirects is kept so that moving to Cloudflare
  // Pages or Netlify later upgrades these to true 301s with no extra work.
  redirects: {
    '/policy': '/privacy-policy',
    '/termsconditions': '/terms-and-conditions',
    '/blogs': '/blog',
    '/projects': '/work',
    '/send-mail-form': '/contact',
    '/inquery': '/contact',
    '/contact-us': '/contact',
    '/about-us': '/about',
    '/blog-details': '/blog',

    // The old blog used /blog-details/{Title-With-Punctuation}
    '/blog-details/Containerization-with-AWS-ECS-vs.-EKS:-Choosing-the-Right-Solution-for-Your-Business':
      '/blog/aws-ecs-vs-eks',
    '/blog-details/Data-Security:-At-Rest-vs.-In-Transit':
      '/blog/data-security-at-rest-vs-in-transit',
    '/blog-details/Navigating-the-Cloud:-A-Comprehensive-Guide-to-Modern-Migration-Strategies-and-Solutions':
      '/blog/navigating-the-cloud-migration-strategies',
    '/blog-details/Terraform-with-Ansible-vs.-Chef:-Choosing-the-Right-Tool-for-Your-Cloud-Infrastructure':
      '/blog/terraform-with-ansible-vs-chef',

    // Work slugs referenced by the old admin routes
    '/works/cloud-infrastructure-revamp': '/work',
    '/works/iac-configuration-management': '/work',
    '/works/proactive-monitoring-incident-response': '/work',

    // Service pages retired when the lineup was rebalanced away from a
    // security-only framing toward the full cloud and DevOps offering.
    '/services/devsecops-transformation-secure-cicd': '/services/cicd-and-release-automation',
    '/services/secure-automation-advanced-pipelines': '/services/cicd-and-release-automation',
    '/services/cloud-security-architecture-revamp': '/services/cloud-security-and-compliance',
    '/services/iac-security-configuration-management': '/services/infrastructure-as-code',
    '/services/secure-containerization-orchestration': '/services/containers-and-kubernetes',
    '/services/runtime-protection-monitoring-incident-response': '/services/observability-and-sre',
    '/services/cloud-infrastructure-vulnerability-assessment': '/services/penetration-testing',
    '/services/code-vulnerability-assessment': '/services/penetration-testing',
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
