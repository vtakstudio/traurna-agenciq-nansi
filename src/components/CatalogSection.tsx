import React, { useState } from 'react';
import { catalogItems } from '../data/catalogData';
import { CatalogCategory } from '../types';
import { Info, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

interface CatalogSectionProps {
  onOpenInquiry: (itemTitle?: string) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({ onOpenInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<CatalogCategory>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredItems = selectedCategory === 'all'
    ? catalogItems
    : catalogItems.filter((i) => i.category === selectedCategory);
  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  const categories: { id: CatalogCategory; label: string }[] = [
    { id: 'all', label: 'Всички артикули' },
    { id: 'kovchezi', label: 'Ковчези' },
    { id: 'urni', label: 'Урни' },
    { id: 'cvetya', label: 'Венци и цветя' },
    { id: 'prinadlezhnosti', label: 'Принадлежности' },
  ];

  return (
    <section id="katalog" className="py-16 sm:py-20 lg:py-24 bg-[#F2F4F2] border-b border-[#E0E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 lg:mb-10">
          <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
            Траурни атрибути и изработка
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-4 leading-[1.2]">
            Каталог и траурни принадлежности
          </h2>
          <p className="text-[#50554E] text-base sm:text-lg leading-relaxed font-normal">
            Подбрани ковчези, урни, цветя и принадлежности. За конкретен модел и цена се свържете с нас.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center gap-2 pb-3 mb-8 overflow-x-auto border-b border-[#D8DAD4]">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setShowAll(false);
              }}
              className={`px-4 py-2.5 rounded-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#34483E] text-white shadow-2xs'
                  : 'bg-white text-[#525750] hover:text-[#1C221E] border border-[#DDDCD6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#DDDCD6] hover:border-[#A78661] rounded-lg p-5 flex flex-col justify-between transition-all hover:shadow-sm group"
            >
              <div>
                <div className="flex items-center text-xs text-[#71786E] mb-3 pb-2.5 border-b border-[#EAE8E2]">
                  <span className="uppercase font-semibold tracking-wider text-[11px]">
                    {item.category === 'kovchezi' && 'Ковчег'}
                    {item.category === 'urni' && 'Урна'}
                    {item.category === 'cvetya' && 'Флористика'}
                    {item.category === 'prinadlezhnosti' && 'Аксесоар'}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#1C221E] mb-2.5 group-hover:text-[#6A4B32] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#525750] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="text-xs text-[#636A60] bg-[#FAF9F6] p-3.5 rounded border border-[#E8E6DF] mb-4 leading-relaxed line-clamp-3">
                  <strong className="text-[#1C221E] block mb-1">Спецификация:</strong>
                  {item.materialOrDetails}
                </div>
              </div>

              <div className="pt-3 border-t border-[#EAE8E2] flex items-center justify-between gap-3">
                <span className="text-xs text-[#71786E]">
                  Цена при запитване
                </span>

                <button
                  onClick={() => onOpenInquiry(`Запитване за артикул: ${item.title}`)}
                  className="text-xs font-bold text-[#6A4B32] hover:text-[#4F3725] inline-flex items-center gap-1 cursor-pointer transition-colors shrink-0 whitespace-nowrap"
                >
                  <span>Запитайте</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length > 8 && (
          <div className="flex justify-center mb-12">
            <button
              type="button"
              onClick={() => setShowAll((current) => !current)}
              className="inline-flex items-center gap-2 rounded-md border border-[#C9CEC7] bg-white px-5 py-3 text-sm font-semibold text-[#34483E] hover:border-[#34483E] hover:bg-[#FAF9F6] transition-colors cursor-pointer"
            >
              <span>{showAll ? 'Покажи по-малко' : `Покажи още (${filteredItems.length - 8})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Notice Card */}
        <div className="p-6 sm:p-7 rounded-lg bg-white border border-[#DDDCD6] flex items-start gap-4 shadow-2xs">
          <Info className="w-5 h-5 text-[#34483E] shrink-0 mt-0.5" />
          <p className="text-sm text-[#50554E] leading-relaxed">
            Посочените артикули са с ориентировъчен характер. За актуални наличности, размери, текстилна окомплектовка и конкретна цена, моля свържете се с дежурния екип на телефон <strong className="text-[#1C221E] font-bold">0878 800 157</strong>.
          </p>
        </div>

      </div>
    </section>
  );
};
