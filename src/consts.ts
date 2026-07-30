export const SITE = {
  name: 'ScionTech',
  legalName: 'ScionTech',
  url: 'https://sciontech.co',
  title: 'ScionTech - Cloud and DevOps services on AWS, Azure and GCP',
  description:
    'ScionTech is a cloud and DevOps engineering partner. Migration and architecture, cost optimisation, CI/CD, Kubernetes, serverless, observability and cloud security - delivered by senior engineers on AWS, Azure and GCP, with support for DigitalOcean and Linode.',
  locale: 'en',
  ogImage: '/og-default.png',
  foundingYear: 2019,
} as const;

export const CONTACT = {
  email: 'connect@sciontech.co',
  phone: '+91-9825291410',
  phoneHref: '+919825291410',
  address: {
    street: 'Opp. Tagore Business Center, Tagore Road',
    locality: 'Rajkot',
    region: 'Gujarat',
    postalCode: '360002',
    country: 'IN',
    countryName: 'India',
  },
  linkedin: 'https://www.linkedin.com/company/scion-tech/',
} as const;

/** Google Analytics measurement ID carried over from the previous site. */
export const GA_MEASUREMENT_ID = 'G-YJ864EZPN0';

/**
 * Web3Forms handles enquiry delivery, since a static site has no backend.
 *
 * The access key is public by design - Web3Forms expects it in client-side
 * markup, and it only ever delivers to the address the key is registered to.
 * It cannot be used to read submissions or change the destination. Set
 * PUBLIC_WEB3FORMS_KEY to override it per environment.
 */
const DEFAULT_WEB3FORMS_KEY = 'f6046b3c-7daa-4ca9-9206-9efbcf6290fd';

/**
 * `||` rather than `??` on purpose. An unset GitHub Actions variable and a
 * blank line in .env both resolve to '' rather than undefined, and `??`
 * would happily pass that empty string through - producing a form that
 * renders fine but is rejected by Web3Forms on submit.
 */
const envKey = import.meta.env.PUBLIC_WEB3FORMS_KEY?.trim();

export const WEB3FORMS = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: envKey || DEFAULT_WEB3FORMS_KEY,
} as const;

export const NAV: { label: string; href: string }[] = [
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

/** Phone deliberately lives only on /contact and in the footer, not the header. */

export const FOOTER_NAV: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Case studies', href: '/work' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Cloud migration', href: '/services/cloud-migration-and-modernisation' },
      { label: 'Cost optimisation', href: '/services/aws-cost-optimisation' },
      { label: 'CI/CD automation', href: '/services/cicd-and-release-automation' },
      { label: 'Kubernetes', href: '/services/containers-and-kubernetes' },
      { label: 'Cloud security', href: '/services/cloud-security-and-compliance' },
      { label: 'All services', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Free AWS audit', href: '/free-audit' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms and conditions', href: '/terms-and-conditions' },
    ],
  },
];

/**
 * Headline metrics. These were rendering as "00+" on the previous site
 * because the odometer script never received values - set the real
 * numbers here and they will render server-side.
 */
export const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 120, suffix: '+', label: 'Completion milestones' },
  { value: 40, suffix: '+', label: 'Proud clients' },
  { value: 85, suffix: '+', label: 'Completed initiatives' },
  { value: 12, suffix: '+', label: 'Awards' },
];
