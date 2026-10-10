export interface BeforeVsNowCompany {
  name: string;
  key: string;
  images: [string, string]; // [young/batch, now]
  descriptions: {
    young: string;
    now: string;
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

export const YC_COMPANIES: BeforeVsNowCompany[] = [
  {
    name: 'BharatAgri Telemetry',
    key: 'bharatagri',
    images: ['/gallery/page_20.jpg', '/gallery/page_3.jpg'],
    descriptions: {
      young: 'Started as a 3rd year CSE project exploring soil nitrogen sensor telemetry for Haryana wheat farmers.',
      now: 'Awarded 1st prize at Eureka Pitch 2025 and secured ₹1.5L non-dilutive prototyping grant from university incubation.',
    },
  },
  {
    name: 'Campus Fix',
    key: 'campusfix',
    images: ['/gallery/page_6.jpg', '/gallery/page_25.jpg'],
    descriptions: {
      young: 'Launched by UIET undergraduates during the 24-hr Ideathon to solve hostel repair micro-logistics.',
      now: 'Grew to 450+ daily active student users across MDU campus hostels with 98% resolution satisfaction.',
    },
  },
  {
    name: 'Kavach CyberSec',
    key: 'kavach',
    images: ['/gallery/page_12.jpg', '/gallery/page_10.jpg'],
    descriptions: {
      young: 'Formed by 4 students in the UIET lab conducting automated vulnerability audits for local MSMEs.',
      now: 'Selected for national innovation showcase at IIT Roorkee and incubated under MDU Centre for Innovation.',
    },
  },
  {
    name: 'NeuroMed Diagnostics',
    key: 'neuromed',
    images: ['/gallery/page_1.jpg', '/gallery/page_4.jpg'],
    descriptions: {
      young: 'Pioneered by interdisciplinary Biotech and CSE students analyzing early diagnostic scan telemetry.',
      now: 'Presented at national healthcare innovation symposiums, receiving faculty citation and seed mentorship.',
    },
  },
  {
    name: 'Edunova Learning',
    key: 'edunova',
    images: ['/gallery/page_14.jpg', '/gallery/page_43.jpg'],
    descriptions: {
      young: 'Started in campus dorms as an open peer-tutoring repository ahead of mid-term examinations.',
      now: 'Empowered 1,200+ engineering undergraduates with verified peer notes, question banks, and coding sprints.',
    },
  },
  {
    name: 'EcoLoop Systems',
    key: 'ecoloop',
    images: ['/gallery/page_13.jpg', '/gallery/page_32.jpg'],
    descriptions: {
      young: 'Mechanical engineering student team innovating low-cost campus plastic recycling shredders.',
      now: 'Recognized as state finalist in Haryana Innovation Challenge with campus pilot deployment.',
    },
  },
  {
    name: 'DormDash Logistics',
    key: 'dormdash',
    images: ['/gallery/page_15.jpg', '/gallery/page_2.jpg'],
    descriptions: {
      young: 'Validated via WhatsApp smoke test groups during late-night exam prep weeks in boys and girls hostels.',
      now: 'Handled over 3,000 late-night cafeteria deliveries with an entirely student-managed peer courier network.',
    },
  },
  {
    name: 'CodeCraft Labs',
    key: 'codecraft',
    images: ['/gallery/page_11.jpg', '/gallery/page_20.jpg'],
    descriptions: {
      young: 'Student developers building open-source developer toolkits in the campus computer centre.',
      now: 'Community of 80+ campus contributors maintaining open-source packages with alumni across top tech firms.',
    },
  },
  {
    name: 'SkillBridge Connect',
    key: 'skillbridge',
    images: ['/gallery/page_10.jpg', '/gallery/page_12.jpg'],
    descriptions: {
      young: 'Created to bridge the gap between Tier-2 college graduates and verified tech internship openings.',
      now: 'Placed 45+ UIET students into summer internship roles at high-growth startups across Gurugram and Delhi-NCR.',
    },
  },
  {
    name: 'GreenGrid Solar IoT',
    key: 'greengrid',
    images: ['/gallery/page_28.jpg', '/gallery/page_3.jpg'],
    descriptions: {
      young: 'ECE students developing an ultra-low-power telemetry module for rooftop photovoltaic efficiency.',
      now: 'Won UIET Innovation Expo and filed provisional patent application with university research support.',
    },
  },
];

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

export const IN_THE_ROOM: InTheRoomItem[] = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Faculty Advisor, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/brian-chesky-video-compressed-7ea6a6ca9593fabb400850744540405287fe91ae08ddfbf4824ab95d5f632875.mp4',
    poster: '/gallery/page_28.jpg',
    startTime: 0,
  },
  {
    name: 'Ananya Sharma',
    title: 'President, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/sam-altman-video-compressed-6e99f4927d081ecef3e4430e36b6ec23ac595e8da186216f30b7d7dc5129dc4a.mp4',
    poster: '/gallery/page_10.jpg',
    startTime: 0,
  },
  {
    name: 'Rohan Mehta',
    title: 'Vice President, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/greg-brockman-video-compressed-cb96007824e30f1ad95d2f0baa819b9ca35a8df56d38373c15f0e9e24c23e4b1.mp4',
    poster: '/gallery/page_12.jpg',
    startTime: 0,
  },
  {
    name: 'Lakshay',
    title: 'Tech & Product Lead',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/michael-truell-video-compressed-523ea9b5330b3d117b97e9404e3b017f2a126bea2e096518c276520521bf8c11.mp4',
    poster: '/gallery/page_20.jpg',
    startTime: 0,
  },
  {
    name: 'Nitigya',
    title: 'Founding Member, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/paul-graham-video-compressed-147746c0944f23ac3ba13f41a213a63fe773fb3e1b261ea824d0784e0c0242e4.mp4',
    poster: '/gallery/page_3.jpg',
    startTime: 0,
  },
  {
    name: 'Shashwat Thakur',
    title: 'Founding Member, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/guillermo-rauch-video-compressed-66c9a0d2ddcc5eb02e84b0714c70b1332f37ffff031ad759cc4dbb2d0f78991d.mp4',
    poster: '/gallery/page_6.jpg',
    startTime: 0,
  },
  {
    name: 'Priya Verma',
    title: 'Secretary, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/dylan-field-video-compressed-7541fe3e6c730507b8b8789c18f6139465733285eeff9330423158d5cd315b38.mp4',
    poster: '/gallery/page_25.jpg',
    startTime: 0,
  },
  {
    name: 'Deepanshu',
    title: 'Founding Member, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/emmett-shear-video-compressed-e639d24c15750fb7ac160f77b63504bafef74929c23f8bb4b82112a84900bb97.mp4',
    poster: '/gallery/page_4.jpg',
    startTime: 0,
  },
  {
    name: 'Karan Malik',
    title: 'Events Head, UIET E-Cell',
    video: 'https://bookface-static.ycombinator.com/assets/ycdc/intheroomwith/tony-xu-video-compressed-cfaffb21fca0c9e88fb50f8057d669c84b98d71695c3c943f86b2cc2b6d33d8d.mp4',
    poster: '/gallery/page_43.jpg',
    startTime: 0,
  },
];

export const YC_PARTNERS: PartnerItem[] = [
  {
    name: 'Dr. Rajesh Kumar',
    url: '/team',
    title: 'Faculty Advisor',
    batchTitle: 'Associate Professor, Management Studies',
    photo: '/gallery/page_28.jpg',
    batchPhoto: '/gallery/page_4.jpg',
    bio: 'Provides academic stewardship and institutional support to UIET E-Cell. Mentors student ventures in business model validation and grant applications.',
  },
  {
    name: 'Ananya Sharma',
    url: '/team',
    title: 'President',
    batchTitle: '4th Year, B.Tech CSE',
    photo: '/gallery/page_10.jpg',
    batchPhoto: '/gallery/page_3.jpg',
    bio: 'Leads student executive operations and flagship summits. Spearheaded Eureka Pitching Competition bringing 35+ campus innovations to life.',
  },
  {
    name: 'Rohan Mehta',
    url: '/team',
    title: 'Vice President',
    batchTitle: '3rd Year, MBA',
    photo: '/gallery/page_12.jpg',
    batchPhoto: '/gallery/page_20.jpg',
    bio: 'Oversees inter-department outreach, ecosystem partnerships, and corporate sponsorship pipelines across Haryana and Delhi-NCR.',
  },
  {
    name: 'Nitigya',
    url: '/team',
    title: 'Founding Pioneer',
    batchTitle: 'Founding Member, UIET MDU',
    photo: '/gallery/page_3.jpg',
    batchPhoto: '/gallery/page_6.jpg',
    bio: 'Co-founded UIET E-Cell, establishing the core organizational framework, student constitution, and inaugural campus ideathons.',
  },
  {
    name: 'Lakshay',
    url: '/team',
    title: 'Tech & Product Lead',
    batchTitle: '3rd Year, B.Tech CSE',
    photo: '/gallery/page_20.jpg',
    batchPhoto: '/gallery/page_12.jpg',
    bio: 'Full-stack builder architecting the digital infrastructure of UIET E-Cell. Guides student teams on zero-cost MVP validation and tech roadmaps.',
  },
  {
    name: 'Shashwat Thakur',
    url: '/team',
    title: 'Founding Pioneer',
    batchTitle: 'Founding Member, UIET MDU',
    photo: '/gallery/page_6.jpg',
    batchPhoto: '/gallery/page_10.jpg',
    bio: 'Co-founded UIET E-Cell, driving strategic execution, speaker invitations, and national delegation representations.',
  },
  {
    name: 'Priya Verma',
    url: '/team',
    title: 'Secretary',
    batchTitle: '3rd Year, B.Com (Hons)',
    photo: '/gallery/page_25.jpg',
    batchPhoto: '/gallery/page_1.jpg',
    bio: 'Directs governance, internal communications, financial allocations, and documentation for university and national accreditation.',
  },
  {
    name: 'Deepanshu',
    url: '/team',
    title: 'Founding Pioneer',
    batchTitle: 'Founding Member, UIET MDU',
    photo: '/gallery/page_4.jpg',
    batchPhoto: '/gallery/page_28.jpg',
    bio: 'Co-founded UIET E-Cell, building grassroots student community networks and establishing ties with university alumni.',
  },
  {
    name: 'Karan Malik',
    url: '/team',
    title: 'Events Head',
    batchTitle: '3rd Year, B.Tech ECE',
    photo: '/gallery/page_43.jpg',
    batchPhoto: '/gallery/page_25.jpg',
    bio: 'Leads logistics and stage management for E-Summit, Eureka, and 24-hr campus ideathons with over 600 student attendees.',
  },
  {
    name: 'Sahil Arora',
    url: '/team',
    title: 'Social Media Lead',
    batchTitle: '3rd Year, MBA',
    photo: '/gallery/page_14.jpg',
    batchPhoto: '/gallery/page_20.jpg',
    bio: 'Heads digital storytelling, campaign design, and community engagement, growing UIET E-Cell’s footprint across student channels.',
  },
  {
    name: 'Tushar Garg',
    url: '/team',
    title: 'Research Lead',
    batchTitle: '4th Year, B.Com (Hons)',
    photo: '/gallery/page_11.jpg',
    batchPhoto: '/gallery/page_12.jpg',
    bio: 'Analyzes government grant schemes, state incubator policies, and venture trends to guide student founders toward seed funding.',
  },
  {
    name: 'Azriel',
    url: '/team',
    title: 'Founding Pioneer',
    batchTitle: 'Founding Member, UIET MDU',
    photo: '/gallery/page_2.jpg',
    batchPhoto: '/gallery/page_3.jpg',
    bio: 'Co-founded UIET E-Cell, pioneering event operations and setting the high-conviction culture that defines the organization today.',
  },
];

export const FOUNDER_WORDS = [
  {
    quote: 'UIET E-Cell compresses months of hesitation into days of pure execution.',
    author: 'Ananya Sharma',
    company: 'President',
    batch: '2026',
    avatar: '/gallery/page_10.jpg',
  },
  {
    quote: 'The energy at Eureka Pitch showed us that tier-2 campus founders can build tier-1 tech products.',
    author: 'Rohan Mehta',
    company: 'Vice President',
    batch: '2026',
    avatar: '/gallery/page_12.jpg',
  },
  {
    quote: 'It’s a community of relentless student builders that you simply can’t find anywhere else on campus.',
    author: 'Lakshay',
    company: 'Tech Lead',
    batch: '2026',
    avatar: '/gallery/page_20.jpg',
  },
  {
    quote: 'Having faculty advisors and peers in your corner resets how big you believe you can build.',
    author: 'Nitigya',
    company: 'Founding Pioneer',
    batch: 'Founders',
    avatar: '/gallery/page_3.jpg',
  },
  {
    quote: 'Validating real hypotheses through customer interviews taught me more than any textbook.',
    author: 'Priya Verma',
    company: 'Secretary',
    batch: '2026',
    avatar: '/gallery/page_25.jpg',
  },
  {
    quote: 'You leave every workshop with a completely renewed sense of how fast you can turn ideas into reality.',
    author: 'Karan Malik',
    company: 'Events Head',
    batch: '2026',
    avatar: '/gallery/page_43.jpg',
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
  text: 'The best founders don’t wait for graduation to start building. UIET E-Cell is where campus innovators turn raw ambition into viable enterprises and solve real-world problems.',
  author: 'Dr. Rajesh Kumar',
  role: 'Faculty Advisor, UIET E-Cell & Associate Professor, MDU Rohtak',
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
    href: '/blog',
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
  description: 'A transparent look at the operations, prototype demonstrations, and non-dilutive grants that brought together 35+ campus innovators, mentors, and jury members under one roof.',
};

export const STARTUP_NEWS: NewsItem[] = [
  {
    title: 'Eureka Pitch 2026 Announces ₹1.5 Lakhs in Prototyping Grants for Student Finalists',
    href: '/blog/how-we-built-largest-student-pitch-showcase-eureka-2026',
  },
  {
    title: 'UIET AgriTech Venture BharatAgri Selected for State Incubation Fast-Track',
    href: '/blog',
  },
  {
    title: 'Over 600 Undergraduates Attend UIET Annual E-Summit Keynote Session at MDU',
    href: '/events',
  },
  {
    title: 'Campus Fix Wins 1st Prize Trophy at Inter-College Innovation Hackathon 2025',
    href: '/blog',
  },
  {
    title: 'Startup India DPIIT Recognition Fast-Track Clinic Launched for MDU Innovators',
    href: '/blog/navigating-government-grants-startup-india-haryana',
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
