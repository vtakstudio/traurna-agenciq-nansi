import React from 'react';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesOverviewProps {
  onSelectService: (slug: string) => void;
  onViewAllServices: () => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onSelectService,
  onViewAllServices,
}) => {
  return (
    <section id="uslugi" className="py-16 sm:py-20 lg:py-24 bg-[#F2F4F2] border-b border-[#E0E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12 pb-6 border-b border-[#D8DAD4]">
          <div className="max-w-2xl">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
              Траурни дейности и организация
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
              С какво можем да помогнем
            </h2>
            <p className="text-[#50554E] text-base sm:text-lg leading-relaxed font-normal">
              Основните услуги, които организираме в София — ясно, спокойно и според нуждите на семейството.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="self-start lg:self-end text-sm font-bold text-[#6A4B32] hover:text-[#4F3725] inline-flex items-center gap-2 pb-1 border-b-2 border-[#6A4B32] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Вижте всички услуги</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Compact service cards: short preview, full details on click */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
          {servicesData.map((service: ServiceItem, idx: number) => (
            <div
              key={service.slug}
              onClick={() => onSelectService(service.slug)}
              className="bg-white border border-[#DDDCD6] hover:border-[#A78661] rounded-lg p-5 sm:p-6 transition-all cursor-pointer shadow-2xs hover:shadow-sm group"
            >
              <div className="flex items-center mb-2">
                <span className="text-xs tabular-nums font-bold text-[#55695E] bg-[#EAECE8] px-2 py-0.5 rounded">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1C221E] group-hover:text-[#6A4B32] transition-colors mb-2 leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-[#525750] leading-relaxed line-clamp-2">
                {service.shortDescription}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs text-[#737A71]">
                <Check className="w-3.5 h-3.5 text-[#6A4B32] shrink-0" />
                <span className="truncate">{service.whatIsIncluded[0]}</span>
                <span className="shrink-0 text-[#A78661]">
                  + още {service.whatIsIncluded.length - 1}
                </span>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EAE8E2] flex items-center justify-between">
                <span className="text-xs text-[#737A71]">Повече информация</span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#6A4B32] group-hover:text-[#4F3725] transition-colors">
                  <span>Подробности</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet disclaimer with generous margins */}
        <div className="pt-6 border-t border-[#D8DAD4] text-xs sm:text-sm text-[#666B63] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <span>* Всеки компонент от церемонията се съгласува предварително без задължителни пакети.</span>
          <span>Дежурен телефон за София: <strong className="text-[#1C221E] font-bold">0878 800 157</strong> (24/7)</span>
        </div>

      </div>
    </section>
  );
};
