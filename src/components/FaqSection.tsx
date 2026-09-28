import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { ChevronDown, Phone, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="vaprosi" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 lg:mb-10">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
            Въпроси и отговори
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
            Често задавани въпроси
          </h2>
          <p className="text-[#50554E] text-base sm:text-lg leading-relaxed font-normal">
            Кратки отговори на най-честите въпроси. Отворете въпроса, който Ви интересува.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E8E6DF] border-t border-b border-[#E8E6DF] mb-10">
          {faqData.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div key={item.id} className="py-4 sm:py-5">
                <button
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-1 text-lg sm:text-xl font-bold text-[#1C221E] hover:text-[#6A4B32] transition-colors flex items-center justify-between gap-6 cursor-pointer"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'border-[#D3B895] bg-[#EFE5D8] text-[#6A4B32]' : 'border-[#E4D7C8] bg-[#FBF7F1] text-[#8C6A4A]'}`}>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-3 text-base text-[#525750] leading-relaxed pr-6 sm:pr-12">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout Card */}
        <div className="p-6 sm:p-7 rounded-lg bg-[#FAF9F6] border border-[#E4E2D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <HelpCircle className="w-5 h-5 text-[#6A4B32] shrink-0" />
            <span className="text-sm sm:text-base text-[#484D45]">
              Имате ли друг конкретен въпрос? Можете да ни потърсите денонощно:
            </span>
          </div>

          <a
            href="tel:0878800157"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[#6A4B32] text-white font-bold text-sm hover:bg-[#4F3725] transition-colors tabular-nums shrink-0 shadow-2xs"
          >
            <Phone className="w-4 h-4" />
            <span>0878 800 157</span>
          </a>
        </div>

      </div>
    </section>
  );
};
