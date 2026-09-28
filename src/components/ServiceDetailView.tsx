import React, { useState } from 'react';
import { Phone, Check, ChevronRight, HelpCircle, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';

interface ServiceDetailViewProps {
  service: ServiceItem;
  onBackToOverview: () => void;
  onSelectService: (slug: string) => void;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({
  service,
  onBackToOverview,
  onSelectService,
  onOpenInquiry,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find related service objects
  const related = servicesData.filter((s) => service.relatedServices.includes(s.slug));

  return (
    <article className="min-h-screen text-[#1F2421]">
      {/* 1. Header (Color: #FAF9F6) */}
      <section className="py-8 sm:py-14 bg-[#FAF9F6] border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#6E7B74] mb-5 overflow-x-auto whitespace-nowrap" aria-label="Хлебни трохи">
            <button
              onClick={onBackToOverview}
              className="hover:text-[#1F2421] transition-colors cursor-pointer"
            >
              Начало
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
            <button
              onClick={onBackToOverview}
              className="hover:text-[#1F2421] transition-colors cursor-pointer"
            >
              Услуги
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
            <span className="text-[#1F2421] font-bold">{service.title}</span>
          </nav>

          <header>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3E5148] block mb-3">
              Траурна агенция Нанси · София
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1F2421] tracking-tight mb-4 leading-tight">
              {service.title}
            </h1>
            <p className="text-[15px] sm:text-lg text-[#555A52] leading-relaxed max-w-3xl font-normal">
              {service.fullDescription}
            </p>

            {/* Quick Action in Header */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 sm:mt-8">
              <a
                href="tel:0878800157"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-[#3E5148] hover:bg-[#32423a] text-white text-sm font-bold transition-colors shadow-2xs"
              >
                <Phone className="w-4 h-4" />
                <span>Консултация: 0878 800 157</span>
              </a>
              <button
                onClick={() => onOpenInquiry(service.title)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded bg-white hover:bg-[#F3F1EC] text-[#1F2421] text-sm font-semibold transition-colors cursor-pointer border border-[#DDDCD6]"
              >
                <MessageSquare className="w-4 h-4 text-[#75877D]" />
                <span>Запитване за услугата</span>
              </button>
            </div>
          </header>
        </div>
      </section>

      {/* 2. What Is Included (White: bg-white) */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Обхват на дейностите
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-6">
            Какво включва услугата
          </h2>
          <div className="bg-[#FAF9F6] border border-[#E2E0D8] rounded-md p-6 sm:p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.whatIsIncluded.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#3E5148] shrink-0 mt-1 stroke-[2.5]" />
                  <span className="text-sm sm:text-base text-[#383C35] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Process Steps (Color: #F4F3EE) */}
      <section className="py-12 sm:py-16 bg-[#F4F3EE] border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Етапи на изпълнение
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-6">
            Как протича организацията
          </h2>
          <div className="space-y-3.5">
            {service.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E2E0D8] rounded-md p-5 sm:p-6 flex flex-col sm:flex-row gap-4 sm:items-start shadow-2xs"
              >
                <div className="text-lg font-bold text-[#3E5148] shrink-0 w-8">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-[#1F2421] text-base sm:text-lg mb-1">
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

      {/* 4. Required Information (White: bg-white) */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] mb-3">
            Администрация и подпомагане
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-4">
            Каква информация и документи са необходими
          </h2>
          <div className="bg-[#FAF9F6] border border-[#E2E0D8] rounded-md p-6 sm:p-8">
            <p className="text-sm sm:text-base text-[#555A52] mb-5">
              За да можем да задействаме процедурата възможно най-бързо в гр. София, моля пригответе:
            </p>
            <ul className="space-y-3">
              {service.requiredInfo.map((info, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3E5148] mt-2 shrink-0" />
                  <span className="text-sm sm:text-base text-[#383C35] leading-relaxed">{info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Service FAQ (Color: #F4F3EE) */}
      <section className="py-12 sm:py-16 bg-[#F4F3EE] border-b border-[#E2E0D8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#3E5148]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421]">
              Често задавани въпроси за тази услуга
            </h2>
          </div>
          <div className="space-y-3 mt-6">
            {service.faq.map((item, idx) => (
              <div
                key={idx}
                className="border border-[#E2E0D8] rounded-md bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF9F6] transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-[#1F2421]">
                    {item.q}
                  </span>
                  <span className="text-base text-[#3E5148] font-bold">
                    {openFaqIndex === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-[#555A52] leading-relaxed border-t border-[#E2E0D8]/60">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Related services */}
          {related.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[#DDDCD6]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E7B74] mb-4">
                Свързани траурни услуги
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <button
                    key={r.slug}
                    onClick={() => onSelectService(r.slug)}
                    className="p-4 bg-white border border-[#DDDCD6] hover:border-[#3E5148] rounded text-left text-sm font-bold text-[#1F2421] hover:text-[#3E5148] transition-colors cursor-pointer flex items-center justify-between shadow-2xs"
                  >
                    <span>{r.title}</span>
                    <ChevronRight className="w-4 h-4 text-[#75877D]" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. Final Reassuring Contact Card (White container) */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="rounded-md bg-[#3E5148] text-white p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Имате ли въпроси относно {service.title.toLowerCase()}?
              </h3>
              <p className="text-sm text-white/85 max-w-lg">
                Обадете ни се по всяко време за спокойна консултация и организация в гр. София.
              </p>
            </div>
            <a
              href="tel:0878800157"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-white text-[#1F2421] font-bold text-sm hover:bg-[#F3F1EC] transition-colors shrink-0 tabular-nums shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#3E5148]" />
              <span>0878 800 157</span>
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};
