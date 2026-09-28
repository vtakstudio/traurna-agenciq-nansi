import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  Check,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldCheck,
  Clock,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface PricingSectionProps {
  onOpenInquiry: (topic?: string) => void;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  services: {
    name: string;
    price: string;
    unit?: string;
  }[];
}

const individualServiceCategories: ServiceCategory[] = [
  {
    id: 'admin-prep',
    name: 'Администрация, лекар и подготовка',
    description: 'Официални медицински и документални процедури в София',
    services: [
      { name: 'Констатиране на смърт от лекар', price: 'от 59 €' },
      { name: 'Административно обслужване', price: 'от 199 €' },
      { name: 'Тоалет и подготовка на покойник', price: 'от 117 €' },
      { name: 'Полагане в ковчег', price: 'от 54 €' },
      { name: 'Хладилна камера', price: 'от 22,50 €', unit: '24 часа' },
    ],
  },
  {
    id: 'transport',
    name: 'Транспорт и специализирани дейности',
    description: 'Лицензирани траурни превози и физическа помощ в града и страната',
    services: [
      { name: 'Транспорт на покойник в София', price: 'от 117 €' },
      { name: 'Катафалка', price: 'от 79 €' },
      { name: 'Траурно шествие', price: 'от 69 €' },
      { name: 'Престой на катафалка', price: 'от 29 €', unit: 'час' },
      { name: 'Сваляне на покойник', price: 'от 9 €', unit: 'етаж' },
      { name: 'Товаро-разтоварна дейност', price: 'от 67,50 €' },
      { name: 'Транспорт извън София', price: 'от 1,25 €', unit: 'км' },
    ],
  },
  {
    id: 'cemetery-cremation',
    name: 'Гробни дейности, ритуали и кремация',
    description: 'Всички процедури в гробищните паркове и крематориума в София',
    services: [
      { name: 'Изкопаване и оформяне на нов гроб', price: 'от 229 €' },
      { name: 'Обслужване на съществуващ гроб', price: 'от 199 €' },
      { name: 'Оформяне и подравняване на гроб', price: 'от 69 €' },
      { name: 'Дървена рамка за гроб', price: 'от 109 €' },
      { name: 'Граждански ритуал', price: 'от 59 €' },
      { name: 'Кремация', price: 'от 359 €' },
      { name: 'Експресна кремация', price: 'от 609 €' },
      { name: 'Стандартна урна', price: 'от 29 €' },
      { name: 'Урнополагане', price: 'от 49 €' },
      { name: 'Получаване и доставка на урна', price: 'от 25 €' },
    ],
  },
  {
    id: 'goods-flowers',
    name: 'Траурни стоки, цветя и атрибути',
    description: 'Материали за почитане на паметта и ритуално обслужване',
    services: [
      { name: 'Некролози', price: 'от 5 €' },
      { name: 'Портрет със снимка и рамка', price: 'от 29 €' },
      { name: 'Траурна аранжировка', price: 'от 35 €' },
      { name: 'Траурен венец', price: 'от 65 €' },
      { name: 'Кетъринг / раздавка', price: 'от 4,50 €', unit: 'човек' },
      { name: 'Траурни ленти', price: 'от 1,80 €', unit: 'бр.' },
      { name: 'Комплект за опело', price: 'от 4,50 €' },
    ],
  },
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenInquiry }) => {
  // Keep the detailed price list closed initially so visitors see the main options first.
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (id: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const areAllOpen = Object.values(openCategories).every(Boolean);

  const toggleAll = () => {
    const nextState = !areAllOpen;
    setOpenCategories({
      'admin-prep': nextState,
      transport: nextState,
      'cemetery-cremation': nextState,
      'goods-flowers': nextState,
    });
  };

  return (
    <section
      id="ceni"
      className="relative bg-[#17120F] text-[#F8F7F4] border-t border-b border-[#3A2A20] py-16 sm:py-20 lg:py-24 overflow-hidden selection:bg-[#C5A880]/30 selection:text-white"
    >
      {/* Cemetery background kept subtle so the price information stays easy to read. */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/images/pricing-bg.png"
          alt=""
          className="h-full w-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120E0A]/72 via-[#120E0A]/60 to-[#120E0A]/82" />
      </div>

      {/* Subtle ambient lighting gradients for quiet elegance */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#3A271C] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-[#2A2318] rounded-full blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            1. SECTION INTRO & HEADLINE
            ========================================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18231D] border border-[#2B3B31] text-xs font-semibold uppercase tracking-[0.24em] text-[#C5A880] mb-5 shadow-xs">
            <span>Траурна агенция София</span>
            <span className="text-[#55695E]">·</span>
            <span>Прозрачност и достойнство</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-[1.18] mb-6">
            Ясни цени. Без неприятни изненади.
          </h2>

          <p className="text-base sm:text-lg lg:text-[19px] text-[#C7D0CA] leading-relaxed font-normal">
            Основни ориентири за най-често заявяваните услуги. Точната цена зависи от избраните детайли и се уточнява предварително.
          </p>
        </div>

        {/* =========================================================================
            2. THREE LARGE PRICING CARDS
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-14 sm:mb-24 lg:mb-32">
          
          {/* ----------------------------------------------------
              CARD 1: ПОГРЕБЕНИЕ
              ---------------------------------------------------- */}
          <div className="flex flex-col justify-between bg-[#141A17] border border-[#28372E] rounded-2xl p-5 sm:p-9 transition-all duration-200 hover:border-[#3A4E42] shadow-xl shadow-black/30">
            <div>
              {/* Header & Prominent Price Display */}
              <div className="mb-6 pb-6 border-b border-[#243329]">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                  от
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-3">
                  649 €
                </div>
                <h3 className="text-2xl font-bold text-[#F5F2EB] mb-2 tracking-tight">
                  Погребение
                </h3>
                <p className="text-base text-[#9BA59E] leading-snug">
                  Цялостна организация според избраните услуги
                </p>
              </div>

              {/* Checklist */}
              <div className="mb-8">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#79887F] mb-4">
                  Включва основни пера:
                </span>
                <ul className="space-y-3.5">
                  {[
                    'Съдействие при организацията',
                    'Транспорт на покойника',
                    'Подготовка на покойника',
                    'Ковчег',
                    'Катафалка',
                    'Организация на ритуала',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-[#E5E9E6]">
                      <div className="w-5 h-5 rounded-full bg-[#1F2C24] border border-[#34483E] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A880]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Запитване за пакет Погребение (от 649 €)')}
                className="w-full py-4 px-6 rounded-xl font-bold text-base text-[#FAF8F5] bg-[#1E2922] hover:bg-[#28382F] active:bg-[#161F19] border border-[#3A4E42] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Попитайте за точна цена</span>
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------
              CARD 2: КРЕМАЦИЯ (ПРЕДПОЧИТАН ИЗБОР)
              ---------------------------------------------------- */}
          <div className="relative flex flex-col justify-between bg-[#16211C] border-2 border-[#C5A880]/75 rounded-2xl p-5 sm:p-9 transition-all duration-200 shadow-2xl shadow-black/50 lg:-translate-y-2">
            
            {/* Preferred Choice Tag */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#2A2318] border border-[#C5A880]/80 text-[#E5D3B3] text-xs font-bold uppercase tracking-wider shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                Предпочитан избор
              </span>
            </div>

            <div>
              {/* Header & Prominent Price Display */}
              <div className="mb-6 pb-6 border-b border-[#2C3F34] pt-2">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                  от
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-3">
                  799 €
                </div>
                <h3 className="text-2xl font-bold text-[#F5F2EB] mb-2 tracking-tight">
                  Кремация
                </h3>
                <p className="text-base text-[#DFCE9F] leading-snug">
                  Организация на кремация в София
                </p>
              </div>

              {/* Checklist */}
              <div className="mb-8">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#A28B69] mb-4">
                  Включва основни пера:
                </span>
                <ul className="space-y-3.5">
                  {[
                    'Транспорт',
                    'Подготовка на покойника',
                    'Необходими административни процедури',
                    'Ковчег за кремация',
                    'Кремация',
                    'Стандартна урна',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-[#FAF8F5]">
                      <div className="w-5 h-5 rounded-full bg-[#2C2419] border border-[#C5A880]/60 flex items-center justify-center shrink-0 mt-0.5 text-[#E5D3B3]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-tight font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Запитване за пакет Кремация (от 799 €)')}
                className="w-full py-4 px-6 rounded-xl font-bold text-base text-[#141A16] bg-[#C5A880] hover:bg-[#D4AF37] active:bg-[#B3966E] transition-colors cursor-pointer text-center shadow-lg shadow-[#C5A880]/15 flex items-center justify-center gap-2"
              >
                <span>Организирайте кремация</span>
              </button>
            </div>
          </div>

          {/* ----------------------------------------------------
              CARD 3: ЦЯЛОСТНА ОРГАНИЗАЦИЯ
              ---------------------------------------------------- */}
          <div className="flex flex-col justify-between bg-[#141A17] border border-[#28372E] rounded-2xl p-5 sm:p-9 transition-all duration-200 hover:border-[#3A4E42] shadow-xl shadow-black/30">
            <div>
              {/* Header & Prominent Price Display */}
              <div className="mb-6 pb-6 border-b border-[#243329]">
                <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                  от
                </span>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-none mb-3">
                  899 €
                </div>
                <h3 className="text-2xl font-bold text-[#F5F2EB] mb-2 tracking-tight">
                  Цялостна организация
                </h3>
                <p className="text-base text-[#9BA59E] leading-snug">
                  Ние поемаме организацията вместо Вас
                </p>
              </div>

              {/* Checklist */}
              <div className="mb-8">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#79887F] mb-4">
                  Включва пълен набор от грижи:
                </span>
                <ul className="space-y-3.5">
                  {[
                    'Административно съдействие',
                    'Транспорт',
                    'Подготовка',
                    'Ковчег',
                    'Катафалка',
                    'Организация на церемонията',
                    'Съдействие за гробно място',
                    'Некролози и допълнителни услуги',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-base text-[#E5E9E6]">
                      <div className="w-5 h-5 rounded-full bg-[#1F2C24] border border-[#34483E] flex items-center justify-center shrink-0 mt-0.5 text-[#C5A880]">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('Запитване за Цялостна организация (от 899 €)')}
                className="w-full py-4 px-6 rounded-xl font-bold text-base text-[#FAF8F5] bg-[#1E2922] hover:bg-[#28382F] active:bg-[#161F19] border border-[#3A4E42] transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <span>Свържете се с нас</span>
              </button>
            </div>
          </div>

        </div>

        {/* =========================================================================
            3. ПОД ПАКЕТИТЕ – „ЦЕНИ НА ОТДЕЛНИ УСЛУГИ“ (ACCORDION SECTION)
            ========================================================================= */}
        <div className="bg-[#131916] border border-[#26352C] rounded-2xl p-5 sm:p-10 lg:p-12 mb-12 sm:mb-16 shadow-2xl">
          
          {/* Header of Individual Services with Toggle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#223027] mb-8">
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880] mb-2">
                Пълна прозрачност · Ценоразпис
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-3">
                Цени на отделни услуги
              </h3>
              <p className="text-base sm:text-lg text-[#A2ADA5] leading-relaxed">
                Можете да изберете само услугите, от които имате нужда.
              </p>
            </div>

            <button
              onClick={toggleAll}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#DFCE9F] hover:text-white transition-colors cursor-pointer self-start md:self-auto py-2 px-3 rounded-lg bg-[#1B2520] border border-[#2E3E34]"
              aria-label="Превключване на разгъването на всички категории"
            >
              <span>{areAllOpen ? 'Свий всички категории' : 'Разгъни всички категории'}</span>
              {areAllOpen ? (
                <ChevronUp className="w-4 h-4 text-[#C5A880]" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#C5A880]" />
              )}
            </button>
          </div>

          {/* Categorized Accordion List */}
          <div className="space-y-4">
            {individualServiceCategories.map((category) => {
              const isOpen = !!openCategories[category.id];

              return (
                <div
                  key={category.id}
                  className="bg-[#18201C] border border-[#28382E] rounded-xl overflow-hidden transition-colors"
                >
                  {/* Category Header Button */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#1C2722] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-[#F4F1EA] tracking-tight">
                        {category.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#8E9B92] mt-0.5">
                        {category.description} · <span className="text-[#C5A880]">{category.services.length} позиции</span>
                      </p>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-[#121815] border border-[#2C3D32] flex items-center justify-center shrink-0 text-[#C5A880]">
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Services Table inside Category */}
                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-5 pt-2 border-t border-[#233128] divide-y divide-[#233128]/60">
                      {category.services.map((item, idx) => (
                        <div
                          key={idx}
                          className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 hover:bg-[#1E2923]/40 px-2 rounded-md transition-colors"
                        >
                          <span className="text-base font-normal text-[#E2E6E3] leading-snug">
                            {item.name}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0 self-start sm:self-auto">
                            <span className="text-base sm:text-lg font-bold text-[#F3ECE0] font-sans tabular-nums">
                              {item.price}
                            </span>
                            {item.unit && (
                              <span className="text-xs sm:text-sm text-[#93A197] font-normal">
                                / {item.unit}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              4. ВАЖНА БЕЛЕЖКА ПОД ЦЕНОРАЗПИСА
              ========================================================================= */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-[#223027] bg-[#101613] rounded-xl p-5 sm:p-7 border border-[#202C25]">
            <div className="flex items-start gap-3.5">
              <Info className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
              <div className="space-y-2">
                <p className="text-sm sm:text-base text-[#9DA7A0] leading-relaxed">
                  Посочените цени са ориентировъчни и могат да се променят според конкретните обстоятелства, избрания ковчег или урна, гробищния парк, допълнителните услуги и индивидуалните изисквания. Преди организацията ще получите ясна информация за крайната цена.
                </p>
                <p className="text-sm sm:text-base font-semibold text-[#DFCE9F]">
                  Обадете ни се – ще Ви дадем ориентировъчна цена още по телефона.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================================================
            5. CALL TO ACTION (CTA) СЕКЦИЯ
            ========================================================================= */}
        <div className="relative bg-gradient-to-r from-[#151D18] via-[#1A2520] to-[#151D18] border border-[#2E3F35] rounded-2xl p-6 sm:p-12 lg:p-14 text-center overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
              Нуждаете се от съдействие?
            </h3>

            <p className="text-base sm:text-lg text-[#C8D1CB] leading-relaxed mb-8">
              На разположение сме, за да Ви помогнем с организацията и административните процедури в този труден момент.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              {/* Primary Call Action with Phone icon */}
              <a
                href="tel:0878800157"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#224A35] hover:bg-[#1B3D2B] active:bg-[#153123] border border-[#3C6E52] transition-colors shadow-lg cursor-pointer"
                aria-label="Обадете се сега на 0878 800 157"
              >
                <Phone className="w-5 h-5 text-[#C5A880] shrink-0" />
                <span>Обадете се сега (0878 800 157)</span>
              </a>

              {/* Secondary Inquiry Action */}
              <button
                onClick={() => onOpenInquiry('Общо запитване за цени и организация')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl font-semibold text-base text-[#F4F1EA] bg-[#18221D] hover:bg-[#202C25] active:bg-[#141B17] border border-[#314237] transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Изпратете запитване</span>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-[#7F8D84] mt-5">
              Поемаме повиквания денонощно за цяла София и околните населени места.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
