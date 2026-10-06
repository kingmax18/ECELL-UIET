import { createClient } from '@supabase/supabase-js';
import { blogs } from '../data/blogs.ts';

const url = 'https://zdprtkhbzjpxbslswsms.supabase.co';
const key = 'sb_publishable_gDxu1q1HZEgXgvc3bbhKrA_cIHyk7QA';
const sb = createClient(url, key);

async function run() {
  console.log(`Attempting to seed ${blogs.length} blogs to Supabase...`);
  const { data, error } = await sb.from('blogs').upsert(blogs);
  if (error) {
    console.error('Error seeding blogs:', error);
  } else {
    console.log('Successfully seeded blogs to Supabase!');
  }
}

run();
