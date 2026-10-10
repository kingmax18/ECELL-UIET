'use client';

import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface SocialLink {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  href: string;
}

export interface ActionButtonProps {
  text: string;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export interface GlassmorphismProfileCardProps {
  avatarUrl?: string;
  name: string;
  title?: string;
  badge?: string;
  bio?: string;
  socialLinks?: SocialLink[];
  actionButton?: ActionButtonProps;
  className?: string;
}

export default function GlassmorphismProfileCard({
  avatarUrl,
  name,
  title,
  badge,
  bio,
  socialLinks = [],
  actionButton,
  className = '',
}: GlassmorphismProfileCardProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const fallbackAvatar = `https://placehold.co/96x96/FF6600/white?text=${encodeURIComponent(
    name ? name.charAt(0).toUpperCase() : 'U'
  )}`;

  return (
    <div className={`relative w-full max-w-sm group ${className}`}>
      {/* Outer ambient subtle glow */}
      <div className="absolute inset-0 rounded-xl -z-10 transition-all duration-300 blur-xl opacity-20 group-hover:opacity-40 bg-gradient-to-tr from-[#FF6600]/20 via-orange-400/10 to-[#FF6600]/20" />

      {/* Clean card surface with hairline border */}
      <div className="relative flex flex-col items-center p-6 sm:p-7 rounded-xl border transition-all duration-300 bg-white dark:bg-[#14161C] border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 shadow-sm hover:-translate-y-1">
        {/* Avatar */}
        <div className="w-24 h-24 mb-4 rounded-full p-1 border border-zinc-200 dark:border-zinc-700 overflow-hidden bg-zinc-50 dark:bg-zinc-800 transition-transform duration-300 group-hover:scale-105">
          <img
            src={avatarUrl || fallbackAvatar}
            alt={`${name}'s Avatar`}
            className="w-full h-full rounded-full object-cover object-[center_20%]"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackAvatar;
            }}
          />
        </div>

        {/* Name & Title */}
        <h3 className="font-sans text-lg font-bold tracking-tight text-zinc-900 dark:text-white text-center">
          {name}
        </h3>

        {title && (
          <p className="mt-1 text-xs font-mono font-medium text-[#FF6600] text-center">
            {title}
          </p>
        )}

        {badge && (
          <span className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono tracking-wide uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
            {badge}
          </span>
        )}

        {bio && (
          <p className="mt-3 text-center text-xs leading-relaxed text-zinc-600 dark:text-zinc-400 line-clamp-3">
            {bio}
          </p>
        )}

        {/* Divider */}
        <div className="w-3/4 h-px my-5 bg-zinc-100 dark:bg-zinc-800" />

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-2.5">
            {socialLinks.map((item) => (
              <SocialButton
                key={item.id}
                item={item}
                setHoveredItem={setHoveredItem}
                hoveredItem={hoveredItem}
              />
            ))}
          </div>
        )}

        {/* Action Button */}
        {actionButton && <ActionButton action={actionButton} />}
      </div>
    </div>
  );
}

// --- Sub-components ---

function SocialButton({
  item,
  setHoveredItem,
  hoveredItem,
}: {
  item: SocialLink;
  setHoveredItem: (id: string | null) => void;
  hoveredItem: string | null;
}) {
  const isExternal = item.href.startsWith('http');

  return (
    <div className="relative">
      <a
        href={item.href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="relative flex items-center justify-center w-9 h-9 rounded-md transition-all duration-200 group/btn overflow-hidden bg-zinc-100 hover:bg-[#FF6600] text-zinc-600 hover:text-white dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-[#FF6600] border border-zinc-200 dark:border-zinc-700 hover:border-[#FF6600]"
        onMouseEnter={() => setHoveredItem(item.id)}
        onMouseLeave={() => setHoveredItem(null)}
        aria-label={item.label}
      >
        <item.icon
          size={16}
          className="transition-all duration-200 text-current"
        />
      </a>
      <Tooltip item={item} hoveredItem={hoveredItem} />
    </div>
  );
}

function ActionButton({ action }: { action: ActionButtonProps }) {
  const isExternal = action.href.startsWith('http');

  return (
    <a
      href={action.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={action.onClick}
      className="flex items-center gap-1.5 px-4 py-2 mt-4 rounded-md font-medium text-xs transition-colors bg-[#FF6600] hover:bg-[#E65C00] text-white shadow-2xs"
    >
      <span>{action.text}</span>
      <ArrowUpRight size={13} />
    </a>
  );
}

function Tooltip({
  item,
  hoveredItem,
}: {
  item: SocialLink;
  hoveredItem: string | null;
}) {
  const isHovered = hoveredItem === item.id;

  return (
    <div
      role="tooltip"
      className={`absolute -top-8 left-1/2 -translate-x-1/2 z-50 px-2 py-0.5 rounded text-[10px] font-mono whitespace-nowrap transition-all duration-200 pointer-events-none bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 ${
        isHovered
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-1 scale-95'
      }`}
    >
      {item.label}
    </div>
  );
}
