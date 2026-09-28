import React from 'react';
import { Phone, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Свързвате се с нас',
      description: 'Позвънете на 0878 800 157 — ще изясним най-належащото.'
    },
    {
      num: '02',
      title: 'Уточняваме нуждите',
      description: 'Уточняваме мястото, документите и желанието на семейството.'
    },
    {
      num: '03',
      title: 'Обясняваме стъпките',
      description: 'Получавате ясен план, срокове и предварителна сметка.'
    },
    {
      num: '04',
      title: 'Поемаме организацията',
      description: 'Координираме транспорта, документите, залата и ритуала.'
    }
  ];

  return (
    <section id="organizaciya" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
            Ясна и предвидима последователност
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
            До Вас на всяка стъпка.
          </h2>
          <p className="text-[#50554E] text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal">
            Четири ясни етапа — от първия разговор до спокойното провеждане на ритуала:
          </p>
        </div>

        {/* 4 Steps in a clean editorial layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-[#E8E6DF] pt-6 mb-10">
          {steps.map((step) => (
            <div key={step.num} className="relative z-10 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between pb-3 mb-4 border-b border-[#E8E6DF]">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#55695E]">
                    Етап {step.num}
                  </span>
                  <span className="text-3xl font-light text-[#34483E]/50 tabular-nums">
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C221E] mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-[#525750] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="p-5 sm:p-6 rounded-lg bg-[#FAF9F6] border border-[#E4E2D8] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#EAECE8] flex items-center justify-center text-[#34483E] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="block text-base text-[#1C221E] font-semibold mb-0.5">
                На разположение 24/7
              </strong>
              <p className="text-xs sm:text-sm text-[#666B63]">
                Дежурният екип на Траурна агенция Нанси отговаря веднага в София.
              </p>
            </div>
          </div>

          <a
            href="tel:0878800157"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#34483E] hover:bg-[#283830] text-white text-sm font-bold tabular-nums shrink-0 transition-colors shadow-2xs"
          >
            <Phone className="w-4 h-4" />
            <span>0878 800 157</span>
          </a>
        </div>

      </div>
    </section>
  );
};
