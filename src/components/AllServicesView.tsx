import React from 'react';
import { servicesData } from '../data/servicesData';
import { ChevronRight, ArrowRight, Check, Phone } from 'lucide-react';
import { ServiceItem } from '../types';

interface AllServicesViewProps {
  onSelectService: (slug: string) => void;
  onBackToHome: () => void;
}

export const AllServicesView: React.FC<AllServicesViewProps> = ({
  onSelectService,
  onBackToHome,
}) => {
  return (
    <div className="py-12 sm:py-18 bg-[#F4F3EE] min-h-screen text-[#1F2421]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-[#6E7B74] mb-8" aria-label="Хлебни трохи">
          <button
            onClick={onBackToHome}
            className="hover:text-[#1F2421] transition-colors cursor-pointer"
          >
            Начало
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#DDDCD6]" />
          <span className="text-[#1F2421] font-semibold">Всички траурни услуги</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-12 border-b border-[#DDDCD6] pb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6E7B74] block mb-2">
            Пълен обхват на дейностите в столицата
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2421] tracking-tight mb-4">
            Траурни услуги в гр. София
          </h1>
          <p className="text-base sm:text-lg text-[#555A52] leading-relaxed font-normal">
            Поемаме цялостната или частична организация според Вашите нужди. Всяка услуга се изпълнява с внимание, дискретност и дълбоко уважение към паметта на покойника.
          </p>
        </div>

        {/* Detailed Services Listing in crisp white cards on top of #F4F3EE */}
        <div className="space-y-6">
          {servicesData.map((service: ServiceItem, idx: number) => (
            <div
              key={service.slug}
              className="bg-white border border-[#E2E0D8] rounded-md p-6 sm:p-9 hover:border-[#3E5148] transition-colors shadow-2xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-[#3E5148] tracking-wider uppercase">
                      Услуга 0{idx + 1}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2421] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#555A52] leading-relaxed mb-6 font-normal">
                    {service.fullDescription}
                  </p>

                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#6E7B74] mb-3">
                      Основни компоненти:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.whatIsIncluded.slice(0, 4).map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#383C35]">
                          <Check className="w-4 h-4 text-[#3E5148] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-[#E2E0D8] lg:pl-8">
                  <div className="text-xs sm:text-sm text-[#555A52] mb-6">
                    <p className="mb-2">
                      <strong className="text-[#1F2421]">Необходими документи:</strong> {service.requiredInfo[0] || 'Лична карта и медицинско съобщение'}
                    </p>
                    <p>
                      <strong className="text-[#1F2421]">Консултация:</strong> Телефон за съдействие <strong>0878 800 157</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectService(service.slug)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded bg-[#3E5148] hover:bg-[#32423a] text-white text-sm font-bold transition-colors cursor-pointer shadow-2xs"
                  >
                    <span>Пълни детайли за услугата</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Callout */}
        <div className="mt-14 p-7 sm:p-10 rounded-md bg-[#3E5148] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Нуждаете се от комбинация от услуги в гр. София?
            </h3>
            <p className="text-sm text-white/85 max-w-xl">
              Свържете се с нас за персонален разговор. Ще съобразим организацията изцяло с Вашите възможности и изисквания.
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
    </div>
  );
};
