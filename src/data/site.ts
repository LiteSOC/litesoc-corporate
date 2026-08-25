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
  /** Longer category label used as the kicker on product surfaces. */
  readonly kicker: string;
  /** Bare hostname, shown as a machine address. */
  readonly domain: string;
  /** Absolute product URL. */
  readonly url: string;
  /** One-paragraph description used on the product card. */
  readonly description: string;
  /** Call-to-action label. */
  readonly cta: string;
  /** Accent key. Drives the product's colour treatment. */
  readonly accent: 'sec' | 'comm';
  /** Product mark, served from /public/images. */
  readonly logo: string;
  /** Intrinsic size of `logo`, so the img can reserve its box. */
  readonly logoWidth: number;
  readonly logoHeight: number;
  /** Short capability notes. Descriptive of scope, never a claim of results. */
  readonly highlights: readonly string[];
  /** Who the product is for. Descriptive, not a customer claim. */
  readonly builtFor: string;
}

export const company = {
  legalName: 'Litesoc Sdn Bhd',
  shortName: 'Litesoc',
  suffix: 'Sdn Bhd',
  url: 'https://litesoc.app',
  email: 'info@litesoc.app',
  /** Inbox for vulnerability reports; mirrored in /.well-known/security.txt. */
  securityEmail: 'security@litesoc.app',
  /** Inbox for applications and speculative introductions. */
  careersEmail: 'careers@litesoc.app',
  /**
   * Downloadable corporate profile. `path` is relative to `public/`; `filename`
   * is what the visitor's browser saves it as.
   */
  corporateProfile: {
    path: '/corporate_profile.pdf',
    filename: 'Litesoc-Sdn-Bhd-Corporate-Profile.pdf',
  },
  country: 'Malaysia',
  countryCode: 'MY',
  descriptor: 'technology company',
  tagline: 'Technology Built for Real-World Impact.',
  /** Homepage meta description. */
  description:
    'Litesoc Sdn Bhd builds digital products and provides software development, cybersecurity, cloud, networking and infrastructure solutions in Malaysia.',
  /** One-line positioning used in the hero and About section. */
  positioning:
    'We build digital products and deliver software, cybersecurity, cloud, networking and infrastructure solutions designed around real operational needs.',
  /** Companies Commission of Malaysia (SSM) registration. */
  registrationNo: '202601014090 (1676188-K)',
  /** Dun & Bradstreet D-U-N-S Number. */
  duns: '47-330-4740',
  /** Month and year of incorporation in Malaysia. */
  incorporated: 'April 2026',
  /** Where the business began, before incorporation. */
  predecessor: { name: 'Rubiest Development', year: '2017' },
  /** Short "city, state" used in the hero rule and structure header. */
  hq: 'Shah Alam, Selangor',
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
    kicker: 'Cybersecurity Platform',
    domain: 'litesoc.io',
    url: 'https://litesoc.io',
    description:
      'A cybersecurity platform designed to help organizations strengthen visibility, security operations and cyber defence capabilities.',
    cta: 'Explore LiteSOC',
    accent: 'sec',
    logo: '/images/litesoc-product-logo.png',
    logoWidth: 176,
    logoHeight: 176,
    highlights: ['Security monitoring', 'Security operations', 'Cyber defence capability'],
    builtFor:
      'Organizations that need clearer visibility of their environment and a practical way to run security operations.',
  },
  {
    name: 'Digital Khairat',
    category: 'Digital Khairat Management',
    kicker: 'Khairat Management Platform',
    domain: 'digitalkhairat.my',
    url: 'https://digitalkhairat.my',
    description:
      'A digital platform that simplifies khairat membership, administration, payments and communication for organizations and their communities.',
    cta: 'Explore Digital Khairat',
    accent: 'comm',
    logo: '/images/digital-khairat-logo.png',
    logoWidth: 165,
    logoHeight: 176,
    highlights: ['Membership records', 'Administration', 'Payments and communication'],
    builtFor:
      'Masjid, surau, associations and khairat organizations, their administrators and their members.',
  },
] as const;

/**
 * Professional services delivered by Litesoc Sdn Bhd.
 *
 * These are engagements the company performs for clients. They are kept
 * separate from `products`, which the company owns and develops.
 */
export interface Service {
  readonly name: string;
  /** Key into the icon map in ServiceIcon.astro. */
  readonly icon: 'code' | 'shield' | 'network' | 'cloud' | 'server';
  /** One sentence, used on the homepage card. */
  readonly description: string;
  /** Longer framing, used on the services page. */
  readonly detail: string;
  /** Four short chips shown on the homepage card. */
  readonly tags: readonly string[];
  /** Full capability list, shown on the services page. */
  readonly capabilities: readonly string[];
}

export const services: readonly Service[] = [
  {
    name: 'Web & Software Development',
    icon: 'code',
    description:
      'We design and build practical digital solutions around real business and operational requirements.',
    detail:
      'We design and build practical digital solutions around real business and operational requirements — from internal applications that replace spreadsheets to public platforms.',
    tags: ['Web applications', 'API development', 'System integration', 'Business systems'],
    capabilities: [
      'Custom web applications',
      'Business systems',
      'API development',
      'System integration',
      'Responsive websites',
      'Internal applications',
      'Backend development',
      'Frontend development',
    ],
  },
  {
    name: 'Cybersecurity',
    icon: 'shield',
    description:
      'Security services focused on identifying risk, improving resilience and embedding security throughout technology environments.',
    detail:
      'Security services focused on identifying risk, improving resilience and embedding security throughout technology environments — the same discipline that shapes LiteSOC.',
    tags: [
      'Vulnerability assessment',
      'Penetration testing',
      'Security architecture',
      'Secure-by-design review',
    ],
    capabilities: [
      'Vulnerability assessment',
      'Penetration testing',
      'Application security',
      'Security architecture',
      'Security hardening',
      'Secure-by-design review',
    ],
  },
  {
    name: 'Network & Infrastructure',
    icon: 'network',
    description:
      'Secure, reliable and maintainable network and infrastructure solutions designed around operational requirements.',
    detail:
      'Secure, reliable and maintainable network and infrastructure solutions designed around operational requirements, documented for the people who will run them.',
    tags: ['Network architecture', 'VLAN & segmentation', 'Firewall & VPN', 'Secure Wi-Fi'],
    capabilities: [
      'Network architecture',
      'VLAN & segmentation',
      'Firewall deployment',
      'VPN',
      'Secure Wi-Fi',
      'Infrastructure design',
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: 'cloud',
    description:
      'Modern infrastructure and application delivery covering cloud deployment, automation, observability and CI/CD.',
    detail:
      'Modern infrastructure and application delivery covering cloud deployment, automation, observability and CI/CD — so releases are routine rather than risky.',
    tags: ['Cloud infrastructure', 'CI/CD', 'Containers', 'Monitoring & observability'],
    capabilities: [
      'Cloud infrastructure',
      'CI/CD',
      'Docker & containers',
      'Infrastructure automation',
      'Monitoring & observability',
      'Application deployment',
    ],
  },
  {
    name: 'Infrastructure Lab & Prototyping',
    icon: 'server',
    description:
      'Private infrastructure environments designed for testing, technology validation, experimentation and proof-of-concept development.',
    detail:
      'Private infrastructure environments designed for testing, technology validation, experimentation and proof-of-concept development — where an approach is proven before it reaches production.',
    tags: ['Virtualization', 'Private cloud', 'Proof of concept', 'Technology validation'],
    capabilities: [
      'Virtualization',
      'Private cloud',
      'Proxmox',
      'Testing environments',
      'Proof of concept',
      'Technology validation',
    ],
  },
] as const;

/** Engineering commitments, shown on the homepage and the company page. */
export const principles = [
  {
    title: 'Secure by Design',
    body: 'Security is considered throughout how our products and solutions are designed, developed and operated.',
  },
  {
    title: 'Built for Real Needs',
    body: 'We focus on practical problems and build technology around how organizations actually operate.',
  },
  {
    title: 'Designed to Evolve',
    body: 'Our products and solutions are built with maintainability, scalability and continuous improvement in mind.',
  },
] as const;

/** Company timeline. `period` is rendered as the marker, not as a date. */
export const journey = [
  {
    period: '2017',
    title: 'Rubiest Development',
    body: 'Where the journey began — web, software and infrastructure work delivered under the Rubiest Development name.',
    short: 'The business begins delivering web, software and infrastructure work.',
  },
  {
    period: 'April 2026',
    title: 'Litesoc Sdn Bhd incorporated',
    body: 'The business continued its evolution with incorporation in Malaysia, registered in Shah Alam, Selangor.',
    short: 'Registered in Malaysia, based in Shah Alam, Selangor.',
  },
  {
    period: 'Today',
    title: 'Products and technology services',
    body: 'Building digital products and delivering technology solutions for organizations across Malaysia.',
    short:
      'Developing LiteSOC and Digital Khairat while delivering engineering, security and infrastructure work for clients.',
  },
] as const;

/** Long-form capability labels for the strip in the About section. */
export const capabilities = [
  'Software Engineering',
  'Cybersecurity Engineering',
  'Cloud Infrastructure',
  'Network Engineering',
  'DevOps & Automation',
  'Product Development',
  'Infrastructure Architecture',
  'Secure-by-Design Engineering',
] as const;

/** How the team works, shown on the careers page. */
export const waysOfWorking = [
  {
    title: 'Engineering first',
    body: 'The people who design a system are the people who build and operate it.',
  },
  {
    title: 'Ownership',
    body: 'Small team, clear responsibility, decisions made close to the work.',
  },
  {
    title: 'Security as a habit',
    body: 'Secure defaults are part of the job description, not a separate review gate.',
  },
  {
    title: 'Continuous learning',
    body: 'Time in the infrastructure lab is how we validate technology before recommending it.',
  },
  {
    title: 'Experimentation',
    body: 'Prototypes are cheap; assumptions in production are not.',
  },
] as const;

/**
 * Roles currently open. Keep this empty rather than inventing placeholder
 * listings — the careers page renders an honest "nothing open" state.
 */
export const openPositions: readonly { title: string; location: string; href: string }[] = [];

/** Where to write, and what each address is for. */
export const contactChannels = [
  {
    label: 'General & corporate',
    email: company.email,
    body: 'Projects, partnerships, procurement and general enquiries.',
  },
  {
    label: 'Security reports',
    email: company.securityEmail,
    body: 'Vulnerability reports and responsible disclosure.',
  },
  {
    label: 'Careers',
    email: company.careersEmail,
    body: 'Applications and speculative introductions.',
  },
] as const;

/** Primary navigation. Real routes — the site is no longer a single page. */
export const nav = [
  { label: 'Company', href: '/company/' },
  { label: 'Services', href: '/services/' },
  { label: 'Products', href: '/products/' },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
] as const;

/** Secondary navigation shared by the three legal pages. */
export const legalNav = [
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Security', href: '/security/' },
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
    topRule: 'border-t-sec',
    leftRule: 'border-l-sec',
    hoverBorder: 'hover:border-sec',
    button: 'bg-sec hover:bg-sec-600 text-paper border-sec hover:border-sec-600',
  },
  comm: {
    rule: 'bg-comm',
    text: 'text-comm',
    soft: 'bg-comm-soft',
    topRule: 'border-t-comm',
    leftRule: 'border-l-comm',
    hoverBorder: 'hover:border-comm',
    button: 'bg-comm hover:bg-comm-600 text-paper border-comm hover:border-comm-600',
  },
} as const;
