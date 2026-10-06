import type { BlogPost } from '@/lib/types';

export const blogCategories = [
  'All',
  'Startup Stories',
  'Guides & Playbooks',
  'Fundraising',
  'Policy & Ecosystem',
  'Tech & AI',
] as const;

export const blogs: BlogPost[] = [
  {
    id: 1,
    slug: 'how-we-built-largest-student-pitch-showcase-eureka-2026',
    title: "How We Built UIET's Largest Student Pitch Showcase: Behind the Scenes of Eureka",
    excerpt: "A transparent look at the operations, sponsorship outreach, and founder pitches that brought together 35+ campus innovators, mentors, and angel investors under one roof.",
    category: 'Startup Stories',
    publishedAt: 'October 12, 2026',
    readTime: '5 min read',
    coverImage: '/gallery/page_3.jpg',
    featured: true,
    tags: ['Eureka Pitch', 'E-Summit', 'Student Startups', 'Campus Leadership'],
    author: {
      name: 'Ananya Sharma',
      role: 'President, UIET E-Cell',
      avatar: '/gallery/page_10.jpg',
    },
    content: `
## The Spark Behind Eureka 2026

When we began planning the flagship pitch showcase this semester, our executive board asked one central question: **Why do so many student ideas stall before ever reaching a working prototype?**

The answer was rarely lack of ambition or talent. Rather, it came down to three systemic friction points on campus:

1. **Lack of Early Validation:** Students often spend months coding without testing their thesis with target users.
2. **Fear of Pitching:** The misconception that you need a finished commercial product to seek mentorship.
3. **The Mentorship Chasm:** Founders in Tier-2/3 university ecosystems often lack direct channels to active operators.

Eureka 2026 was architected from the ground up to dismantle these barriers.

---

## 35 Teams, 12 Finalists, Real Funding Commitments

Unlike conventional theoretical business plan competitions, Eureka mandated a **Demonstration First** policy. Teams had to show working code, physical prototypes, or customer waitlists before taking the stage in front of the jury.

> "A prototype proves conviction far more than any fifty-slide deck ever will. At UIET E-Cell, we celebrate builders who ship."
> — *Dr. Rajesh Kumar, Faculty Advisor*

The jury comprised seed-stage founders from Gurugram, university alumni running venture-backed SaaS companies, and technology leaders across Haryana's startup circuit.

### Key Milestones from the Showcase:
- **350+ Student Attendees** across 6 university departments (CSE, Mechanical, Biotechnology, MBA, Commerce, and Applied Sciences).
- **₹1.5 Lakhs in Non-Dilutive Prototyping Grants** distributed to the top three podium teams.
- **Direct Incubation Fast-Track:** 4 projects selected for university incubation lab workspace with complimentary cloud credits.

---

## What the Winning Teams Did Differently

Reviewing the judging scorecards revealed a distinct pattern among the top finishers:

- **Specific Problem Scoping:** Instead of trying to "fix agriculture," the winning AgriTech team targeted *soil nitrogen telemetry for wheat farmers within a 40km radius of Rohtak*. Specificity breeds defensibility.
- **Fast Feedback Loops:** The runner-up team had already collected responses from 120 campus hostel students to validate their shared micro-logistics platform.
- **Coachability:** Founders who listened attentively to harsh feedback during the preliminary dry-runs improved their pitch scores by an average of 42% in the finals.

---

## What Comes Next for UIET E-Cell

Eureka is not a one-day spectacle; it is the kick-off engine for our semester-long incubator cohort. All twelve finalists are now paired with alumni mentors for weekly check-ins, prototyping sprints, and legal incorporation guidance.

If you have a project or an unproven hypothesis you want to build, don't wait for the next annual summit. Reach out to our team, join our weekly open office hours, and let's turn your idea into impact.
    `.trim(),
  },
  {
    id: 2,
    slug: 'dorm-room-to-mvp-student-founders-guide-validation',
    title: "From Dorm Room to MVP: The Student Founder's Guide to Zero-Cost Validation",
    excerpt: "Why the first ten customer conversations matter ten times more than ten thousand lines of code, and how student teams can validate hypotheses in under 72 hours.",
    category: 'Guides & Playbooks',
    publishedAt: 'September 28, 2026',
    readTime: '6 min read',
    coverImage: '/gallery/page_20.jpg',
    featured: false,
    tags: ['MVP', 'Product Strategy', 'Lean Startup', 'Customer Discovery'],
    author: {
      name: 'Lakshay',
      role: 'Tech & Product Lead',
      avatar: '/gallery/page_20.jpg',
    },
    content: `
## The Developer's Trap

As engineering students, our default instinct when an exciting business idea strikes is almost always identical: **open VS Code, spin up a Next.js repo, configure database schemas, and spend three weeks perfecting dark mode.**

By the time the auth system is wired up, we realize we haven't spoken to a single human being who actually experiences the problem we claim to solve.

This is the developer's trap. In this playbook, we break down the exact lightweight framework we teach in our UIET E-Cell product workshops to validate business concepts before writing a single line of backend logic.

---

## Step 1: Write Down Your Riskiest Assumptions

Every startup is essentially an experiment designed around two assumptions:
1. **The Problem Hypothesis:** A specific group of people regularly suffers from problem X and feels genuine pain or loses money because of it.
2. **The Willingness-to-Pay Hypothesis:** Those people are actively looking for a remedy and are willing to change their existing habits or part with money to solve it.

If either assumption fails, your code will not save the business.

---

## Step 2: The "Smoke Test" Landing Page

Instead of building full products, create a single-page value proposition using standard responsive templates or no-code page builders.

### Anatomy of an Effective Smoke Test:
- **Headline:** Clear promise of value (e.g. *"Automated gate-pass clearance for university day-scholars in 30 seconds"*).
- **Sub-headline:** How it works in one sentence.
- **Single CTA:** An early-access email / WhatsApp input with a benefit (e.g. *"Be the first 50 students to get free access during exam week"*).

Share the link on relevant student groups, WhatsApp batch channels, and department noticeboards. If 50 people won't enter their email address to join a waitlist, they certainly won't install an app or pay for a subscription.

---

## Step 3: Conducting "The Mom Test" Interviews

Never ask your classmates: *"Would you use an app that does X?"* People want to be polite, so they will always say yes.

Instead, ask about their **past behavior**:
- *"When was the last time you tried to solve this problem?"*
- *"What did you use, and what annoyed you most about it?"*
- *"How much time or money did that cost you?"*

If they haven't actively tried to solve the problem in the last 30 days, it is simply not painful enough to build a startup around.

---

## Summary Checklist
- [ ] Define the exact customer persona (not "everyone in India").
- [ ] Conduct 10 problem-interview conversations without pitching your solution.
- [ ] Launch a simple one-page smoke test page.
- [ ] Aim for a 20%+ waitlist conversion rate before investing in custom engineering.
    `.trim(),
  },
  {
    id: 3,
    slug: 'navigating-government-grants-startup-india-haryana',
    title: 'Navigating Government Grants: Startup India & Haryana State Innovation Schemes',
    excerpt: 'An actionable roadmap for university innovators looking to unlock seed funding, intellectual property subsidies, and state incubation grants.',
    category: 'Policy & Ecosystem',
    publishedAt: 'September 15, 2026',
    readTime: '7 min read',
    coverImage: '/gallery/page_28.jpg',
    featured: false,
    tags: ['Startup India', 'Grants', 'Government Schemes', 'Haryana Innovation'],
    author: {
      name: 'Rohan Mehta',
      role: 'Vice President, UIET E-Cell',
      avatar: '/gallery/page_12.jpg',
    },
    content: `
## Why You Shouldn't Overlook State Support

Student entrepreneurs frequently look towards private venture capital and angel investors early on. However, for deep-tech, hardware, social impact, and early student prototypes, **government non-dilutive grants** provide the most founder-friendly capital in the ecosystem.

You retain 100% equity in your company while securing essential capital to buy equipment, conduct lab testing, and file provisional patents.

---

## Key Schemes Open to MDU & UIET Innovators

### 1. DPIIT Recognition (Startup India)
The fundamental prerequisite for accessing virtually all state benefits is DPIIT recognition.
- **Eligibility:** An incorporated entity (Private Limited or registered LLP) under 10 years old with turnover below ₹100 Crores.
- **Key Perks:** Self-certification under labor and environmental laws, 80% rebate in patent filing fees, and access to the Startup India Seed Fund Scheme (SISFS).

### 2. Startup Haryana Policy Incentives
The Government of Haryana has built one of the most proactive state startup ecosystems in North India:
- **Seed Capital Assistance:** Up to ₹10 Lakhs in seed grants for qualified student ventures working out of recognized university incubators.
- **Patent Assistance:** Reimbursement of up to ₹25 Lakhs for international patents and ₹10 Lakhs for domestic patent grants.
- **Lease Rental Subsidies:** Concessional co-working desk allocation in designated tech parks and incubation hubs across Gurugram, Rohtak, and Panchkula.

---

## Application Pitfalls to Avoid

1. **Vague Commercialization Roadmap:** Evaluation committees want to see that you understand market viability, not just academic novelty.
2. **Missing In-Campus Proof-of-Concept:** Projects supported by formal E-Cell or department recommendation letters score significantly higher on credibility metrics.
3. **Improper Entity Structuring:** Ensure founder agreements and equity splits are documented cleanly before filing grant requests.

UIET E-Cell holds quarterly grant advisory clinics to guide student founders through paperwork, documentation, and mock evaluation interviews.
    `.trim(),
  },
  {
    id: 4,
    slug: 'angel-decks-10-slides-pre-seed-student-founders',
    title: 'Deconstructing the 10-Slide Pitch Deck for Pre-Seed Student Founders',
    excerpt: 'Learn the exact deck structure that catches the attention of angel investors, alumni syndicates, and seed funds without fluff.',
    category: 'Fundraising',
    publishedAt: 'August 30, 2026',
    readTime: '5 min read',
    coverImage: '/gallery/page_32.jpg',
    featured: false,
    tags: ['Pitch Deck', 'Fundraising', 'Angel Investors', 'Venture Capital'],
    author: {
      name: 'Priya Verma',
      role: 'Secretary, UIET E-Cell',
      avatar: '/gallery/page_6.jpg',
    },
    content: `
## The 3-Minute Rule

The average early-stage investor spends under **2 minutes and 40 seconds** evaluating an initial pitch deck. If your first three slides fail to answer *who you are, what acute problem you solve, and why now*, the remaining slides won't get read.

Here is the 10-slide architecture we recommend for student founders preparing for university demo days and angel meetings.

---

## The Essential 10 Slides

1. **Title & One-Liner:** Clear, memorable tag line explaining the category and customer.
2. **The Problem:** The specific pain point, quantified in terms of lost hours, wasted capital, or broken friction.
3. **The Solution:** Your product in 2 screenshots or a 3-step diagram. Keep technical jargon to an absolute minimum.
4. **Market Opportunity:** TAM, SAM, and SOM calculated bottom-up (not generic top-down industry reports).
5. **Product & Traction:** Current metrics — active pilot users, waitlist signups, retention, or revenue.
6. **Business Model:** How you make money, pricing tiers, and estimated unit economics.
7. **Competitive Advantage:** What is your unfair moat? Proprietary distribution, university exclusivity, or technical edge?
8. **Go-to-Market (GTM):** Your acquisition channels for the next 1,000 customers.
9. **The Team:** Why is your founding team uniquely positioned to win this space?
10. **The Ask:** How much capital are you raising, and what specific milestones will it fund over the next 12-18 months?

---

## Pro Tip for Student Founders

Do not hide the fact that you are students — turn it into your advantage! Students have unparalleled access to youthful consumer trends, cheap campus distribution networks, university laboratory infrastructure, and immense alumni goodwill. Use that authenticity to stand out.
    `.trim(),
  },
  {
    id: 5,
    slug: 'power-of-interdisciplinary-teams-hackathons',
    title: 'Why Interdisciplinary Teams Dominate Campus Ideathons & Hackathons',
    excerpt: 'When software developers team up with design and business students, projects evolve from simple repositories into commercially viable products.',
    category: 'Tech & AI',
    publishedAt: 'August 14, 2026',
    readTime: '4 min read',
    coverImage: '/gallery/page_43.jpg',
    featured: false,
    tags: ['Hackathons', 'Cross-functional', 'Design Thinking', 'Team Building'],
    author: {
      name: 'UIET Tech & Design Team',
      role: 'Core Working Committee',
      avatar: '/gallery/page_12.jpg',
    },
    content: `
## The Monoculture Problem

Walk into any typical college hackathon, and you'll see hundreds of computer science students grouped together. The resulting submissions are usually technically impressive APIs or scripts that solve problems nobody actually has, presented on unstyled terminal windows.

At UIET E-Cell, we systematically match programmers with students from management, applied arts, biotechnology, and commerce. The results speak for themselves.

---

## The 3 Pillars of a Winning Pod

- **The Hacker (Technical Execution):** Builds the core functional engine, API integrations, and ensures clean deployment.
- **The Hipster (User Experience & Design):** Crafts intuitive interfaces, visual clarity, brand identity, and frictionless user flows.
- **The Hustler (Distribution & Pitch):** Validates the business model, structures the presentation narrative, and answers tough jury inquiries on commercial viability.

When these three minds operate in sync, a 24-hour hackathon project stops looking like a classroom assignment and starts looking like a seed-stage company.
    `.trim(),
  },
];
