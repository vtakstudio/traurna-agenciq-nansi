import React from 'react';
import { MapPin, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { sofiaDistrictsData } from '../data/districtsData';

interface SofiaDistrictsHomeSectionProps {
  onSelectDistrict: (slug: string) => void;
  onViewAllDistricts: () => void;
}

export const SofiaDistrictsHomeSection: React.FC<SofiaDistrictsHomeSectionProps> = ({
  onSelectDistrict,
  onViewAllDistricts,
}) => {
  // Keep the homepage overview focused; the directory contains every district.
  const featuredDistricts = sofiaDistrictsData.slice(0, 4);

  return (
    <section id="rayoni-sofiya" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-[#E4E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 lg:mb-12 pb-6 border-b border-[#E8E6DF]">
          <div className="max-w-2xl">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
              Териториално покритие в столицата
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
              Обслужване във всички райони на София
            </h2>
            <p className="text-[#50554E] text-base sm:text-lg leading-relaxed font-normal">
              Дежурни екипи и специализиран транспорт за всички райони на София.
            </p>
          </div>

          <button
            onClick={onViewAllDistricts}
            className="self-start lg:self-end text-sm font-bold text-[#6A4B32] hover:text-[#4F3725] inline-flex items-center gap-2 pb-1 border-b-2 border-[#6A4B32] transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Пълен справочник</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured districts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
          {featuredDistricts.map((d) => (
            <div
              key={d.slug}
              onClick={() => onSelectDistrict(d.slug)}
              className="bg-[#FAF9F6] border border-[#E4E2D8] hover:border-[#A78661] rounded-lg p-5 sm:p-6 transition-all group cursor-pointer flex flex-col justify-between hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#71786E] mb-3.5">
                  <span className="flex items-center gap-1.5 font-medium" title="гр. София">
                    <MapPin className="w-3.5 h-3.5 text-[#6A4B32]" />
                    <span className="sr-only">гр. София</span>
                  </span>
                  <span className="text-[11px] tabular-nums text-[#8C9289]">24/7</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1C221E] group-hover:text-[#6A4B32] transition-colors mb-3 leading-snug">
                  {d.name}
                </h3>

                <p className="text-sm text-[#525750] leading-relaxed mb-5 line-clamp-3">
                  {d.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E8E6DF] flex items-center gap-3">
                <span className="min-w-0 flex-1 text-xs text-[#666B63] font-medium leading-snug line-clamp-2">
                  {d.keyCemeteries[0]}
                </span>
                <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-[#6A4B32] whitespace-nowrap group-hover:translate-x-0.5 transition-transform">
                  <span>Вижте района</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Callout Strip */}
        <div className="p-5 sm:p-6 rounded-lg bg-[#FAF9F6] border border-[#E4E2D8] flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-1.5">
              Търсите конкретен квартал или гробищен парк в София?
            </h4>
            <p className="text-sm text-[#525750] leading-relaxed">
              Пълният справочник съдържа всички квартали, болници и гробищни паркове.
            </p>
          </div>

          <button
            onClick={onViewAllDistricts}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-white hover:bg-[#F5EFE7] border border-[#DDDCD6] text-[#6A4B32] text-sm font-bold shrink-0 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Вижте пълния справочник</span>
            <ArrowRight className="w-4 h-4 text-[#6A4B32]" />
          </button>
        </div>

      </div>
    </section>
  );
};
