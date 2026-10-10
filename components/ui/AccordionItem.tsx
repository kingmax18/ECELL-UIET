'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <button
        type="button"
        className="w-full py-4 sm:py-5 flex items-center justify-between text-left gap-4 bg-transparent border-none cursor-pointer group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base sm:text-lg font-normal tracking-tight text-zinc-900 dark:text-white leading-snug group-hover:text-[#FF6600] transition-colors">
          {question}
        </span>
        <span
          className="flex items-center justify-center w-6 h-6 rounded shrink-0 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white text-base font-mono transition-colors"
          aria-hidden="true"
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-250 ease-out"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="pb-5 pt-0 text-xs sm:text-sm font-normal leading-relaxed text-zinc-600 dark:text-zinc-400">
          {answer}
        </div>
      </div>
    </div>
  );
}
