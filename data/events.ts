import type { EventItem } from '@/lib/types';

export const events: EventItem[] = [
  {
    id: 1,
    title: 'Eureka Pitching Competition 2026',
    tagline: 'Present Your Idea. Pitch to Win.',
    description:
      'Organized by the new E-Cell student leadership team. Student teams presented their innovative projects, prototypes, and startup ideas to faculty judges and mentors, receiving valuable feedback and certificates of merit.',
    date: '2026-08-27',
    time: '10:00 AM – 4:00 PM',
    venue: 'UIET MDU Main Auditorium, Rohtak',
    mode: 'Offline',
    status: 'past',
    tags: ['Pitching', 'Eureka', 'Innovation', 'Competition'],
    registrationUrl: null,
    accentColor: '#ff8709',
    category: 'orange',
  },
  {
    id: 2,
    title: 'Eureka Pitching Competition (Senior Edition)',
    tagline: 'Inaugural Campus Pitching Event',
    description:
      'The flagship campus pitching showcase organized by our seniors on 15th September, setting the benchmark for student innovation and laying the foundation for our current council.',
    date: '2025-09-15',
    time: '10:00 AM – 4:30 PM',
    venue: 'UIET MDU Campus, Rohtak',
    mode: 'Offline',
    status: 'past',
    tags: ['Pitching', 'Eureka', 'Seniors', 'Flagship'],
    registrationUrl: null,
    accentColor: '#00bae2',
    category: 'blue',
  },
];
