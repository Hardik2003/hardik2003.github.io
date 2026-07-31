import type { ImageMetadata } from 'astro';
import robertMasse from '../assets/testimonials/robert-masse.png';
import briceDunwoodie from '../assets/testimonials/brice-dunwoodie.png';
import johnKennedy from '../assets/testimonials/john-kennedy.png';
import mohammedAli from '../assets/testimonials/mohammed-ali.png';

export type Testimonial = {
  quote: string;
  body: string;
  name: string;
  role: string;
  company: string;
  avatar: ImageMetadata;
  /**
   * Where the same client has a published case study, the headline result
   * and its slug. Turns a subjective quote into something a prospect can
   * click through and verify.
   */
  result?: { value: string; label: string; href: string };
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Seamless scaling for our SaaS platform',
    body: 'ScionTech brought clarity and control to our DevOps processes on AWS. Their automation and monitoring solutions helped us scale our SaaS platform seamlessly while maintaining high performance and security. A truly dependable partner in our growth journey.',
    name: 'Robert Masse',
    role: 'CEO',
    company: 'Astrolabe Analytics',
    avatar: robertMasse,
  },
  {
    quote: 'DevOps that keeps our digital media running smoothly',
    body: 'ScionTech helped us modernize our infrastructure and eliminate deployment bottlenecks. Their DevOps solutions brought speed, stability, and automation to our workflows - critical for a fast-paced digital media environment. We now operate with greater agility and confidence.',
    name: 'Brice Dunwoodie',
    role: 'CEO',
    company: 'Simplermedia Group',
    avatar: briceDunwoodie,
    result: {
      value: '20%',
      label: 'lower operational cost',
      href: '/work/simplermedia-container-migration',
    },
  },
  {
    quote: 'A genuine game changer',
    body: 'ScionTech transformed our infrastructure with their AWS DevOps expertise. Deployments are now faster, our systems more scalable, and downtime has dropped significantly. Their team was proactive, reliable, and aligned perfectly with our business goals.',
    name: 'John Kennedy',
    role: 'CEO',
    company: 'EnigmaPlus',
    avatar: johnKennedy,
  },
  {
    quote: 'Optimized DevOps for high-performance crypto trading',
    body: 'ScionTech played a key role in strengthening the reliability and speed of our crypto trading platform. Their DevOps solutions on AWS streamlined our deployments, enhanced uptime, and gave us the confidence to scale securely in a fast-moving market. Their expertise made a measurable impact.',
    name: 'Mohammed Ali',
    role: 'CEO',
    company: 'Eazybot',
    avatar: mohammedAli,
    result: {
      value: '99.95%',
      label: 'platform availability',
      href: '/work/eazybot-trading-platform-hardening',
    },
  },
];
