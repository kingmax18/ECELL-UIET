import { PrismaClient } from '@prisma/client';

const dbUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
const prisma = new PrismaClient({
  datasources: dbUrl ? { db: { url: dbUrl } } : undefined,
});

const teamMembers = [
  { id: 1, name: 'Shubhkamna', role: 'President', department: 'Leadership', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
  { id: 2, name: 'Saloni Jha', role: 'Vice President', department: 'Leadership', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 2 },
  { id: 3, name: 'Lakshay', role: 'General Secretary', department: 'Leadership', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 3 },
  { id: 4, name: 'Rimpi', role: 'Joint Secretary', department: 'Leadership', year: '2nd Year, B.Tech Biotech', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 4 },
  { id: 5, name: 'Muskan', role: 'Treasurer', department: 'Leadership', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 5 },
  { id: 6, name: 'Lakshay', role: 'Tech & Design Lead', department: 'Design and Tech', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
  { id: 7, name: 'Saloni Jha', role: 'Social Media Lead', department: 'Social Media', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
  { id: 8, name: 'Shubhkamna', role: 'Event Management Lead', department: 'Event Management', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
  { id: 9, name: 'Muskan', role: 'Research & Content Lead', department: 'Research and Content', year: '2nd Year, B.Tech ECE', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
  { id: 10, name: 'Rimpi', role: 'Documentation Lead', department: 'Documentation', year: '2nd Year, B.Tech Biotech', linkedin: '#', email: 'ecellmdu@gmail.com', photo: null, order: 1 },
];

const founders = [];

const events = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Present Your Idea. Pitch to Win.',
    description: 'Flagship student pitching competition organized by the new E-Cell council with faculty judges and certificates.',
    date: '2026-08-27',
    time: '10:00 AM – 4:00 PM',
    venue: 'UIET MDU Main Auditorium, Rohtak',
    mode: 'Offline',
    status: 'past',
    tags: 'Pitching, Eureka, Innovation, Competition',
    registrationUrl: null,
    accentColor: '#ff8709',
    category: 'orange',
  },
  {
    id: 2,
    title: 'Eureka Pitching Competition (Senior Edition)',
    tagline: 'Inaugural Campus Pitching Event',
    description: 'Campus pitch competition hosted by our seniors on 15th September, inspiring the current council.',
    date: '2025-09-15',
    time: '10:00 AM – 4:30 PM',
    venue: 'UIET MDU Campus, Rohtak',
    mode: 'Offline',
    status: 'past',
    tags: 'Pitching, Eureka, Seniors, Flagship',
    registrationUrl: null,
    accentColor: '#00bae2',
    category: 'blue',
  },
];

const sponsors = [
  { id: 2, name: 'UIET MDU', url: 'https://mdu.ac.in', tier: 'gold', initials: 'UIET', color: '#ff8709' },
  { id: 3, name: 'Student Council', url: '#', tier: 'silver', initials: 'SC', color: '#fec5fb' },
  { id: 4, name: 'Campus Clubs', url: '#', tier: 'community', initials: 'CC', color: '#00bae2' },
];

const gallery = [
  { id: 1, title: 'E-Cell Core Team & Award Winners', category: 'Team', image: '/gallery/page_12.jpg', description: 'The E-Cell UIET MDU core team during the Eureka Pitching Competition awards ceremony.' },
  { id: 2, title: 'Eureka Pitching Competition 2025', category: 'Competitions', image: '/gallery/page_3.jpg', description: 'Top student pitch winner receiving 1st prize trophy from faculty advisors.' },
  { id: 3, title: 'Campus Fix Challenge 2025 Winners', category: 'Competitions', image: '/gallery/page_25.jpg', description: 'Prize distribution for the Campus Fix Challenge student hackathon.' },
  { id: 4, title: 'E-Cell National Delegation Trip', category: 'Team', image: '/gallery/page_6.jpg', description: 'E-Cell UIET MDU student delegation traveling for a national startup event.' },
  { id: 5, title: 'LinkedIn & Career Masterclass', category: 'Workshops', image: '/gallery/page_43.jpg', description: 'Interactive student workshop on profile building and networking held in UIET seminar hall.' },
  { id: 6, title: "Engineers' Day 2025 Brainstorming", category: 'Events', image: '/gallery/page_20.jpg', description: "Team circle discussion and event planning session for Engineers' Day at UIET MDU." },
  { id: 7, title: 'Inauguration & Saraswati Vandana', category: 'Events', image: '/gallery/page_4.jpg', description: 'Traditional lamp lighting ceremony with faculty dignitaries.' },
  { id: 8, title: 'Student Delegation at IIT Roorkee', category: 'Team', image: '/gallery/page_10.jpg', description: 'E-Cell women student leaders representing MDU at national summit.' },
  { id: 9, title: 'Campus Orientation & Induction Session', category: 'Events', image: '/gallery/page_1.jpg', description: 'Welcoming new engineering and management students into the entrepreneurship community.' },
  { id: 10, title: 'Startup Ideation Roundtables', category: 'Workshops', image: '/gallery/page_2.jpg', description: 'Collaborative problem solving and early-stage startup ideation among student innovators.' },
  { id: 11, title: 'Eureka Pitching Keynote & Jury Conclave', category: 'Events', image: '/gallery/page_11.jpg', description: 'Faculty advisors and judges addressing student innovators during the Eureka pitching showcase.' },
  { id: 12, title: 'Mentor Connect & Pitch Evaluation', category: 'Workshops', image: '/gallery/page_13.jpg', description: 'One-on-one founder mentorship session analyzing product-market fit and pitching strategies.' },
  { id: 13, title: 'Hackathon Sprint & Demo Day', category: 'Competitions', image: '/gallery/page_14.jpg', description: 'Student engineering teams demoing live prototypes built during the 24-hour campus sprint.' },
  { id: 14, title: 'Merit & Certificate Accolades', category: 'Competitions', image: '/gallery/page_15.jpg', description: 'Celebrating high-performing student organizers and competition finalists with certificates of merit.' },
  { id: 15, title: 'Faculty Advisor & Leadership Address', category: 'Team', image: '/gallery/page_28.jpg', description: 'Faculty mentors sharing strategic direction and encouragement for university entrepreneurship.' },
  { id: 16, title: 'Eureka Pitch Evaluation & Feedback', category: 'Events', image: '/gallery/page_32.jpg', description: 'Faculty panel reviewing student project presentations and providing technical feedback.' },
];

async function sync() {
  console.log('🔄 Starting complete Neon PostgreSQL synchronization...');

  // 1. Team Members
  console.log(`Syncing ${teamMembers.length} team members...`);
  await prisma.teamMember.deleteMany({});
  for (const m of teamMembers) {
    await prisma.teamMember.create({ data: m });
  }
  console.log('✅ Team members synced.');

  // 2. Founders
  console.log('Clearing founders (removed per specification)...');
  await prisma.founder.deleteMany({});
  console.log('✅ Founders cleared.');

  // 3. Events
  console.log('Clearing old events and syncing Eureka events...');
  await prisma.event.deleteMany({});
  for (const ev of events) {
    await prisma.event.create({
      data: ev,
    });
  }
  console.log('✅ Events synced.');

  // 4. Sponsors
  console.log(`Upserting ${sponsors.length} sponsors...`);
  for (const s of sponsors) {
    await prisma.sponsor.upsert({
      where: { id: s.id },
      update: {
        name: s.name,
        url: s.url,
        tier: s.tier,
        initials: s.initials,
        color: s.color,
      },
      create: s,
    });
  }
  console.log('✅ Sponsors synced.');

  // 5. Gallery
  console.log(`Upserting ${gallery.length} gallery items...`);
  for (const g of gallery) {
    await prisma.galleryItem.upsert({
      where: { id: g.id },
      update: {
        title: g.title,
        category: g.category,
        image: g.image,
        description: g.description,
      },
      create: g,
    });
  }
  console.log('✅ Gallery items synced.');

  // 6. Site Settings
  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {
      email: 'ecellmdu@gmail.com',
      phone: '+91 7206897203',
      address: '',
      instagram: 'https://instagram.com/ecell_mdu',
      linkedin: 'https://linkedin.com/company/mdu-ecell',
      statMembers: 250,
      statEvents: 2,
      statStartups: 20,
      statYears: 5,
    },
    create: {
      id: 1,
      bannerEnabled: false,
      bannerText: '',
      bannerLinkText: '',
      bannerLinkUrl: '',
      email: 'ecellmdu@gmail.com',
      phone: '+91 7206897203',
      address: '',
      instagram: 'https://instagram.com/ecell_mdu',
      linkedin: 'https://linkedin.com/company/mdu-ecell',
      statMembers: 250,
      statEvents: 2,
      statStartups: 20,
      statYears: 5,
    },
  });
  console.log('✅ Site settings synced.');

  console.log('🎉 ALL DATA FULLY SYNCHRONIZED WITH NEON POSTGRESQL!');
}

sync()
  .catch((err) => {
    console.error('❌ Sync failed:', err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
