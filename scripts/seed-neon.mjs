import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Neon PostgreSQL database with official UIET E-Cell content...');

  // 1. Initial Site Settings
  await prisma.siteSetting.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      bannerEnabled: false,
      bannerText: '',
      bannerLinkText: '',
      bannerLinkUrl: '',
      email: 'ecelluietfs@gmail.com',
      phone: '+91 99999 99999',
      address: 'UIET, Maharshi Dayanand University, Rohtak, Haryana 124001',
      instagram: 'https://instagram.com/ecell_uiet_mdu',
      linkedin: 'https://linkedin.com/company/ecell-uiet-mdu',
      statMembers: 30,
      statEvents: 12,
      statStartups: 5,
      statYears: 3,
    },
  });

  // 2. Events
  const eventsCount = await prisma.event.count();
  if (eventsCount === 0) {
    await prisma.event.createMany({
      data: [
        {
          title: 'Eureka Pitching Competition 2026',
          tagline: 'Present Your Idea. Pitch to Win.',
          description: 'Present your innovative startup idea or project to fellow students, mentors, and faculty judges. Receive constructive feedback, certificates, mentorship, and cash prizes. Open to all MDU students.',
          date: '2026-08-27',
          time: '10:00 AM – 5:00 PM',
          venue: 'UIET MDU Main Auditorium, Rohtak',
          mode: 'Offline',
          status: 'upcoming',
          tags: 'Pitching, Competition, Startup, Ideas',
          registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd41rML7ajzF0dJhxZCef-wUCDjLB5yOQuXdiml14ES9-88-Q/viewform',
          accentColor: '#0047FF',
          category: 'orange',
        },
        {
          title: 'Digital Marketing & Content Masterclass',
          tagline: 'From Zero to Digital Presence',
          description: 'A hands-on workshop covering SEO basics, social media strategy, content creation, and analytics with live demonstrations for student projects.',
          date: '2025-05-20',
          time: '2:00 PM – 5:00 PM',
          venue: 'Google Meet',
          mode: 'Online',
          status: 'past',
          tags: 'Workshop, Marketing, Digital, Skill',
          registrationUrl: null,
          accentColor: '#0047FF',
          category: 'blue',
        },
        {
          title: 'Ideathon 2025 — Solutions for Campus & Beyond',
          tagline: 'Solve Real Problems. Create Real Impact.',
          description: 'A 24-hour hackathon-style ideation challenge. Teams identify campus or community problems, validate them with users, and pitch a solution to a panel of startup founders.',
          date: '2025-03-14',
          time: '9:00 AM – 6:00 PM',
          venue: 'UIET Seminar Hall',
          mode: 'Offline',
          status: 'past',
          tags: 'Ideathon, Hackathon, Innovation, Team',
          registrationUrl: null,
          accentColor: '#0047FF',
          category: 'pink',
        },
      ],
    });
    console.log('Events seeded.');
  }

  // 3. Team
  const teamCount = await prisma.teamMember.count();
  if (teamCount === 0) {
    await prisma.teamMember.createMany({
      data: [
        { name: 'Ananya Sharma', role: 'President', department: 'Leadership', year: '4th Year, B.Tech CSE', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_10.jpg', order: 1 },
        { name: 'Rohan Mehta', role: 'Vice President', department: 'Leadership', year: '3rd Year, MBA', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_12.jpg', order: 2 },
        { name: 'Lakshay', role: 'Tech Lead', department: 'Design and Tech', year: '3rd Year, B.Tech CSE', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_20.jpg', order: 1 },
        { name: 'Divya Singh', role: 'Frontend Developer', department: 'Design and Tech', year: '2nd Year, B.Tech CSE', linkedin: '#', email: null, photo: null, order: 2 },
        { name: 'Harsh Yadav', role: 'Backend Developer', department: 'Design and Tech', year: '3rd Year, B.Tech CSE', linkedin: '#', email: null, photo: null, order: 3 },
      ],
    });
    console.log('Team members seeded.');
  }

  // 4. Founders
  const foundersCount = await prisma.founder.count();
  if (foundersCount === 0) {
    await prisma.founder.createMany({
      data: [
        { name: 'Vikram Choudhary', role: 'Founding President (2022-23)', batch: 'CSE 2023', contribution: 'Established the official student cell at UIET MDU and led the first campus Ideathon.', linkedin: '#', photo: '/gallery/page_1.jpg', badge: 'Founder' },
        { name: 'Neha Sehgal', role: 'Co-Founder & VP (2022-23)', batch: 'ECE 2023', contribution: 'Built initial mentor networks and secured 3 incubation partnerships across NCR.', linkedin: '#', photo: '/gallery/page_3.jpg', badge: 'Ecosystem Lead' },
      ],
    });
    console.log('Founders seeded.');
  }

  // 5. Blogs
  const blogsCount = await prisma.blog.count();
  if (blogsCount === 0) {
    await prisma.blog.createMany({
      data: [
        {
          slug: 'how-to-validate-startup-idea-college-campus',
          title: 'How to Validate Your Startup Idea on a College Campus in 7 Days',
          excerpt: 'A practical, zero-budget playbook for student founders looking to test customer demand before building.',
          content: '## Step 1: Define the One Problem\\n\\nMost student startups fail not because they build badly, but because they build something nobody wants.\\n\\n> Talk to 30 students in the campus library and canteen before writing a single line of code.\\n\\n## Step 2: Create a Smoke Test\\n\\nLaunch a simple landing page or Google Form to measure click-through intent.',
          authorName: 'Ananya Sharma',
          authorRole: 'President, UIET E-Cell',
          authorAvatar: '/gallery/page_10.jpg',
          category: 'Guides & Playbooks',
          publishedAt: 'October 14, 2026',
          readTime: '6 min read',
          coverImage: '/gallery/page_3.jpg',
          featured: true,
          tags: 'Validation, Student Founders, Playbook, Zero Budget',
        },
        {
          slug: 'eureka-pitching-retrospective-lessons-learned',
          title: 'Eureka Pitching Retrospective: What Judges Actually Look For',
          excerpt: 'Key takeaways from 25+ team pitches at the UIET annual flagship showcase and how winners stood out.',
          content: '## Traction Beats Slides Every Time\\n\\nThe pitch decks that won Eureka had one thing in common: actual user evidence.\\n\\n- Show customer quote snippets\\n- Detail unit economics\\n- Demonstrate why your team is uniquely qualified to execute',
          authorName: 'Lakshay',
          authorRole: 'Tech Lead, UIET E-Cell',
          authorAvatar: '/gallery/page_20.jpg',
          category: 'Startup Stories',
          publishedAt: 'September 28, 2026',
          readTime: '4 min read',
          coverImage: '/gallery/page_12.jpg',
          featured: false,
          tags: 'Eureka, Pitching, Investors, Retrospective',
        },
      ],
    });
    console.log('Blogs seeded.');
  }

  console.log('Database seeding to Neon finished successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
