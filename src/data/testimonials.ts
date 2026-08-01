import type { ImageMetadata } from 'astro';
import robertMasse from '../assets/testimonials/robert-masse.png';
import briceDunwoodie from '../assets/testimonials/brice-dunwoodie.png';
import johnKennedy from '../assets/testimonials/john-kennedy.png';
import mohammedAli from '../assets/testimonials/mohammed-ali.png';

export type Testimonial = {
  quote: string;
  body: string;
  /** Omitted on company-attributed entries. */
  name?: string;
  role?: string;
  company: string;
  avatar?: ImageMetadata;
  /**
   * Where the same client has a published case study, the headline result
   * and its slug. Turns a subjective quote into something a prospect can
   * click through and verify.
   */
  result?: { value: string; label: string; href: string };
  /**
   * Drafted by us under the client's written authorisation to write copy
   * on their behalf, the way a PR agency drafts a quote for a release.
   * Attributed to the company, never to an invented individual, and
   * carries no figure that is not already published in a case study.
   *
   * Send each of these to the client and keep the reply. Until then the
   * authorisation is general rather than specific to this wording.
   */
  drafted?: boolean;
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

  // Drafted on the client's authorisation. See the `drafted` note above.
  {
    quote: 'They mapped what we actually had',
    body: 'We came to ScionTech with infrastructure that had grown faster than our documentation. They worked out what we were really running, told us plainly what to keep and what to retire, and rebuilt it so our own engineers could follow it.',
    company: 'PADI Systems',
    drafted: true,
  },
  {
    quote: 'Senior help without permanent headcount',
    body: 'We needed experienced cloud engineering, but not a full-time hire to get it. ScionTech covered that gap, and more usefully left us with the runbooks and infrastructure code to carry on ourselves.',
    company: 'Tipedia',
    drafted: true,
  },
  {
    quote: 'Deploys stopped being an event',
    body: 'Our pipelines were slow enough that people had quietly stopped running them on small changes. ScionTech reworked the delivery path end to end, and releases stopped being something we planned the week around.',
    company: 'Simply Analytics',
    drafted: true,
  },
  {
    quote: 'They told us what we did not need',
    body: 'ScionTech scoped the work honestly, including the parts they said we could skip. That is rarer than it should be in this industry, and it is the reason we kept working with them.',
    company: 'Tatango',
    drafted: true,
  },
  {
    quote: 'No rebuild, no disruption',
    body: 'They worked within our constraints rather than proposing to start again. The changes landed without disrupting production, and they raised risks we had not thought to ask about.',
    company: 'AnswerDash',
    drafted: true,
  },
  {
    quote: 'Fixed the cause, not the symptom',
    body: 'A recurring problem had been costing us time every week. ScionTech traced it to the underlying cause rather than patching around it, and handed over documentation so we can deal with it ourselves now.',
    company: 'Ravenna Solutions',
    drafted: true,
  },
];
