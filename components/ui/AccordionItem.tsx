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
    <div className="bg-[#F4F6FF] border-2 border-[#0047FF] rounded-2xl overflow-hidden mb-4 shadow-[4px_4px_0px_#0A0E1A] transition-all">
      <button
        type="button"
        className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 bg-transparent border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-sans text-base sm:text-lg font-extrabold tracking-tight text-[#0A0E1A] leading-snug">
          {question}
        </span>
        <span
          className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 font-black text-sm transition-all shadow-[1.5px_1.5px_0px_#0A0E1A] ${isOpen
              ? 'bg-[#CBFF2E] text-[#0A0E1A] border-2 border-[#0A0E1A]'
              : 'bg-white text-[#0047FF] border-2 border-[#0047FF]'
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
        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm font-medium leading-[1.65] text-[#3A4A7A] border-t-2 border-[#C0CCFF]">
          {answer}
        </div>
      </div>
    </div>
  );
}
