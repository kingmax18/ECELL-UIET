import { createClient } from '@supabase/supabase-js';

const url = 'https://zdprtkhbzjpxbslswsms.supabase.co';
const key = 'sb_publishable_gDxu1q1HZEgXgvc3bbhKrA_cIHyk7QA';
const sb = createClient(url, key);

const events = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Present Your Idea. Pitch to Win.',
    description: 'Present your innovative startup idea or project to fellow students, mentors, and faculty judges. Receive constructive feedback, certificates, mentorship, and cash prizes. Open to all MDU students.',
    date: '2026-08-27',
    time: '10:00 AM – 5:00 PM',
    venue: 'UIET MDU Main Auditorium, Rohtak',
    mode: 'Offline',
    status: 'upcoming',
    tags: ['Pitching', 'Competition', 'Startup', 'Ideas'],
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd41rML7ajzF0dJhxZCef-wUCDjLB5yOQuXdiml14ES9-88-Q/viewform',
    accentColor: '#ff8709',
    category: 'orange',
  },
  {
    id: 2,
    title: 'Digital Marketing & Content Masterclass',
    tagline: 'From Zero to Digital Presence',
    description: 'A hands-on workshop covering SEO basics, social media strategy, content creation, and analytics with live demonstrations for student projects.',
    date: '2025-05-20',
    time: '2:00 PM – 5:00 PM',
    venue: 'Google Meet (Link shared on registration)',
    mode: 'Online',
    status: 'past',
    tags: ['Workshop', 'Marketing', 'Digital', 'Skill'],
    registrationUrl: null,
    accentColor: '#00bae2',
    category: 'blue',
  },
  {
    id: 3,
    title: 'Ideathon 2025 — Solutions for Campus & Beyond',
    tagline: 'Solve Real Problems. Create Real Impact.',
    description: 'A 24-hour campus ideathon focused on brainstorming practical solutions for campus life, education, and community challenges. Form a team of 2-4 members and win trophies and certificates.',
    date: '2025-03-10',
    time: '9:00 AM – 9:00 AM (24 hrs)',
    venue: 'MDU Innovation Hub, Rohtak',
    mode: 'Offline',
    status: 'past',
    tags: ['Ideathon', 'Brainstorming', 'Innovation', '24hr'],
    registrationUrl: null,
    accentColor: '#fec5fb',
    category: 'pink',
  },
  {
    id: 4,
    title: 'E-Summit 2024',
    tagline: 'Annual Student Entrepreneurship Gathering',
    description: "UIET E-Cell's annual event featured student team showcases, interactive discussions, and inspiring talks from guest speakers across industries. Over 600 students attended.",
    date: '2024-11-25',
    time: '9:00 AM – 7:00 PM',
    venue: 'MDU Main Campus, Rohtak',
    mode: 'Hybrid',
    status: 'past',
    tags: ['Summit', 'Flagship', 'Networking', 'Learning'],
    registrationUrl: null,
    accentColor: '#0ae448',
    category: 'green',
  },
  {
    id: 5,
    title: 'Founders Talk Series — Season 2',
    tagline: 'Learn from Real Journeys',
    description: 'A monthly speaker series where invited speakers share their real-world experiences, challenges, team building tips, and practical advice with students.',
    date: '2024-09-05',
    time: '6:00 PM – 8:00 PM',
    venue: 'Google Meet',
    mode: 'Online',
    status: 'past',
    tags: ['Speaker', 'Learning', 'Inspiration', 'Talks'],
    registrationUrl: null,
    accentColor: '#9d95ff',
    category: 'lilac',
  },
  {
    id: 6,
    title: 'Resume Building & LinkedIn Optimisation Workshop',
    tagline: 'Get Noticed. Build Your Profile.',
    description: 'A practical session helping MDU students build ATS-friendly resumes and optimize LinkedIn profiles for internships and campus opportunities.',
    date: '2024-07-18',
    time: '3:00 PM – 5:30 PM',
    venue: 'MDU Management Block, Room 201',
    mode: 'Offline',
    status: 'past',
    tags: ['Career', 'Resume', 'LinkedIn', 'Skill'],
    registrationUrl: null,
    accentColor: '#ff8709',
    category: 'orange',
  },
];

const team = [
  { id: 1, name: 'Ananya Sharma', role: 'President', department: 'Leadership', year: '4th Year, B.Tech CSE', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_10.jpg', order: 1 },
  { id: 2, name: 'Rohan Mehta', role: 'Vice President', department: 'Leadership', year: '3rd Year, MBA', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_12.jpg', order: 2 },
  { id: 3, name: 'Priya Verma', role: 'Secretary', department: 'Leadership', year: '3rd Year, B.Com (Hons)', linkedin: '#', email: null, photo: '/gallery/page_6.jpg', order: 3 },
  { id: 4, name: 'Lakshay', role: 'Tech Lead', department: 'Design and Tech', year: '3rd Year, B.Tech CSE', linkedin: '#', email: 'ecelluietfs@gmail.com', photo: '/gallery/page_20.jpg', order: 1 },
  { id: 5, name: 'Divya Singh', role: 'Frontend Developer', department: 'Design and Tech', year: '2nd Year, B.Tech CSE', linkedin: '#', email: null, photo: null, order: 2 },
  { id: 6, name: 'Harsh Yadav', role: 'Backend Developer', department: 'Design and Tech', year: '3rd Year, B.Tech CSE', linkedin: '#', email: null, photo: null, order: 3 },
  { id: 7, name: 'Kritika Jain', role: 'UI/UX Designer', department: 'Design and Tech', year: '2nd Year, B.Des', linkedin: '#', email: null, photo: null, order: 4 },
  { id: 8, name: 'Sahil Arora', role: 'Social Media Lead', department: 'Social Media', year: '3rd Year, MBA', linkedin: '#', email: null, photo: null, order: 1 },
  { id: 9, name: 'Nidhi Chauhan', role: 'Video & Reels Editor', department: 'Social Media', year: '2nd Year, BBA', linkedin: '#', email: null, photo: null, order: 2 },
  { id: 10, name: 'Varun Bhatia', role: 'Brand Manager', department: 'Social Media', year: '3rd Year, BBA', linkedin: '#', email: null, photo: null, order: 3 },
  { id: 11, name: 'Tushar Garg', role: 'Research Lead', department: 'Research and Content', year: '4th Year, B.Com (Hons)', linkedin: '#', email: null, photo: null, order: 1 },
  { id: 12, name: 'Sneha Bansal', role: 'Content Strategist', department: 'Research and Content', year: '3rd Year, B.Com', linkedin: '#', email: null, photo: null, order: 2 },
  { id: 13, name: 'Karan Malik', role: 'Events Head', department: 'Event Management', year: '3rd Year, B.Tech ECE', linkedin: '#', email: null, photo: null, order: 1 },
  { id: 14, name: 'Pooja Rawat', role: 'Event Coordinator', department: 'Event Management', year: '2nd Year, B.Sc', linkedin: '#', email: null, photo: null, order: 2 },
  { id: 15, name: 'Deepak Kumar', role: 'Logistics Manager', department: 'Event Management', year: '3rd Year, B.Tech ME', linkedin: '#', email: null, photo: null, order: 3 },
  { id: 16, name: 'Ritika Sharma', role: 'Documentation Lead', department: 'Documentation', year: '2nd Year, BA (Mass Comm)', linkedin: '#', email: null, photo: null, order: 1 },
  { id: 17, name: 'Mohit Tanwar', role: 'Reports & NEC Writer', department: 'Documentation', year: '2nd Year, BA (English)', linkedin: '#', email: null, photo: null, order: 2 },
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
  { id: 9, title: 'Campus Orientation & Induction Session', category: 'Events', image: '/gallery/page_1.jpg', description: 'Welcoming new engineering and management cohorts into the entrepreneurship community.' },
  { id: 10, title: 'Startup Ideation Roundtables', category: 'Workshops', image: '/gallery/page_2.jpg', description: 'Collaborative problem solving and early-stage startup ideation among student innovators.' },
  { id: 11, title: 'Annual E-Summit Keynote Conclave', category: 'Events', image: '/gallery/page_11.jpg', description: 'Guest speaker keynote session on building scalable technology ventures from university campuses.' },
  { id: 12, title: 'Mentor Connect & Pitch Evaluation', category: 'Workshops', image: '/gallery/page_13.jpg', description: 'One-on-one founder mentorship session analyzing product-market fit and pitching strategies.' },
  { id: 13, title: 'Hackathon Sprint & Demo Day', category: 'Competitions', image: '/gallery/page_14.jpg', description: 'Student engineering teams demoing live prototypes built during the 24-hour campus sprint.' },
  { id: 14, title: 'Merit & Certificate Accolades', category: 'Competitions', image: '/gallery/page_15.jpg', description: 'Celebrating high-performing student organizers and competition finalists with certificates of merit.' },
  { id: 15, title: 'Faculty Advisor & Leadership Address', category: 'Team', image: '/gallery/page_28.jpg', description: 'Faculty mentors sharing strategic direction and encouragement for university entrepreneurship.' },
  { id: 16, title: 'Flagship Summit Panel Discussion', category: 'Events', image: '/gallery/page_32.jpg', description: 'Cross-industry panel discussing the rise of student-founded startups and venture incubation.' },
];

const sponsors = [
  { id: 1, name: 'UIET MDU', url: 'https://mdu.ac.in', tier: 'gold', initials: 'UIET', color: '#ff8709' },
  { id: 2, name: 'Student Council', url: '#', tier: 'silver', initials: 'SC', color: '#fec5fb' },
  { id: 3, name: 'Campus Clubs', url: '#', tier: 'community', initials: 'CC', color: '#00bae2' },
  { id: 4, name: 'Startup India', url: 'https://startupindia.gov.in', tier: 'gold', initials: 'SI', color: '#0ae448' },
];

async function run() {
  console.log('Seeding Events...');
  await sb.from('events').upsert(events);

  console.log('Seeding Team...');
  await sb.from('team').upsert(team);

  console.log('Seeding Gallery (all 16 photos)...');
  await sb.from('gallery').upsert(gallery);

  console.log('Seeding Sponsors...');
  await sb.from('sponsors').upsert(sponsors);

  console.log('Done! All data successfully seeded to Supabase Cloud Database!');
}

run().catch(console.error);
