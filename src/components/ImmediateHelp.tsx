import React, { useState } from 'react';
import { Phone, CheckCircle2, FileText, Home, Building2, ArrowRight, Clock, AlertCircle } from 'lucide-react';

export const ImmediateHelp: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<'home' | 'hospital' | 'docs'>('home');

  return (
    <section id="kak-pomagame" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous breathing space */}
        <div className="max-w-3xl mb-10 lg:mb-12">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
            Първи стъпки при загуба
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-5 leading-[1.2]">
            Какво да направите първо?
          </h2>
          <p className="text-[#50554E] text-base sm:text-lg lg:text-[19px] leading-relaxed font-normal">
            Три спокойни стъпки, с които да се ориентирате веднага. Дежурният ни екип е на разположение 24/7.
          </p>
        </div>

        {/* 3 Step Cards - Spacious & Clear Scanning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 mb-8 sm:mb-12 lg:mb-14">
          {/* Step 01 */}
          <div className="bg-[#FAF9F6] border border-[#E4E2D8] rounded-lg p-5 sm:p-7 flex flex-col justify-between hover:border-[#34483E]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#55695E]">
                  Стъпка 01
                </span>
                <span className="text-2xl font-bold text-[#34483E]/40 tabular-nums">01</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-3 leading-snug">
                Свържете се с нас
              </h3>
              <p className="text-sm sm:text-base text-[#525750] leading-relaxed mb-6 sm:mb-8">
                Позвънете ни — ще Ви изслушаме спокойно и ще обясним най-важните следващи действия.
              </p>
            </div>
            <div className="pt-4 sm:pt-5 border-t border-[#E8E6DF]">
              <a
                href="tel:0878800157"
                className="inline-flex items-center gap-2.5 text-base font-bold text-[#34483E] hover:text-[#1C221E] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>0878 800 157 (24/7)</span>
              </a>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-[#FAF9F6] border border-[#E4E2D8] rounded-lg p-5 sm:p-7 flex flex-col justify-between hover:border-[#34483E]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#55695E]">
                  Стъпка 02
                </span>
                <span className="text-2xl font-bold text-[#34483E]/40 tabular-nums">02</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-3 leading-snug">
                Уточнете ситуацията
              </h3>
              <p className="text-sm sm:text-base text-[#525750] leading-relaxed mb-6 sm:mb-8">
                Кажете ни къде се намира покойникът и дали вече има медицинско съобщение за смърт.
              </p>
            </div>
            <div className="pt-4 sm:pt-5 border-t border-[#E8E6DF] text-xs text-[#6E746C] font-medium flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#55695E]" />
              <span>Без прибързани или необмислени разходи</span>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-[#FAF9F6] border border-[#E4E2D8] rounded-lg p-5 sm:p-7 flex flex-col justify-between hover:border-[#34483E]/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-[#55695E]">
                  Стъпка 03
                </span>
                <span className="text-2xl font-bold text-[#34483E]/40 tabular-nums">03</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-3 leading-snug">
                Ние поемаме грижата
              </h3>
              <p className="text-sm sm:text-base text-[#525750] leading-relaxed mb-6 sm:mb-8">
                Поемаме транспорта, документите и организацията според Вашия случай.
              </p>
            </div>
            <div className="pt-4 sm:pt-5 border-t border-[#E8E6DF] text-xs text-[#6E746C] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#34483E]" />
              <span>Пълна документална и обредна подкрепа</span>
            </div>
          </div>
        </div>

        {/* Practical Situation Guidance Panel */}
        <div className="bg-[#FAF9F6] border border-[#E4E2D8] rounded-lg p-5 sm:p-8 lg:p-9">
          <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-5 border-b border-[#E8E6DF] pb-4 sm:pb-5">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C221E] mb-1">
                Конкретни указания според случая
              </h3>
              <p className="text-sm text-[#666B63]">
                Изберете ситуацията, за да видите само нужните стъпки:
              </p>
            </div>

            {/* Scenario Switcher Tabs */}
            <div className="grid grid-cols-3 md:flex p-1 bg-[#EAE8E1] rounded-md gap-1 shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setActiveScenario('home')}
                className={`flex items-center justify-center gap-1 px-1.5 sm:px-2 py-2 text-[11px] sm:text-sm font-semibold rounded transition-all cursor-pointer min-w-0 ${
                  activeScenario === 'home'
                    ? 'bg-white text-[#1C221E] shadow-2xs'
                    : 'text-[#61665E] hover:text-[#1C221E]'
                }`}
              >
                <Home className="w-3.5 h-3.5 shrink-0" />
                <span>В дома</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveScenario('hospital')}
                className={`flex items-center justify-center gap-1 px-1.5 sm:px-2 py-2 text-[11px] sm:text-sm font-semibold rounded transition-all cursor-pointer min-w-0 ${
                  activeScenario === 'hospital'
                    ? 'bg-white text-[#1C221E] shadow-2xs'
                    : 'text-[#61665E] hover:text-[#1C221E]'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 shrink-0" />
                <span>В болница</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveScenario('docs')}
                className={`flex items-center justify-center gap-1 px-1.5 sm:px-2 py-2 text-[11px] sm:text-sm font-semibold rounded transition-all cursor-pointer min-w-0 ${
                  activeScenario === 'docs'
                    ? 'bg-white text-[#1C221E] shadow-2xs'
                    : 'text-[#61665E] hover:text-[#1C221E]'
                }`}
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span>Документи</span>
              </button>
            </div>
          </div>

          {/* Scenario Details */}
          {activeScenario === 'home' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 text-sm sm:text-base text-[#383C35]">
              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E4ECE7] text-[#34483E] font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  1
                </span>
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-1">Извикайте лекар за констатация:</strong>
                  Свържете се с личния лекар или позвънете на 112. Необходимо е медицинско лице да издаде „Съобщение за смърт“.
                </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E4ECE7] text-[#34483E] font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-1">Не местете и не обличайте тялото:</strong>
                  До идването на лекаря не местете и не обличайте покойника.
                </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E4ECE7] text-[#34483E] font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  3
                </span>
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-1">Позвънете на агенцията на 0878 800 157:</strong>
                  След документа се обадете на 0878 800 157. Ще организираме транспорта и следващите стъпки.
                </p>
                </div>
              </div>
            </div>
          )}

          {activeScenario === 'hospital' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 text-sm sm:text-base text-[#383C35]">
              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E4ECE7] text-[#34483E] font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  1
                </span>
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-1">Издаване на съобщение за смърт от болницата:</strong>
                  Болницата издава документа чрез лекуващия лекар или съответното отделение.
                </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#E4ECE7] text-[#34483E] font-bold text-xs flex items-center justify-center shrink-0 mt-1">
                  2
                </span>
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-1">Освобождаване и специализиран транспорт:</strong>
                  Обадете ни се на <strong>0878 800 157</strong>. Ще съдействаме за документите и транспорта.
                </p>
                </div>
              </div>
            </div>
          )}

          {activeScenario === 'docs' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 text-sm sm:text-base text-[#383C35]">
              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34483E] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-0.5">Медицинско съобщение за смърт:</strong>
                  Оригинал с печат и подпис на лекаря.
                </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34483E] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-0.5">Лична карта (или паспорт) на покойника:</strong>
                  Предава се в районната администрация за издаване на Акт за смърт.
                </p>
                </div>
              </div>

              <div className="rounded-lg border border-[#E8E6DF] bg-white/60 p-4">
                <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#34483E] shrink-0 mt-1" />
                <p className="leading-relaxed">
                  <strong className="text-[#1C221E] block mb-0.5">При погребение в съществуващо семейно гробно място:</strong>
                  Подгответе квитанция за гробното място и удостоверение за наследници.
                </p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
