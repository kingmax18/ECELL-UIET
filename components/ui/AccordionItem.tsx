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
    <div className="bg-[#0B0F33] border-2 border-[#863DFF] rounded-2xl overflow-hidden mb-4 shadow-[4px_4px_0px_#040619] transition-all">
      <button
        type="button"
        className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-white leading-snug">
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-black text-sm transition-all shadow-[1.5px_1.5px_0px_#040619] ${
            isOpen
              ? 'bg-[#CBFF2E] text-[#070A26] border-2 border-[#070A26]'
              : 'bg-[#101648] text-[#DDE0FF] border-2 border-[#863DFF]'
          }`}
          aria-hidden="true"
        >
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300"
        style={{ maxHeight: isOpen ? '400px' : '0' }}
      >
        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-medium leading-[1.65] text-[#DDE0FF]/85 border-t-2 border-[#1F2766]">
          {answer}
        </div>
      </div>
    </div>
  );
}
