'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { RiLinkedinFill } from 'react-icons/ri';
import { avatarUrl } from '@/lib/utils';
import type { TeamMember } from '@/lib/types';

export default function TeamCard({
  member,
}: {
  member: TeamMember;
  bgColor?: string;
}) {
  const photo = member.photo || avatarUrl(member.name);
  const badgeText = member.year
    ? `${member.department ? `${member.department} · ` : ''}${member.year}`
    : member.department;

  return (
    <div className="reveal w-full">
      <div className="yc-card p-5 flex flex-col justify-between h-full group hover:border-zinc-400 dark:hover:border-zinc-600">
        <div>
          {/* Avatar / Portrait */}
          <div className="relative w-full aspect-[4/4.5] rounded-md overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-4 border border-zinc-200 dark:border-zinc-800">
            <img
              src={photo}
              alt={member.name}
              className="w-full h-full object-cover object-[center_20%] transition-transform duration-300 group-hover:scale-102"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = avatarUrl(member.name);
              }}
            />
            {member.department && (
              <span className="absolute top-2.5 right-2.5 bg-white/95 dark:bg-zinc-900/95 text-zinc-800 dark:text-zinc-200 text-[10px] font-mono font-medium py-0.5 px-2 rounded border border-zinc-200 dark:border-zinc-700">
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
