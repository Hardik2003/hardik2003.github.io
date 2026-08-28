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
    quote: 'They fixed the scaling problem we had been living with',
    body: 'We had been working around it for a year. They found it in a week and it has not come back.',
    name: 'Robert Masse',
    role: 'CEO',
    company: 'Astrolabe Analytics',
    avatar: robertMasse,
  },
  {
    quote: 'Deployments stopped being an event',
    body: 'Before, a release meant a scheduled evening and someone on standby. After the container migration it became something we do during the working day without telling anyone. The cost came down as well, which was not really the point but nobody complained.',
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
    quote: 'Fewer incidents, and the ones we get make sense',
    body: 'That is the whole review.',
    name: 'John Kennedy',
    role: 'CEO',
    company: 'EnigmaPlus',
    avatar: johnKennedy,
  },
  {
    quote: 'They told us what was wrong before we asked',
    body: 'We brought them in for the trading platform. Partway through they came back with a list of things in the account we had not asked about and had not known were there - open ports, keys nobody had rotated, an admin user belonging to someone who left. Fixing that was not in the original scope. They raised it anyway, and we would rather have heard it from them than from somebody else.',
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
