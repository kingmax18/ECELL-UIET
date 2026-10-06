# UIET E-Cell

Official site for the Entrepreneurship Cell of UIET, Maharshi Dayanand University, Rohtak — built with Next.js, Tailwind CSS, Prisma, and Neon PostgreSQL.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Neon Serverless PostgreSQL** + **Prisma ORM** for persistent database storage (events, team, founders, sponsors, gallery, blogs, settings, applications)
- **Next.js REST API routes** (`/api/*`) for backend CRUD operations
- **GSAP** for scroll-driven animation

## Development

```bash
npm install
npx prisma generate
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Admin

The `/admin` route is a CMS-style dashboard for managing events, team members, gallery photos, partners, homepage stats, site settings, blogs, and membership applications. All changes persist directly to the Neon PostgreSQL database via Next.js API routes that `DataProvider` synchronizes in real time.

## Build

```bash
npm run build
```
