export const SITE = {
  name: 'ScionTech',
  legalName: 'ScionTech',
  url: 'https://sciontech.co',
  title: 'ScionTech — DevSecOps, cloud security and secure CI/CD',
  description:
    'ScionTech designs and implements DevSecOps practices that unify development, operations and security into one continuous workflow — secure CI/CD, cloud architecture, IaC scanning, penetration testing and runtime protection.',
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
      { label: 'DevSecOps and secure CI/CD', href: '/services/devsecops-transformation-secure-cicd' },
      { label: 'Cloud security and architecture', href: '/services/cloud-security-architecture-revamp' },
      { label: 'Penetration testing', href: '/services/penetration-testing' },
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
 * because the odometer script never received values — set the real
 * numbers here and they will render server-side.
 */
export const STATS: { value: number; suffix: string; label: string }[] = [
  { value: 120, suffix: '+', label: 'Completion milestones' },
  { value: 40, suffix: '+', label: 'Proud clients' },
  { value: 85, suffix: '+', label: 'Completed initiatives' },
  { value: 12, suffix: '+', label: 'Awards' },
];
