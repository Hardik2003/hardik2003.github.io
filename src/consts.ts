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

export type Office = {
  city: string;
  region: string;
  /** Street line. Empty until the real one is supplied. */
  street?: string;
  postalCode?: string;
  country: string;
  countryName: string;
};

/**
 * Offices, primary first. The primary one is what goes into the
 * Organization schema as `address`; both are emitted as `location`.
 *
 * Street lines and postcodes are still missing. Local search results and
 * a Google Business Profile both need a full street address, so these
 * should be filled in before launch.
 */
export const OFFICES: Office[] = [
  { city: 'Bengaluru', region: 'Karnataka', country: 'IN', countryName: 'India' },
  { city: 'Ahmedabad', region: 'Gujarat', country: 'IN', countryName: 'India' },
];

/**
 * The audit app, which now owns the whole free-audit conversion path.
 *
 * Every "request the audit" call to action points here. The /free-audit
 * page stays as the explainer - what the two audits cover, what lands in
 * the report, how the four steps run - so the links that promise an
 * explanation ("see what is in the report", "what the cost audit covers")
 * deliberately stay internal. Sending those to the app would answer a
 * different question than the one the visitor clicked.
 *
 * Same tab on purpose: same brand, same visual identity, and forcing a new
 * window takes the choice away from the visitor.
 */
export const AUDIT_APP_URL = 'https://audit.sciontech.co/';

export const CONTACT = {
  email: 'connect@sciontech.co',
  phone: '+91-9825291410',
  phoneHref: '+919825291410',
  offices: OFFICES,
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
      { label: 'Free AWS audit', href: AUDIT_APP_URL },
      { label: 'FAQ', href: '/faq' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms and conditions', href: '/terms-and-conditions' },
    ],
  },
];

/**
 * Headline metrics.
 *
 * Every figure here is traceable to a specific case study, so it survives
 * being questioned in a sales call. Deliberately not round counts of
 * clients or projects: a prospect cannot verify "40+ clients", and an
 * unverifiable number does less work than a specific outcome.
 */
export const STATS: { value: string; suffix: string; label: string }[] = [
  { value: '99.99', suffix: '%', label: 'Peak uptime delivered' },
  { value: '10,000', suffix: '+', label: 'Device streams ingested' },
  { value: '40', suffix: '%', label: 'Latency removed' },
  { value: '20', suffix: '%', label: 'Infrastructure cost cut' },
];
