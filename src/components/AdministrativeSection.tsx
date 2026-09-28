import React from 'react';
import { FileCheck, ShieldAlert, Clock, Building, ArrowRight, Phone } from 'lucide-react';

export const AdministrativeSection: React.FC = () => {
  return (
    <section id="dokumenti" className="py-16 sm:py-20 lg:py-24 bg-[#F5F4F0] border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Administrative Solutions */}
          <div className="lg:col-span-7">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
              Документална подкрепа
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-5 leading-[1.2] max-w-2xl">
              По-малко грижи в <span className="whitespace-nowrap">труден момент.</span>
            </h2>
            <p className="text-base sm:text-lg text-[#50554E] leading-relaxed mb-8 font-normal">
              Съдействаме с основните документи, срокове и координация с институциите в София.
            </p>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 bg-[#FFFCF8] border border-[#DDDCD6] rounded-lg flex items-start gap-4 shadow-2xs">
                <span className="w-10 h-10 rounded-md bg-[#EFE5D8] flex items-center justify-center text-[#6A4B32] shrink-0 mt-0.5">
                  <FileCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-1.5">
                    Издаване на препис-извлечение от Акт за смърт
                  </h3>
                  <p className="text-sm text-[#525750] leading-relaxed">
                    Помагаме с подаването на медицинското съобщение в районната администрация.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FFFCF8] border border-[#DDDCD6] rounded-lg flex items-start gap-4 shadow-2xs">
                <span className="w-10 h-10 rounded-md bg-[#EFE5D8] flex items-center justify-center text-[#6A4B32] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-1.5">
                    Съгласуване на часове и гробищни графици
                  </h3>
                  <p className="text-sm text-[#525750] leading-relaxed">
                    Координираме часове за опело, граждански ритуал и гробищен парк.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5 bg-[#FFFCF8] border border-[#DDDCD6] rounded-lg flex items-start gap-4 shadow-2xs">
                <span className="w-10 h-10 rounded-md bg-[#EFE5D8] flex items-center justify-center text-[#6A4B32] shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-1.5">
                    Проверка на права за гробно място в София
                  </h3>
                  <p className="text-sm text-[#525750] leading-relaxed">
                    Проверяваме необходимите данни и документи за съществуващо гробно място.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Guidance Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-lg border border-[#DDDCD6] p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-bold text-[#6A4B32] uppercase tracking-wider mb-6 pb-3 border-b border-[#EAE8E2]">
                <ShieldAlert className="w-4 h-4 text-[#6A4B32]" />
                <span>Важно за семействата</span>
              </div>
              <p className="text-sm text-[#50554E] leading-relaxed mb-6">
                Даваме практични насоки според случая и действащите изисквания на общината.
              </p>
              
              <div className="border-t border-[#EAE8E2] pt-6 space-y-4">
                <strong className="block text-sm font-bold text-[#1C221E]">
                  Необходими документи за издаване на Акт за смърт:
                </strong>
                <ul className="space-y-3 text-sm text-[#525750]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78661] mt-2 shrink-0" />
                    <span>Оригинално съобщение за смърт от лекар с печат и подпис</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78661] mt-2 shrink-0" />
                    <span>Лична карта на починалия (предава се в общината)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A78661] mt-2 shrink-0" />
                    <span>Лична карта на лицето, подаващо документите</span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-[#EAE8E2]">
                <p className="text-xs text-[#666B63] mb-4">
                  Имате ли въпрос относно специфичен документ?
                </p>
                <a
                  href="tel:0878800157"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#6A4B32] hover:bg-[#4F3725] px-4 py-2.5 text-xs font-bold text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Обадете се за консултация</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
