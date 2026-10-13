'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { RiLinkedinFill } from 'react-icons/ri';
import type { TeamMember } from '@/lib/types';

export default function TeamCard({
  member,
}: {
  member: TeamMember;
  bgColor?: string;
}) {
  const badgeText = member.year
    ? `${member.department ? `${member.department} · ` : ''}${member.year}`
    : member.department;

  const initials = (member.name || '')
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join('') || 'EC';

  return (
    <div className="reveal w-full">
      <div className="yc-card p-5 flex flex-col justify-between h-full group hover:border-zinc-400 dark:hover:border-zinc-600">
        <div>
          {/* Header Monogram & Department Badge */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-md bg-orange-50 dark:bg-orange-950/40 border border-[#FF6600]/30 flex items-center justify-center font-mono font-bold text-sm text-[#FF6600] group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
              {initials}
            </div>
            {member.department && (
              <span className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-mono font-medium py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700">
                {member.department}
              </span>
            )}
          </div>

          {/* Name & Role */}
          <h3 className="font-sans font-bold text-base text-zinc-950 dark:text-white mb-1 group-hover:text-[#FF6600] transition-colors">
            {member.name}
          </h3>

          <div className="text-xs font-mono font-medium text-[#FF6600] mb-1.5">
            {member.role}
          </div>

          {badgeText && (
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
              {badgeText}
            </p>
          )}

          {member.bio && (
            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
              {member.bio}
            </p>
          )}
        </div>

        {/* Social / Connect bar */}
        <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            {member.linkedin && member.linkedin !== '#' && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#FF6600] bg-zinc-100 dark:bg-zinc-800 transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <RiLinkedinFill size={14} />
              </a>
            )}

            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="w-7 h-7 rounded flex items-center justify-center text-zinc-500 hover:text-white hover:bg-[#FF6600] bg-zinc-100 dark:bg-zinc-800 transition-colors"
                aria-label={`Email ${member.name}`}
              >
                <Mail size={13} />
              </a>
            )}
          </div>

          <span className="text-[10px] font-mono text-zinc-400 uppercase">
            OPERATOR
          </span>
        </div>
      </div>
    </div>
  );
}
