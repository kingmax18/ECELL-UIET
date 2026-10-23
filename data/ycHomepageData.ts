export interface BeforeVsNowCompany {
  name: string;
  key: string;
  images: [string, string]; // [young/batch, now]
  batch?: string;
  descriptions: {
    young: string;
    now: string;
    valuation?: string;
  };
}

export interface PartnerItem {
  name: string;
  url: string;
  title: string;
  batchTitle: string;
  photo: string;
  batchPhoto: string;
  bio: string;
}

export interface InTheRoomItem {
  name: string;
  title: string;
  video: string;
  poster: string;
  startTime: number;
}

export interface KnowledgeThumb {
  href: string;
  image: string;
  alt: string;
  title: string;
  linkText: string;
}

export interface NewsItem {
  title: string;
  href: string;
}

export const YC_COMPANIES: BeforeVsNowCompany[] = [];

export const YC_LOGOS = [
  { name: 'UIET MDU', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Maharshi_Dayanand_University_logo.png/220px-Maharshi_Dayanand_University_logo.png', url: '/about' },
  { name: 'Startup India', logo: 'https://www.startupindia.gov.in/content/dam/invest-india/Templates/base/images/logo/startup-india-logo.png', url: '/about' },
  { name: 'Startup Haryana', logo: 'https://startupharyana.gov.in/assets/images/logo.png', url: '/about' },
  { name: 'MDU Incubation', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'DST India', logo: 'https://dst.gov.in/sites/default/files/dst-logo_0.png', url: '/about' },
  { name: 'AICTE IIC', logo: 'https://mic.gov.in/assets/img/logo.png', url: '/about' },
  { name: 'AWS Activate', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', url: '/about' },
  { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg', url: '/about' },
  { name: 'GitHub Education', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg', url: '/about' },
  { name: 'Notion Startups', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo-wiki.svg', url: '/about' },
  { name: 'DigitalOcean', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/DigitalOcean_logo.svg', url: '/about' },
  { name: 'MSME India', logo: 'https://msme.gov.in/sites/all/themes/msme/logo.png', url: '/about' },
  { name: 'TiE Delhi-NCR', logo: 'https://delhi.tie.org/wp-content/uploads/2019/08/tie-delhi-logo.png', url: '/about' },
  { name: 'NASSCOM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/NASSCOM_logo.svg/320px-NASSCOM_logo.svg.png', url: '/about' },
  { name: 'Student Council', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'IEEE Student Branch', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg', url: '/about' },
  { name: 'CSI UIET', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'IETE Student Forum', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'Haryana Knowledge Corp', logo: 'https://startupharyana.gov.in/assets/images/logo.png', url: '/about' },
  { name: 'DST NIDHI', logo: 'https://dst.gov.in/sites/default/files/dst-logo_0.png', url: '/about' },
  { name: 'MDU Innovation Club', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'UIET Alumni Cell', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'MDU Research Park', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
  { name: 'Rohtak Chamber of Tech', logo: 'https://mdu.ac.in/images/mdu-logo.png', url: '/about' },
];

export const IN_THE_ROOM: InTheRoomItem[] = [];

export const YC_PARTNERS: PartnerItem[] = [
  {
    name: 'Er. Anil Sangwan',
    url: '/team',
    title: 'Faculty Advisor',
    batchTitle: 'Faculty Advisor, UIET MDU',
    photo: '/gallery/page_28.jpg',
    batchPhoto: '/gallery/page_4.jpg',
    bio: 'Provides academic stewardship and institutional guidance to E-Cell, supporting student-led innovation and campus initiatives.',
  },
  {
    name: 'Shubhkamna',
    url: '/team',
    title: 'President',
    batchTitle: '2nd Year, B.Tech ECE',
    photo: '/gallery/page_10.jpg',
    batchPhoto: '/gallery/page_3.jpg',
    bio: 'Leads student executive operations, organizing the flagship Eureka pitching competition and student innovation on campus.',
  },
  {
    name: 'Saloni Jha',
    url: '/team',
    title: 'Vice President',
    batchTitle: '2nd Year, B.Tech ECE',
    photo: '/gallery/page_12.jpg',
    batchPhoto: '/gallery/page_20.jpg',
    bio: 'Oversees inter-department outreach, social media campaigns, and campus student engagement.',
  },
  {
    name: 'Lakshay',
    url: '/team',
    title: 'General Secretary & Tech Lead',
    batchTitle: '2nd Year, B.Tech ECE',
    photo: '/gallery/page_20.jpg',
    batchPhoto: '/gallery/page_12.jpg',
    bio: 'Drives technical infrastructure and student developer initiatives across the university ecosystem.',
  },
  {
    name: 'Rimpi',
    url: '/team',
    title: 'Joint Secretary & Documentation Lead',
    batchTitle: '2nd Year, B.Tech Biotech',
    photo: '/gallery/page_6.jpg',
    batchPhoto: '/gallery/page_1.jpg',
    bio: 'Directs official documentation, inter-department coordination, and university reporting.',
  },
  {
    name: 'Muskan',
    url: '/team',
    title: 'Treasurer & Research Lead',
    batchTitle: '2nd Year, B.Tech ECE',
    photo: '/gallery/page_25.jpg',
    batchPhoto: '/gallery/page_4.jpg',
    bio: 'Manages treasury allocations, budget planning, and student research frameworks.',
  },
];

export const FOUNDER_WORDS = [
  {
    quote: 'E-Cell compresses months of hesitation into days of pure execution.',
    author: 'Shubhkamna',
    company: 'President',
    batch: '2026',
    avatar: '/gallery/page_10.jpg',
  },
  {
    quote: 'Campus is the best sandbox to build, test ideas, and learn by shipping.',
    author: 'Saloni Jha',
    company: 'Vice President',
    batch: '2026',
    avatar: '/gallery/page_12.jpg',
  },
  {
    quote: 'It’s a community of relentless student builders that you simply can’t find anywhere else on campus.',
    author: 'Lakshay',
    company: 'General Secretary',
    batch: '2026',
    avatar: '/gallery/page_20.jpg',
  },
  {
    quote: 'Connecting ideas across engineering, biotech, and management creates truly unique solutions.',
    author: 'Rimpi',
    company: 'Joint Secretary',
    batch: '2026',
    avatar: '/gallery/page_6.jpg',
  },
  {
    quote: 'Surrounding yourself with motivated peers completely resets how big you dare to dream.',
    author: 'Muskan',
    company: 'Treasurer',
    batch: '2026',
    avatar: '/gallery/page_25.jpg',
  },
];

export const EDITORIAL_STRIP_IMAGES = [
  '/gallery/page_3.jpg',
  '/gallery/page_10.jpg',
  '/gallery/page_12.jpg',
  '/gallery/page_20.jpg',
  '/gallery/page_25.jpg',
];

export const FEATURED_QUOTE = {
  text: 'The best founders don’t wait for graduation to start building. E-Cell is where campus innovators turn raw ambition into viable enterprises and solve real-world problems.',
  author: 'Er. Anil Sangwan',
  role: 'Faculty Advisor, E-Cell & Faculty Member, UIET MDU',
  avatar: '/gallery/page_28.jpg',
};

export const KNOWLEDGE_THUMBNAILS: KnowledgeThumb[] = [
  {
    href: '/blog/dorm-room-to-mvp-student-founders-guide-validation',
    image: '/gallery/page_20.jpg',
    alt: 'From Dorm Room to MVP: Zero-Cost Validation Guide',
    title: 'From Dorm Room to MVP: Zero-Cost Validation Guide',
    linkText: 'Read guide',
  },
  {
    href: '/blog/navigating-government-grants-startup-india-haryana',
    image: '/gallery/page_28.jpg',
    alt: 'Navigating Government Grants: Startup India & Haryana Schemes',
    title: 'Navigating Government Grants: Startup India & Haryana Schemes',
    linkText: 'Read guide',
  },
  {
    href: '/blog/angel-decks-10-slides-pre-seed-student-founders',
    image: '/gallery/page_43.jpg',
    alt: 'Deconstructing the 10-Slide Pitch Deck for Student Founders',
    title: 'Deconstructing the 10-Slide Pitch Deck for Student Founders',
    linkText: 'Read playbook',
  },
];

export const KNOWLEDGE_MAIN_FEATURE = {
  href: '/blog/how-we-built-largest-student-pitch-showcase-eureka-2026',
  image: '/gallery/page_3.jpg',
  tag: 'Flagship Showcase',
  title: "How We Built UIET's Largest Student Pitch Showcase: Behind the Scenes of Eureka",
  description: 'A transparent look at the operations, prototype demonstrations, and collaborative workshops that brought together 35+ campus innovators, mentors, and jury members under one roof.',
};

export const STARTUP_NEWS: NewsItem[] = [
  {
    title: 'Eureka Pitching Competition 2026 Celebrates Campus Finalists with Merit Recognition',
    href: '/blog/how-we-built-largest-student-pitch-showcase-eureka-2026',
  },
  {
    title: 'Senior Edition Eureka on 15th September Inspires New Student Council Relaunch',
    href: '/events',
  },
  {
    title: 'UIET Engineering and Biotech Students Present Prototypes at Eureka Pitching Event',
    href: '/events',
  },
  {
    title: 'Faculty Advisor Er. Anil Sangwan Commends Student Conviction at Campus Showcase',
    href: '/blog/how-we-built-largest-student-pitch-showcase-eureka-2026',
  },
];

export const PG_ESSAYS: NewsItem[] = [
  {
    title: 'Do Things that Don’t Scale — Paul Graham',
    href: 'https://www.paulgraham.com/ds.html',
  },
  {
    title: 'The Student Founder Advantage — Why College is the Best Time to Build',
    href: '/blog/dorm-room-to-mvp-student-founders-guide-validation',
  },
  {
    title: 'Be Relentlessly Resourceful — Paul Graham',
    href: 'https://www.paulgraham.com/relres.html',
  },
  {
    title: 'How to Validate an Unproven Hypothesis in 72 Hours',
    href: '/blog/dorm-room-to-mvp-student-founders-guide-validation',
  },
  {
    title: 'Why Working Code Beats a Fifty-Slide Deck Every Time',
    href: '/blog/how-we-built-largest-student-pitch-showcase-eureka-2026',
  },
];

export const CTA_STRIP_IMAGES = [
  '/gallery/page_1.jpg',
  '/gallery/page_6.jpg',
  '/gallery/page_12.jpg',
  '/gallery/page_25.jpg',
  '/gallery/page_43.jpg',
];
