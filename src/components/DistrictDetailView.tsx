import React, { useState, useEffect } from 'react';
import { Phone, ChevronRight, MapPin, Building, ShieldCheck, HelpCircle, MessageSquare } from 'lucide-react';
import { SofiaDistrict } from '../types';
import { sofiaDistrictsData } from '../data/districtsData';

interface DistrictDetailViewProps {
  district: SofiaDistrict;
  onBackToDistricts: () => void;
  onSelectDistrict: (slug: string) => void;
  onOpenInquiry: (subject?: string) => void;
  onNavigateHome: () => void;
}

export const DistrictDetailView: React.FC<DistrictDetailViewProps> = ({
  district,
  onBackToDistricts,
  onSelectDistrict,
  onOpenInquiry,
  onNavigateHome,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // SEO metadata synchronization
  useEffect(() => {
    const prevTitle = document.title;
    document.title = district.metaTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) {
      metaDesc.setAttribute('content', district.metaDescription);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', district.metaTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', district.metaDescription);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, [district]);

  // Structured Data Schema for Local SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FuneralHome',
    name: `Траурна агенция Нанси – ${district.name}, София`,
    image: `${typeof window !== 'undefined' ? window.location.origin : ''}/logo-nansi.png`,
    telephone: '0878800157',
    priceRange: 'По запитване / според избрания ритуал',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'София',
      addressRegion: 'София-град',
      addressCountry: 'BG',
    },
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: district.fullName,
      },
      {
        '@type': 'City',
        name: 'София',
      },
    ],
    openingHours: 'Mo-Su 00:00-24:00',
    description: district.metaDescription,
  };

  const otherDistricts = sofiaDistrictsData.filter((d) => d.slug !== district.slug).slice(0, 4);

  return (
    <article className="min-h-screen text-[#1F2421]">
      {/* Dynamic JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Header Hero (Color: #FAF9F6) */}
      <section className="bg-[#FAF9F6] border-b border-[#E2E0D8] pt-8 pb-10 sm:pt-12 sm:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#6E7B74] mb-5 overflow-x-auto whitespace-nowrap" aria-label="Хлебни трохи">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#1F2421] transition-colors cursor-pointer"
            >
              Начало
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
            <button
              onClick={onBackToDistricts}
              className="hover:text-[#1F2421] transition-colors cursor-pointer"
            >
              Райони в София
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
            <span className="text-[#1F2421] font-semibold">{district.name}</span>
          </nav>

          <header>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3E5148] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Денонощно обслужване · {district.name}, София</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight mb-4 leading-tight text-[#1F2421]">
              {district.h1}
            </h1>

            <p className="text-[15px] sm:text-lg text-[#555A52] leading-relaxed max-w-3xl font-normal">
              {district.overview}
            </p>

            {/* Quick Contact & Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 sm:mt-8">
              <a
                href="tel:0878800157"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-[#3E5148] hover:bg-[#32423a] text-white text-sm font-bold transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Обадете се за съдействие</span>
              </a>
              <button
                onClick={() => onOpenInquiry(`Запитване за ${district.fullName}`)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-white hover:bg-[#F3F1EC] text-[#1F2421] text-sm font-semibold transition-colors cursor-pointer border border-[#DDDCD6]"
              >
                <MessageSquare className="w-4 h-4 text-[#75877D]" />
                <span>Изпратете запитване</span>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* 2. Key Hospitals & Cemeteries (White: bg-white) */}
      <section className="bg-white border-b border-[#E2E0D8] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Локална инфраструктура
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-6">
            Гробищни паркове и болници за {district.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#FAF9F6] border border-[#E2E0D8] rounded-md p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1F2421] mb-4 pb-2 border-b border-[#E2E0D8]">
                <Building className="w-4 h-4 text-[#3E5148]" />
                <span>Гробищни паркове с бърз достъп</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#555A52]">
                {district.keyCemeteries.map((cem, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E5148] mt-1.5 shrink-0" />
                    <span>{cem}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#FAF9F6] border border-[#E2E0D8] rounded-md p-5 sm:p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1F2421] mb-4 pb-2 border-b border-[#E2E0D8]">
                <ShieldCheck className="w-4 h-4 text-[#3E5148]" />
                <span>Болници и здравни заведения</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#555A52]">
                {district.keyHospitals.map((hosp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E5148] mt-1.5 shrink-0" />
                    <span>{hosp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services in District (Color: #F4F3EE) */}
      <section className="bg-[#F4F3EE] border-b border-[#E2E0D8] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Специфика на дейностите
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-6">
            Траурни услуги в {district.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {district.servicesOffered.map((srv, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 bg-white border border-[#E2E0D8] rounded-md shadow-2xs"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#1F2421] mb-2 leading-snug">
                  {srv.title}
                </h3>
                <p className="text-sm text-[#555A52] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Local Steps (White: bg-white) */}
      <section className="bg-white border-b border-[#E2E0D8] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Последователност
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-6">
            Как протича организацията при обаждане от {district.name}
          </h2>
          <div className="space-y-4">
            {district.localProcessSteps.map((step) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row gap-4 p-5 bg-[#FAF9F6] border border-[#E2E0D8] rounded-md"
              >
                <div className="text-xl font-bold text-[#3E5148] shrink-0 w-8">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1F2421] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#555A52] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Important District Notes (Color: #EDEFEB) */}
      <section className="bg-[#EDEFEB] border-b border-[#DDDCD6] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white border border-[#DDDCD6] rounded-md p-5 sm:p-8 shadow-xs">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#3E5148] mb-4 pb-2 border-b border-[#EAE8E2]">
              Специфика при оформяне на документи за {district.fullName}
            </h3>
            <ul className="space-y-3 text-sm text-[#555A52]">
              {district.importantNotes.map((note, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3E5148] mt-2 shrink-0" />
                  <span className="leading-relaxed">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Local FAQ (White: bg-white) */}
      <section className="bg-white border-b border-[#E2E0D8] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#3E5148]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Често задавани въпроси за {district.name}
            </h2>
          </div>
          <p className="text-sm text-[#555A52] mb-6">
            Основни въпроси относно погребенията и кремацията за жителите на района:
          </p>

          <div className="space-y-3">
            {district.faq.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#E2E0D8] rounded-md bg-[#FAF9F6] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F3F1EC] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F2421]">
                    {item.q}
                  </span>
                  <span className="text-base text-[#3E5148] font-bold">
                    {openFaqIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-4 pb-5 pt-1 text-sm text-[#555A52] leading-relaxed border-t border-[#E2E0D8]/60 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Callout Action Bar (Color Accent: #3E5148) */}
      <section className="bg-[#F6F5F0] py-12 sm:py-16 border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="p-5 sm:p-9 bg-[#3E5148] text-white rounded-md flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xs">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-1.5">
                Нуждаете се от съдействие в {district.name}?
              </h3>
              <p className="text-xs sm:text-sm text-white/85">
                Дежурният екип на Траурна агенция Нанси в гр. София е на линия 24 часа в денонощието.
              </p>
            </div>
            <a
              href="tel:0878800157"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#1F2421] font-bold text-sm rounded hover:bg-[#F3F1EC] transition-colors tabular-nums shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#3E5148]" />
              <span>0878 800 157</span>
            </a>
          </div>

          {/* Other districts navigation */}
          <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#DDDCD6]">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E7B74] mb-4">
              Други райони и квартали в София
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {otherDistricts.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => onSelectDistrict(d.slug)}
                  className="text-left p-3.5 bg-white border border-[#DDDCD6] hover:border-[#3E5148] rounded text-xs font-bold text-[#1F2421] hover:text-[#3E5148] transition-colors cursor-pointer shadow-2xs"
                >
                  {d.name} →
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};
