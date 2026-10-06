'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { supabase } from '@/lib/supabase';
import { PageHeader, Modal, adminInput, adminLabel, adminCard, adminTd, adminTh, EmptyState } from './ui';
import type { BlogPost } from '@/lib/types';
import type { Dispatch, SetStateAction } from 'react';
import {
  RiArticleLine,
  RiAddLine,
  RiSearchLine,
  RiEditLine,
  RiDeleteBinLine,
  RiExternalLinkLine,
  RiStarLine,
  RiStarFill,
  RiTimeLine,
  RiUserLine,
  RiFileCopyLine,
} from 'react-icons/ri';

const DEFAULT_CATEGORIES = [
  'All',
  'Startup Stories',
  'Guides & Playbooks',
  'Fundraising',
  'Policy & Ecosystem',
  'Tech & AI',
];

const PRESET_GALLERY_IMAGES = [
  '/gallery/page_3.jpg',
  '/gallery/page_1.jpg',
  '/gallery/page_2.jpg',
  '/gallery/page_4.jpg',
  '/gallery/page_6.jpg',
  '/gallery/page_10.jpg',
  '/gallery/page_12.jpg',
  '/gallery/page_14.jpg',
  '/gallery/page_20.jpg',
  '/gallery/page_25.jpg',
  '/gallery/page_43.jpg',
];

const BLANK_POST: Omit<BlogPost, 'id'> = {
  slug: '',
  title: '',
  excerpt: '',
  content: '',
  category: 'Startup Stories',
  publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  readTime: '5 min read',
  coverImage: '/gallery/page_3.jpg',
  featured: false,
  tags: ['Startup', 'UIET'],
  author: {
    name: 'Ananya Sharma',
    role: 'President, UIET E-Cell',
    avatar: '/gallery/page_10.jpg',
  },
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default function BlogsManager({
  blogs,
  setBlogs,
}: {
  blogs: BlogPost[];
  setBlogs?: Dispatch<SetStateAction<BlogPost[]>>;
}) {
  const { showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSqlNotice, setShowSqlNotice] = useState(false);

  // Form state
  const [form, setForm] = useState<Omit<BlogPost, 'id'>>(BLANK_POST);
  const [tagsInput, setTagsInput] = useState('');

  const openCreate = () => {
    setEditing(null);
    setForm({
      ...BLANK_POST,
      publishedAt: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    });
    setTagsInput(BLANK_POST.tags?.join(', ') || '');
    setModalOpen(true);
  };

  const openEdit = (post: BlogPost) => {
    setEditing(post);
    setForm({ ...post });
    setTagsInput(post.tags?.join(', ') || '');
    setModalOpen(true);
  };

  const handleTitleChange = (val: string) => {
    if (!editing) {
      setForm((prev) => ({
        ...prev,
        title: val,
        slug: slugify(val),
      }));
    } else {
      setForm((prev) => ({ ...prev, title: val }));
    }
  };

  const persistToSupabase = async (post: BlogPost, isUpsert: boolean) => {
    if (!supabase) return;
    try {
      const { error } = await supabase.from('blogs').upsert(post);
      if (error) {
        console.warn('[BlogsManager] Supabase sync notice:', error.message);
        if (error.code === 'PGRST205') {
          setShowSqlNotice(true);
        }
      }
    } catch (err) {
      console.warn('[BlogsManager] Supabase network notice:', err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title.trim()) {
      showToast('Please enter an article title', 'error');
      return;
    }

    const finalSlug = (form.slug || slugify(form.title)).trim();
    const finalTags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const postPayload: Omit<BlogPost, 'id'> = {
      ...form,
      slug: finalSlug,
      tags: finalTags,
    };

    if (editing) {
      const updatedPost: BlogPost = { ...postPayload, id: editing.id };
      const updatedList = blogs.map((b) => (b.id === editing.id ? updatedPost : b));
      if (setBlogs) setBlogs(updatedList);
      await persistToSupabase(updatedPost, true);
      showToast('Blog article updated successfully!', 'success');
    } else {
      const newPost: BlogPost = {
        ...postPayload,
        id: Date.now(),
      };
      const updatedList = [newPost, ...blogs];
      if (setBlogs) setBlogs(updatedList);
      await persistToSupabase(newPost, true);
      showToast('Blog article published successfully!', 'success');
    }

    setModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    const postToDelete = blogs.find((b) => b.id === id);
    if (!postToDelete) return;

    if (confirm(`Are you sure you want to delete "${postToDelete.title}"?`)) {
      const updated = blogs.filter((b) => b.id !== id);
      if (setBlogs) setBlogs(updated);
      if (supabase) {
        await supabase.from('blogs').delete().eq('id', id);
      }
      showToast('Blog article deleted', 'info');
    }
  };

  const toggleFeatured = async (post: BlogPost) => {
    const newFeatured = !post.featured;
    const updatedPost = { ...post, featured: newFeatured };
    const updated = blogs.map((b) => (b.id === post.id ? updatedPost : b));
    if (setBlogs) setBlogs(updated);
    await persistToSupabase(updatedPost, true);
    showToast(newFeatured ? 'Article set as Featured' : 'Removed from Featured', 'info');
  };

  const copySqlToClipboard = () => {
    const sql = `-- Run in Supabase SQL Editor:
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

alter table blogs enable row level security;
create policy "Public can view blogs" on blogs for select using (true);
create policy "Public can manage blogs" on blogs for all using (true);`;

    navigator.clipboard.writeText(sql);
    showToast('SQL schema copied to clipboard!', 'success');
  };

  // Filtered blogs
  const filtered = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCat =
        selectedCategory === 'All' ||
        b.category?.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.title?.toLowerCase().includes(q) ||
        b.excerpt?.toLowerCase().includes(q) ||
        b.author?.name?.toLowerCase().includes(q) ||
        (b.tags && b.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCat && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div>
      <PageHeader
        title="Blog & Articles Management"
        subtitle="Write, edit, and curate founder playbooks, student stories, and ecosystem guides."
        action={
          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#CBFF2E] hover:underline px-3 py-2 rounded-lg border border-[#CBFF2E]/30 bg-[#CBFF2E]/10"
            >
              <RiExternalLinkLine size={15} />
              <span>Live Blog Page</span>
            </Link>
            <Button onClick={openCreate} variant="primary" size="sm" arrow>
              Write New Blog
            </Button>
          </div>
        }
      />

      {/* SQL Notice Banner if table is not yet created in Supabase */}
      {showSqlNotice && (
        <div className="mb-6 p-4 rounded-card bg-[#863DFF]/15 border border-[#863DFF] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="font-bold text-sm text-[#CBFF2E] flex items-center gap-1.5">
              <span>Supabase Cloud Schema Notice</span>
            </div>
            <p className="text-xs text-[#DDE0FF]/80 mt-0.5">
              Articles are currently saved in local storage. To sync them across all visitors on every device, run the 1-click SQL schema in your Supabase SQL Editor.
            </p>
          </div>
          <button
            type="button"
            onClick={copySqlToClipboard}
            className="shrink-0 text-xs font-bold bg-[#CBFF2E] text-[#070A26] px-3.5 py-1.5 rounded-full hover:brightness-110 flex items-center gap-1 cursor-pointer"
          >
            <RiFileCopyLine size={13} />
            Copy Supabase SQL
          </button>
        </div>
      )}

      {/* Stats Quick Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <div className="bg-[#0B0F33] border border-[#1F2766] rounded-card p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#DDE0FF]/60 uppercase tracking-wider">Total Articles</div>
            <div className="text-xl font-extrabold text-white mt-0.5">{blogs.length}</div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#863DFF]/20 text-[#CBFF2E] flex items-center justify-center">
            <RiArticleLine size={18} />
          </div>
        </div>

        <div className="bg-[#0B0F33] border border-[#1F2766] rounded-card p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#DDE0FF]/60 uppercase tracking-wider">Featured</div>
            <div className="text-xl font-extrabold text-[#CBFF2E] mt-0.5">
              {blogs.filter((b) => b.featured).length}
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#CBFF2E]/20 text-[#CBFF2E] flex items-center justify-center">
            <RiStarFill size={18} />
          </div>
        </div>

        <div className="bg-[#0B0F33] border border-[#1F2766] rounded-card p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#DDE0FF]/60 uppercase tracking-wider">Categories</div>
            <div className="text-xl font-extrabold text-white mt-0.5">
              {new Set(blogs.map((b) => b.category)).size}
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#863DFF]/20 text-[#DDE0FF] flex items-center justify-center">
            <RiArticleLine size={18} />
          </div>
        </div>

        <div className="bg-[#0B0F33] border border-[#1F2766] rounded-card p-3.5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-[#DDE0FF]/60 uppercase tracking-wider">Filtered View</div>
            <div className="text-xl font-extrabold text-[#DDE0FF] mt-0.5">{filtered.length}</div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[#070A26] text-[#DDE0FF]/60 flex items-center justify-center">
            <RiSearchLine size={18} />
          </div>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mb-5">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by title, author, or tag…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0B0F33] border border-[#863DFF]/40 rounded-card pl-9 pr-4 py-2 text-sm text-white placeholder:text-[#DDE0FF]/40 focus:outline-hidden focus:border-[#CBFF2E] transition-all"
          />
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CBFF2E] text-base" />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#DDE0FF]/60 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {DEFAULT_CATEGORIES.map((cat) => {
            const isActive = selectedCategory.toLowerCase() === cat.toLowerCase();
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#CBFF2E] text-[#070A26] border-[#070A26] shadow-[2px_2px_0px_#863DFF]'
                    : 'bg-[#0B0F33] text-[#DDE0FF]/70 border-[#1F2766] hover:text-white hover:border-[#863DFF]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Blog Posts Table */}
      {filtered.length === 0 ? (
        <EmptyState text="No blog posts found matching your search or category." />
      ) : (
        <div className={`${adminCard} overflow-hidden shadow-lg`}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Post</th>
                  <th className={adminTh}>Category</th>
                  <th className={adminTh}>Author</th>
                  <th className={adminTh}>Read Time</th>
                  <th className={adminTh}>Featured</th>
                  <th className={`${adminTh} text-right`}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((post) => (
                  <tr key={post.id} className="hover:bg-[#070A26]/50 transition-colors">
                    {/* Post Title & Thumbnail */}
                    <td className={adminTd}>
                      <div className="flex items-center gap-3 max-w-[340px]">
                        <div className="relative w-14 h-11 rounded-lg overflow-hidden shrink-0 bg-[#070A26] border border-[#1F2766]">
                          {post.coverImage ? (
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-[#DDE0FF]/40">
                              No pic
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <Link
                            href={`/blog/${post.slug}`}
                            target="_blank"
                            className="font-bold text-sm text-white hover:text-[#CBFF2E] transition-colors line-clamp-1 block"
                            title={post.title}
                          >
                            {post.title}
                          </Link>
                          <div className="text-xs text-[#DDE0FF]/50 line-clamp-1 mt-0.5">
                            {post.excerpt || post.slug}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className={adminTd}>
                      <span className="inline-block bg-[#863DFF]/20 text-[#DDE0FF] border border-[#863DFF]/40 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                        {post.category}
                      </span>
                    </td>

                    {/* Author */}
                    <td className={adminTd}>
                      <div className="flex items-center gap-2">
                        {post.author?.avatar ? (
                          <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#863DFF]/40">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-[#863DFF]/30 flex items-center justify-center text-[10px] text-white">
                            <RiUserLine />
                          </div>
                        )}
                        <div className="text-xs">
                          <div className="font-semibold text-white whitespace-nowrap">
                            {post.author?.name || 'UIET Team'}
                          </div>
                          <div className="text-[10px] text-[#DDE0FF]/50 truncate max-w-[120px]">
                            {post.author?.role}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Read Time & Date */}
                    <td className={adminTd}>
                      <div className="text-xs text-white flex items-center gap-1">
                        <RiTimeLine className="text-[#CBFF2E]" />
                        <span>{post.readTime || '5 min read'}</span>
                      </div>
                      <div className="text-[11px] text-[#DDE0FF]/50 mt-0.5 whitespace-nowrap">
                        {post.publishedAt}
                      </div>
                    </td>

                    {/* Featured Star Toggle */}
                    <td className={adminTd}>
                      <button
                        type="button"
                        onClick={() => toggleFeatured(post)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          post.featured
                            ? 'bg-[#CBFF2E]/15 border-[#CBFF2E] text-[#CBFF2E]'
                            : 'bg-[#070A26] border-[#1F2766] text-[#DDE0FF]/40 hover:text-[#CBFF2E]'
                        }`}
                        title={post.featured ? 'Featured on Blog Hero (click to remove)' : 'Set as Featured'}
                      >
                        {post.featured ? <RiStarFill size={16} /> : <RiStarLine size={16} />}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className={`${adminTd} text-right`}>
                      <div className="inline-flex items-center gap-1.5 justify-end">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-[#070A26] border border-[#1F2766] text-[#DDE0FF] hover:text-[#CBFF2E] hover:border-[#CBFF2E] transition-colors"
                          title="View live post"
                        >
                          <RiExternalLinkLine size={15} />
                        </Link>
                        <button
                          type="button"
                          onClick={() => openEdit(post)}
                          className="p-1.5 rounded-lg bg-[#070A26] border border-[#1F2766] text-[#DDE0FF] hover:text-[#CBFF2E] hover:border-[#CBFF2E] transition-colors cursor-pointer"
                          title="Edit post"
                        >
                          <RiEditLine size={15} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(post.id)}
                          className="p-1.5 rounded-lg bg-[#070A26] border border-[#1F2766] text-[#DDE0FF] hover:text-red-400 hover:border-red-400 transition-colors cursor-pointer"
                          title="Delete post"
                        >
                          <RiDeleteBinLine size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Create / Edit Blog Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editing ? 'Edit Blog Article' : 'Write New Blog Article'}
        wide
      >
        <form onSubmit={handleSave} className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-1">
          {/* Title */}
          <div>
            <label className={adminLabel}>Article Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleTitleChange(e.target.value)}
              placeholder="e.g. How We Built UIET's Largest Student Pitch Showcase"
              className={adminInput}
              required
            />
          </div>

          {/* Slug */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={adminLabel}>URL Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })}
                placeholder="e.g. how-we-built-largest-student-pitch"
                className={adminInput}
                required
              />
              <span className="text-[11px] text-[#DDE0FF]/40 mt-1 block">
                Preview: /blog/{form.slug || 'your-slug'}
              </span>
            </div>

            {/* Category */}
            <div>
              <label className={adminLabel}>Category *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className={`${adminInput} cursor-pointer`}
              >
                {DEFAULT_CATEGORIES.filter((c) => c !== 'All').map((cat) => (
                  <option key={cat} value={cat} className="bg-[#070A26] text-white">
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className={adminLabel}>Short Excerpt / Summary *</label>
            <textarea
              rows={2}
              value={form.excerpt}
              onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
              placeholder="A brief 1-2 sentence hook for the article card..."
              className={adminInput}
              required
            />
          </div>

          {/* Cover Image & Presets */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className={adminLabel}>Cover Image URL *</label>
              <span className="text-[11px] text-[#CBFF2E]">Pick from campus gallery below</span>
            </div>
            <input
              type="text"
              value={form.coverImage}
              onChange={(e) => setForm({ ...form, coverImage: e.target.value })}
              placeholder="/gallery/page_3.jpg"
              className={adminInput}
              required
            />
            {/* Quick preset selector */}
            <div className="flex items-center gap-2 mt-2 overflow-x-auto pb-1 no-scrollbar">
              {PRESET_GALLERY_IMAGES.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setForm({ ...form, coverImage: img })}
                  className={`relative w-12 h-9 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    form.coverImage === img ? 'border-[#CBFF2E] scale-105' : 'border-[#1F2766] opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image src={img} alt="preset" fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Read Time & Published Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className={adminLabel}>Estimated Read Time</label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                placeholder="e.g. 5 min read"
                className={adminInput}
              />
            </div>
            <div>
              <label className={adminLabel}>Published Date</label>
              <input
                type="text"
                value={form.publishedAt}
                onChange={(e) => setForm({ ...form, publishedAt: e.target.value })}
                placeholder="e.g. October 12, 2026"
                className={adminInput}
              />
            </div>
          </div>

          {/* Author Details */}
          <div className="p-3.5 rounded-card bg-[#070A26] border border-[#1F2766]">
            <div className="text-xs font-bold text-[#CBFF2E] uppercase tracking-wider mb-2.5">
              Author Information
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className={adminLabel}>Author Name *</label>
                <input
                  type="text"
                  value={form.author.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      author: { ...form.author, name: e.target.value },
                    })
                  }
                  placeholder="e.g. Ananya Sharma"
                  className={adminInput}
                  required
                />
              </div>
              <div>
                <label className={adminLabel}>Author Role</label>
                <input
                  type="text"
                  value={form.author.role}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      author: { ...form.author, role: e.target.value },
                    })
                  }
                  placeholder="e.g. President, UIET E-Cell"
                  className={adminInput}
                />
              </div>
              <div>
                <label className={adminLabel}>Author Avatar</label>
                <input
                  type="text"
                  value={form.author.avatar || ''}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      author: { ...form.author, avatar: e.target.value },
                    })
                  }
                  placeholder="/gallery/page_10.jpg"
                  className={adminInput}
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className={adminLabel}>Tags (comma separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="e.g. Eureka Pitch, Startups, Student Founders"
              className={adminInput}
            />
          </div>

          {/* Featured Checkbox */}
          <div className="flex items-center gap-2 p-3 rounded-card bg-[#070A26] border border-[#1F2766]">
            <input
              type="checkbox"
              id="blog-featured"
              checked={form.featured}
              onChange={(e) => setForm({ ...form, featured: e.target.checked })}
              className="w-4 h-4 rounded text-[#CBFF2E] bg-[#0B0F33] border-[#863DFF] focus:ring-[#CBFF2E] cursor-pointer"
            />
            <label htmlFor="blog-featured" className="text-sm font-semibold text-white cursor-pointer select-none">
              Featured Article <span className="text-xs text-[#DDE0FF]/60 font-normal">(Hero showcase at top of blog)</span>
            </label>
          </div>

          {/* Markdown Content */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className={adminLabel}>Full Content (Markdown Supported) *</label>
              <span className="text-[11px] text-[#DDE0FF]/50">## Heading, **bold**, &gt; quote, - list</span>
            </div>
            <textarea
              rows={8}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              placeholder="## Article Headline&#10;&#10;Write the full body of the article here. Supports markdown syntax for subheadings, lists, code, and quotes."
              className={`${adminInput} font-mono text-xs`}
              required
            />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#1F2766]">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="text-xs font-semibold text-[#DDE0FF]/70 hover:text-white px-4 py-2 cursor-pointer"
            >
              Cancel
            </button>
            <Button type="submit" variant="primary" size="sm">
              {editing ? 'Update Article' : 'Publish Article'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
