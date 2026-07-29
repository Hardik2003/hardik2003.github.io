import type { ImageMetadata } from 'astro';
import partner1 from '../assets/clients/partner1.jpg';
import partner2 from '../assets/clients/partner2.jpg';
import partner3 from '../assets/clients/partner3.jpg';
import partner4 from '../assets/clients/partner4.jpg';
import partner5 from '../assets/clients/partner5.jpg';
import partner6 from '../assets/clients/partner6.jpg';

export type Client = { name: string; logo: ImageMetadata };

/** Names read from the logo artwork carried over from the previous site. */
export const CLIENTS: Client[] = [
  { name: 'Cylogy', logo: partner1 },
  { name: 'EazyBot', logo: partner2 },
  { name: 'Red Wire Services', logo: partner3 },
  { name: 'EnigmaPlus', logo: partner4 },
  { name: 'Simpler Media Group', logo: partner5 },
  { name: 'Astrolabe Analytics', logo: partner6 },
];
