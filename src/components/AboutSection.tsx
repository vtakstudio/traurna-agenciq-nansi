import React from 'react';
import { Check, Phone, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const trustPoints = [
    {
      title: 'Дискретно и уважително отношение',
      description: 'Отнасяме се към всяко семейство и всяка лична история с искрена деликатност, човещина и пълна конфиденциалност.'
    },
    {
      title: 'Ясна комуникация без дребен шрифт',
      description: 'Обясняваме спокойно всяка подробност, срокове и необходими документи, без недомлъвки и сложен бюрократичен жаргон.'
    },
    {
      title: 'Цялостна организация за София',
      description: 'Поемаме практическата тежест и координираме институциите, залите и гробищните служби във всички столични райони.'
    },
    {
      title: 'Индивидуален подход към всяка вяра',
      description: 'Вслушваме се в личните желания на близките и стриктно уважаваме религиозните, семейните и културните традиции.'
    },
    {
      title: 'Постоянна телефонна връзка',
      description: 'Директна и постоянна връзка с нас на номер 0878 800 157 при всеки въпрос или промяна в графика.'
    }
  ];

  return (
    <section id="za-nas" className="py-16 sm:py-20 lg:py-24 bg-[#F5F4F0] border-b border-[#E2E0D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Philosophy */}
          <div className="lg:col-span-6">
            <div className="inline-block text-xs font-semibold uppercase tracking-[0.22em] text-[#55695E] mb-3">
              За агенцията
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#1C221E] tracking-tight mb-6 leading-[1.2]">
              С внимание и почит към всеки детайл.
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[#50554E] leading-relaxed font-normal">
              <p>
                Траурна агенция Нанси помага на семействата в София с достойнство, спокойствие и ясна организация.
              </p>
              <p>
                Поемаме практическата част — документи, транспорт и подготовка — за да можете да се сбогувате спокойно.
              </p>
              <div className="p-5 border-l-3 border-[#A78661] bg-white rounded-r-lg shadow-2xs">
                <p className="text-sm sm:text-base text-[#1C221E] font-medium leading-relaxed">
                  Работим деликатно и съобразено с изискванията на Столична община.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
                <a
                  href="tel:0878800157"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#6A4B32] hover:bg-[#4F3725] px-4 py-3 text-sm font-bold text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>0878 800 157</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-xs text-[#737A71]">На разположение 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Human Trust Principles */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white rounded-lg border border-[#DDDCD6] p-7 sm:p-8 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-[#6A4B32] mb-6 pb-3 border-b border-[#EAE8E2]">
                <span>Основи на нашата етика</span>
              </div>

              <div className="space-y-4">
                {trustPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="w-6 h-6 rounded-full bg-[#EFE5D8] text-[#6A4B32] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1C221E] mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-[#525750] leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
