export type Client = { name: string };

/**
 * Rendered as typographic wordmarks rather than images.
 *
 * The originals were 147x48 JPEGs with no alpha, displayed at 132x44, so
 * they were upscaled and visibly soft on any retina screen and carried
 * baked-in white boxes against the page background. Set as type instead
 * they are sharp at every density, weigh nothing, and stay readable to
 * screen readers and to search engines.
 *
 * If clients supply proper SVG marks later, add a `logo` field back and
 * render <Image> in LogoMarquee when it is present.
 */
/**
 * Legal suffixes (Inc., LLC) are dropped for display. A client strip reads
 * as brand marks, and suffixes make the row look like a registry listing.
 * They still belong anywhere you name the legal entity, such as contracts.
 */
export const CLIENTS: Client[] = [
  { name: 'Cylogy' },
  { name: 'EazyBot' },
  { name: 'Red Wire Services' },
  { name: 'EnigmaPlus' },
  { name: 'Simpler Media Group' },
  { name: 'Astrolabe Analytics' },
  { name: 'PADI Systems' },
  { name: 'Tipedia' },
  { name: 'Simply Analytics' },
  { name: 'Tatango' },
  { name: 'AnswerDash' },
  { name: 'Ravenna Solutions' },
];
