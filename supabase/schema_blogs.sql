-- Run this SQL in your Supabase SQL Editor to create the blogs table

create table if not exists blogs (
  id bigint primary key,
  slug text not null,
  title text not null,
  excerpt text,
  content text,
  author jsonb,
  category text default 'Startup Stories',
  "publishedAt" text,
  "readTime" text default '5 min read',
  "coverImage" text,
  featured boolean default false,
  tags text[],
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
alter table blogs enable row level security;

-- Allow public read access
create policy "Public can view blogs" on blogs for select using (true);

-- Allow public/admin insert, update, and delete
create policy "Public can manage blogs" on blogs for all using (true);
