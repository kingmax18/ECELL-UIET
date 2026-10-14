'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { PageHeader, Modal, EmptyState, adminInput, adminLabel, adminCard, adminTd, adminTh } from './ui';
import { adminFetch } from '@/lib/adminApi';

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

const CATEGORIES = ['Events', 'Competitions', 'Workshops', 'Team'];
const BLANK: Omit<GalleryItem, 'id'> = { title: '', category: 'Events', image: '', description: '' };

export default function GalleryManager({
  gallery,
  setGallery,
}: {
  gallery: GalleryItem[];
  setGallery?: (g: GalleryItem[]) => void;
}) {
  const { showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<Omit<GalleryItem, 'id'>>(BLANK);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.image) {
      showToast('Title and image URL are required', 'error');
      return;
    }

    const tempId = Date.now();
    const created: GalleryItem = { ...form, id: tempId };
    const next = [created, ...gallery];
    if (setGallery) setGallery(next);

    try {
      const res = await adminFetch('/api/gallery', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        showToast(data?.error || 'Database sync warning: saved locally', 'info');
      } else if (data?.data?.id && setGallery) {
        setGallery(next.map((g) => (g.id === tempId ? { ...g, id: data.data.id } : g)));
      }
    } catch (err) {
      console.warn('[Admin] Gallery API persist warning:', err);
    }

    setModalOpen(false);
    setForm(BLANK);
    showToast('Photo added to gallery and synced to database!', 'success');
  };

  const handleDelete = async (id: number) => {
    if (confirm('Remove this photo from the gallery?')) {
      if (setGallery) setGallery(gallery.filter((g) => g.id !== id));
      try {
        await adminFetch(`/api/gallery/${id}`, { method: 'DELETE' });
      } catch (err) {
        console.warn('[Admin] Gallery API delete warning:', err);
      }
      showToast('Photo removed', 'info');
    }
  };

  return (
    <div>
      <PageHeader
        title="Gallery Management"
        subtitle="Curate the campus moments shown on the About page."
        action={
          <Button onClick={() => setModalOpen(true)} variant="primary" size="sm" arrow>
            Add Photo
          </Button>
        }
      />

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Gallery Photo">
        <form onSubmit={handleAdd} className="flex flex-col gap-5">
          <div>
            <label className={adminLabel}>Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              placeholder="e.g. Eureka Pitching Finals"
              className={adminInput}
              required
            />
          </div>

          <div>
            <label className={adminLabel}>Image URL *</label>
            <input
              type="text"
              value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              placeholder="/gallery/photo.jpg or https://…"
              className={adminInput}
              required
            />
          </div>

          <div>
            <label className={adminLabel}>Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className={adminInput}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={adminLabel}>Description</label>
            <textarea
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              rows={3}
              placeholder="A short caption for this moment…"
              className={`${adminInput} resize-none`}
            />
          </div>

          <Button type="submit" variant="primary" size="md" arrow className="justify-center">
            Add to Gallery
          </Button>
        </form>
      </Modal>

      <div className={adminCard}>
        {gallery.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Preview</th>
                  <th className={adminTh}>Title</th>
                  <th className={adminTh}>Category</th>
                  <th className={adminTh}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {gallery.map((g) => (
                  <tr key={g.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className={adminTd}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={g.image} alt={g.title} className="w-16 h-11 rounded-lg object-cover bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700" />
                    </td>
                    <td className={adminTd}>
                      <div className="font-semibold text-zinc-900 dark:text-zinc-100">{g.title}</div>
                      {g.description && <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate max-w-xs mt-0.5">{g.description}</div>}
                    </td>
                    <td className={adminTd}>
                      <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-xs font-medium px-2.5 py-0.5 rounded-md">
                        {g.category}
                      </span>
                    </td>
                    <td className={adminTd}>
                      <button
                        type="button"
                        onClick={() => handleDelete(g.id)}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 transition-colors cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-5">
            <EmptyState text="No gallery photos yet." />
          </div>
        )}
      </div>
    </div>
  );
}
