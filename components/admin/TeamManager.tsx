'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { useToast } from '@/context/ToastProvider';
import { departments } from '@/data/team';
import { PageHeader, Modal, EmptyState, FilterPills, adminInput, adminLabel, adminCard, adminTd, adminTh } from './ui';

import { adminFetch } from '@/lib/adminApi';

export interface AdminMember {
  id: number;
  name: string;
  role: string;
  department: string;
  year?: string;
  linkedin?: string;
  email?: string;
  photo?: string;
  order?: number;
}

const BLANK: Omit<AdminMember, 'id'> = {
  name: '',
  role: '',
  department: 'Leadership',
  year: '3rd Year, B.Tech CSE',
  linkedin: '',
  email: '',
  photo: '',
  order: 99,
};

export default function TeamManager({
  team,
  setTeam,
}: {
  team: AdminMember[];
  setTeam?: (t: AdminMember[]) => void;
}) {
  const { showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<AdminMember | null>(null);
  const [form, setForm] = useState<Omit<AdminMember, 'id'>>(BLANK);
  const [deptFilter, setDeptFilter] = useState('All');

  const openCreate = () => {
    setEditing(null);
    setForm(BLANK);
    setModalOpen(true);
  };

  const openEdit = (m: AdminMember) => {
    setEditing(m);
    setForm({ ...BLANK, ...m });
    setModalOpen(true);
  };

  const persist = async (row: AdminMember, isUpdate: boolean, tempId?: number) => {
    try {
      const res = isUpdate
        ? await adminFetch(`/api/team/${row.id}`, {
            method: 'PUT',
            body: JSON.stringify(row),
          })
        : await adminFetch('/api/team', {
            method: 'POST',
            body: JSON.stringify(row),
          });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        console.warn('[Admin] Team API persist warning:', data?.error);
        showToast(data?.error || 'Database sync warning: saved locally', 'info');
      } else if (!isUpdate && data?.data?.id && tempId && setTeam) {
        setTeam(team.map((m) => (m.id === tempId ? { ...m, id: data.data.id } : m)));
      }
    } catch (e) {
      console.warn('[Admin] Team API persist warning:', e);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.role) {
      showToast('Please enter name and role', 'error');
      return;
    }

    if (editing) {
      if (setTeam) setTeam(team.map((m) => (m.id === editing.id ? { ...m, ...form } : m)));
      persist({ ...editing, ...form }, true);
      showToast('Member updated and synced to database!', 'success');
    } else {
      const tempId = Date.now();
      const created: AdminMember = { ...form, id: tempId };
      if (setTeam) setTeam([...team, created]);
      persist(created, false, tempId);
      showToast('Team member added and synced to database!', 'success');
    }
    setModalOpen(false);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Remove this team member?')) {
      if (setTeam) setTeam(team.filter((m) => m.id !== id));
      try {
        await adminFetch(`/api/team/${id}`, { method: 'DELETE' });
      } catch (err) {
        console.warn('[Admin] Team API delete warning:', err);
      }
      showToast('Member removed', 'info');
    }
  };

  const filtered = deptFilter === 'All' ? team : team.filter((m) => m.department === deptFilter);

  return (
    <div>
      <PageHeader
        title="Team Roster Management"
        subtitle="Manage core executive members, departments, and roles."
        action={
          <Button onClick={openCreate} variant="primary" size="sm" arrow>
            Add Member
          </Button>
        }
      />

      {/* Department filter */}
      <div className="mb-4">
        <FilterPills options={['All', ...departments]} active={deptFilter} onChange={setDeptFilter} />
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? 'Edit Member' : 'Add Team Member'} wide>
        <form onSubmit={handleSave} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Full Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Ananya Sharma"
                className={adminInput}
                required
              />
            </div>
            <div>
              <label className={adminLabel}>Role *</label>
              <input
                type="text"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                placeholder="e.g. President"
                className={adminInput}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Department</label>
              <select
                value={form.department}
                onChange={(e) => setForm({ ...form, department: e.target.value })}
                className={adminInput}
              >
                {departments.map((d: string) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={adminLabel}>Year</label>
              <input
                type="text"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
                placeholder="e.g. 3rd Year, B.Tech CSE"
                className={adminInput}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>Photo URL (optional)</label>
              <input
                type="text"
                value={form.photo || ''}
                onChange={(e) => setForm({ ...form, photo: e.target.value })}
                placeholder="https://… or /gallery/photo.jpg"
                className={adminInput}
              />
            </div>
            <div>
              <label className={adminLabel}>Display Order (Priority, 1 = top)</label>
              <input
                type="number"
                min={1}
                max={99}
                value={form.order ?? 99}
                onChange={(e) => setForm({ ...form, order: parseInt(e.target.value, 10) || 99 })}
                className={adminInput}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className={adminLabel}>LinkedIn URL</label>
              <input
                type="url"
                value={form.linkedin}
                onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                placeholder="https://linkedin.com/in/…"
                className={adminInput}
              />
            </div>
            <div>
              <label className={adminLabel}>Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="member@ecell.in"
                className={adminInput}
              />
            </div>
          </div>

          <Button type="submit" variant="primary" size="md" arrow className="justify-center">
            {editing ? 'Save Changes' : 'Add Member'}
          </Button>
        </form>
      </Modal>

      <div className={adminCard}>
        {filtered.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className={adminTh}>Member</th>
                  <th className={adminTh}>Role</th>
                  <th className={adminTh}>Department</th>
                  <th className={adminTh}>Year</th>
                  <th className={adminTh}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((m) => (
                  <tr key={m.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className={adminTd}>
                      <div className="flex items-center gap-3">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={m.photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(m.name)}&background=181C26&color=ff6600&size=64`}
                          alt={m.name}
                          className="w-9 h-9 rounded-full object-cover bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                        />
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{m.name}</span>
                      </div>
                    </td>
                    <td className={adminTd}>
                      <span className="text-xs text-zinc-700 dark:text-zinc-300">{m.role}</span>
                    </td>
                    <td className={adminTd}>
                      <span className="inline-block bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-xs font-medium px-2.5 py-0.5 rounded-md">
                        {m.department}
                      </span>
                    </td>
                    <td className={adminTd}>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">{m.year || '—'}</span>
                    </td>
                    <td className={adminTd}>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => openEdit(m)}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(m.id)}
                          className="px-2.5 py-1 text-xs font-semibold rounded-md bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 transition-colors cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-5">
            <EmptyState text={`No members in "${deptFilter}".`} />
          </div>
        )}
      </div>
    </div>
  );
}
