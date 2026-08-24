/**
 * Single source of truth for company and product facts.
 *
 * Every claim here must be verifiable. Do not add statistics, awards,
 * certifications, customer counts or addresses that cannot be substantiated.
 */

export interface Product {
  /** Product name, exactly as it should always be capitalised. */
  readonly name: string;
  /** Short category label. */
  readonly category: string;
  /** Bare hostname, shown in mono as a machine address. */
  readonly domain: string;
  /** Absolute product URL. */
  readonly url: string;
  /** One-paragraph description used on the product card. */
  readonly description: string;
  /** Call-to-action label. */
  readonly cta: string;
  /** Accent key. Drives the product's colour treatment. */
  readonly accent: 'sec' | 'comm';
  /** Short capability notes. Descriptive of scope, never a claim of results. */
  readonly highlights: readonly string[];
}

export const company = {
  legalName: 'Litesoc Sdn Bhd',
  shortName: 'Litesoc',
  suffix: 'Sdn Bhd',
  url: 'https://litesoc.app',
  email: 'hello@litesoc.app',
  country: 'Malaysia',
  countryCode: 'MY',
  descriptor: 'technology company',
  tagline: 'Technology Built for Real-World Impact.',
  description:
    'Litesoc Sdn Bhd is the technology company behind LiteSOC and Digital Khairat, building secure and practical digital platforms for organizations and communities.',
  /** Companies Commission of Malaysia (SSM) registration. */
  registrationNo: '202601014090 (1676188-K)',
  /** Dun & Bradstreet D-U-N-S Number. */
  duns: '47-330-4740',
  address: {
    lines: [
      'Unit 17.2, Level 17, Wisma Sunway',
      'No. 1 Jalan Tengku Ampuan Zabedah C9/C',
      'Seksyen 9, 40100 Shah Alam',
      'Selangor, Malaysia',
    ],
    street: 'Unit 17.2, Level 17, Wisma Sunway, No. 1 Jalan Tengku Ampuan Zabedah C9/C, Seksyen 9',
    locality: 'Shah Alam',
    region: 'Selangor',
    postalCode: '40100',
  },
} as const;

export const products: readonly Product[] = [
  {
    name: 'LiteSOC',
    category: 'Cybersecurity',
    domain: 'litesoc.io',
    url: 'https://litesoc.io',
    description:
      'A cybersecurity platform designed to help organizations strengthen visibility, security operations, and their overall cyber defence capabilities.',
    cta: 'Explore LiteSOC',
    accent: 'sec',
    highlights: ['Security monitoring', 'Security operations', 'Cyber defence capability'],
  },
  {
    name: 'Digital Khairat',
    category: 'Digital Khairat Management',
    domain: 'digitalkhairat.my',
    url: 'https://digitalkhairat.my',
    description:
      'A digital platform that simplifies khairat membership, administration, payments, and communication for organizations and their communities.',
    cta: 'Explore Digital Khairat',
    accent: 'comm',
    highlights: ['Membership records', 'Administration', 'Payments and communication'],
  },
] as const;

/*
  Root-relative fragments, not bare ones: these links live in the header and
  footer, which also render on /privacy/ and /security/. From the homepage the
  browser still treats them as same-document navigation, so smooth scrolling
  is unaffected.
*/
export const nav = [
  { label: 'About', href: '/#about' },
  { label: 'Products', href: '/#products' },
  { label: 'Contact', href: '/#contact' },
] as const;

/**
 * Tailwind class fragments per product accent.
 *
 * Written as complete literal class strings so the Tailwind scanner can see
 * them — never build these by string concatenation.
 */
export const accentClasses = {
  sec: {
    rule: 'bg-sec',
    text: 'text-sec',
    soft: 'bg-sec-soft',
    border: 'group-hover:border-sec/40',
    ring: 'border-sec/25',
  },
  comm: {
    rule: 'bg-comm',
    text: 'text-comm',
    soft: 'bg-comm-soft',
    border: 'group-hover:border-comm/40',
    ring: 'border-comm/25',
  },
} as const;
