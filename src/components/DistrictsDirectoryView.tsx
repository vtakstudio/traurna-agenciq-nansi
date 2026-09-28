import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Search, ChevronRight, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { sofiaDistrictsData } from '../data/districtsData';

interface DistrictsDirectoryViewProps {
  onSelectDistrict: (slug: string) => void;
  onNavigateHome: () => void;
}

export const DistrictsDirectoryView: React.FC<DistrictsDirectoryViewProps> = ({
  onSelectDistrict,
  onNavigateHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = 'Траурна агенция Нанси – Райони и квартали в София | 0878 800 157';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Траурна агенция Нанси обслужва всички райони и квартали на град София. Денонощен траурен транспорт, организация на погребение и кремация: 0878 800 157.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const filteredDistricts = sofiaDistrictsData.filter(
    (d) =>
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.coveragePoints.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen text-[#1F2421]">
      {/* 1. Directory Header (Color: #FAF9F6) */}
      <section className="py-10 sm:py-16 bg-[#FAF9F6] border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-[#6E7B74] mb-5 overflow-x-auto whitespace-nowrap" aria-label="Хлебни трохи">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#1F2421] transition-colors cursor-pointer"
            >
              Начало
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
            <span className="text-[#1F2421] font-semibold">Райони в София</span>
          </nav>

          {/* Header Block */}
          <header className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3E5148] block mb-3">
              Столична община · Денонощно дежурство
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1F2421] mb-3">
              Траурни услуги по квартали в гр. София
            </h1>
            <p className="text-[15px] sm:text-lg text-[#555A52] leading-relaxed font-normal">
              Траурна агенция „Нанси“ разполага с дежурни екипи и лицензиран специализиран транспорт за бързо реагиране във всички райони на София. Изберете Вашия квартал за конкретна информация относно най-близките гробищни паркове, болници и процедури.
            </p>

            {/* Direct phone box */}
            <div className="mt-6 flex flex-wrap items-center gap-3.5">
              <a
                href="tel:0878800157"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#3E5148] hover:bg-[#32423a] text-white text-sm font-bold transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Дежурен телефон за София: 0878 800 157</span>
              </a>
            </div>
          </header>
        </div>
      </section>

      {/* 2. Districts Grid and Search (White: bg-white) */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Search bar */}
          <div className="mb-8 max-w-lg relative">
            <label htmlFor="district-search" className="sr-only">Търсене на квартал в София</label>
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A8077]" />
            <input
              id="district-search"
              type="text"
              placeholder="Търсене: Люлин, Младост, Надежда..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#DDDCD6] rounded-md text-sm text-[#1F2421] placeholder:text-[#7A8077] focus:outline-none focus:border-[#3E5148] transition-colors"
            />
          </div>

          {/* Districts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDistricts.map((district) => (
              <div
                key={district.slug}
                className="bg-[#FAF9F6] border border-[#E2E0D8] rounded-md p-5 sm:p-6 flex flex-col justify-between hover:border-[#3E5148] transition-colors group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-[#EAE8E2]">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6E7B74] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#6A4B32]" />
                      <span className="sr-only">София</span>
                    </span>
                    <span className="text-xs text-[#6A4B32] font-bold">
                      24/7
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-[#1F2421] mb-2 group-hover:text-[#3E5148] transition-colors">
                    {district.fullName}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#555A52] leading-relaxed mb-4">
                    {district.shortDesc}
                  </p>

                  <div className="border-t border-[#EAE8E2] pt-3 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#6E7B74] block mb-1">
                      Основни гробищни паркове:
                    </span>
                    <p className="text-xs text-[#555A52] line-clamp-2">
                      {district.keyCemeteries.slice(0, 2).join(' · ')}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#EAE8E2] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectDistrict(district.slug)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#3E5148] hover:text-[#1F2421] transition-colors cursor-pointer"
                  >
                    <span>Вижте подробности</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="tel:0878800157"
                    className="text-xs text-[#6E7B74] hover:text-[#1F2421] font-bold tabular-nums"
                    title="Обадете се на дежурния екип"
                  >
                    0878 800 157
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Sofia Cemeteries Context (Color: #F4F3EE) */}
      <section className="py-12 sm:py-16 bg-[#F4F3EE] border-b border-[#E2E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="w-5 h-5 text-[#3E5148]" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Основни гробищни паркове в София, които обслужваме
            </h3>
          </div>
          <p className="text-sm text-[#555A52] leading-relaxed mb-8 max-w-3xl">
            Траурна агенция „Нанси“ работи в ежедневна координация с ОП „Гробищни паркове“ към Столична община. Извършваме организация на ритуали във всички действащи столични паркове:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs sm:text-sm">
            <div className="p-5 bg-white border border-[#E2E0D8] rounded-md shadow-2xs">
              <strong className="block text-base font-bold text-[#1F2421] mb-1.5">Централни софийски гробища</strong>
              <span className="text-[#555A52] leading-relaxed">кв. Орландовци · Всички ритуални зали, православен храм и Софийски крематориум</span>
            </div>
            <div className="p-5 bg-white border border-[#E2E0D8] rounded-md shadow-2xs">
              <strong className="block text-base font-bold text-[#1F2421] mb-1.5">Бакърена фабрика</strong>
              <span className="text-[#555A52] leading-relaxed">Северозападна София · Близост до Люлин, Надежда, Обеля, Връбница</span>
            </div>
            <div className="p-5 bg-white border border-[#E2E0D8] rounded-md shadow-2xs">
              <strong className="block text-base font-bold text-[#1F2421] mb-1.5">Малашевци</strong>
              <span className="text-[#555A52] leading-relaxed">Североизточна София · Близост до Подуяне, Хаджи Димитър, Суха река</span>
            </div>
            <div className="p-5 bg-white border border-[#E2E0D8] rounded-md shadow-2xs">
              <strong className="block text-base font-bold text-[#1F2421] mb-1.5">Квартални паркове</strong>
              <span className="text-[#555A52] leading-relaxed">Бояна, Княжево, Горна баня, Симеоново, Драгалевци, Банкя</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hospital Dispatch Notice (White: bg-white) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="p-5 sm:p-10 rounded-md bg-[#FAF9F6] border border-[#E2E0D8] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#3E5148]" />
                <h3 className="text-xl sm:text-2xl font-bold text-[#1F2421]">
                  Смъртен случай в столична болница или хоспис?
                </h3>
              </div>
              <p className="text-sm text-[#555A52] max-w-2xl leading-relaxed">
                Не бързайте да подписвате документи на случайни лица в болничните заведения. Обадете ни се – наш лицензиран траурен агент ще поеме освобождаването, документацията и превоза на контролирани и ясни цени.
              </p>
            </div>
            <a
              href="tel:0878800157"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#3E5148] text-white font-bold text-sm rounded hover:bg-[#32423a] transition-colors shadow-2xs"
            >
              <Phone className="w-4 h-4" />
              <span>0878 800 157</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
